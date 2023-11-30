---
title: "«Build», «Make» & my side project"
description: "A tiny reflection about two awesome books and my personal experience"
publishDate: "30 Nov 2023"
tags: ["side-projects", "books"]
---

<!-- ![«Ruta del desierto» in La Pampa, Argentina](https://unsplash.com/photos/8Lk49prMRls) -->
<img src="https://images.unsplash.com/photo-1701085051372-879e2f43fb2f?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="«Ruta del desierto» in La Pampa, Argentina">

# Intro

I enjoy reading non-fiction books. Biographies, autobiographies, travel journals, topic-related ones. There are plenty of reasons:

- It inspires me. There are millions of intelligent people out there, with problems, solutions, mistakes, failures, and successes. That deserve to be read. Especially the problems, mistakes and failures, and how they overcome them: sometimes it’s easy to think that an important person never faced a failure, which is by all means not true. How they manage those situations is a source of motivation to me.
- When you’re in the road doing something, a lot of doubts came to you mind, and a lot of bad things happen all the time. Having like a virtual companion, a person you don’t know but that’s talking to you thought a book is a valuable thing. You feel less alone in the dark moments.
- In my mind, doing something + documenting it for future reference > just doing something. I really value people who do something and also record that process in whatever form (in this case, we’re talking about books, but it can be a video, a talk, etc.). *“This guy went through exactly the same problem as I’m facing right now, and he wrote a couple of words about his journey! What can I learn from his experience?”*
- It enables me to challenge and question my perspectives: knowledge is a collective thing, and always doing what your gut tells you without the possibility to think the problem in a different way is a wrong move to me. Books can help you with that. History can help you with that. Travel can help you with that. Talking with other people with different perspectives can help you with that.

As I said in previous posts, this year I stopped working on freelance projects after my full-time work hours, and I started to think about side projects. I started two, one is still alive. A fitness app. And in order to increase my motivation to spend more than 8 hours a day coding, I started reading some non-fiction books that are related with building products and startups.

I’d like to mention two, and share my learnings and highlights from them.

- *Build*, by Tony Fadell.
- *Make*, by Pieter Levels.

I really like the fact that both titles are more or less synonyms. It’s not casualty.

## Build

Tony Fadell is a monster. He worked at Apple from 2001 to 2008. He was the father of the iPod and co-creator of the iPhone. After that he built Nest and sold it to Google. A complete life dedicated to creating technology.

If you want to listen to him, I recommend Lex Friedman’s interview. Here’s [the link](https://www.youtube.com/watch?v=4oDZyOf6CW4). 2 hours and 46 minutes of Tony.

If you want to read him, you must get *[Build](https://www.amazon.com/Build-Unorthodox-Guide-Making-Things/dp/B09CF2YB6Z?adgrpid=158657690121&hvadid=678842482997&hvdev=c&hvlocphy=20021&hvnetw=g&hvqmt=e&hvrand=9161373248178966668&hvtargid=kwd-1809135502015&hydadcr=26255_13666751&keywords=build+tony+fadell+book&qid=1701010993&sr=8-1)*.

## Make

I came across Pieter Levels' life and projects thanks to a thread on X, which I should mention was clickbait. I couldn't find it, but it was something like, *"Look at this guy! He built a couple of successful side projects and now he’s a billionaire traveling around the world as a digital nomad!"* His most notable successes are [RemoteOk](https://remoteok.com/) and [NomadList](https://nomadlist.com/). The former is a website for searching remote-friendly jobs, mostly in development. The latter is a community of digital nomads where you can find friendly cities to this lifestyle based on certain criteria. However, what's truly remarkable about him are not his successes, but his failures. He has a [list](https://x.com/levelsio/status/1457315274466594817?s=20) of all the startups he created. >95% of them failed. Only 4 of 70+ projects made money and grew.
This metric, and the fact that he publicly shared it rather than feeling ashamed, is astonishing to me.

## An interesting exercise

Given the fact that a book review is something a little bit conventional in my opinion (and you can find nice book reviews in Amazon or GoodReads if you want), I thought of a funnier exercise: *what if I just pick a couple of highlights from each book and write some thoughts about them?*

I have read both books on my Kindle, so I have a pretty large database of highlights inside it. Instead of manually picking them, let’s get more random/automated: how if I rely on a script that selects random quotes from that source of truth? I have a really nice co-worker that will be happy to solve this problem: ChatGPT-4.

<img src="/chatgpt-highlights.png" alt="ChatGPT highlights">

Nice! After some iterations, it came up with a pretty decent python script:

```python
import random
import re

def get_random_highlights(file_path, num_highlights=4):
    with open(file_path, 'r', encoding='utf-8') as file:
        contents = file.read()

    # Regular expression to extract each entry
    pattern = re.compile(r'(.*?)\n- (Your Highlight.*?\n)\n(.*?)\n=+', re.DOTALL)
    highlights = re.findall(pattern, contents)

    # Check if the file has enough highlights
    if len(highlights) < num_highlights:
        print(f"Only {len(highlights)} highlights found. Returning all.")
        return highlights

    random_highlights = random.sample(highlights, num_highlights)
    return random_highlights

random_highlights = get_random_highlights('highlights.txt', 4)

for i, highlight in enumerate(random_highlights, 1):
    book_info, metadata, actual_highlight = highlight
    print(f"{i}. Book info: {book_info.strip()}\n- Highlight metadata: {metadata.strip()}\nHighlight: {actual_highlight.strip()}\n{'-'*40}")
```

I ran it using two different `.txt` files, one for each book.

Result for *Build*:

```markdown
1. Book info: Build (Tony Fadell)
- Highlight metadata: Your Highlight on Location 1356-1357 | Added on Thursday, December 15, 2022 7:52:56 PM
Highlight: I got a little seed money and then I was in it. I had to build a company. And not a side-job, small-potatoes college startup. A real company. A serious business.
----------------------------------------
2. Book info: Build (Tony Fadell)
- Highlight metadata: Your Highlight on Location 1160-1160 | Added on Thursday, December 15, 2022 7:20:39 PM
Highlight: “The amount of energy needed to refute bullshit is an order of magnitude higher than to produce it.”
----------------------------------------
3. Book info: Build (Tony Fadell)
- Highlight metadata: Your Highlight on Location 2562-2567 | Added on Saturday, January 21, 2023 11:30:33 AM
Highlight: There’s always an exception, an incredible wunderkind who rides a unicorn to the moon, but most successful entrepreneurs are in their late thirties and forties. There’s a reason why investors prefer to back second-time entrepreneurs even if they failed the first time around. It’s because these founders spent their twenties screwing up and learning. Most follow the same path I did: they work hard, fail and fail, take risks and go to doomed startups and try out giant companies and take the wrong job and luck into an amazing team and quit too early or don’t quit soon enough. They bounce around like a pinball, constantly smacking their heads into something. They learn. Trial by fire.
----------------------------------------
4. Book info: Build (Tony Fadell)
- Highlight metadata: Your Highlight on Location 340-349 | Added on Saturday, October 22, 2022 10:31:35 PM
Highlight: By the time General Magic was unraveling around me, I wasn’t just a lowly diagnostics engineer anymore. I’d worked on silicon, hardware, and software architecture and design. When things started to go awry, I’d ventured out and started talking to people in sales and marketing, began learning about psychographics and branding, finally grasped the importance of managers, of process, of limits. After four years, I realized there was a whole world of thinking that was needed before a line of code should be written. And that thinking was fascinating. That thinking was what I wanted to do. The enormous gut punch of our failure, of my failure, of everything I’d worked for falling apart—it made the path in front of me strangely clear: General Magic was making incredible technology but wasn’t making a product that would solve real people’s problems. But I thought I could. That’s what you’re looking for when you’re young, when you think you know everything then suddenly realize you have no idea what you’re doing: a place where you can work as hard as you can to learn as much as you can from people who can make something great. So even if the experience kicks your ass, the force of that kick will propel you into a new stage of your life. And you’ll figure out what to do next.
----------------------------------------
```

Result for *Make*:

```markdown
1. Book info: MAKE Bootstrapper's Handbook (Pieter Levels)
- Highlight metadata: Your Highlight on Location 1426-1431 | Added on Friday, October 27, 2023 6:15:51 AM
Highlight: One of the greatest examples of this strategy is Buffer. From the start they've shared every little step in the way to getting where they're now on their blog Buffer Open. Another good example is Drew Wilson who livestreamed the building of his new product Plasso for a whole week. He didn't just stream his screen, he streamed himself sleeping, waking up and making coffee. It worked because it built attention around him and his product.
----------------------------------------
2. Book info: MAKE Bootstrapper's Handbook (Pieter Levels)
- Highlight metadata: Your Highlight on Location 965-968 | Added on Sunday, October 15, 2023 3:44:33 PM
Highlight: Many people say you should launch where your customers are. And that's a great point. If you make a food delivery service for pets, are your customers really on Hacker News? Or Product Hunt? Or Reddit? I guess, they could be on all of those. But it'd be probably smart to find an place where pet owners hang out. That could mean advertising on Facebook targeting pet owners, or reaching out to online forums for pets.
----------------------------------------
3. Book info: MAKE Bootstrapper's Handbook (Pieter Levels)
- Highlight metadata: Your Highlight on Location 308-310 | Added on Thursday, October 5, 2023 6:19:36 PM
Highlight: If you're at a party and someone asks you what you do and you answer you make booking software for African hairdressers, you might think it's too basic, i.e. you're not "changing the world" with this. But you shouldn't.
----------------------------------------
4. Book info: MAKE Bootstrapper's Handbook (Pieter Levels)
- Highlight metadata: Your Highlight on Location 653-655 | Added on Wednesday, October 11, 2023 10:17:43 PM
Highlight: The thing is, I only learn what I need when I need it. Instead of spending months on learning an ENTIRE language, framework or tool. I just learn the bit that I need now. This is a much faster and leaner approach which will save you time and make you more productive. And actually ship your product.
----------------------------------------
```

## My reaction to each highlight

### Build

> *I got a little seed money and then I was in it. I had to build a company. And not a side-job, small-potatoes college startup. A real company. A serious business.*
> 

Well, I don’t remember which company is Tony referring to in this quote, but it’s a really good starting point to talk about the different approaches both authors have to build startups, the already known discussion between ***VCs vs. Bootstrapping***:

Tony is more on the side of a conventional path to build startups nowadays: get money from investors or VCs, build an awesome team with a great idea and *“go big or go home”*. On the other side, Pieter Levels **presents a substantially different approach, aka the indie way. He says you don’t need to have a big team and a lot of money and expensive expresso machines and an office with a nice view in San Francisco to build something great. You can just use your skills to build something by yourself solving a very specific, niche problem and then iterate on top of what you have built. As evidence, he talks about himself and NomadList, one of his successes:

> *There's been about 5 big direct Nomad List competitors come and go now that have been VC-funded from 1 to 10 million dollars in funding with teams from 10 to 30 people that made the same site as me. But they all didn't go anywhere.*
> 

Personally, I feel more represented by the indie way, because of the following reasons:

- I’m just a random guy from Argentina with no VC connections. I just know a few people in US (bosses, ex-bosses, coworkers, ex-coworkers, managers, ex-managers) and I have an indirect knowledge of the startup world that’s given to me via social media and sites like WellFound, etc. I never pitched an idea to a VC. I even never visited the US tbh (but I plan to in the future!).
- I still have a full-time job I need to pay my bills.
- I like to create stuff by myself: I’m curious about tangential areas of software development: UI/UX design, marketing, product, management, etc. I think learning stuff from these tangencial areas can make me a better developer. It’s not only technical skills.
- I like the idea of growing organically.

That being said, I use a bunch of services and apps that were created by startups with VC money. I don’t hate that approach, I think it has really valid applications. But at least for now, I feel a little bit more comfortable with the indie way.

---

> *The amount of energy needed to refute bullshit is an order of magnitude higher than to produce it.*
> 

Oh man, this is fucking important to me. And it’s important because I don’t think I’m doing it well, and I need to improve.

Some of the key differences between working for yourself and working for someone else is that in the first option you need to ***decide*** what to work on. In the second case, the *what* is given and you need to concentrate your efforts in the *how*. A common path in our team on my full-time job is:

- The product team decides what features we should implement
- The manager creates tickets based on that feature
- We (the engineering team) refine, estimate, implement and ship those features

As I mentioned previously, I’m working on a fitness related side project with two persons: a back-end/front-end dev and a marketing guy. We all are the product owner, and we need to decide the *what* and the *how* in every single step of the process. And the ideas and necessities are infinite. Can we integrate `HealthKit`? Yes, we can. Can we integrate `GPT-4` to ship some fancy AI-feature? Yes, we can. Should we integrate `HealthKit` and `GPT-4` *right now*? Hmm, I’m not sure.

Some hacks we have to prioritize or say “no” to ideas that come up:

- We have a Notion board to keep track of everything we need to work. We have a “Priority” field that can be `Low`, `Medium` or `High`, and we have status columns: `Backlog`, `Not started`, `In progress`, `On hold` and `Completed`. For each new idea, we set the priority and decide if we should put it in the `Backlog` or in the `Next up` column. An idea that’s low priority and is in the `Backlog` column is a great candidate to be cleaned up/deleted. But, as I said, I have the tendency to put tasks with medium/high priority on `Next up` column.
- We have a high level product roadmap in which we divide epics in app versions. An epic can be, for example, “social sharing integration”, and app versions can be `MVP (1.0.0)`, `2.0.0`, etc. With this, we can see if we need to put our current focus on a feature right now or in the future.

---

> *There’s always an exception, an incredible wunderkind who rides a unicorn to the moon, but most successful entrepreneurs are in their late thirties and forties. There’s a reason why investors prefer to back second-time entrepreneurs even if they failed the first time around. It’s because these founders spent their twenties screwing up and learning. Most follow the same path I did: they work hard, fail and fail, take risks and go to doomed startups and try out giant companies and take the wrong job and luck into an amazing team and quit too early or don’t quit soon enough. They bounce around like a pinball, constantly smacking their heads into something. They learn. Trial by fire.*
> 

I remember why I highlighted this quote. It’s in the beginning of a chapter called *“Are you ready?”*. The paragraph before this quote, to give more context:

> *The archetypal entrepreneur is a twenty-year-old kid who lucks into a brilliant idea in their mom’s basement and watches it turn into a thriving company overnight. In the movie version, they parlay their technical genius into a flawed but effective leadership approach and watch the millions roll in. Then they buy a fancy car before learning the true value of friendship. But that is not reality.*
> 

That stereotype of the successful entrepreneur never identified me, because of obvious reasons: I don’t consider myself a genius, I didn’t have a revolutionary idea at my 20’s, I didn’t grew up and also I don’t live in a first class country like Mark Zuckerberg, for example.

When I was young, probably because mass media and that commodified image of an entrepreneur, I thought that if I didn’t show anything interesting and innovative to the world pretty early in my career, I was done. The path was: start collage, get bored, drop, have an *eureka* moment that gives you an awesome idea and build something on top of that, then the product becomes a company and that’s it. Success.

But then I found that most of those experiences are exceptions. Not all entrepreneurs are Steve Jobs. There is a full range of possible life experiences behind each entrepreneur. And the quote I highlighted illustrates it: counterintuitively, there are a lot of good entrepreneurs that spent most of the time before their 30’s learning and trying and failing. That’s what I did since I finished my collage studies: learn new things, try side projects, gain experience at big tech companies (Venmo) and middle size ones (past experiences). Probably I still need a really good experience in a VC backed startup, yes. But that will come up.

The thing is the quote identified me.

---

> *By the time General Magic was unraveling around me, I wasn’t just a lowly diagnostics engineer anymore. I’d worked on silicon, hardware, and software architecture and design. When things started to go awry, I’d ventured out and started talking to people in sales and marketing, began learning about psychographics and branding, finally grasped the importance of managers, of process, of limits. After four years, I realized there was a whole world of thinking that was needed before a line of code should be written. And that thinking was fascinating. That thinking was what I wanted to do.
The enormous gut punch of our failure, of my failure, of everything I’d worked for falling apart—it made the path in front of me strangely clear: General Magic was making incredible technology but wasn’t making a product that would solve real people’s problems. But I thought I could.
That’s what you’re looking for when you’re young, when you think you know everything then suddenly realize you have no idea what you’re doing: a place where you can work as hard as you can to learn as much as you can from people who can make something great. So even if the experience kicks your ass, the force of that kick will propel you into a new stage of your life. And you’ll figure out what to do next.*
> 

This quote is the final part of an amazing chapter of the book. It’s called *“Adulthood”.* In it, Tony talks about his twenties, and specifically about his first experience as an employee at General Magic.

I’m on my twenties (at the end of my twenties, I should say, sadly), that’s why It’s interesting to me to see how he thoughts about this period of life. You finished you studies, you started to live without your parents, you started to take responsibility of your entire self and future, which is scary. In his words:

> *From the moment you’re born until you move out of your parents’ house, almost all your choices are made, shaped, or influenced by your parents. And I’m not just talking about the obvious decisions—which classes to take, which sports to play. I mean the millions of hidden decisions you’ll discover when you leave home and start doing things for yourself:
What type of toothpaste do you use?
What kind of toilet paper?
Where do you put the silverware?
How do you arrange your clothes?
What religion do you follow?
All these subtle things that you never made a decision about growing up are already implanted in your brain. Most kids don’t consciously examine any of these choices. They mimic their parents. And when you’re a kid, that’s usually fine. It’s necessary. But you’re not a kid anymore. And after you move out of your parents’ house, there’s a window—a brief, shining, incredible window—where your decisions are yours alone. You’re not beholden to anyone—not a spouse, not kids, not parents. You’re free. Free to choose whatever you’d like.
That is the time to be bold.
Where are you going to live?
Where are you going to work?
Who are you going to be?*
> 

At this age, you usually don’t have dependency on other people (parents) and other people don’t depend on you (no kids). After 30’s or 40’s, things can become a little bit more complex:

> *When you’re in your thirties and forties, the window begins to close for most people. Your decisions can no longer be entirely your own. That’s okay, too—great even—but it’s different. The people who depend on you will shape and influence your choices. Even if you don’t have a family to support, you’ll still accumulate just a little more each year—friends, assets, social standing—that you won’t want to risk.*
> 

For that reason, this period is the perfect time to try and fail, to take risks. As we say in Spanish: *“darse la cabeza contra la pared una y otra vez”*.

And that’s what he did on General Magic. He took a risk, started to work on a unknown startup at that time, and learn a ton of stuff. They failed. They built a product that no one acquired. It was obviously frustrating (”*I woke up and couldn’t get out of bed. I felt it in my chest. Everything we had done ended in failure. Everything.”*). But after some time, he was able to reflex on it in a positive way: think failures as learning experiences. Like Marie Forleo said in *Everything is figureoutable*:

<img src="/everything-is-figureoutable.jpeg" alt="«Everything is figureoutable», Marie Forleo">

It’s challenging and difficult to have this mindset, specially in the moment of the failure. But there is no book on how to live life. And if there were, life would be so boring that it would lose the meaning of being lived. We are all here to both succeed and make mistakes. And every failure is a springboard for a new chapter:

> *So even if the experience kicks your ass, the force of that kick will propel you into a new stage of your life. And you’ll figure out what to do next.*
> 

### Make

> *One of the greatest examples of this strategy is Buffer. From the start they've shared every little step in the way to getting where they're now on their blog Buffer Open. Another good example is Drew Wilson who livestreamed the building of his new product Plasso for a whole week. He didn't just stream his screen, he streamed himself sleeping, waking up and making coffee. It worked because it built attention around him and his product.*
> 

The book has 7 chapters, each of them represents a particular stage in the startup journey:

- Idea
- Build
- Launch
- Grow
- Monetize
- Automate
- Exit

This part is inside *Grow*, an interesting chapter that explains the indie way of growing companies. The author is an advocate of growing *organically*. Do things yourself. Don’t hire people if there is no revenue yet. Be ethical. Don't fill your website with ads. Please, DON’T buy fake users. Etc.

There are a lot of strategies to grow your product in an organic way. One of them is to just tell stories around it. Storytelling. And one particular form of storytelling is inside the #buildinpublic movement. Write stories while building. It’s more or less what I’m doing here. Have like a journal to complement your product, and share experiences, successes and failures. You had problems integrating a third party SDK? Write a post about it! Probably someone outside will find it useful for their projects. It’s what I did on my previous post about Fastlane and Homebrew.

[Buffer Open](https://buffer.com/resources/open/) and Drew Wilson livestream are great examples that illustrate the idea. I’m not able to share the link of the livestream because it seems like Pieter forgot to provide the real one 😂:

<img src="/make-mistake.png" alt="Little mistake on Make book">

---

> *Many people say you should launch where your customers are. And that's a great point. If you make a food delivery service for pets, are your customers really on Hacker News? Or Product Hunt? Or Reddit? I guess, they could be on all of those. But it'd be probably smart to find an place where pet owners hang out. That could mean advertising on Facebook targeting pet owners, or reaching out to online forums for pets.*
> 

Obviously, this quote is part of the *Launch* chapter. When you have a product ready to deploy, you’ll need to think of distribution strategies. Where should I announce my new app?

Mainstream media for builders is Hacker News, Indie Hackers, Product Hunt, Reddit, etc. But if you want to promote a niche product, probably it’ll be good to find niche media too.

Our side project is, as I said, a fitness app. The marketing guy in our team found a couple of interesting fitness events/websites in which we can promote our product.

---

> *If you're at a party and someone asks you what you do and you answer you make booking software for African hairdressers, you might think it's too basic, i.e. you're not "changing the world" with this. But you shouldn't.*
> 

This blowed my mind.

I was always under the pressure of the *“go big or go home”* mindset: you need to be like Steve Jobs, if not, you’re a failure. You need to change an entire industry in order to be remembered, if not, you’ll be dust in the wind. You won’t have a place in the select group of **People Remembered Forever and Ever.**

But this is mostly bullshit. A game of the ego. It’s living your life worried about people remembering you or not when you’re dead. You won’t have feelings or consciousness in order to feel bad if they are not remembering you, because you’ll be dead! Non sense.

It’s better to focus your energy on the short life we have on earth. As Mario Benedetti said:

> *I believe life is a parenthesis between two nothings.*
> 

Let’s focus on the **something**, that short range inside parenthesis. The **nothing** will inevitably win, but that’s ok.

The relationship between Pieter’s booking software for African hairdressers example and my endless philosophical reflection is that sometimes is better to relax a little bit. Don’t try to change the world with your tiny app. Start small. Pick a small problem in a niche community and try to solve it. Then you can grow and add more use cases. But being really good to solve a specific issue in the world is a competitive advantage!

> *Niches are specific market segments that are shallow enough to easily access, with not many players in there. Niches are a great start because they're usually too small in economic value for big companies to attend to. They're also the perfect size to market a new company towards.
Niches go against the ridiculous "go big or go home" attitude that the rise of startups in mainstream media pushed from 2006 onward. But that attitude isn't realistic. Because most big companies started very small. If you start big from day one, it's the wrong way to go about it. People don't like niches because they're too small for people's ego's.*
> 

---

> *The thing is, I only learn what I need when I need it. Instead of spending months on learning an ENTIRE language, framework or tool. I just learn the bit that I need now. This is a much faster and leaner approach which will save you time and make you more productive. And actually ship your product.*
> 

When you’re working on a side project there is a huge amount of knowledge to acquire: development (backend, DBs, mobile, web, depending on your product’s needs), testing, CI/CD, marketing, product, management, negotiations, legals, taxes… The list goes on. Every time I need to learn something new, I try to be exhaustive, which is the opposite direction of what Pieter suggests.

I think there should be a balance between both strategies. one thing is clear: you need to ship your product. You cannot spend 3 months on a 3 points ticket. That’s why you need to set time constraints to move shit to the “done” column (for example, sprints). But, from the other side, it’s good to spend some time reading the documentation of some tool you wanna use, or do a complete research of possible ways to solve a particular issue. The idea is to ship a product, but not a crappy product. Your product needs to work. It needs to scale. It needs to solve people’s needs.

# Wrapping up

I hope you liked this weird way of summarizing two nice books. As I said, everything here is me interpreting and applying concepts from both books to my personal journey, so probably it’s crap for someone experiencing a completely different life. But probably not! And if that’s the case, it’s more than enough to make me a little bit more happy.