---
title: "Terry Davis, el disidente [Parte II]"
description: "Cuál es el lado B de elevar los niveles de abstracción de forma tan agresiva?"
publishDate: "17 July 2025"
tags: ["software", "development", "stories"]
language: "es"
translationSlug: "terry-davis-part-2"
---

<img src="/terry-davis/chess.png" alt="Terry jugando al ajedrez contra Dios">

# Índice completo

0. Rabbit hole (en
   [Parte I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1es/))
1. Intento de biografía (en
   [Parte I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1es/))
2. Utilitarismo (en
   [Parte I](https://gentilijuanmanuel.github.io/posts/terry-davis-part-1es/))
3. **Pararse sobre los hombros de los gigantes: efectos secundarios**
4. Complejo vs. simple (próximamente)
5. Raro y brutalmente honesto (próximamente)
6. Crear como medicina (próximamente)
7. “Too weird to live, and too rare to die” (próximamente)
8. Recursos importantes (próximamente)

---

# Pararse sobre los hombros de los gigantes: efectos secundarios

> Observarlo a lo largo de los años me impulsó a desarrollar mis propias
> herramientas para muchas cosas, en lugar de limitarme a aceptar la
> funcionalidad que ofrece una aplicación y cómo la ofrecen.
>
> David Cassel,
> [El problemático legado de Terry Davis, «El programador solitario
de Dios»](https://thenewstack.io/the-troubled-legacy-of-terry-davis-gods-lonely-programmer/)

En mis años de universidad tuve una pequeña obsesión con Steve Jobs, como
calculo habrán tenido varios estudiantes de ciencias de la computación o
ingeniería en sistemas en algún momento de sus vidas. Algo mencioné en
[este post](https://gentilijuanmanuel.github.io/posts/a-healthier-self/). Leí la
biografía de Walter Issacson, me miré todas las películas sobre su persona (_for
the record_: la que más me gustó fue _Steve Jobs: The Man in the Machine_), sus
entrevistas, y convencí a mis padres para que me compren mi primer dispositivo
Apple: una MacBook Air 2015. En ella corrí por primera vez Xcode, lo cual hizo
de este _rabbit hole_, concatenado con mi educación formal, el puntapié inicial
para dedicarme al desarrollo de apps en entornos de la manzana hasta el
presente.

Un prisma interesante a través del cual acercarse a Jobs es su intercambio
epistolar. Tanto a terceros, como a sí mismo. La cuenta de X
[Internal Tech Emails](https://x.com/TechEmails) publicó varios de ellos. De
hecho, existe un libro que trata específicamente sobre el tema: _Letters to
Steve: inside the e-mail inbox of Apple’s Steve Jobs._

Hay en particular uno que se hizo bastante famoso. Se lo envió a sí mismo. Fue
un año antes de su muerte. Se puede leer como un poema:

> _**De**: Steve Jobs_
>
> _**Para**: Steve Jobs_
>
> _**Fecha**: Jueves, 2 de septiembre de 2010, 23:08_
>
> _Cultivo muy poco de lo que como, y de lo poco que cultivo, no he criado ni
> perfeccionado las semillas._
>
> _No fabrico mi propia ropa._
>
> _Hablo un idioma que no inventé ni perfeccioné._
>
> _No descubrí las matemáticas que utilizo._
>
> _Me protegen libertades y leyes que no concebí ni legislé, y no las hago
> cumplir ni las juzgo._
>
> _Me conmueve la música que no creé._
>
> _Cuando necesité atención médica, estaba indefenso para ayudarme a
> sobrevivir._
>
> _No inventé el transistor, el microprocesador, la programación orientada a
> objetos ni la mayor parte de la tecnología con la que trabajo._
>
> _Amo y admiro a mi especie, viva y muerta, y dependo totalmente de ella para
> mi vida y bienestar._
>
> _**Enviado desde mi iPad**_

En la misma línea, en una entrevista, Jobs desarrolla
[una analogía](https://www.youtube.com/watch?v=W5o7umYvqlw) espectacular para
justificar las creaciones de Apple en el terreno de la computación personal:
menciona un experimento en _Scientific American_ en el cual se comparaba la
cantidad de energía consumida por un conjunto de seres vivos para trasladarse de
un punto arbitrario A a otro B. Es decir, se medía la _eficiencia_ de los mismos
en cuanto a la locomoción y se los ordenaba del más al menos eficiente. Los
resultados arrojaron que el cóndor era el ganador y que el ser humano tenía una
performance bastante mediocre, casi en el final del ranking. Pero uno de los
científicos detrás del experimento tuvo la brillante idea de repetirlo, dándole
al humano la posibilidad de cumplir la tarea _con la ayuda de una bicicleta_.
Con esta nueva configuración, el ser humano demostraba ser el doble de eficiente
que el cóndor, posicionándose cómodamente en el primer lugar.

Es bastante evidente que, a medida que el conocimiento y la tecnología se
expande, así mismo lo hace nuestra capacidad de lograr cosas. Tomando como base
el progreso humano realizado, cada vez es más fácil avanzar en el torrente
creativo: las herramientas que inventamos nos sirven para “amplificar y heredar
nuestras habilidades”, como dice Jobs. Con una bicicleta, le ganamos a alguien
caminando o corriendo. Con un procesador de textos, escribimos más rápido que
con tinta y papel.

Traduciéndolo al mundo _tech_ con algunos ejemplos:

- El lenguaje binario, el lenguaje que _realmente_ entienden las máquinas, no es
  una necesidad para implementar funcionalidades en el mundo actual. Este alivio
  ocurre gracias a los _lenguajes de alto nivel_, los cuales son una abstracción
  del lenguaje de máquina, mucho más cercanos al lenguaje natural, que se
  traduce por un proceso automático llamado _compilación_ a los unos y ceros que
  terminan interpretando las computadoras. Nuestros procesadores no entienden ni
  Swift, ni JavaScript, ni C# ni Python. Podemos comunicarnos con ellos a través
  de dichos lenguajes porque hay un _puente_ en el medio.
- En _Object oriented programming_, uno de los términos que menciona Jobs en el
  mail, existe el concepto de _herencia_ entre clases, lo cual implica que una
  subclase puede heredar comportamientos y propiedades de la clase padre _for
  free_, mientras se encarga de especializarse en su zona de interés. He visto
  varios ejemplos de abstracciones sobre abstracciones sobre abstracciones a lo
  largo de mis años trabajando como programador. Una muñeca _mamuska_ de
  generalizaciones.
- Usando dependencias/librerías evitamos tener que implementar un calendario
  desde cero y tan solo integramos un paquete que resuelve el problema por
  nosotros, permitiéndonos ofrecer todo un set nuevo de funcionalidades en
  nuestro producto. Cuál es nuestra tarea? Analizar la factibilidad de la
  integración del mismo, aprender su API, conectarlo, y ya.

_Plug & play_. Todo tiende a la abstracción.

Terry navegó en dirección contraria a esta tendencia. Podría haber hecho uso de
los sistemas operativos existentes y aplicar su talento en crear apps o
servicios _sobre_ ellos, como hacemos la mayoría de los desarrolladores en la
actualidad. En cambio, dedicó su vida a crear un nuevo universo digital, con
poca comunicación con el tradicional que habitamos todos los días. Cuando un
usuario de TempleOS se quejó sobre los problemas que tenía el sistema operativo
para integrarse con VirtualBox y así poder ser ejecutado desde una computadora
con un sistema operativo de uso masivo, respondió que no le interesaba en lo más
mínimo lograr una integración satisfactoria con el programa.

La tendencia en la actualidad, influenciada por el advenimiento de la AI como
una ola que arrasa con todo, ronda a favor de _aumentar agresivamente los
niveles de abstracción_. Las autopistas ya están construidas, nosotros nos
limitamos a crear distintos modelos de autos que transiten sobre ellas. Cada
tanto, contribuimos a arreglar algún pozo en las rutas, o al menos reportamos el
problema para que los que se encargan de arreglarlas estén al tanto (abriendo
GitHub issues o PRs). Si llevamos esto al límite, en muchos casos, la tarea del
desarrollador consiste en _orquestar_ una serie de paquetes o funcionalidades
escritos por otras personas con el objetivo de lograr tirar al mercado un
producto que solucione X necesidad. Incluso esa tarea de orquestación tiende a
ser abstraída también, hoy día: para qué ponerme a escribir código para integrar
esta API si puedo pedirle a ChatGPT que lo haga por mí? **Así, con velocidad
frenética, estamos llegando a un punto en el cual esta frase empieza a cobrar
sentido y convertirse en _trending topic_ sobre la industria:

> _You’re not a Software Engineer, you’re a frameworker._

O, más duro y frontal:

> _You’re not a Software Engineer, you’re a blue-collar tech worker._

Ilustremos esto con un par de ejemplos en una y otra dirección.

## Frameworker, Programmer, Engineer

Dichas afirmaciones se hicieron populares en los últimos tiempos, exagerando el
tono para provocar efecto en los lectores (como todo lo que se hace viral en X o
demás redes sociales).
[Este post en Medium](https://johndanielraines.medium.com/be-an-engineer-not-a-frameworker-c58fe28d0c88)
hace una resumida diferenciación entre _frameworker_, _programmer_ e _engineer_
que puede servir como marco teórico. TL;DR:

- _Frameworker_: conocimiento limitado sobre el lenguaje de programación en el
  que escribe, modelo mental muy acoplado al _framework_ que utiliza para
  resolver problemas.
- _Programmer_: lee y escribe mucho más código, en varios lenguajes de
  programación. De esta manera, obtiene experiencia sobre distintas maneras de
  aplicar técnicas de programación, patrones de diseño y demás conceptos
  genéricos que suelen verse en distintos lenguajes, paradigmas y librerías.
  Gana vocabulario técnico en dicho proceso.
- _Engineer_: logra barajar con destreza la _estabilidad_ y el _cambio_. Cada
  tarea que tiene que realizar se analiza desde dichos ángulos, para asegurar un
  sistema de software determinista (_not buggy_), reusable, en donde el costo
  del cambio sea el menor posible.

## Grady Booch: aumentar los niveles de abstracción

Recomiendo escuchar el show
[_The Pragmatic Engineer_](https://podcasts.apple.com/ar/podcast/the-pragmatic-engineer/id1769051199),
de [Gergely Orosz](https://www.linkedin.com/in/gergelyorosz/). Gergely trabajó
gran parte de su carrera como Mobile Software Engineer en empresas de renombre
como Uber, Skype y Skyscanner. Escribió algunos libros, entre ellos
[_Mobile apps at scale: 39 engineering challenges_](https://www.mobileatscale.com/)
(recuerdo varias veces citado por los Principal Engineers en Venmo) y
[*The Software Engineer’s Guidebook](https://www.engguidebook.com/)* (hace poco
me llegó la versión papel que está en mi lista de libros por leer).

En diciembre del año pasado entrevistó a Grady Booch, el creador del lenguaje
UML. Actualmente se desempeña como Chief Scientist of Software Engineering en
IBM, liderando investigaciones relacionadas al campo de la IA en el largo plazo
(_“I was a person who worried about the next five to ten years, not the next
quarter”_).

El título del episodio es prometedor:
[Software architecture with Grady Booch](https://podcasts.apple.com/ar/podcast/the-pragmatic-engineer/id1769051199?i=1000679233993).
Una hora y media plagada de relatos sobre la evolución de la industria, el
acenso y caída del uso de UML en las empresas, anécdotas de conversaciones con
otros referentes técnicos, CEOs, y que termina con interesantes reflexiones
sobre el la actualidad: cuál es el rol de los ingenieros de software hoy, qué
cambió, qué desafíos actuales son comparables con desafíos pasados que la
industria ya superó, cuál es la implicancia de los LLMs y la inteligencia
artificial en nuestro día a día, un par de proyecciones a futuro… El peso de la
experiencia de alguien que _las pasó todas_ es evidente. Tiene la capacidad de
usar la historia como factor de comparación con el presente.

La reflexión más poderosa de toda la conversación es, coincido con la edición
del autor del show, la que se usa para darle inicio al episodio:

> _Pero toda la historia de la ingeniería de software se caracteriza por un
> creciente nivel de abstracción. Así que lo que vemos aquí es el auge de otro
> nivel de abstracción, que nos brinda marcos de trabajo extraordinariamente
> potentes a partir de los cuales puedo construir sistemas. Como mencioné, las
> decisiones arquitectónicas que eran cruciales para nosotros en aquel entonces
> ahora se plasman en ellos. Ahora, la decisión se convierte en: ¿qué servicio
> en la nube uso? ¿Qué sistema de mensajería uso? ¿Qué plataforma uso? Esta
> decisión conlleva muchas decisiones económicas, no solo decisiones de
> software. Así que creo que el rol del arquitecto ha cambiado, porque ahora me
> enfrento a problemas sistémicos, no solo a problemas de software._

Poniéndolo en el contexto de la conversación, Booch afirma esto luego de hablar
sobre UML y la razón por la cual su uso se hizo cada vez menos común a lo largo
del tiempo. Antes, UML tenia sentido porque había que crear sistemas _from
scratch_, diseñarlos, definir sus arquitecturas. Ahora, con el advenimiento de
sistemas sobre sistemas, abstracciones sobre abstracciones, el trabajo de un
ingeniero de software no consiste tanto en diseñar todo desde cero, sino de
integrar y orquestar distintos _building blocks, servicios_ o _frameworks_ que
sirven para lograr una solución final. Ejemplo simple: una _serverless_ mobile
app que se apalanca en Firebase o Supabase para abstraer lo más posible el
desarrollo de un _backend_ específico, para concentrar los esfuerzos en el
cliente, es decir, la app en sí. Muchos _solopeneurs_ utilizan esta estrategia
para publicar productos en una cantidad de tiempo muy reducida.

Para ilustrar la importancia de esta mutación en el campo de la ingeniería de
software, surge un nuevo rol: el _Solutions Architect._ Es decir, el encargado
de encontrar la forma más eficiente de integrar estos sistemas independientes.
El término _eficiente_ apunta a dos factores: el tecnológico (escalabilidad,
estabilidad, flexibilidad, etc.) y el económico (la combinación de sistemas que
mejor trabajo haga y menor costo tenga).

## Marc Anderssen: IA para programar

Otra conversación que puede arrojar leña en esta polémica es la de Lex Fridman
con Marc Andreessen (link
[aquí](https://podcasts.apple.com/ar/podcast/lex-fridman-podcast/id1434243584?i=1000685537975)).
En particular [este fragmento](https://www.youtube.com/watch?v=2ZpJXHiPwtQ), en
el cual el empresario tecnológico admite que hay preguntas abiertas sobre si la
IA logrará mejorar su performance en tareas no estructuradas tales como el
entendimiento de la filosofía o la escritura creativa, pero que
_definitivamente_ va a haber un progreso en el área del desarrollo de software.
La razón: al ser una tarea estructurada y con objetivos claros (un programa
produce resultados correctos o incorrectos, la ambigüedad es nula o baja), es
fácil medir el factor de éxito o fracaso y aprender en consecuencia.

Entonces, la expectativa a futuro debería ser esperar mejores y mejores modelos
que nos faciliten tareas de desarrollo y aumenten exponencialmente nuestra
productividad. Incluso menciona el ejemplo de _glue code_, es decir, código cuyo
objetivo es integrar una determinada herramienta o servicio en nuestro sistema
(meter Stripe en nuestra web para soportar pagos). Este fenómeno está generando
un nuevo _layer_ de abstracción en la pila de _layers_ de abstracción con los
que lidiamos día a día. Querés aprender React e integrarlo en la página web de
tu blog? Quizás conectando un agente de AI a tu proyecto (Cursor) y teniendo una
conversación en lenguaje natural con éste podrías lograr el objetivo, en vez de
dirigirte a la documentación de la librería y aprenderlo leyéndola, probando
_demo projects_ llenos de `console.log`s para ver cómo y cuándo se actualizan
los estados de un componente, etc.

## Balance

Volvamos a Terry, _the contrarian_: para él, _reinventar la rueda_ (cuántas
veces he escuchado la frase “_Don’t reinvent the wheel!”_ como junior dev!,
cuántas veces la he recitado como consejo a otros junior devs años más tarde!)
no era en absoluto un problema. Al contrario. En tan solo diez años, creó un
sistema operativo completo, un lenguaje de programación influenciado por C, el
compilador que lo interpreta y traduce a lenguaje de máquina, librería de
gráficos, aplicaciones de lo más variadas sobre el SO tales como juegos, _music
studios_, etc. En _The Digital Human_, el podcast de la BBC mencionado más abajo
en la sección de recursos, podemos escuchar los dichos de uno de los seguidores
de Terry al momento de su muerte, con la intención de remarcar la importancia de
su legado técnico: _“para llevarlo a términos mundanos, una sola persona puede
construir una casa, pero esto es… como si una sola persona haya construido un
rascacielos”_.

El caso de Terry representa un extremo inalcanzable para el resto de los
mortales, es obvio. Sin embargo, analizar ese extremo y compararlo con el otro
posible hacia la dirección opuesta, al que siento que nos estamos acercando cada
vez más, nos da una perspectiva interesante para entender en qué punto del
segmento queremos estar parados. Para ser honesto, no recuerdo con placer los
años anteriores en los cuales necesitaba abrir 25 pestañas con preguntas y
respuestas de StackOverflow o leer varios _How to_ articles para implementar una
tarea sencilla. Tampoco considero que tengamos que aprender _todo_ sobre _todo_:
ciertos niveles de abstracción son necesarios porque de lo contrario es
imposible avanzar. No abogo por volver al lenguaje de máquina. Pero, en
paralelo, me da la sensación que cierto “dolor” o fricción es necesario en el
proceso de aprendizaje, para considerarlo como tal, para _**valorarlo**_ como
tal. Entender qué está ocurriendo debajo de esos _layers_ y _layers_ de
abstracción, los cuales en infinidad de casos son cajas negras. Una especie de
límite que se dibuje entre lo “fácil” y lo “difícil”, lo que necesita esfuerzo.
El costo del conocimiento tendiendo a cero desdibuja esa línea con agresividad.

En otra línea más pragmática, abogar por el conocimiento sobre algunos de dichos
niveles de abstracción nos da la _libertad_ de poder elegir. Libertad: palabra
clave aquí. Antes de tomar por verdad absoluta el hecho de importar un
determinado módulo tipo caja negra para resolver X necesidad, podemos cuestionar
la decisión: indagar sobre la complejidad del mismo, si es _open source_, leer
algo de su código fuente, interpretar la API, analizar en cuánto aumenta el
tamaño de nuestra app, barajar la remota posibilidad de construir algo mucho más
simple pero que solucione nuestro problema puntual. No se trata de ir en contra
de la tendencia, sino de tomar decisiones más informadas y menos frenéticas: la
falta de comprensión de una herramienta suele ser el primer paso hacia una
dependencia silenciosa.
