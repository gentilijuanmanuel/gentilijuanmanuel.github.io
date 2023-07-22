---
title: "The config before the real config: Ruby, Homebrew, Fastlane"
description: "Troubleshooting when installing a Ruby version to integrate Fastlane on iOS app"
publishDate: "22 July 2023"
tags: ["side-projects"]
---

## Intro

I’m in the process of starting a new side project (startup idea?) which is, obviously, an iOS app (+ other components).

This week I was focused on creating the scaffolding for it: I (finally) enrolled to the Apple developer Program 🎉 and I created the repo with dependencies I know I’ll use. I configured code lint and formatting with `SwiftLint` and `SwiftFormat`. Special thanks to [Manu Herrera](https://twitter.com/manuherrera1) and his awesome [blog](https://mdb1.github.io/), in which he posts a lot of useful resources for iOS developers, like this [App Checklist](https://mdb1.github.io/2022-12-24-new-app-checklist/).

<img src="/apple-developer-program.png" alt="Finally enrolled in Apple Developer Program!">

Next step was `Fastlane`, to automate the deploy process to TestFlight and App Store and some other things.

### Why?

Someone can argue that’s too much for a side project:

> *Just put your code into a Xcode project, create an app in App Store Connect and ship it to users. After that you can focus on fancy stuff*
> 

Yeah, it’s a valid point, but what I’m trying to do in this process is to follow the idea that [my product is my garden](https://readwise.io/reader/shared/01gz71tjjjh4fsvvv5vynen38h). An explanation of the analogy, directly from the author of the blog:

> *During the early days of lockdown, my girlfriend got deep into gardening. She would spend hours nurturing her tomato plants, weeding, watering, puttering about. She would spend afternoons reading articles on permaculture, figuring out which plants grew well alongside other plants. Lavender with tomatoes kept the pests away, slight shade for the granadilla vine, some water, but not too much for the root vegetables. It was lovely to watch her coax tasty and nutritious food individually out of the ground. I can’t imagine full-scale farming being nearly as enjoyable.*
> 

I want to have that kind of relationship with my product: have fun with it, learn new things I have no opportunity to learn on my full-time jobs, do trial and error, etc. Feel connected with the process. Write about it (which is exactly what I’m doing right now, lol). And one way to treat my product as my garden is to follow good practices: automate what's tedious and can be automatable -> with Fastlane!

## The issue

The recommended option to setup Fastlane on a project requires `Ruby` + `Bundler`:

- [Ruby on Rails](https://rubyonrails.org/)
- [Bundler](https://bundler.io/)

On macOS, Ruby is already installed at a system level. If you try to install `Bundler` using `gem install bundler` you will probably see this error:

```bash
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```

That means, it doesn’t let the user modify the Ruby version that comes installed with your Mac.

What can be done to overcome this issue? Well, you can use a Version Manager for Ruby, a piece of software that let you manage different Ruby versions in your system that should co-exist without problem. The idea is to use a different Ruby version in your project’s directory, to be able to install gems and continue with our Faslane integration.

There are a couple of options in terms of Ruby Version Managers:

- [`RVM`](https://rvm.io/)
- [`asdf`](https://asdf-vm.com/#/)
- [`rbenv`](https://github.com/rbenv/rbenv)
- [`chruby`](https://github.com/postmodern/chruby) and [`ruby-install`](https://github.com/postmodern/ruby-install)

I chose `rbenv`. Reason? Don't know tbh, I just read the repo's README and it was easy to understand. I tried to install it using `Homebrew`, but I found an error:

```bash
> brew install rbenv ruby-build

Error: Cannot install in Homebrew on ARM processor in Intel default prefix (/usr/local)!
Please create a new installation in /opt/homebrew using one of the
"Alternative Installs" from:
  https://docs.brew.sh/Installation
You can migrate your previously installed formula list with:
  brew bundle dump
```

I’m on a new M2 Pro Mac. It seems like there are some differences between how `Homebrew` works on Intel processors vs. MX ones. `Homebrew` is installed in two different places, depending on your architecture:

- `/usr/local` for Intel (`x86_64`).
- `/opt/homebrew` for Apple Silicon (`arm64`).

So the idea on a MX Mac is to have `Homebrew` installed in both places: the first one for Intel emulated code, the second one for native MX code. And try to use as much as possible the native version.

What I did? Reinstall `Homebrew` following official documentation:

```bash
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This will install it in a native way. But! There is a tiny extra step you need to do.  As this new location (`/opt/homebrew`) is not part of your default **`PATH`**, so you need to explicitly add it. There are some instructions that `Homebrew` prompts after installation to do that. Follow them:

```bash
==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/joshalletto/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"- Run brew help to get started
- Further documentation:
    https://docs.brew.sh
```

They will add `/opt/homebrew/bin` to your path: `export PATH="/opt/homebrew/bin:$PATH"`.

Just for the sake of completeness, you can also install `Homebrew` if you need to run it on an Intel emulated environment. You need to have Rosetta installed, and run:

```bash
> arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

It’s the same command as before but with the prefix `arch -x86_64`. And then, you can add an alias in your `.zshrc` or `.bashrc` file to differentiate between packages installed with the native version and others installed with the emulated version:

```bash
# Alias to Homebrew for Rosetta (x86_64, Intel)
alias brew86="arch -x86_64 /usr/local/homebrew/bin/brew"
```

So, to recap, you have new commands available in your terminal: `brew` and `brew86`. The first one is to install packages using `Homebrew`'s native version, the second one is to install them using `Homebrew`'s Intel emulated version.

As I said, I’ll try to use the native version as much as possible.

Soooo… now that we have `Homebrew` correctly installed, let’s install `rbenv`. Following repo’s `README` instructions:

```bash
> brew install rbenv ruby-build
> rbenv init
```

The last command will prompt you a line that you need to add in your `.zshrc` or `.bashrc` file (`eval "$(rbenv init - zsh)”`) Do that.

With `rbenv` installed, you can install as many Ruby versions as you want. I first listed the latest stable versions with:

```bash
> rbenv install -l
```

Since Fastlane needs “`2.5` or newer” (according to [Setup](https://docs.fastlane.tools/getting-started/ios/setup/) docs), I tried with `3.2.2`:

```bash
> rbenv install 3.2.2
```

Ok, so I had a Ruby version installed different from the system one! Now, I need to *use* it on my project to (finally) start the Fastlane setup:

```bash
> cd my-awesome-project
> rbenv local 3.2.2
```

That will create a `.ruby-version` file in which you can see the `Ruby` version that will be used in our project’s directory.

Nice! So the config before the config is ✅. Now it’s time to start the real setup 😂

I’ll document findings in a different blog post.

Thanks for reading!

## Resources

[Faslane iOS setup](https://docs.fastlane.tools/getting-started/ios/setup/)

[Using Homebrew on M1 Mac](https://earthly.dev/blog/homebrew-on-m1)

[You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory. (mac user)](https://stackoverflow.com/questions/51126403/you-dont-have-write-permissions-for-the-library-ruby-gems-2-3-0-directory-ma)

[rbenv](https://github.com/rbenv/rbenv)

[Installation issues with Arm Mac (M1 Chip) · rbenv/ruby-build · Discussion #1853](https://github.com/rbenv/ruby-build/discussions/1853)

[Install Ruby On Rails on macOS 13 Ventura | GoRails](https://gorails.com/setup/macos/13-ventura)

[How to install homebrew on M1 mac](https://stackoverflow.com/questions/66666134/how-to-install-homebrew-on-m1-mac)

[Homebrew installation docs](https://docs.brew.sh/Installation#1)

[BUILD FAILED (macOS 13.2.1 using ruby-build 20230330) · rbenv/ruby-build · Discussion #2178](https://github.com/rbenv/ruby-build/discussions/2178)

[BUILD FAILED (macOS 13.2.1 using ruby-build 20230330) · rbenv/ruby-build · Discussion #2178](https://github.com/rbenv/ruby-build/discussions/2178)

[Cannot install in Homebrew on arm processor in Intel default prefix](https://trungk18.com/experience/cannot-install-in-homebrew-on-arm-processor-in-intel-default-prefix/)

[How does one "move HOMEBREW_CELLAR to /usr/local/Cellar" ? · Homebrew · Discussion #3316](https://github.com/orgs/Homebrew/discussions/3316)

[How to migrate to native Homebrew on an M1 Mac](https://blog.smittytone.net/2021/02/07/how-to-migrate-to-native-homebrew-on-an-m1-mac/)