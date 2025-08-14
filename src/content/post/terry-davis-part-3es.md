---
title: "Terry Davis, el disidente [Parte III]"
description: "Tratando de entender la filosofía detrás de sus creaciones"
publishDate: "14 August 2025"
tags: ["software", "development", "stories", "art"]
language: "es"
translationSlug: "terry-davis-part-3"
---

# Índice completo

0. Rabbit hole (en
   [Parte I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1es/))
1. Intento de biografía (en
   [Parte I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1es/))
2. Utilitarismo (en
   [Parte I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1es/))
3. Pararse sobre los hombros de los gigantes: efectos secundarios (en
   [Parte II](https://gentilijuanmanuel.github.io/posts/terry-davis-part-2es/))
4. **Complejo vs. simple**
5. **Raro y brutalmente honesto**
6. **Crear como medicina**
7. **“Too weird to live, and too rare to die”**
8. **Recursos importantes**

---

# 3. Complejo vs. simple

TempleOS consiste en 100.000 líneas de código que ocupan tan solo 1.4 MB.

Todas las comparaciones son odiosas y hay miles de salvedades o asteriscos a
tener en cuenta, pero tan solo para visualizar el significado de dichos números:

- Se estima que el código de Windows ronda
  [las 50 millones de líneas de código](https://www.quora.com/How-many-lines-of-code-does-Microsoft-Windows-have).
- Si clonamos [el repositorio de Swift](https://github.com/swiftlang/swift)
  localmente y corremos este comando `git ls-files | xargs cat | wc -l`
  ([fuente](https://stackoverflow.com/a/4822516/6938899)), nos arroja 4.642.904
  líneas a la fecha.
- Si utilizo el mismo comando en Fitterfly, un _side project_ incompleto que
  consiste en una iOS app con aproximadamente diez pantallas, ronda las 10.000
  líneas de código (un diez por ciento del total de TempleOS).

YouTube era uno de los medios de comunicación favoritos de Terry con el mundo
exterior. Se divertía con
[sus propios videojuegos](https://www.youtube.com/watch?v=Raej8C2yIEc),
[tocaba música](https://www.youtube.com/watch?v=fMDr_luEqS8) con su piano
virtual, filosofaba.

En uno de ellos, le dedica
[treinta y nueve segundos a la simpleza](https://www.youtube.com/watch?v=k0qmkQGqpM8):

> _An idiot admires complexity. A genius admires simplicity. A physicist tries
> to make it simple. An idiot… anything the more complicated is, the more he
> will admire it. If you make something so cluster fucking he can't understand
> it, he's gonna think you're a God, because you made it so complicated nobody
> can understand it. That's other, right? Journals and academic journals… they…
> they… try to make it so complicated people think you're a genius._

Esto es, sin lugar a dudas, lo que se llama un _“hot take”_. Bastante común en
sus declaraciones frente a la cámara. En la misma línea, existe un famoso
principio que solemos repetir los desarrolladores:

> _KISS: Keep it simple, stupid!_

Aplicable al sub-rubro del _SDK developer_: un compañero de trabajo, un
potencial usuario de nuestra pieza de software no debería impresionarse ante
nuestra implementación por la cantidad de estructuras complejas y términos
crípticos que utilizamos, sino por lo maravilloso de lograr una funcionalidad
muy compleja escribiendo unas pocas entendibles, simples líneas de código. El
diseño de las APIs públicas en un paquete de software es un arte en sí mismo.
Cómo lograr esconder lo difícil de entender en una interfaz que es clara,
concisa y a la vez customizable? Como la punta de un _iceberg_ que no deja ver
la enorme masa de hielo que la continúa.

Claro ejemplo es Stripe, y sus famosas
[siete lineas de código](https://ehandbook.com/two-reasons-why-these-7-lines-of-code-turned-into-a-36-billion-empire-6d2b2d1a8da2)
para integrar un procesador de pago en cualquier sitio web.

# 4. Raro y brutalmente honesto

Sus primeras apariciones en la web fueron caóticas: _posts_ con cero respuestas,
fue catalogado como _spammer_ en portales como Hacker News, varias de sus
publicaciones eliminadas por moderadores. Indiferencia, escepticismo, repulsión
o insultos eran la moneda corriente.

El tipo siguió hablando. Raro, polémico, incomprensible, el tipo decidió seguir
haciéndolo.

Y, eventualmente, logró cierto reconocimiento.

La web, hoy día, no es como hace varios años atrás. Pasar unos minutos en
Instagram, TikTok o Twitter basta para entender el punto: parece que todo el
tiempo alguien está intentando venderte algo. Asimismo, parece que todo el
tiempo los que hablan o escriben o postean emiten mensajes teniendo especial
consideración a lo que el oyente quiere escuchar, a lo que el algoritmo decide
priorizar o viralizar. Es una cacofonía constante de palabras, videos e imágenes
orientadas a _pegarla_ en este nuevo medio, a aumentar las métricas.

Experimentar la honestidad brutal de Terry hace extrañar un poco esos _old days_
del internet. Un esquizofrénico con una bandera, un _leitmotiv_ inmutable,
diciendo lo que piensa sin tapujos, con naturalidad, transparencia, sin dobles
sentidos o intenciones encubiertas (”_tengo un conjunto de valores pero si no te
gustan, tengo otros”_).

Como dice un comentario en internet:

> _It’s a random guy who wrote words and programs. He wrote them because he had
> something to say, not because he was expecting people to listen. People will
> listen, probably, if what you’re saying is powerful/important enough. Or not.
> Clients are not always right, and there are proofs of that in history. But
> it’s important to keep talking, if your words are better than the silence. And
> at least for me, Terry’s words are better than silence._

Los clientes no siempre tienen la razón, y hay pruebas de eso en la historia:
quién diría que una novela como
[_El nombre de la rosa_](https://es.wikipedia.org/wiki/El_nombre_de_la_rosa),
extensa, compleja y académica historia sobre crímenes en una abadía del siglo
XIV, plagada de fragmentos en latín, lengua casi muerta solo entendida por el
elitismo, se convierta en un _best-seller_ mundial? Un editor jamás recomendaría
un argumento y estilo similares para conseguir éxito comercial.

Los estudios de marketing y las métricas de demanda quedan empequeñecidas frente
a un mensaje lo suficientemente fuerte, en el que el emisor _no puede evitar_ su
transmisión, como si quemara mientras no se exteriorize.

# 5. Crear como medicina

<img src="/terry-davis/a-wolfli.png" alt="Una de las creaciones de Wölfli">

A inicios del siglo pasado, Picasso encontraba problemas en el arte del momento.
Las creaciones de sus colegas eran muy _occidentales_, adulteradas por la
influencia del saber, la cultura y la constante auto referencia propia de
nuestra civilización. Necesitaba ir un poco más atrás, o al costado,
desenmarañar el nudo de la complejidad artística para llegar a lo _esencial_, al
núcleo de cualquier expresión.

Es así que comenzó a buscar la creatividad e innovación fuera de las galerías.
Desfilaron bajo su lupa el arte tribal o indígena, el popular, los dibujos
infantiles. En todas se evidenciaba la espontaneidad acompañada por la ausencia
de filtros propios del academicismo convencional. Llegó a decir Pablo, sobre los
niños:

> _Todos los niños nacen artistas. El problema es cómo seguir siendo artistas al
> crecer_

Profundizando la dirección, avanzó en una categoría un tanto más polémica: qué
relación existe, si es que la hay, entre el arte y las enfermedades mentales? De
la mano de la evolución de la psiquiatría, el análisis de producciones de
esquizofrénicos o psicóticos se convirtió en zona de interés para intentar
entender mejor los misterios de la mente humana.

Un ejemplo es el caso de
[Adolf Wölfli](https://es.wikipedia.org/wiki/Adolf_W%C3%B6lfli). Infancia
difícil, orfandad, víctima de abusos sexuales, de psicosis y alucinaciones, pasó
gran parte de su vida en un hospital psiquiátrico. En algún momento de su
estancia, parece que comenzó a dibujar. Su psiquiatra lo instó a seguir
haciéndolo y así, hoy día, sus creaciones son consideradas parte de lo que se
conoce como [_“arte marginal”_](https://es.wikipedia.org/wiki/Arte_marginal) o
_“art brut”_.

Si extendemos la definición de arte por fuera de las categorías convencionales
tales como pintura, literatura, música, etc., podríamos considerar a Terry un
fiel representante de esta corriente en el terreno de la informática. Todos los
bits que componen a _TempleOS_, en complemento con los monólogos de su creador
en sus _live demos_, gozan de fuertes características expresivas, en particular
en el terreno religioso: al ingresar en la terminal del sistema operativo, se
pueden generar frases pseudo-random que simulan una comunicación con Dios,
comúnmente denominadas _“tongues”_.

<img src="/terry-davis/terry-comment.png" alt="Soy el programador elegido por Dios">

Quizás _TempleOS_ hizo las veces de canalizador, no sólo de Dios hacia el resto
de los mortales a través de su mensajero, sino también como una forma de hacer
más llevadera una realidad atormentada.

# _6. “Too weird to live, and too rare to die”_

En [_Sumisión_](https://es.wikipedia.org/wiki/Sumisi%C3%B3n_(novela)), mi primer
lectura del novelista francés
[Michel Houellebecq](https://es.wikipedia.org/wiki/Michel_Houellebecq), se narra
un hipotético futuro en el cual el islam gana el poder político en Francia. De
repente los judíos se vuelven a Israel, aumenta el uso de las burkas… El
protagonista, un profesor universitario hastiado de su vida, tiene un diálogo
con uno de los responsables de la mutación en la Sorbona, donde los profesores
que adhieren a la religión empiezan a gozar de excelentes salarios y obtienen
acceso a la poligamia. Su interlocutor menciona el “argumento del mono
mecanógrafo” para justificar la existencia de un ser superior:

> _Sí, el universo es muy bello; y, sobre todo, su gigantismo es asombroso.
> Cientos de miles de galaxias, compuestas cada una de cientos de miles de
> estrellas, algunas de las cuales se hallan a millones de años luz, cientos de
> miles de millones de kilómetros. Y, a la escala del millón de años luz,
> empieza a constituirse un orden: los amasijos galácticos se distribuyen hasta
> formar un gráfico laberíntico. Exponga esos hechos científicos a cien personas
> elegidas al azar por la calle: ¿cuántas tendrán el valor de sostener que todo
> eso se ha creado por casualidad? Más aún puesto que el universo es
> relativamente joven, quince millones de años como mucho. Es el célebre
> argumento del mono mecanógrafo: ¿cuánto tiempo le llevaría a un chimpancé,
> tecleando al azar el teclado de una máquina, para reescribir la obra de
> Shakespeare? ¿Cuánto tiempo necesitaría un azar ciego para reconstruir el
> universo? ¡Seguro que más de quince millones de años…!_

Reflexión similar a
[una que tuvo Terry](https://www.youtube.com/watch?v=PsiZmSkN3yo) mientras
observaba al pájaro que tenía de mascota mirar atentamente al monitor de su
computadora:

> _Who am I talking to? I don't know. What's reality? I don't know. You just
> have to us when my bird was looking at my computer monitor I thought whoa that
> bird has no idea what he's looking at and yet what does the bird do? Does he
> panic? No, he can't really panic, he just does the best he can is he able to
> live in a world where he's so ignorant? Well… he doesn't really have a choice,
> yeah, he can kind of live it's not it's usually usually the birds okay even
> though he doesn't understand the world and he can kind of learn what's safe
> and what's dangerous so uh that's where I've been living I think if I had to
> guess I think I'm in a mental program they I have had a fake internet and I've
> been struggling to tell them it's God but they don't listen you're that bird
> looking at the monitor and you're thinking to yourself I can figure this out
> and you know maybe you have some bird ideas that are maybe that's the best you
> can do._

Islamismo, judaísmo, catolicismo (_TempleOS_), budismo… todas variantes que
intentan explicar, de alguna manera no estrictamente racional, el por qué de
todo esto. Dar una respuesta a la inmensa confusión que nos rodea desde el
primer minuto de existencia de cada ser humano, como si fuéramos un pájaro
observando la pantalla de un programador esquizofrénico mientras crea un sistema
operativo para comunicarse con Dios. Y brindar, aunque desde la óptica atea sea
no más que un premio consuelo, la posibilidad de cierta trascendencia más allá
de la corta vida que tenemos como individuos.

[Explica Terry](https://www.youtube.com/watch?v=fMDr_luEqS8) la distinción entre
“mortales e inmortales”, según su óptica:

> _…it was a weird day when i realized that when i was young there was a huge
> chasm separating mortals from immortals and people like led zeppelin that made
> songs they were immortals and in one day i realized holy fuck i can make a
> song i was like wow that is the weirdest thing my whole life there was like
> the immortals are the ones who make the music and the mortals are the ones who
> listen like holy fuck i was like wow if i just play some notes i make a song
> and that's all it is you just act like a monkey not that's not entirely true
> i've gotten better at um anyway but it was a weird day it was a weird day when
> the chasm between the immortals and the mortals…_

Cuál es el factor decisivo en la división entre mortales e inmortales, entonces?
El acto de crear. El hecho de darle vida a algo que previamente eran solo un
conjunto de ideas dispersas. Como supuestamente hace un ser todopoderoso
(llamémosle Dios) con esta realidad, su creación (o una de ellas).

La mente turbulenta de Terry creó sin cesar. No sólo en el entorno cerrado de su
propio sistema operativo, sino también en las sesudas reflexiones que podemos
ver en los archivos perdidos de internet. Creaciones que representan la
antítesis de la repetición _ad aeternum_ de gran parte de la industria: software
que no se rige por la utilidad, de alto contenido religioso, que rompe con mil y
una de las buenas prácticas que aprendemos en manuales, pero que a su vez invita
a la reflexión, que hace resquebrajar reduccionismos, categorizaciones,
clasificaciones, encuadramientos.

---

Haber cursado el último capítulo de su vida como _homeless_, recorriendo
ciudades aleatorias a lo largo de Estados Unidos, es un hecho significativo. Hay
explicaciones, conjeturas, tentativas de ordenar esta maravillosa, interesante y
misteriosa realidad en la que estamos inmersos, pero todo parece indicar que la
certeza no se nos será dada. Al menos no en vida.

Terry borró todos sus videos de su canal oficial de YouTube. En 2018, en Dallas,
Oregon, paró en una biblioteca
([The Dalles Wasco Country Library](https://www.google.com/maps/place/The+Dalles+Wasco+County+Library/@45.5988675,-121.1854205,374m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54961e75d8d45daf:0x53839b22aa21cc07!8m2!3d45.5988675!4d-121.1854205!16s%2Fm%2F0j9s3ln?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D)),
en la que usó una computadora para vaya a saber qué. Se sintió observado, típico
bicho raro. Salió, se sentó en un banco de la entrada, sacó su celular y filmó
el último y único video presente de su canal. Elogió a la biblioteca. Se
autodenominó una persona impura. Mencionó un castillo en las cercanías del
lugar. Se autodenominó rey. Sus últimas palabras frente a la cámara fueron:

> _Maybe I'm just a bizarre little person who walks back and forth._

Minutos después, era arrollado por un tren a metros del lugar.

Leo los comentarios del video… un seguidor dice:

> «Maybe I'm just a bizarre little person who walks back and forth.»
>
> Aren’t we all?
>
> RIP Terry

¿Acaso no lo somos todos?

<img src="/terry-davis/bizarre-little-person.png" alt="Maybe I'm just a bizarre little person who walks back and forth.">

# Recursos importantes

- [TempleOS | Down the Rabbit Hole](https://www.youtube.com/watch?v=UCgoxQCf5Jg&t=181s):
  gran trabajo de Fredrik Knudsen. Su canal consiste en una serie de
  documentales sobre casos extraños en el mundo de internet, y la historia de
  Terry encaja a la perfección. La perspectiva se encara desde la aparición del
  programador como forista en Reddit y HackerNews, promocionando versiones
  preliminares de su creación en un lenguaje extraño, que llama a la atención al
  resto de los usuarios. Abundante evidencia: comentarios, vídeos, testimonios,
  anécdotas.
- [The Digital Human - Devotion](https://podcasts.apple.com/ar/podcast/the-digital-human/id524041020?i=1000522495173):
  podcast de la BBC. Toma como punto de partida la trágica muerte de Terry en
  The Dalles, Oregon. A partir de la repercusión del reporte de su muerte (al
  principio, un _homeless_ NN que luego de las infinitas llamadas de sus fans se
  convirtió en un humano con nombre, apellido y una extraña y hermosa historia
  detrás), comienzan intentos de analizar tanto al creador como a lo creado
  desde varios prismas: el técnico, artístico, religioso, psicológico.
- [The Internet Archive](https://archive.org/details/TerryADavis_TempleOS_Archive/fan+media/videos/TempleProgramming+(UCnrwMVe-6Q_wT1k5378oXpA)/20190725+-+Xy1aBvPJtVo+-+TempleOS+Assembly+Tutorial+-+Creating+a+Function/20190725+-+Xy1aBvPJtVo+-+TempleOS+Assembly+Tutorial+-+Creating+a+Function.f303.webm):
  una colección exhaustiva de casi todos los bits que Terry produjo en el mundo
  digital: videos de YouTube que ya no están más disponibles (por alguna razón
  Terry borró todo antes de morir, dejando sólo la última grabación previa a su
  muerte), documentos con sus apariciones por los foros, reflexiones escritas,
  tutoriales, imágenes ISO de TempleOS… Un puzzle de información.
