---
title: "Terry Davis, the contrarian [Part III]"
description: "Trying to understand the philosophy behind his work"
publishDate: "14 August 2025"
tags: ["software", "development", "stories", "art"]
language: "en"
translationSlug: "terry-davis-part-3es"
---

# Complete index

0. Rabbit Hole (in
   [Part I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1/))
1. Attempt at biography (in
   [Part I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1/))
2. Utilitarianism (in
   [Part I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1/))
3. Standing on the shoulders of giants: side effects (in
   [Part II](https://gentilijuanmanuel.github.io/posts/terry-davis-part-2/))
4. **Complex vs. simple**
5. **Weird and brutally honest**
6. **Creating as medicine**
7. **“Too weird to live, and too rare to die”**
8. **Important resources**

---

# Complex vs. simple

TempleOS consists of 100,000 lines of code that take up only 1.4 MB.

All comparisons are odious and there are thousands of caveats or asterisks to
take into account, but only to visualize the meaning of these numbers:

- Windows code is estimated to be around
  [50 million lines of code](https://www.quora.com/How-many-lines-of-code-does-Microsoft-Windows-have).
- If we clone [the Swift repository](https://github.com/swiftlang/swift) locally
  and run this command `git ls-files | xargs cat | wc -l`
  ([source](https://stackoverflow.com/a/4822516/6938899)), it yields 4,642,904
  lines to date.
- If I use the same command on Fitterfly, an incomplete _side project_
  consisting of an iOS app with about ten screens, it hovers around 10,000 lines
  of code (about ten percent of the TempleOS total).

YouTube was one of Terry's favorite means of communication with the outside
world. He amused himself with
[his own video games](https://www.youtube.com/watch?v=Raej8C2yIEc),
[played music](https://www.youtube.com/watch?v=fMDr_luEqS8) on his virtual
piano, philosophized.

In one of them, he devotes
[thirty-nine seconds to simplicity](https://www.youtube.com/watch?v=k0qmkQGqpM8):

> _An idiot admires complexity. A genius admires simplicity. A physicist tries
> to make it simple. An idiot... anything the more complicated is, the more he
> will admire it. If you make something so cluster fucking he can't understand
> it, he's gonna think you're a God, because you made it so complicated nobody
> can understand it. That's other, right? Journals and academic journals...
> they... they... try to make it so complicated people think you're a genius._

This is, without a doubt, what is called a _"hot take"._ Quite common in his
statements in front of the camera. In the same vein, there is a famous principle
that we developers often repeat:

> _KISS: Keep it simple, stupid!_

Applicable to the _SDK developer_ sub-branch: a co-worker, a potential user of
our piece of software should not be impressed by our implementation by the
amount of complex structures and cryptic terms we use, but by how wonderful it
is to achieve a very complex functionality by writing a few understandable,
simple lines of code. The design of public APIs in a software package is an art
in itself. How do you manage to hide the difficult to understand in an interface
that is clear, concise and yet customizable? Like the tip of an _iceberg_ that
does not let you see the huge mass of ice that continues it.

A clear example is Stripe, and its famous
[seven lines of code](https://ehandbook.com/two-reasons-why-these-7-lines-of-code-turned-into-a-36-billion-empire-6d2b2d1a8da2)
to integrate a payment processor into any website.

# Unpopular and brutally honest

His first appearances on the web were chaotic: _posts_ with zero responses, he
was labeled as a _spammer_ in portals like Hacker News, several of his
publications were deleted by moderators. Indifference, skepticism, disgust or
insults were the common currency.

The guy kept talking. Weird, controversial, incomprehensible, the guy decided to
keep doing it.

And, eventually, he achieved some recognition.

The web, today, is not like it was several years ago. Spending a few minutes on
Instagram, TikTok or Twitter is enough to get the point across: it seems like
all the time someone is trying to sell you something. Likewise, it seems that
all the time those who speak or write or post issue messages with special
consideration to what the listener wants to hear, to what the algorithm decides
to prioritize or viralize. It is a constant cacophony of words, videos and
images oriented to increase metrics in this new media.

Experiencing Terry's brutal honesty makes us miss a bit those _old days_ of the
internet. A schizophrenic with an immutable _leitmotiv_, speaking his mind
openly, naturally, transparently, without double meanings or hidden intentions
("_I have a set of values but if you don't like them, I have others")_.

As a comment on the internet says:

> _It's a random guy who wrote words and programs. He wrote them because he had
> something to say, not because he was expecting people to listen. People will
> listen, probably, if what you're saying is powerful/important enough. Or not.
> Clients are not always right, and there are proofs of that in history. But
> it's important to keep talking, if your words are better than the silence. And
> at least for me, Terry's words are better than silence._

Customers are not always right, and there are proofs of that in history: who
would think that a novel like
[_The Name of the Rose_](https://es.wikipedia.org/wiki/El_nombre_de_la_rosa), a
long, complex and academic crime story in a 14th century abbey, riddled with
fragments in Latin, an almost dead language only understood by the elites, would
become a worldwide _best-seller_? A publisher would never recommend a similar
plot and style to achieve commercial success.

Marketing studies and demand metrics are dwarfed in the face of a sufficiently
strong message, in which the sender _cannot avoid_ its transmission, as if it
burns as long as it is not externalized.

# Creating as medicine

<img src="/terry-davis/a-wolfli.png" alt="One of Wölfli's creations">

At the beginning of the last century, Picasso found problems in the art of the
moment. The creations of his colleagues were very _western_, adulterated by the
influence of knowledge, culture and the constant self-reference of our
civilization. He needed to go a little further back, or to the side, to unravel
the knot of artistic complexity to get to the _essential_, to the core of any
expression.

That is how he began to look for creativity and innovation outside the
galleries. Tribal or indigenous art, popular art, children's drawings paraded
under his magnifying glass. In all of them, spontaneity was evident, accompanied
by the absence of filters typical of conventional academicism. Pablo went so far
as to say, about children:

> _"All children are born artists. The problem is how to continue being artists
> when they grow up"._

Going deeper into the direction, he advanced into a more controversial category:
what relationship exists, if any, between art and mental illness? Hand in hand
with the evolution of psychiatry, the analysis of productions of schizophrenics
or psychotics became an area of interest to try to better understand the
mysteries of the human mind.

An example is the case of
[Adolf Wölfli](https://es.wikipedia.org/wiki/Adolf_W%C3%B6lfli). A difficult
childhood, orphan, victim of sexual abuse, psychosis and hallucinations, he
spent much of his life in a psychiatric hospital. At some point during his stay,
it seems that he began to draw. His psychiatrist urged him to continue doing so
and so, today, his creations are considered part of what is known as
[_"marginal art_](https://es.wikipedia.org/wiki/Arte_marginal)"
[](https://es.wikipedia.org/wiki/Arte_marginal)or _"art brut"._

If we extend the definition of art outside the conventional categories such as
painting, literature, music, etc., we could consider Terry a faithful
representative of this trend in the field of computing. All the bits that make
up _TempleOS_, in addition to the monologues of its creator in his _live demos_,
have strong expressive characteristics, particularly in the religious field: by
entering the operating system terminal, one can generate pseudo-random phrases
that simulate a communication with God, commonly called _"tongues"._

<img src="/terry-davis/terry-comment.png" alt="I am God's chosen programmer.">

Perhaps _TempleOS_ acted as a channel, not only from God to the rest of mortals
through his messenger, but also as a way of making a tormented reality more
bearable.

# _"Too weird to live, and too rare to die"_

In [_Submission_](https://es.wikipedia.org/wiki/Sumisi%C3%B3n_(novela)), my
first read by French novelist
[Michel Houellebecq](https://es.wikipedia.org/wiki/Michel_Houellebecq), a
hypothetical future is narrated in which Islam gains political power in France.
Suddenly Jews turn to Israel, the wearing of burqas increases... The
protagonist, a university professor jaded with his life, has a dialogue with one
of those responsible for the mutation at the Sorbonne, where professors who
adhere to the religion begin to enjoy excellent salaries and gain access to
polygamy. His interlocutor mentions the "typing monkey argument" to justify the
existence of a higher being:

> _Yes, the universe is very beautiful; and, above all, its gigantism is
> astonishing. Hundreds of thousands of galaxies, each composed of hundreds of
> thousands of stars, some of which are millions of light years away, hundreds
> of billions of kilometers. And, at the scale of a million light years, an
> order begins to form: the galactic clumps are distributed until they form a
> labyrinthine graph. Expose these scientific facts to a hundred people chosen
> at random on the street: how many will have the courage to maintain that all
> this has been created by chance? All the more so since the universe is
> relatively young, fifteen million years at the most. It is the famous argument
> of the typing monkey: how long would it take a chimpanzee, randomly typing on
> a machine keyboard, to rewrite Shakespeare's play? How long would it take a
> blind chance to reconstruct the universe? Surely more than fifteen million
> years...!_

Similar musing to [one Terry had](https://www.youtube.com/watch?v=PsiZmSkN3yo)
as he watched his pet bird stare intently at his computer monitor:

> _Who am I talking to? I don't know. What's reality? I don't know. You just
> have to us when my bird was looking at my computer monitor I thought whoa that
> bird has no idea what he's looking at and yet what does the bird do? Does he
> panic? No, he can't really panic, he just does the best he can is he able to
> live in a world where he's so ignorant? Well... he doesn't really have a
> choice, yeah, he can kind of live it's not it's usually usually usually the
> birds okay even though he doesn't understand the world and he can kind of
> learn what's safe and what's dangerous so uh that's where I've been living I
> think if I had to guess I think I'm in a mental program they I have had a fake
> internet and I've been struggling to tell them it's God but they don't listen
> you're that bird looking at the monitor and you're thinking to yourself I can
> figure this out and you know maybe you have some bird ideas that are maybe
> that's the best you can do._

Islamism, Judaism, Catholicism _(TempleOS_), Buddhism... all variants that try
to explain, in some not strictly rational way, the why of all this. To give an
answer to the immense confusion that surrounds us from the first minute of
existence of every human being, as if we were a bird watching the screen of a
schizophrenic programmer while he creates an operating system to communicate
with God. And to offer, although from the atheist point of view it is no more
than a consolation prize, the possibility of a certain transcendence beyond the
short life we have as individuals.

[Terry explains](https://www.youtube.com/watch?v=fMDr_luEqS8) the distinction
between "mortals and immortals," as he sees it:

> _...it was a weird day when i realized that when i was young there was a huge
> chasm separating mortals from immortals and people like led zeppelin that made
> songs they were immortals and in one day i realized holy fuck i can make a
> song i was like wow that is the weirdest thing my whole life there was like
> the immortals are the ones who make the music and the mortals are the ones who
> listen like holy fuck i was like wow if i just play some notes i make a song
> and that's all it is you just act like a monkey not that's not entirely true
> i've gotten better at um anyway but it was a weird day it was a weird day when
> the chasm between the immortals and the mortals..._

What is the decisive factor in the division between mortals and immortals, then?
The act of creating. The act of bringing to life something that was previously
just a collection of scattered ideas. As an all-powerful being (let's call him
God) supposedly does with this reality, his creation (or one of them).

Terry's turbulent mind created endlessly. Not only in the closed environment of
his own operating system, but also in the brainy reflections that we can see in
the lost archives of the Internet. Creations that represent the antithesis of
the repetition _ad aeternum_ of much of the industry: software that is not
governed by utility, of high religious content, that breaks with a thousand and
one of the good practices that we learn in manuals, but that at the same time
invites reflection, that breaks down reductionisms, categorizations,
classifications, framings.

---

Having spent the last chapter of his life as a _homeless_, traveling through
random cities throughout the United States, is a significant fact. There are
explanations, conjectures, attempts to order this wonderful, interesting and
mysterious reality in which we are immersed, but everything seems to indicate
that certainty will not be given to us. At least not in life.

Terry deleted all his videos from his official YouTube channel. In 2018, in
Dallas, Oregon, he stopped at a library
[(The Dalles Wasco Country Library](https://www.google.com/maps/place/The+Dalles+Wasco+County+Library/@45.5988675,-121.1854205,374m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54961e75d8d45daf:0x53839b22aa21cc07!8m2!3d45.5988675!4d-121.1854205!16s%2Fm%2F0j9s3ln?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D)),
where he used a computer for who knows what. He felt watched, typical weirdo. He
got out, sat on a bench at the entrance, pulled out his cell phone and filmed
the last and only video present on his channel. He praised the library. He
called himself an impure person. He mentioned a castle in the vicinity of the
site. He called himself a king. His last words in front of the camera were:

> Maybe I'm just a bizarre little person who walks back and forth.

Minutes later, he was run over by a train just meters from the site.

I read the comments on the video... one follower said:

> «Maybe I'm just a bizarre little person who walks back and forth.»
>
> Aren’t we all?
>
> RIP Terry

Aren't we all?

<img src="/terry-davis/bizarre-little-person.png" alt="Maybe I'm just a bizarre little person who walks back and forth.">

# Important Resources

- [TempleOS | Down the Rabbit Hole](https://www.youtube.com/watch?v=UCgoxQCf5Jg&t=181s):
  great work by Fredrik Knudsen. His channel consists of a series of
  documentaries about strange cases in the internet world, and Terry's story
  fits perfectly. The perspective is approached from the programmer's appearance
  as a forumist on Reddit and HackerNews, promoting preliminary versions of his
  creation in a strange language, which draws attention to the rest of the
  users. Abundant evidence: comments, videos, testimonials, anecdotes.
- [The Digital Human - Devotion](https://podcasts.apple.com/ar/podcast/the-digital-human/id524041020?i=1000522495173):
  BBC podcast. It takes as a starting point the tragic death of Terry in The
  Dalles, Oregon. From the repercussion of the report of his death (at the
  beginning, a _homeless_ that after the infinite calls of his fans became a
  human with name, surname and a strange and beautiful story behind), attempts
  to analyze both the creator and the created from several prisms begin:
  technical, artistic, religious, psychological.
- [The Internet Archive](https://archive.org/details/TerryADavis_TempleOS_Archive/fan+media/videos/TempleProgramming+(UCnrwMVe-6Q_wT1k5378oXpA)/20190725+-+Xy1aBvPJtVo+-+TempleOS+Assembly+Tutorial+-+Creating+a+Function/20190725+-+Xy1aBvPJtVo+-+TempleOS+Assembly+Tutorial+-+Creating+a+Function.f303.webm):
  an exhaustive collection of almost all the bits that Terry produced in the
  digital world: YouTube videos that are no longer available, documents with his
  appearances on forums, written reflections, tutorials, TempleOS ISO images...
  A puzzle of information.
