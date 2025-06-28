---
title: "Terry Davis, el disidente [Parte I]"
description: "Aprendizajes extraídos de un caso verdaderamente anómalo"
publishDate: "21 June 2025"
tags: ["software", "development", "stories"]
language: "es"
translationSlug: "terry-davis-part-1"
---

<img src="/terry-davis/what-is-reality.png" alt="Qué es la realidad? No lo sé">

# Índice completo

0. Rabbit hole
1. Intento de biografía
2. Utilitarismo
3. Pararse sobre los hombros de los gigantes: efectos secundarios (próximamente)
4. Complejo vs. simple (próximamente)
5. Raro y brutalmente honesto (próximamente)
6. Crear como medicina (próximamente)
7. “Too weird to live, and too rare to die” (próximamente)
8. Recursos importantes (próximamente)

---

# Rabbit hole

El agosto pasado me fui una semana a la Patagonia con varios amigos, también
ingenieros de software remotos. Desde 2022 repetimos el ritual todos los años,
variando la ciudad de destino (Bariloche, Villa la Angostura y, esa vez, San
Martín de los Andes). El plan suele ser trabajar temprano a la mañana y luego
usar el tiempo libre para hacer _trekking_ entre las montañas y los bosques,
esquiar, comer asado, tomar vino y demás planes típicos del sur argentino.

Uno de esos días estábamos matando el tiempo en el living de la casa que
alquilamos, mirando videos en YouTube. No resulta muy difícil adivinar la clase
de contenido por los que seis desarrolladores suelen interesarse. Uno se puso a
hurgar en los videos de [_Fireship_](https://www.youtube.com/@Fireship), canal
de un programador en el que comparte tutoriales, explica _fun facts_ de la
industria, da su opinión sobre nuevas librerías, interpreta noticias de
tecnología, etc. Seleccionó uno de nombre
[_TempleOS in 100 Seconds_](https://www.youtube.com/watch?v=h7gf5M04hdg).

Lo que siguió fue extraño: un muchacho de cara alargada, mandíbulas presentes,
siempre con gorra, _stremeaba_ un juego que consistía en un grupo de gente en el
medio de un desierto corriendo en direcciones aleatorias, una versión
rudimentaria del _Paint_, un programa en apariencia destinado a crear música,
que consistía en un teclado y una partitura… todo en interfaces de usuario en 8
bits que me hicieron recordar mis primeras experiencias con las computadoras.

El narrador de _Fireship_ le daba un contexto racional a lo que parecía
irracionalidad pura: un programador americano, diagnosticado de esquizofrenia,
con un coeficiente intelectual fuera del rango normal, piensa que es un elegido
de Dios y desarrolla un sistema operativo 100% desde cero **que representa el
[Tercer Templo](https://es.wikipedia.org/wiki/Tercer_templo_de_Jerusal%C3%A9n)
profetizado en la Biblia, luego de la destrucción del
[Templo de Salomón](https://es.wikipedia.org/wiki/Templo_de_Salom%C3%B3n).
Incluye _kernel_, librería de gráficos, juegos y hasta un propio lenguaje de
programación (_Holy C_) con su respectivo compilador. Parece ser el único
ejemplo de la historia de la informática en el cual un sistema operativo es
implementado de inicio a fin por un solo desarrollador.

Ese fue mi primer encuentro con
[Terry Davis](https://en.wikipedia.org/wiki/Terry_A._Davis).

Internamente, me ocurrió lo mismo que hace más o menos diez años atrás, cuando
me topé con un [documental](https://www.youtube.com/watch?v=6xY3GlDOJtk) sobre
el
[Códice Voynich](https://elpais.com/cultura/2015/12/12/actualidad/1449925015_141355.html),
según dicen el libro más enigmático jamás escrito: esa cosa tangencial que
resiste cualquier intento de categorización, parametrización, encuadramiento. Un
sistema operativo que no se justifica por su utilidad (no creo que exista una
sola persona en el mundo que use TempleOS en su día a día) sino para continuar
una supuesta profecía bíblica. Un libro escrito en un lenguaje que no conoce ni
puede traducir nadie. Pequeñas pepitas de oro en el desierto de la repetición.

Supe al instante que tenía que hurgar más sobre Terry y _TempleOS_. Guardé el
link del vídeo y me anoté un TO DO para la vuelta del viaje:

> _[ ] terry davis + templeOS → rabbit hole_

Esta serie de posts es el resultado de haber descendido un tiempo en dicho
agujero. Un intento de compartir lo que creo su legado y relación sobre los
temas que ocupan mi cabeza de forma intermitente.

# Intento de biografía

<img src="/terry-davis/after-egypt.png" alt="AfterEgypt, uno de los juegos dentro de TempleOS">

Existe abundante material sobre Terry en internet. Es fácil pasar horas y horas
entre recortes de sus _livestreams_ en YouTube, sus posts en foros, comentarios
de seguidores y detractores, artículos y podcasts que tratan de analizarlo desde
decenas de puntos de vista distintos. El mismo _TempleOS_, público y gratuito,
es la evidencia mayor para intentar desencriptar a su creador. El común
denominador de cualquier material disponible es que es imposible dejar de
sorprenderse por cada nuevo dato.

Con la idea de hacer este artículo auto-sustentable va una pequeña, incompleta
lista cronológica sobre su vida y obra:

- Nació en el 69, séptimo hijo de ocho hermanos. Lugar: Wisconsin.
- Luego se mudó a California y Arizona.
- Se graduó de Ingeniero Eléctrico en la _Arizona State University_.
- Trabajó unos años en Ticketmaster como programador. Parece haber sido su única
  experiencia profesional.
- En el 96 comienza la fiesta: en Las Vegas, aún viviendo con sus padres,
  aparecen los primeros episodios maniáticos. Es diagnosticado como
  esquizofrénico. Recibe una pensión del gobierno por discapacidad. Según él, en
  dicha etapa recibe una “revelación” de Dios que lo lleva a abandonar su
  ateísmo y comenzar a construir el tercer templo para el Creador: _TempleOS_.
  Pasa una década persiguiendo dicho objetivo.
- Una vez terminada la obra, se dedica a la difusión. Aparece en _Reddit_ y
  _HackerNews_ con _posts_ y videos crípticos intentando popularizar el uso de
  su sistema operativo. Por muchos años fue ignorado (sus publicaciones en
  _HackerNews_ han sido deslistadas), acusado de _spam_, víctima de grupos de
  _trolls_, hasta que por alguna cuestión que no me queda clara (suficiente
  perseverancia? Aura mítica? Algún post suyo que haya hecho click en la opinión
  del colectivo online?), comenzó a amasar una gran cantidad de seguidores.
- Su enfermedad se agrava, comienza a tener peleas fuertes con sus padres.
  Algunas de ellas son inmortalizadas **en su canal. Termina en la calle
  en 2017. Su último año se la pasa como _homeless_ recorriendo ciudades de
  Estados Unidos. En varios videos se lo ve con pelo largo, desalineado,
  fumando, filosofando, a veces bailando, en plazas, estaciones de trenes,
  esquinas de ciudades. Una versión _nerd_ y más actual de Jack Kerouac en _On
  the road_: una cámara y YouTube en reemplazo al clásico bloc de notas del
  escritor trotamundo.
- Termina su viaje en una ciudad pequeña llamada The Dalles, en Oregon, en 2018.
  Se filma en la entrada de una librería del lugar, sube
  [el video](https://www.youtube.com/watch?v=oH41gGBVpkE) al canal. Unas horas
  después los medios locales informan de la muerte de un hombre de nombre
  desconocido, arrollado por un tren. Lo que siguen son miles de llamadas de sus
  fanáticos a dicho medio, intentando confirmar si ese NN era en realidad el
  prolífico desarrollador.

# Utilitarismo

<img src="/terry-davis/temple-os.png" alt="La homepage de TempleOS">

Intentando promocionar el uso de la primera versión de TempleOS (llamada
_LoseThos_), escribe Terry en [OSNews](https://www.osnews.com/):

> _LoseThos is for programming as entertainment. It empowers programmers with
> kernel privilege because it's fun. It allows full access to everything because
> it's fun. It has no bureaucracy because it's fun. It's the way it is by choice
> because it's fun. LoseThos is in no way a Windows or Linux wannabe -- that
> would be pointless._

El hecho que, como usuario, tengas acceso _a todo_, lo hace un
[sistema operativo ring 0](https://en.wikipedia.org/wiki/Protection_ring). Desde
el punto de vista de la _usabilidad_ (cualquier acción realizada puede
desencadenar graves problemas si no sos cuidadoso) y _seguridad_ (mayor
posibilidad de crear _malware_ en entornos no protegidos), no parece ser una
excelente decisión: los niveles de protección tienen una razón de ser y es,
entre otras cosas, prevenir desde el diseño posibles acciones no intencionales
por parte de los usuarios. No tenerlos es _delegar esa responsabilidad_ a ellos
y, paralelamente, _delegarles un gran poder_. Que, según Terry, es divertido.

Otro desarrollador, también usuario de OSNews, amplifica sus dichos en
[un post](https://www.osnews.com/story/23796/recreational-programming-with-losethos/)
que titula _Recreational programming with LoseThos._ Cita varias explicaciones
del autor y concluye con lo siguiente:

> _I’m glad that operating systems like LoseThos still exist, in that it shows
> that computing can still be a **hobby**; why is everybody so serious these
> days? If I want to code an OS that uses interpretive dance as the input
> method, I should be allowed to do so, companies like Apple be damned._

Es muy común en el mundo tech (y probablemente en el mundo de la ingeniería en
general) asociar _valor_ con _utilidad_: una pieza de software produce valor
solo si es útil para resolver cierta necesidad del usuario. El procesador de
textos que estoy usando para escribir este artículo es valioso porque me permite
traducir pensamientos en textos escritos que luego puedo compartir al mundo. Las
redes sociales son grandes productos porque nos conectan. Los calendarios,
porque nos organizan la rutina. Las plataformas de _streaming_, porque nos
permiten disfrutar de shows de entretenimiento. Slack, porque facilita la
comunicación laboral. Google Meet, porque nos permite organizar videollamadas a
distancia. Y así.

Por eso, tendemos a reaccionar con cierta extrañeza cuando se nos presentan
ejemplos como el de TempleOS/LoseThos. Cruje la estructura, el modelo mental en
el cual asignamos importancia a algo: el mismo autor nos está diciendo, en la
cara, sin rodeos, que la razón principal por la cual pasó años de su vida
trabajando en este sistema operativo es… divertirse. El argumento detrás de
todas las decisiones sobre arquitectura, APIs, _backwards compatibility_, etc.,
es, lisa y llanamente: _because it’s fun!_

Un ejemplo de la reticencia a esta extraña manera de pensar la creación de
software es el primer comentario que se lee en el post:

> _2010-09-12 7:58 pm boulabiar_
>
> _Why people still losing time creating new OSes that looks similar to 80’s
> ones ? I they have too much time they can help resolving problems of Linux or
> any common sub-system. Resolving issues/bugs help many millions of users,
> recreating the wheel every time is a huge time loss…_

_Perder tiempo_: todo lo que no consista en resolver necesidades concretas o
colaborar en esa tarea colectiva es perder el tiempo. La decisión correcta en
estos casos es pensar qué es lo más útil para los usuarios y ponerse al servicio
de ellos. Para qué reinventar la rueda con creaciones sin sentido, cuando nos
podemos apalancar de invenciones preexistentes?

Recuerdo la primera vez que me encontré con reflexiones alineadas con los
argumentos de Terry sobre sus decisiones técnicas a la hora de darle vida
TempleOS. Fue en otro contexto: una clase de literatura en la secundaria.
Teníamos que leer varios fragmentos que reflexionaban sobre la disciplina,
interpretarlos y comentarlos. Uno de ellos afirmaba sin lugar a dudas que la
literatura era _inútil, que no servía para nada_.

Mi primera sensación fue de enojo. Leía mucho y me molestaba que otra persona
afirme que lo que yo hacía en gran parte de mi tiempo libre no tenia ningún tipo
de utilidad práctica. Hice una lista mental de razones por las cuales
consideraba que leer ficción es útil (estimular la creatividad, mejorar el
vocabulario, habilitar la recreación de mundos ficticios a partir de símbolos,
aprender tangencialmente sobre cultura, historia, etc.) y se lo comenté a la
profesora. Ella notó mi descontento. Tuvimos un intercambio y me hizo dar cuenta
que no había entendido el punto de lo que estaba leyendo. El párrafo era una
_provocación_. Hacer cosas inútiles constituían un acto de rebeldía frente al
utilitarismo frenético y constante. A veces, perder el tiempo da respiro, es
liberador.
[Cuenta Adrián Dárgelos](https://x.com/rparrottino/status/1830776649673015319)
sobre sus hábitos de lectura:

> _Yo leo **para** perder el tiempo, porque perder el tiempo es una acción
> subversiva en un mundo donde hay que consumir y aprovecharlo._

O:

> _[Este] es un mundo donde está mal visto perder el tiempo, porque ¿qué se hace
> con el tiempo?, producir dinero. ¿Qué hacen las personas más ricas del mundo?
> Comprar tiempo. Entonces leer es una actividad anti productiva, porque no
> produce dinero._

El punto acá no es tirar todo lo que sea útil a la basura y perseguir _side
projects_ de tinte religioso. O que en la próxima reunión con tu Technical
Leader justifiques tus decisiones como desarrollador diciendo que elegiste X en
vez de Y porque X es más divertido. No.

El punto es que, por un lado, intentemos relativizar más la ecuación _útil ==
bueno, y todo lo demás queda afuera._ Existen miles de ejemplos como el de
TempleOS que probablemente no satisfagan necesidades reales de usuarios a nivel
global tal como lo hacen Windows, Linux o macOS. Pero acaso esa es la única
métrica para valuar la importancia de algo? Mi humilde opinión es que no, que
merecen reconocimiento desde otros ángulos, tales como la creatividad, la
anécdota, el mito, el pensar fuera de la caja.

Por el otro, no olvidarse de la diversión, de pasarla bien. Tengo la idea
ingenua de que en cualquier empresa o producto el hecho de pasarla bien
implementando nuevas funcionalidades es un gran diferenciador en cuanto a la
búsqueda de propósito y de la salud mental en general. Mechar momentos de
utilidad con momentos de goce. Si constantemente estamos produciendo cosas solo
por el hecho de que sean útiles, en ningún aspecto nos diferenciamos de las
máquinas.

En resumen: _acordarse de **existir**, en vez de **funcionar**_. Como ejemplo,
hacen falta solo unos minutos de lectura sobre la vida de Terry Davis para
entender que _existió_. Y se divirtió.

En el próximo post, que publicaré la próxima semana, hablaremos sobre los
efectos secundarios en el aumento agresivo de los niveles de abstracción.
