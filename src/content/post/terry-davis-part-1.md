---
title: "Terry Davis, the contrarian [Part I]"
description: "Key lessons learned from an outlier who defied all norms"
publishDate: "21 June 2025"
tags: ["software", "development", "stories"]
language: "en"
translationSlug: "terry-davis-part-1es"
---

<img src="/terry-davis/what-is-reality.png" alt="What's reality? I don't know">

# Índice completo

0. Rabbit Hole
1. Attempt at biography
2. Utilitarianism
3. Standing on the shoulders of giants: side effects (coming soon)
4. Complex vs. simple (coming soon)
5. Weird and brutally honest (coming soon)
6. Creating as medicine (coming soon)
7. “Too weird to live, and too rare to die” (coming soon)
8. Important resources (coming soon)

---

# Rabbit hole

Last August I went to Patagonia for a week with several friends, also remote
software engineers. Since 2022 we have repeated the ritual every year, varying
the destination city (Bariloche, Villa la Angostura and, this time, San Martín
de los Andes). The plan is usually to work early in the morning and then use the
free time for _trekking_ in the mountains and forests, skiing, eating asado,
drinking wine and other typical plans of southern Argentina.

One of those days we were killing time in the living room of the house we
rented, watching videos on YouTube. It's not hard to guess what kind of content
six developers are interested in. One of them started digging through the videos
on [_Fireship_](https://www.youtube.com/@Fireship), a programmer's channel where
he shares tutorials, explains _fun facts_ about the industry, gives his opinion
on new libraries, interprets technology news, and so on. He selected one called
[***TempleOS in 100 Seconds**](https://www.youtube.com/watch?v=h7gf5M04hdg).*

What followed was strange: a boy with an elongated face, jaws present, always
wearing a cap, _was streaming_ a game consisting of a group of people in the
middle of a desert running in random directions, a rudimentary version of
_Paint_, a program apparently intended to create music, consisting of a keyboard
and a score... all in 8-bit user interfaces that reminded me of my first
experiences with computers.

The narrator of _Fireship_ gave a rational context to what seemed pure
irrationality: an American programmer, diagnosed with schizophrenia, with an IQ
out of the normal range, thinks he is God's chosen one and develops an operating
system 100% from scratch __that represents the
[Third Temple](https://es.wikipedia.org/wiki/Tercer_templo_de_Jerusal%C3%A9n)
prophesied in the Bible, after the destruction of
[Solomon's Temple](https://es.wikipedia.org/wiki/Templo_de_Salom%C3%B3n). It
includes _kernel_, graphics library, games and even its own programming
language_(Holy C_) with its own compiler. It seems to be the only example in the
history of computing in which an operating system is implemented from start to
finish by a single developer.

That was my first encounter with
[Terry Davis](https://en.wikipedia.org/wiki/Terry_A._Davis).

Internally, the same thing happened to me as it did about ten years ago, when I
came across a [documentary](https://www.youtube.com/watch?v=6xY3GlDOJtk) about
the
[Voynich Codex](https://elpais.com/cultura/2015/12/12/actualidad/1449925015_141355.html),
said to be the most enigmatic book ever written: that tangential thing that
resists any attempt at categorization, parameterization, framing. An operating
system that is not justified by its usefulness (I don't think there is a single
person in the world who uses TempleOS on a daily basis) but to continue a
supposed biblical prophecy. A book written in a language that no one knows or
can translate. Little nuggets of gold in the desert of repetition.

I knew instantly that I had to dig more about Terry and _TempleOS_. I saved the
link to the video and jotted down a TO DO for the return trip:

> _[ ] terry davis + templeOS → rabbit hole_

This _post_ is the result of having spent some time descending into said hole.
An attempt to share what I think is Terry's legacy on the topics that occupy my
head the most.

# Biography attempt

<img src="/terry-davis/after-egypt.png" alt="AfterEgypt, one of the games inside TempleOS">

There is an abundance of material about Terry on the internet. It's easy to
spend hours and hours between snippets of his _livestreams_ on YouTube, his
forum posts, comments from followers and detractors, articles and podcasts that
try to analyze him from dozens of different points of view. _TempleOS_ itself,
public and free, is the major evidence to try to decrypt its creator. The common
denominator of any available material is that it is impossible to stop being
surprised by each new piece of information.

With the idea of making this article self-sustaining goes a small, incomplete
chronological list about his life and work:

- Born in '69, seventh child of eight siblings. Location: Wisconsin.
- Later moved to California and Arizona.
- Graduated with a degree in electrical engineering from _Arizona State
  University_.
- Worked for a few years at Ticketmaster as a programmer. It seems to have been
  his only professional experience.
- In 1996 the party begins: in Las Vegas, still living with his parents, the
  first manic episodes appear. He is diagnosed as schizophrenic. He receives a
  government disability pension. According to him, at that stage he receives a
  "revelation" from God that leads him to abandon his atheism and start building
  the third temple for the Creator: _TempleOS_. He spends a decade pursuing this
  goal.
- Once the work is finished, he goes into outreach. He appears on _Reddit_ and
  _HackerNews_ with cryptic _posts_ and videos trying to popularize the use of
  his operating system. For many years he was ignored (his posts on _HackerNews_
  have been delisted), accused of _spam_, victim of _troll_ groups, until for
  some issue that is not clear to me (enough perseverance? Mythical aura? Some
  post of his that clicked with the opinion of the online collective?), he began
  to amass a large following.
- His illness worsens, he begins to have fierce fights with his parents. Some of
  them are immortalized **on his channel. He ends up on the street in 2017. His
  last year he spends it as _homeless_ touring cities in the United States. In
  several videos he is seen with long hair, disheveled, smoking, philosophizing,
  sometimes dancing, in squares, train stations, city corners. A _nerdy_ and
  more modern version of Jack Kerouac in _On the road_: a camera and YouTube
  replacing the classic notepad of the globetrotting writer.
- He ends his journey in a small town called The Dalles in Oregon in 2018. He
  films himself at the entrance of a local bookstore, uploads
  [the video](https://www.youtube.com/watch?v=oH41gGBVpkE) to the channel. A few
  hours later the local media reports the death of a man with an unknown name,
  hit by a train. What follows are thousands of calls from his fans to said
  media, trying to confirm if that John Doe was in fact the prolific developer.

# Utilitarianism

<img src="/terry-davis/temple-os.png" alt="La homepage de TempleOS">

Trying to promote the use of the first version of TempleOS (called _LoseThos_),
Terry writes in [OSNews](https://www.osnews.com/):

> _LoseThos is for programming as entertainment. It empowers programmers with
> kernel privilege because it's fun. It allows full access to everything because
> it's fun. It has no bureaucracy because it's fun. It's the way it is by choice
> because it's fun. LoseThos is in no way a Windows or Linux wannabe -- that
> would be pointless._

The fact that, as a user, you have access _to everything_, makes it a
[ring 0 operating system.](https://en.wikipedia.org/wiki/Protection_ring) From
the point of view of _usability_ (any action performed can trigger serious
problems if you are not careful) and _security_ (greater possibility of creating
_malware_ in unprotected environments), it does not seem to be an excellent
decision: protection levels have a reason for being and that is, among other
things, to prevent from the design possible unintentional actions by users. Not
having them is to _delegate that responsibility_ to them and, in parallel, _to
delegate a great power to them_. Which, according to Terry, is fun.

Another developer, also a user of OSNews, amplifies his sayings in
[a post](https://www.osnews.com/story/23796/recreational-programming-with-losethos/)
titled _Recreational programming with LoseThos_ . He cites several explanations
by the author and concludes with the following:

> _I'm glad that operating systems like LoseThos still exist, in that it shows
> that computing can still be a **hobby**; why is everybody so serious these
> days? If I want to code an OS that uses interpretive dance as the input
> method, I should be allowed to do so, companies like Apple be damned._

It is very common in the tech world (and probably in the engineering world in
general) to associate _value_ with _utility_: a piece of software produces value
only if it is useful to solve a certain user need. The word processor I am using
to write this article is valuable because it allows me to translate thoughts
into written text that I can then share with the world. Social networks are
great products because they connect us. Calendars, because they organize our
routine. _Streaming_ platforms, because they allow us to enjoy entertainment
shows. Slack, because it facilitates work communication. Google Meet, because it
allows us to organize remote video calls. And so on.

That's why we tend to react with a certain strangeness when presented with
examples like TempleOS/LoseThos. It crunches the structure, the mental model in
which we assign importance to something: the author himself is telling us, in
our face, bluntly, that the main reason he spent years of his life working on
this operating system is... to have fun. The argument behind all the decisions
about architecture, APIs, _backwards compatibility_, etc., is, plain and simple:
_because it's fun!_

An example of the reluctance to this strange way of thinking about software
creation is the first comment you read in the post:

> _2010-09-12 7:58 pm boulabiar_
>
> _Why people still losing time creating new OSes that looks similar to 80's
> ones ? I they have too much time they can help resolving problems of Linux or
> any common sub-system. Resolving issues/bugs help many millions of users,
> recreating the wheel every time is a huge time waste..._

_Wasting time_: anything that does not consist of solving concrete needs or
collaborating in that collective task is wasting time. The right decision in
these cases is to think about what is most useful for the users and put yourself
at their service. Why reinvent the wheel with meaningless creations when we can
leverage pre-existing inventions?

I remember the first time I came across reflections aligned with Terry's
arguments about his technical decisions when it came to bringing TempleOS to
life. It was in a different context: a high school literature class. We had to
read several excerpts reflecting on the discipline, interpret and comment on
them. One of them stated unequivocally that literature was _useless, that it
served no purpose._

My first feeling was one of anger. I read a lot and I was annoyed that someone
else was claiming that what I did in much of my spare time was of no practical
use. I made a mental list of reasons why I considered reading fiction to be
useful (stimulating creativity, improving vocabulary, enabling the recreation of
fictional worlds from symbols, learning tangentially about culture, history,
etc.) and told the teacher about it. She noticed my dissatisfaction. We had an
exchange and she made me realize that I had missed the point of what I was
reading. The paragraph was a _provocation_. Doing useless things constituted an
act of rebellion in the face of frantic and constant utilitarianism. Sometimes,
wasting time gives respite, it is liberating.
[Adrián Dárgelos tells](https://x.com/rparrottino/status/1830776649673015319)
about his reading habits:

> _I read **to** waste time, because wasting time is a subversive action in a
> world where you have to consume and take advantage of it._

Or:

> _[This] is a world where wasting time is frowned upon, because what do you do
> with time, produce money. What do the richest people in the world do? Buy
> time. So reading is an anti-productive activity, because it doesn't produce
> money._

The point here is not to throw everything useful in the trash and pursue
religiously tinged _side projects_. Or that in the next meeting with your
Technical Leader you justify your decisions as a developer by saying that you
chose X instead of Y because X is more fun. No.

The point is that, on the one hand, we try to relativize more the equation
_useful == good, and everything else is left out._ There are thousands of
examples like TempleOS that probably don't satisfy real user needs on a global
level as well as Windows, Linux or macOS do. But is that the only metric to
assess the importance of something? My humble opinion is that no, they deserve
recognition from other angles, such as creativity, anecdote, myth, thinking
outside the box.

On the other hand, do not forget to have fun, to have a good time. I have the
naïve idea that in any company or product, having a good time implementing new
functionalities is a great differentiator in terms of the pursuit of purpose and
mental health in general. Lard moments of utility with moments of enjoyment. If
we are constantly producing things just for the sake of them being useful, we
are no different from machines in any way.

In short: _remembering to **exist**, rather than to **function**_. As an
example, it only takes a few minutes of reading about the life of Terry Davis to
understand that _he existed_. And he had fun.

---

In the next post, which I'll publish next week, we'll talk about the side
effects of aggressively increasing levels of abstraction.
