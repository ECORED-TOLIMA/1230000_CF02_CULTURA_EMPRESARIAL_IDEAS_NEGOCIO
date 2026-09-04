<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mejoramiento de procesos productivos

    //- La pestaña de 25x8 en (185,439) marca la caja crema como `.cajon`; la foto de 292x372
    //- va a la derecha de los tres bloques.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t3/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 En las empresas colombianas de pequeña escala, el proceso productivo es donde se acumulan los costos que erosionan el margen, los tiempos que irritan al cliente y las fallas de calidad que obligan a rehacer el trabajo. Un problema que se enuncia como falta de ventas suele revelarse, al examinarlo, como un plazo de entrega que la competencia cumple y la empresa no.
        .cajon.color-1.p-4.mt-4(data-aos="fade-right")
          p.mb-0 Proponer una idea de proyecto empresarial exige partir de los problemas tecnológicos que afectan al sistema productivo, y no de una intuición sobre lo que podría venderse. Esa exigencia fija el alcance del tema: la propuesta se construye sobre un diagnóstico, lo que obliga a examinar la operación antes que la solución.
        .row.align-items-start.mt-4(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t3/ic-2.svg" style="width: 84px")
          .col
            p.mb-0 El examen del proceso empieza en el lugar donde ocurre y no en la oficina. Recorrer la operación con quienes la ejecutan, cronometrar un ciclo completo y anotar dónde se detiene el trabajo revela dificultades que ningún informe registra. Ese examen directo no supone costo alguno y suele aportar, en una sola jornada, buena parte de la información que la propuesta necesitará después.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t3/foto-1.png").w-100.h-100.object-fit-cover.r-10

    p.mt-4(data-aos="fade-right") Los cuatro contenidos que lo conforman recorren esa secuencia, del componente básico del proceso hasta el indicador que verifica la mejora:

    //- Cuatro tarjetas de 299/315/315/301 x382 con el círculo BLANCO de 98 dentro.
    .tarjeta--container.row.mt-4(data-aos="fade-up")
      .col-md.tarjeta.bg-1.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/cont-1.svg" style="width: 98px").m-auto
        h4.text-center Proceso productivo y sus componentes
        p.mb-0 Los cuatro elementos que integran cualquier proceso y la manera de representarlo para localizar dónde se pierde valor.
      .col-md.tarjeta.bg-2.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/cont-2.svg" style="width: 98px").m-auto
        h4.text-center Problemas tecnológicos en las mipymes
        p.mb-0 Las cinco dificultades más frecuentes en los sistemas productivos del país, con su señal de alerta y su salida de bajo costo.
      .col-md.tarjeta.bg-3.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/cont-3.svg" style="width: 98px").m-auto
        h4.text-center Herramientas de mejora continua
        p.mb-0 Tres enfoques de gestión que reducen el desperdicio y sostienen el cambio sin exigir grandes inversiones.
      .col-md.tarjeta.bg-5.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/cont-4.svg" style="width: 98px").m-auto
        h4.text-center Indicadores de desempeño del proceso
        p.mb-0 Las medidas que permiten comprobar si la intervención produjo el efecto esperado y en qué magnitud.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/foto-2.png").w-100.r-10
      .col-lg-8
        p(data-aos="fade-left") El hilo que une los cuatro contenidos es la medición. Una mejora que no se mide no puede defenderse ante un financiador, ni sostenerse en el tiempo cuando cambie el personal, ni replicarse en otra línea de la empresa, porque nadie sabrá con precisión qué fue lo que funcionó.
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 Medir, sin embargo, exige saber primero qué se está midiendo. Una intervención sobre una operación que nadie ha descrito suele corregir el tramo evidente y dejar intacta la causa, con el resultado de que la dificultad reaparece semanas después. De ahí que el punto de partida sea el proceso productivo y los elementos que lo componen.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Proceso productivo y sus componentes

    //- Franja #F0F49D de 919x296 a la izquierda con la caja blanca y la foto de 614x296 a la
    //- derecha: eso es `--inverso`.
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/foto-3.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un proceso productivo es la secuencia de actividades mediante las cuales unos insumos se transforman en productos o servicios con valor para un cliente. La definición aplica por igual a una planta de alimentos, a un taller de confección y a una empresa que presta servicios de mantenimiento, porque en los tres casos hay algo que entra, algo que ocurre y algo que sale.

    p.mt-4(data-aos="fade-right") Representar el proceso por escrito es el primer paso de cualquier mejora. Mientras la secuencia permanece en la cabeza de quien la ejecuta, no puede examinarse ni transferirse. Un diagrama sencillo, dibujado con el equipo que opera, suele revelar en una sola sesión pasos duplicados, esperas innecesarias y controles que nadie recuerda por qué se hacen.

    //- Caja #CDE6F6 de 1020x140 con r=10 en (289,2113) y el icono magenta de 84 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t3/ic-3.svg" style="width: 84px")
            .col
              p.mb-0 Antes de describirlo conviene fijar sus límites. Establecer con precisión dónde empieza y dónde termina evita que el análisis se extienda a toda la organización y pierda foco. Un taller de confección puede acotar el examen entre la recepción de la tela y la entrega de la prenda terminada, y dejar fuera la compra de insumos y la facturación, que constituyen procesos distintos con sus propias dificultades.

    p.mt-4(data-aos="fade-right") Describir un proceso resulta más sencillo cuando se sabe qué buscar, y toda operación, con independencia de su escala, puede desagregarse en unas pocas piezas. Todo proceso se compone de cuatro elementos:

    //- Lista #FED9FF de 1020x186 sobre la banda decorativa #F2F9FD de 1328x245.
    .banda-3.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | #[b Entradas:] materias primas, energía, información, dinero y trabajo humano que el proceso consume para operar.
              li
                i.far.fa-circle-dot
                | #[b Transformación:] las actividades que modifican las entradas y les agregan el valor por el que el cliente paga.
              li
                i.far.fa-circle-dot
                | #[b Salidas:] los productos o servicios entregados, junto con los residuos y reprocesos que el proceso también genera.
              li.mb-0
                i.far.fa-circle-dot
                | #[b Retroalimentación:] la información sobre el resultado que regresa al proceso y permite corregir la siguiente operación.

    //- La pestaña de 25x8 en (185,2696) marca el segundo bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") El cuarto elemento es el que con más frecuencia falta en las empresas de menor tamaño. Sin retroalimentación, el proceso repite el mismo error de manera indefinida, porque la información sobre la falla se queda en quien la detectó y no llega a quien puede corregirla.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Con el proceso descrito y sus componentes identificados, el paso siguiente consiste en reconocer las dificultades que lo afectan. En las unidades productivas del país esas dificultades rara vez exigen maquinaria costosa, pues aparecen en registros que se llevan a mano, en equipos que se detienen y en información que se duplica. Son los problemas tecnológicos de las mipymes, y su rasgo común es que se manifiestan en la operación diaria mucho antes de aparecer en una cifra.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ilus-1.png").w-100

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Problemas tecnológicos en las mipymes

    p.mt-4(data-aos="fade-right") La expresión problema tecnológico suele asociarse a maquinaria costosa, cuando en la práctica designa cualquier limitación de los medios técnicos con los que la empresa produce. Un cuaderno donde se registran los pedidos, una máquina que falla cada semana o dos sistemas que guardan la misma información por separado son problemas tecnológicos, y ninguno exige una inversión mayor para resolverse.

    //- Foto de 506x317 y franja #F0F49D de 1020x317 con el icono de 80 dentro del texto.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/foto-4.png')})` }")
          .bloque-texto-g__texto.p-4
            figure.mb-3
              img(src="@/assets/curso/temas/t3/ic-4.svg" style="width: 80px")
            p.mb-0 Identificarlos con precisión importa porque de esa identificación depende la propuesta. Una empresa que atribuye sus reprocesos a la falta de personal invertirá en contratar, cuando la causa podía estar en la ausencia de una ficha de control de calidad. El diagnóstico equivocado convierte una inversión razonable en un gasto que no resuelve nada.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ic-5.svg" style="width: 84px")
      .col
        p.mb-0 La identificación mejora cuando se separa el síntoma de su causa. El retraso en las entregas, las quejas repetidas o el aumento del costo son señales evidentes; la causa suele estar uno o dos pasos atrás, en un registro que no se lleva, en un equipo que se detiene o en una instrucción que cada operario interpreta a su manera. Preguntar por qué ocurre cada señal, hasta que la respuesta apunte a un medio técnico concreto, ordena el diagnóstico.

    p.mt-4(data-aos="fade-right") Los cinco problemas tecnológicos que con más frecuencia afectan a las micro, pequeñas y medianas empresas colombianas, con su señal de alerta y su salida más accesible, son los siguientes:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Brecha de adopción digital")
            .col-12
              p La empresa registra a mano información que podría capturarse y consultarse de forma automática. La señal de alerta aparece cuando nadie puede responder cuánto se vendió la semana pasada sin revisar cuadernos.
              p.mb-0 #[b Caso frecuente:] una distribuidora de Villavicencio pasa sus pedidos a una hoja de cálculo compartida y reduce los errores de despacho.
          .row(numero="2" titulo="Obsolescencia de equipos")
            .col-12
              p La maquinaria falla con frecuencia creciente y ya no alcanza las especificaciones que el cliente exige. La señal de alerta son las paradas no programadas y el aumento del gasto en reparaciones.
              p.mb-0 #[b Caso frecuente:] una panificadora de Pasto establece un plan de mantenimiento preventivo y reposición gradual en lugar de una compra única.
          .row(numero="3" titulo="Ineficiencia energética")
            .col-12
              p El consumo de energía por unidad producida supera el promedio del sector sin que la empresa lo advierta. La señal de alerta es una factura que crece más rápido que la producción.
              p.mb-0 #[b Caso frecuente:] un taller metalmecánico de Duitama reprograma sus horarios de operación y sustituye la iluminación, con lo que reduce el consumo sin detener la producción.
          .row(numero="4" titulo="Falta de integración de la información")
            .col-12
              p Los mismos datos se digitan varias veces en registros distintos que no conversan entre sí. La señal de alerta es la aparición de cifras contradictorias entre áreas.
              p.mb-0 #[b Caso frecuente:] una empresa de servicios de Pereira unifica inventario y facturación en una sola herramienta en la nube y elimina la doble digitación.
          .row(numero="5" titulo="Ausencia de sistema de calidad")
            .col-12
              p Las quejas se repiten sin que exista un registro que permita rastrear su causa. La señal de alerta son los reprocesos frecuentes que nadie documenta.
              p.mb-0 #[b Caso frecuente:] una procesadora de frutas de Lérida adopta un manual de procedimientos con fichas de control por lote y logra identificar el punto donde se origina la variación.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          p.mb-0 Los cinco problemas comparten un rasgo que conviene subrayar, y es que en todos los casos la salida propuesta es de bajo costo y de corto plazo. Antes de plantear una inversión mayor, la empresa dispone de un margen de mejora que no exige financiación externa y que, además, genera la información necesaria para sustentar después una compra de mayor envergadura.

    p.mt-4(data-aos="fade-right") Reconocido el problema, el trabajo siguiente consiste en adoptar un método que ordene la intervención. Sin ese método la mejora se agota en un esfuerzo aislado, con resultados que duran unas semanas y un regreso inadvertido a la situación anterior. A ello se dedica el numeral que viene, con tres enfoques de gestión que no dependen de la inversión sino de la constancia, y con la condición de que deben cumplir antes de aplicarse.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Herramientas de mejora continua

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/foto-5.png").w-100.r-10
      .col-lg-8
        p(data-aos="fade-left") Tres enfoques de gestión concentran hoy la práctica del mejoramiento de procesos. Nacieron en la industria japonesa de la segunda mitad del siglo XX y se difundieron después a sectores muy distintos de la automotriz, hasta llegar a talleres, restaurantes y oficinas de servicios, según documentan Womack y Jones (2003). Su rasgo común es que no dependen de la inversión: dependen de la disciplina con que se apliquen.
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t3/ic-6.svg" style="width: 84px")
          .col
            p.mb-0 Esa característica los vuelve especialmente pertinentes para el tejido empresarial colombiano. Una organización con presupuesto limitado puede aplicarlos con el personal que ya tiene y financiar, con lo que ahorra, la inversión que efectivamente necesite más adelante. El orden importa: primero se elimina lo que sobra y luego se decide qué hace falta comprar.

    //- Caja #F9FBD8 de 1228x140 en (185,4923): ocupa el ancho completo del contenido, con el
    //- icono magenta de 80 dentro.
    .bg-1.p-4.mt-4(data-aos="fade-up")
      .row.align-items-center
        .col-12.col-md-auto.mb-3.mb-md-0
          figure.mb-0
            img(src="@/assets/curso/temas/t3/ic-7.svg" style="width: 80px")
        .col
          p.mb-0 Su aplicación exige una condición previa: conocer el estado actual del proceso. Sin una medición inicial del tiempo empleado, del material desperdiciado o de los reprocesos, la organización no puede afirmar después que mejoró, y la discusión sobre los resultados se resuelve por impresiones. Tomar esa referencia ocupa unos pocos días y convierte cualquiera de los tres enfoques en una intervención verificable.

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mb-0(data-aos="fade-right") Cada uno comparte el propósito de reducir el desperdicio, pero lo aborda desde un ángulo distinto y se aplica de otra manera. Estos son sus rasgos y su forma de puesta en práctica:

    .row.justify-content-center.mt-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4 r-20")
          div(titulo="<em>Lean manufacturing</em>")
            p.mb-0 Sistema orientado a eliminar todo aquello que el cliente no está dispuesto a pagar, definido como desperdicio. Clasifica las pérdidas en categorías como la sobreproducción, la espera, el transporte innecesario y el reproceso. #[b Aplicación:] recorrer el proceso con el equipo y marcar en el diagrama cada actividad que no agrega valor al producto final.
          div(titulo="<em>Kaizen</em>")
            p.mb-0 Filosofía de mejora continua que atribuye las mejores ideas a quien opera el proceso a diario y no a un asesor externo. Avanza en ciclos cortos de planear, hacer, verificar y actuar, repetidos de manera sostenida. #[b Aplicación:] fijar una reunión mensual breve en la que el equipo proponga un cambio pequeño, lo pruebe y verifique su resultado con una cifra.
          div(titulo="Metodología de las 5S")
            p.mb-0 Secuencia de cinco fases que ordena el puesto de trabajo y sostiene ese orden en el tiempo. Suele ser el punto de partida porque produce resultados comprobables en pocos días y prepara el terreno para intervenciones mayores. #[b Aplicación:] destinar una o dos jornadas completas del equipo antes de emprender cualquier cambio en la maquinaria.

    p.mt-4(data-aos="fade-right") La elección entre uno y otro no depende del tamaño de la empresa, sino del problema que se quiera atacar primero. Conviene por eso conocerlos como piezas que encajan y no como alternativas excluyentes.

    p(data-aos="fade-right") Ordenar un puesto de trabajo parece una tarea menor, pero es la base sobre la que se sostienen las mejoras posteriores. Las cinco eses convierten ese orden en una secuencia de fases con un porqué: cada una deja el puesto en condiciones de recibir la siguiente, y quien omite alguna suele verse obligado a repetirla más adelante. La secuencia se desarrolla en el siguiente orden:

    //- Caja #CDE6F6 de 1020x366 en (290,5779) con la ilustración #FB82FF de 253x308 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | #[b Clasificar:] separar lo que se usa de lo que no, y retirar del puesto de trabajo todo aquello que no interviene en la operación corriente.
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | #[b Ordenar:] asignar un lugar definido a cada elemento que permanece, de modo que su búsqueda deje de consumir tiempo productivo.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | #[b Limpiar:] mantener el puesto en condiciones que permitan detectar de inmediato una fuga, un desajuste o una pieza fuera de lugar.
                li
                  .lista-ol--cuadro__vineta
                    span 4
                  | #[b Estandarizar:] documentar el orden alcanzado para que no dependa de quién esté de turno ni de la memoria de una sola persona.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span 5
                  | #[b Mantener la disciplina:] sostener el hábito mediante revisiones periódicas breves, que es la fase donde fracasa la mayoría de las implementaciones.
            .col-lg-4
              figure.mb-0
                img(src="@/assets/curso/temas/t3/ilus-2.png").w-100

    //- Ilustración #83C1E8 de 292x227 y caja #F9FBD8 de 916x130 a su derecha.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ilus-3.png").w-100.r-10
      .col-lg-9
        .bg-1.p-4(data-aos="fade-left")
          p.mb-0 La quinta fase explica por qué muchas empresas ordenan su planta una vez y regresan al desorden en tres meses. Las cuatro primeras se resuelven con esfuerzo concentrado; la última exige una rutina sostenida, y sin ella el trabajo invertido se pierde.
        p.mt-4.mb-0(data-aos="fade-left") En la siguiente figura se presenta el ciclo con que se sostiene esa rutina, con la acción concreta que corresponde a cada una de sus cuatro fases. Permite reconocer en qué momento interviene la medición y por qué sin ella el recorrido no puede completarse:

    .row.justify-content-center.mt-4
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span  Ciclo de mejora continua aplicado al proceso productivo
        figure.mb-0(data-aos="fade-up")
          img(src="@/assets/curso/temas/t3/figura-2.svg" alt="Ciclo de mejora continua en cuatro fases: planear, hacer, verificar y actuar, con la acción que corresponde a cada una.").w-100

    //- La pestaña de 25x8 en (186,7314) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") El ciclo convierte la mejora en un procedimiento repetible. Cada vuelta deja una cifra comparable y una decisión documentada, de modo que al cabo de un año la empresa dispone de un historial que sustenta ante cualquier financiador la capacidad de gestión de su equipo.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Para profundizar en las herramientas de mejora continua y conocer su aplicación en un caso concreto, se recomienda acceder al siguiente recurso de audio. El caso corresponde a una empresa que cree necesitar una compra cuando el problema real es un desperdicio que nadie ha medido.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t3/foto-6.png").w-100.h-100.object-fit-cover.r-10

    //- El XD nombra el recurso de audio en el texto pero no dibuja el componente: se maqueta
    //- con la `TarjetaAudio` del kit y queda anotado en los pendientes que falta la pista.
    .row.justify-content-center.mt-4
      .col-lg-10
        .p-4.bg-podcast
          TarjetaAudio.color-acento-botones.mb-0(
            texto="Herramientas de mejora continua: cuando el problema no es la máquina."
            :audio="require_src('@/assets/curso/temas/t3/podcast.mp3')"
          )

    p.mt-4(data-aos="fade-right") Revisado el recurso, resulta útil recorrer la operación de una empresa conocida e identificar los tres o cuatro puntos donde el tiempo se pierde sin que nadie lo registre. Ese ejercicio deja una pregunta abierta, la de cómo comprobar que la intervención produjo el efecto esperado. Sin esa comprobación la mejora queda como una impresión compartida por el equipo, insuficiente para sustentar una propuesta ante un banco o ante un evaluador de convocatoria.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Indicadores de desempeño del proceso

    //- Foto de 614x296 a la izquierda y franja #F0F49D de 919x296 en (494,7783).
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/foto-7.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un indicador de desempeño es una medida que expresa el rendimiento de un proceso frente al objetivo que la empresa se fijó. Su función no es informar, sino permitir decidir: si la cifra no cambia el curso de ninguna acción, el indicador consume tiempo sin aportar nada. Por eso una empresa pequeña rinde más con tres indicadores que revisa cada semana que con quince que nadie calcula.

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") Los indicadores más útiles en el mejoramiento de procesos se construyen con datos que la empresa ya produce: unidades fabricadas, horas trabajadas, unidades defectuosas y costos del período. No requieren un sistema de información sofisticado, sino el hábito de registrar la misma cifra con el mismo criterio y en el mismo momento.
        .bg-1.p-4(data-aos="fade-right")
          p.mb-0 Una cifra aislada dice poco. Su interpretación exige una referencia: el valor del período anterior, la meta que la organización se fijó o el nivel que el cliente exige. Sin ese punto de comparación, una eficiencia del 70 % no informa si el desempeño avanzó o retrocedió, y la cifra termina archivada sin haber orientado ninguna decisión.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ilus-4.png").w-100.r-10

    .row.mt-4
      .col-lg-9
        p.mb-0(data-aos="fade-right") La siguiente tabla reúne los cinco indicadores de uso más extendido, con su fórmula de cálculo y un ejemplo de aplicación:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Indicadores de desempeño del proceso productivo y fórmulas de cálculo
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Indicador
                th Fórmula de cálculo
                th Ejemplo de aplicación
            tbody
              tr
                td Productividad laboral
                td Unidades producidas ÷ horas trabajadas
                td 480 panes ÷ 16 horas-hombre = 30 panes por hora-hombre
              tr
                td Eficiencia del proceso
                td (Tiempo productivo ÷ tiempo total) × 100
                td 6 horas productivas de 8 disponibles = 75 % de eficiencia
              tr
                td Tasa de calidad
                td (Unidades sin defecto ÷ total producido) × 100
                td 92 unidades conformes de 100 = 92 % de calidad
              tr
                td Costo unitario
                td Costo total de producción ÷ unidades producidas
                td 3.000.000 de pesos ÷ 500 unidades = 6.000 pesos por unidad
              tr
                td Tiempo de ciclo
                td Tiempo total del proceso ÷ unidades producidas
                td 480 minutos ÷ 60 unidades = 8 minutos por unidad

    p.mt-4(data-aos="fade-right") La tabla muestra que los cinco indicadores se calculan con operaciones elementales. La dificultad no está en la fórmula, sino en la constancia del registro: una medición tomada un día y abandonada al siguiente no permite comparar, y sin comparación no hay manera de saber si la intervención funcionó.

    p(data-aos="fade-right") No toda medida disponible sirve como indicador. La decisión de adoptar uno se apoya en cuatro atributos que conviene comprobar antes de incorporarlo al seguimiento del proceso:

    //- Lista #FED9FF de 1020x186 sobre la banda decorativa #F2F9FD de 1328x245.
    .banda-3.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | #[b Pertinente:] mide algo que la empresa puede modificar con sus propias decisiones.
              li
                i.far.fa-circle-dot
                | #[b Verificable:] se calcula con un dato que queda registrado y que otra persona puede revisar.
              li
                i.far.fa-circle-dot
                | #[b Comparable:] se obtiene siempre con el mismo criterio, de modo que las cifras de distintos períodos se puedan contrastar.
              li.mb-0
                i.far.fa-circle-dot
                | #[b Oportuno:] se conoce a tiempo para corregir, no cuando el período ya cerró.

    //- La pestaña de 25x8 en (498,9311) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ilus-5.png").w-100
      .col-lg-9
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 Cuando un indicador incumple cualquiera de las cuatro condiciones, genera una falsa sensación de control. Se calcula, se reporta y no cambia ninguna decisión, con lo que ocupa el lugar de la medida que sí habría servido para corregir a tiempo.
        p.mt-4.mb-0(data-aos="fade-left") Diagnosticado el proceso, intervenido y medido, la empresa dispone de los insumos que la propuesta necesita. Falta el paso que convierte ese trabajo en un proyecto, que consiste en escribirlo de manera que otra persona pueda evaluarlo sin conocer la organización. El tema siguiente desarrolla esa construcción completa, desde los componentes del documento hasta el momento en que la iniciativa se expone ante quienes deben respaldarla.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
