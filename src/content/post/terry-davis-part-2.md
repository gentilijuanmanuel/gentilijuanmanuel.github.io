---
title: "Terry Davis, the contrarian [Part II]"
description: "What's the B side about raising the levels of abstraction so aggressively?"
publishDate: "17 July 2025"
tags: ["software", "development", "stories"]
language: "en"
translationSlug: "terry-davis-part-2es"
---

<img src="/terry-davis/chess.png" alt="Terry Davis playing chess against God">

# Complete index

0. Rabbit Hole (in
   [Part I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1/))
1. Attempt at biography (in
   [Part I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1/))
2. Utilitarianism (in
   [Part I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1/))
3. **Standing on the shoulders of giants: side effects**
4. Complex vs. simple (coming soon)
5. Weird and brutally honest (coming soon)
6. Creating as medicine (coming soon)
7. “Too weird to live, and too rare to die” (coming soon)
8. Important resources (coming soon)

---

# Standing on the shoulders of giants: side effects

> Watching him over the years made me start writing my own tools for a lot of
> things instead of just accepting what functionality an app provides and how
> they choose to provide it.
>
> David Cassel,
> [The troubled legacy of Terry Davis, 'God's lonely programmer'](https://thenewstack.io/the-troubled-legacy-of-terry-davis-gods-lonely-programmer/)

In my college years I had a bit of an obsession with Steve Jobs, as I reckon
several computer science or systems engineering students must have had at some
point in their lives. Something I mentioned in
[this post](https://gentilijuanmanuel.github.io/posts/a-healthier-self/). I read
Walter Issacson's biography, watched all the movies about him*(for the record*:
the one I liked the most was _Steve Jobs: The Man in the Machine_), his
interviews, and convinced my parents to buy me my first Apple device: a 2015
MacBook Air. On it I ran Xcode for the first time, which made this _rabbit
hole_, concatenated with my formal education, the kick start to dedicate myself
to the development of apps in apple environments until the present.

An interesting prism through which to approach Jobs is his epistolary exchange.
Both to third parties and to himself. The X
[Internal Tech Emails](https://x.com/TechEmails) account published several of
them. In fact, there is a book that deals specifically with the subject:
_Letters to Steve: inside the e-mail inbox of Apple's Steve Jobs._

There is one in particular that became quite famous. He sent it to himself. It
was a year before his death. It reads like a poem:

> _**From**: Steve Jobs_
>
> _**To**: Steve Jobs_
>
> _**Date**: Thursday, September 2, 2010 at 11:08PM_
>
> _I grow little of the food I eat, and of the little I do grow I did not breed
> or perfect the seeds._
>
> _I do not make any of my own clothing._
>
> _I speak a language I did not invent or refine._
>
> _I did not discover the mathematics I use._
>
> _I am protected by freedoms and laws I did not conceive of or legislate, and
> do not enforce or adjudicate._
>
> _I am moved by music I did not create myself._
>
> _When I needed medical attention, I was helpless to help myself survive._
>
> _I did not invent the transistor, the microprocessor, object oriented
> programming, or most of the technology I work with._
>
> _I love and admire my species, living and dead, and am totally dependent on
> them for my life and well being._
>
> _**Sent from my iPad**_

Along the same lines, in an interview, Jobs develops
[a](https://www.youtube.com/watch?v=W5o7umYvqlw) spectacular
[analogy](https://www.youtube.com/watch?v=W5o7umYvqlw) to justify Apple's
creations in the field of personal computing: he mentions an experiment in
_Scientific American_ in which the amount of energy consumed by a set of living
beings to move from an arbitrary point A to another B was compared. That is to
say, their _efficiency_ in locomotion was measured and they were ordered from
the most to the least efficient. The results showed that the condor was the
winner and that the human being had a rather mediocre performance, almost at the
bottom of the ranking. But one of the scientists behind the experiment had the
brilliant idea of repeating it, giving the human being the possibility of
accomplishing the task with the _help of a bicycle_. With this new
configuration, the human proved to be twice as efficient as the condor,
comfortably taking first place.

It is quite evident that as knowledge and technology expands, so does our
ability to accomplish things. Based on the human progress we've made, it's
getting easier and easier to move up the creative torrent: the tools we invent
serve to "amplify and inherit our abilities," as Jobs puts it. With a bicycle,
we beat someone walking or running. With a word processor, we write faster than
with ink and paper.

Translating it to the _tech_ world with a few examples:

- Binary language, the language that machines _actually_ understand, is not a
  necessity for implementing functionality in today's world. This relief occurs
  thanks to _high-level languages_, which are an abstraction of machine
  language, much closer to natural language, which is translated by an automatic
  process called _compilation_ into the ones and zeros that computers end up
  interpreting. Our processors don't understand Swift, JavaScript, C# or Python.
  We can communicate with them through those languages because there is a
  _bridge_ in the middle.
- In _Object oriented programming_, one of the terms Jobs mentions in the mail,
  there is the concept of cross-class _inheritance_, which implies that a
  subclass can inherit behaviors and properties from the parent class _for
  free_, while taking care to specialize in its area of interest. I have seen
  several examples of abstractions upon abstractions upon abstractions over my
  years working as a programmer. A _mamuska_ doll of generalizations.
- By using dependencies/libraries we avoid having to implement a schedule from
  scratch and just integrate a package that solves the problem for us, allowing
  us to offer a whole new set of functionality in our product. What is our task?
  Analyze the feasibility of integrating it, learn its API, connect it, and
  that's it.

_Plug & play_. Everything tends to abstraction.

Terry sailed in the opposite direction to this trend. He could have made use of
existing operating systems and applied his talents to creating apps or services
_on top of_ them, as most developers do today. Instead, he dedicated his life to
creating a new digital universe, with little communication with the traditional
one we inhabit every day. When a TempleOS user complained about the problems the
operating system had in integrating with VirtualBox so that it could be run from
a computer with a mass-use operating system, he replied that he was not in the
least interested in achieving a satisfactory integration with the program.

The trend today, influenced by the advent of AI as a wave sweeping over
everything, is toward _aggressively increasing levels of abstraction_. The
highways are already built, we just create different models of cars to drive on
them. Every once in a while, we contribute to fix some pit in the roads, or at
least report the problem so that the fixers are aware of it (by opening GitHub
issues or PRs). If we take this to the limit, in many cases, the developer's
task is to _orchestrate_ a series of packages or features written by other
people in order to get a product to market that solves X need. Even that
orchestration task tends to be abstracted too, nowadays: why write code to
integrate this API if I can ask ChatGPT to do it for me? **So, with frenetic
speed, we are reaching a point where this phrase is starting to make sense and
become a _trending topic_ in the industry:

> _You're not a Software Engineer, you're a frameworker._

Or, harsher and more frontal:

> _You're not a Software Engineer, you're a blue-collar tech worker._

Let's illustrate this with a couple of examples in both directions.

## Frameworker, Programmer, Engineer

Such statements became popular in recent times, exaggerating the tone to provoke
an effect on readers (like everything that goes viral on X or other social
networks).
[This post on Medium](https://johndanielraines.medium.com/be-an-engineer-not-a-frameworker-c58fe28d0c88)
makes a summary differentiation between _frameworker_, _programmer_ and
_engineer_ that can serve as a theoretical framework. TL;DR:

- _Frameworker_: limited knowledge about the programming language in which he
  writes, mental model closely coupled to the _framework_ he uses to solve
  problems.
- _Programmer_: reads and writes much more code, in several programming
  languages. In this way, he gains experience on different ways to apply
  programming techniques, design patterns and other generic concepts that are
  usually seen in different languages, paradigms and libraries. He gains
  technical vocabulary in the process.
- _Engineer_: he is able to skillfully shuffle _stability_ and _change_. Each
  task he has to perform is analyzed from these angles, to ensure a
  deterministic*(not buggy*), reusable software system, where the cost of change
  is the lowest possible.

## Grady Booch: increasing levels of abstraction

I recommend listening to the show
[_The Pragmatic Engineer_](https://podcasts.apple.com/ar/podcast/the-pragmatic-engineer/id1769051199),
by [Gergely Orosz](https://www.linkedin.com/in/gergelyorosz/). Gergely worked
much of his career as a Mobile Software Engineer at renowned companies such as
Uber, Skype and Skyscanner. He wrote a few books, including
[_Mobile apps at scale: 39 engineering challenges_](https://www.mobileatscale.com/)
(I remember several times quoted by the Principal Engineers at Venmo) and
[*The Software Engineer's Guidebook](https://www.engguidebook.com/)* (I recently
got the paper version which is on my to-read list).

In December last year he interviewed Grady Booch, the creator of the UML
language. He is currently Chief Scientist of Software Engineering at IBM,
leading research related to the field of AI in the long term (_"I was a person
who worried about the next five to ten years, not the next quarter")_.

The title of the episode is promising:
[Software architecture with Grady Booch](https://podcasts.apple.com/ar/podcast/the-pragmatic-engineer/id1769051199?i=1000679233993).
An hour and a half full of stories about the evolution of the industry, the rise
and fall of the use of UML in companies, anecdotes of conversations with other
technical references, CEOs, and ending with interesting reflections on the
present: What is the role of software engineers today, what has changed, what
current challenges are comparable to past challenges that the industry has
already overcome, what is the implication of LLMs and artificial intelligence in
our daily lives, a couple of projections for the future... The weight of the
experience of someone who _has been through them all_ is evident. He has the
ability to use history as a comparison factor with the present.

The most powerful reflection of the whole conversation is, I agree with the
author's edition of the show, the one used to start the episode:

> _But the entire history of software engineering is one of rising levels of
> abstraction. So what we're seeing here is the rise of another level of
> abstractions, which gives us all these extraordinarily powerful frameworks
> from which I can build systems and which, as I alluded to, the architectural
> decisions that were front and center for us back then are now embodied in
> these. So now becomes a decision, what cloud service do I use? What messaging
> system do I use? What platform do I use? That's the decision which has a lot
> of economic decisions and not just software kinds of decisions associated with
> it. So I think the role of the architect in effect has changed because now I'm
> dealing with systemic problems, not just software problems themselves._

Putting it in the context of the conversation, Booch states this after talking
about UML and why its use became less and less common over time. Before, UML
made sense because you had to create systems _from scratch_, design them, define
their architectures. Now, with the advent of systems over systems, abstractions
over abstractions, the job of a software engineer is not so much to design
everything from scratch, but to integrate and orchestrate different _building
blocks, services_ or _frameworks_ that serve to achieve a final solution. Simple
example: a _serverless_ mobile app that leverages Firebase or Supabase to
abstract as much as possible the development of a specific _backend_, in order
to concentrate efforts on the client, i.e. the app itself. Many _solopeneurs_
use this strategy to publish products in a very short amount of time.

To illustrate the importance of this mutation in the field of software
engineering, a new role has emerged: the _Solutions Architect_. That is, the
person in charge of finding the most efficient way to integrate these
independent systems. The term _efficient_ points to two factors: technological
(scalability, stability, flexibility, etc.) and economic (the combination of
systems that does the best job and costs the least).

## Marc Anderssen: AI for programming

Another conversation that may add fuel to this controversy is Lex Fridman's
conversation with Marc Andreessen (link
[here](https://podcasts.apple.com/ar/podcast/lex-fridman-podcast/id1434243584?i=1000685537975)).
In particular [this excerpt](https://www.youtube.com/watch?v=2ZpJXHiPwtQ), in
which the tech entrepreneur admits that there are open questions about whether
AI will manage to improve its performance in unstructured tasks such as
understanding philosophy or creative writing, but that there is _definitely_
going to be progress in the area of software development. The reason: being a
structured task with clear objectives (a program produces correct or incorrect
results, ambiguity is null or low), it is easy to measure the success or failure
factor and learn accordingly.

So, the expectation going forward should be to expect better and better models
that facilitate development tasks and exponentially increase our productivity.
He even mentions the example of _glue code_, that is, code whose objective is to
integrate a certain tool or service into our system (putting Stripe into our
website to support payments). This phenomenon is generating a new abstraction
_layer_ in the stack of abstraction _layers_ we deal with every day. Want to
learn React and integrate it into your blog website? Maybe by connecting an AI
agent to your project (Cursor) and having a natural language conversation with
it you could achieve the goal, instead of going to the library documentation and
learning it by reading it, testing _demo projects_ full of `console.logs`to see
how and when the states of a component are updated, etc.

## Balance

Back to Terry, _the contrarian_: for him, _reinventing the wheel_ (how many
times have I heard the phrase "_Don't reinvent the wheel!"_ as a junior dev! how
many times have I recited it as advice to other junior devs years later!) was
not a problem at all. On the contrary. In just ten years, he created a complete
operating system, a C-influenced programming language, the compiler that
interprets and translates it into machine language, a graphics library, a wide
variety of OS applications such as games, _music studios_, and so on. In _The
Digital Human_, the BBC podcast mentioned below in the resources section, we can
listen to the words of one of Terry's followers at the time of his death, with
the intention of highlighting the importance of his technical legacy: _"to put
it in mundane terms, a single person can build a house, but this is... as if a
single person has built a skyscraper"._

Terry's case represents an extreme that is unattainable for the rest of us
mortals, it is obvious. However, analyzing that extreme and comparing it to the
other possible extreme in the opposite direction, which I feel we are getting
closer and closer to, gives us an interesting perspective to understand where in
the segment we want to stand. To be honest, I don't remember with pleasure the
previous years in which I needed to open 25 tabs with StackOverflow questions
and answers or read several _How to_ articles to implement a simple task. I also
don't consider that we need to learn _everything_ about _everything_: certain
levels of abstraction are necessary because otherwise it is impossible to make
progress. I do not advocate going back to machine language. But, in parallel, I
get the feeling that some "pain" or friction is necessary in the learning
process, to consider it as such, to _**value it**_ as such. To understand what
is happening underneath those _layers_ and _layers_ of abstraction, which in
many cases are black boxes. A kind of limit that is drawn between the "easy" and
the "difficult", what needs effort. The cost of knowledge tending to zero blurs
that line aggressively.

In another more pragmatic line, advocating knowledge about some of those levels
of abstraction gives us the _freedom_ to be able to choose. Freedom: key word
here. Before taking as absolute truth the fact of importing a certain black box
module to solve X need, we can question the decision: inquire about its
complexity, if it is _open source_, read some of its source code, interpret the
API, analyze how much it increases the size of our app, consider the remote
possibility of building something much simpler but that solves our specific
problem. It is not about going against the trend, but about making more informed
and less frantic decisions: the lack of understanding of a tool is often the
first step towards a silent dependency.
