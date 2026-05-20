const frases = [


"Hoy tu ex te escribirá",

"Te irá bien en un examen",

"Alguien está pensando en ti",

"Hoy tendrás mucha suerte",

"Mañana recibirás una gran noticia",

"Cuidado con lo que comes hoy",

"Pronto llegará dinero",

"Hoy conocerás a alguien especial",

"Tu semana será increíble",

"Una sorpresa viene en camino",

"Estas embarazada",

"Hoy un pájaro te puede popiar",

"Eres hermos@",

"Esa amiga que tienes sospecha habla a tus espaldas",

"Alguien te extraña",

"Tu ex te extraña",

"Perdiste el parcial",

"Te darán un ascenso en el trabajo",

"Puede que hoy llueva",

"Encontrarás dinero tirado en la calle",

"Tu también le gustas a esa persona",

"Haz eso que tanto temes hacer",

"Un amigo te va a traicionar",

"Debes de soltar ya",

"Hoy alguien te vio y pensó que eres muy lind@",

"Esa persona no te conviene",

"Olvidaste algo importante",

"Hoy alguien pensará en escribirte",

"Recibirás un mensaje inesperado",

"Tu suerte está cambiando",

"Hoy tendrás mucha hambre",

"Algo bueno viene para ti",

"Alguien quiere conocerte mejor",

"Tu canción favorita sonará hoy",

"Se acerca una oportunidad importante",

"Hoy será un día raro pero divertido",

"Alguien hablará bien de ti",

"Te reirás por algo inesperado",

"Hoy dormirás muchísimo",

"Algo que perdiste aparecerá",

"Un secreto será revelado",

"Tu comida hoy estará increíble",

"Alguien te stalkea en redes",

"Tu suerte en el amor aumentó",

"Hoy evitarás un problema sin darte cuenta",

"Algo pequeño te hará muy feliz",

"Tu playlist salvará tu día",

"Pronto tendrás una nueva amistad",

"Hoy debes confiar más en ti",

"Se acerca un momento importante",

"Tu intuición tiene razón",

"Hoy alguien sonreirá por ti",

"Puede que hoy no quieras levantarte",

"Tu futuro yo está orgulloso de ti",

"Hoy tendrás ganas de gastar dinero",

"Alguien piensa que eres inteligente",

"Tu celular recibirá una notificación importante",

"Un cambio positivo se aproxima",

"Hoy debes escuchar tu canción favorita",

"Alguien siente celos de ti",

"Tu esfuerzo dará resultados pronto",

"Hoy comerás algo delicioso",

"Una persona inesperada aparecerá",

"Algo gracioso te pasará hoy",

"Hoy tendrás más confianza",

"Debes tomar más agua",

"Tu día mejorará en unas horas",

"Hoy tendrás mucha energía",

"Pronto recibirás buenas noticias",

"Tu suerte está mejorando poco a poco",

"Hoy alguien notará algo especial en ti",

"Puede que hoy tengas un déjà vu",

"Alguien quiere hablar contigo",

"Hoy debes atreverte a intentar algo nuevo",

"Tu próximo mes será interesante",

"Algo inesperado te hará sonreír",

"Hoy podrías hacer un nuevo amigo",

"Hoy pisarás un popo de perro",

"Tu pollo tendrá más papas de lo normal",

"Hay un 87% de probabilidad de que tengas sueño",

"Un mosquito te está buscando",

"Hoy olvidarás por qué entraste a un cuarto",

"Alguien revisó tu perfil hoy",

"Hoy tendrás suerte si sonríes más",

"Tu día cambiará después de las 3 PM",

"Algo inesperado aparecerá en tu celular",

"Hoy alguien dirá tu nombre en un chisme",

"Puede que hoy tengas mucha flojera",

"Una conversación cambiará tu humor",

"Tu café hoy sabrá mejor",

"Hoy tendrás una idea brillante",

"Alguien está esperando un mensaje tuyo",

"Puede que hoy te encuentres dinero",

"Hoy evitarás una vergüenza",

"Algo que deseas está más cerca",

"Hoy tendrás una pequeña victoria",

"Una persona pensará en ti antes de dormir",

"Hoy alguien intentará llamar tu atención",

"alguien te está observando",

"Hoy tendrás un momento de mucha paz",

"Algo curioso ocurrirá esta noche"



];

function mostrarFrase(){

    const random = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").innerText = frases[random];

}