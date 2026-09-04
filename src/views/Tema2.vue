<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Alternativas de solución y toma de decisiones

    //- Foto de 292x287 (col-3) y, a la derecha, el icono con su párrafo y la caja #CDE6F6 de
    //- 919x142 en (497,468).
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-1.png").w-100.r-10
      .col-lg-9
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 Ante un mismo problema empresarial casi siempre existe más de una respuesta posible. Un margen que se estrecha puede enfrentarse subiendo el precio, reduciendo el costo de producción, cambiando de proveedor o abandonando la línea menos rentable. Las cuatro salidas son legítimas y conducen a resultados distintos, de modo que la calidad de la decisión depende de cuántas opciones se consideraron y con qué criterios se compararon.
        .bg-2.p-4.mt-4(data-aos="fade-left")
          p.mb-0 El error más frecuente no consiste en elegir mal, sino en elegir sin haber generado alternativas suficientes. Quien evalúa una sola opción no decide: confirma lo que ya había resuelto. Por eso el análisis de alternativas separa dos momentos que la práctica tiende a mezclar, el de imaginar caminos posibles y el de valorarlos con reglas explícitas.

    p.mt-4(data-aos="fade-right") El método que se expone no exige herramientas costosas ni personal especializado. Requiere, eso sí, que la decisión se tome con un procedimiento acordado de antemano y con la participación de quienes conocen la operación, porque son ellos quienes advierten las restricciones que el análisis de escritorio pasa por alto. En una empresa de pequeña escala ese procedimiento cabe en una reunión y en una hoja de cálculo.

    p(data-aos="fade-right") Este tema desarrolla ese método completo, desde la generación de opciones hasta la conclusión que las sustenta:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Generación de alternativas empresariales")
            .col-12
              p.mb-0 Qué condiciones debe cumplir un conjunto de opciones y qué técnicas ayudan a ampliarlo antes de emitir cualquier juicio de valor sobre ellas. Se aplica cuando el equipo llega a la reunión con una sola propuesta sobre la mesa y necesita abrir el abanico antes de comprometer los recursos disponibles.
          .row(numero="2" titulo="Matriz de ponderación de alternativas")
            .col-12
              p.mb-0 La herramienta con que se comparan las opciones: los criterios que importan, el peso de cada uno y la calificación que ordena las alternativas dejando constancia de las razones.
          .row(numero="3" titulo="Criterios cuantitativos y cualitativos")
            .col-12
              p.mb-0 Las dos familias de criterios, la forma de valorar cada una y los siete factores que concentran la mayor parte de las decisiones de innovación.
          .row(numero="4" titulo="Sesgos que distorsionan la decisión")
            .col-12
              p.mb-0 Los atajos mentales que desvían el juicio sin que quien decide lo advierta, y las prácticas que los contrarrestan sin exigir recursos adicionales.
          .row(numero="5" titulo="Conclusión fundamentada")
            .col-12
              p.mb-0 Cómo se convierte el puntaje en un argumento que otros puedan revisar, con la recomendación, sus razones, sus limitaciones y las condiciones que obligarían a reconsiderarla.

    //- Caja #FED9FF de 708x170 en (289,1192) y la ilustración de 292x170 a su derecha.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .bg-3.p-4(data-aos="fade-right")
          p.mb-0 Los cinco contenidos se encadenan, de modo que cada uno prepara el terreno del siguiente. Las opciones alimentan la matriz, los criterios explican el puntaje, el control de los sesgos protege la calificación y la conclusión deja constancia del razonamiento. Omitir cualquiera debilita todo lo que viene después.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ilus-1.png").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mb-0(data-aos="fade-right") El punto de partida es el momento que suele omitirse, el de abrir el abanico de opciones antes de cerrarlo. La calidad de una decisión depende menos del cálculo final que de la variedad de caminos que llegaron a compararse, porque ninguna herramienta puede elegir una alternativa que nunca se formuló. El numeral siguiente precisa qué condiciones cumple un conjunto de opciones bien construido y qué técnicas ayudan a ampliarlo con recursos limitados.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Generación de alternativas empresariales

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-2.png").w-100.r-10
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 Una alternativa de solución empresarial es cada una de las opciones que una organización identifica para responder a un problema o para aprovechar una oportunidad. Su valor no reside en la originalidad, sino en que represente un camino realmente distinto: dos alternativas que difieren en un detalle operativo son, en la práctica, la misma decisión enunciada dos veces.
        p.mt-4.mb-0(data-aos="fade-left") Un conjunto de alternativas bien construido cumple dos condiciones, y cada una falla de una manera distinta. Conviene revisarlas antes de calificar, porque si las opciones que entran a la comparación se repiten, o si falta alguna importante, ningún cálculo posterior corrige ese error:

    //- Dos bandas de 1020x110 que alternan #CDE6F6 y #F9FBD8: el radio de 10 solo lo llevan la
    //- primera por arriba y la segunda por abajo, así que se recortan desde el contenedor.
    .row.justify-content-center.mt-4
      .col-lg-10
        .r-10.overflow-hidden(data-aos="fade-up")
          .bg-2.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t2/cnd-1.svg" style="width: 70px")
              .col
                p.mb-1
                  b 1. Las opciones se excluyen entre sí
                p.mb-0 Cuando dos alternativas resultan ser la misma, el puntaje se reparte entre ellas y ninguna refleja su valor real.
          .bg-1.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t2/cnd-2.svg" style="width: 70px")
              .col
                p.mb-1
                  b 2. Las opciones cubren el espacio de respuestas
                p.mb-0 Cuando una salida evidente queda fuera del análisis, la mejor solución nunca entra a competir.

    p.mt-4(data-aos="fade-right") La cantidad de opciones también influye en la calidad del resultado. Trabajar con tres o cuatro alternativas suele bastar para que la comparación aporte algo, mientras que reducir el ejercicio a dos tiende a convertir el análisis en la justificación de una preferencia previa. Reunir ese conjunto exige apartar por un momento el juicio sobre la viabilidad de cada opción, que corresponde a la etapa siguiente.

    p(data-aos="fade-right") Para ampliar el conjunto antes de evaluarlo, la práctica empresarial recurre a cinco técnicas de generación creativa que pueden aplicarse con recursos muy limitados:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Lluvia de ideas:] se recogen todas las propuestas del equipo sin descartar ninguna durante la sesión.
            li
              i.far.fa-circle-dot
              | #[b Analogía sectorial:] se examina cómo resolvió un problema equivalente una empresa de otro sector.
            li
              i.far.fa-circle-dot
              | #[b Consulta al cliente:] se pregunta directamente a quien compra qué cambio valoraría y por cuál pagaría.
            li
              i.far.fa-circle-dot
              | #[b Referenciación competitiva:] se comparan procesos y precios con los de empresas semejantes del territorio.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Inversión del problema:] se plantea qué haría falta para empeorarlo y se invierte cada respuesta.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-1.r-10.p-4(data-aos="fade-right")
          p.mb-0 Las cinco técnicas comparten una regla de aplicación, y es que durante la generación no se evalúa. Mezclar ambos momentos lleva a descartar de forma prematura ideas creativas que, examinadas con calma, resultaban viables, y suele favorecer la alternativa que alguien ya defendía antes de iniciar la sesión. De la amplitud de ese conjunto depende que la propuesta final aporte al fortalecimiento de la empresa y no se limite a repetir lo que ya se hacía.
        p.mt-4.mb-0(data-aos="fade-right") Reunido el conjunto de opciones, el trabajo cambia de naturaleza. Proponer alternativas permitía imaginar con libertad, mientras que compararlas exige un procedimiento igual para todas y conocido por todo el equipo. Sin él, la comparación se vuelve una suma de impresiones que nadie podrá reconstruir después. De ahí que se recurra a la matriz de ponderación de alternativas, que fija por adelantado con qué se va a juzgar cada opción.
      .col-lg-4
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-3.png").w-100.r-10

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Matriz de ponderación de alternativas

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") La matriz de ponderación es la herramienta más difundida para comparar alternativas empresariales. Su lógica es sencilla: se definen los criterios que importan, se asigna a cada uno un peso según su relevancia, se califica cada alternativa en cada criterio y se suman los productos. El resultado es un puntaje que ordena las opciones y, sobre todo, deja constancia de las razones que produjeron ese orden.
        //- Caja #CDE6F6 de 916x240 con r=10 en (185,3391) y el icono magenta de 84 encima.
        .bg-2.r-10.p-4(data-aos="fade-right")
          figure.mb-3
            img(src="@/assets/curso/temas/t2/ic-2.svg" style="width: 84px")
          p.mb-0 Ese registro escrito es, en realidad, su mayor aporte. Dos socios que discuten sobre cuál alternativa conviene, suelen estar discrepando, sin saberlo, sobre el peso que cada uno le da a la rentabilidad frente al riesgo. La matriz obliga a poner ese desacuerdo sobre la mesa antes de que se vuelva un conflicto personal.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-4.png").w-100

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ic-3.svg" style="width: 84px")
      .col
        p.mb-0 Con todo, la herramienta tiene un alcance definido. Ordena opciones comparables entre sí, pero no reemplaza la información que falta: si las calificaciones se asignan sin datos, el resultado hereda esa debilidad con apariencia de cálculo. Por esa razón su elaboración se apoya en cotizaciones, en registros de producción y en consultas al cliente, y no en la impresión de quien completa la tabla.

    p.mt-4(data-aos="fade-right") La construcción de la matriz sigue seis pasos, y el orden entre ellos no es indiferente. Cada uno produce el insumo que el siguiente necesita, de manera que alterar la secuencia obliga a rehacer el trabajo desde el punto en que se rompió.

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Definir los criterios")
            .col-12
              p.mb-0 Se identifican los factores que determinan de verdad el éxito de la decisión y se limita su número a un rango de cuatro a siete, porque una lista más extensa vuelve la comparación difícil de sostener y de explicar ante terceros.
          .row(numero="2" titulo="Asignar los pesos")
            .col-12
              p.mb-0 Se reparte entre los criterios un total de cien por ciento, de modo que el peso de cada uno quede explícito y pueda discutirse antes de calificar.
          .row(numero="3" titulo="Definir la escala")
            .col-12
              p.mb-0 Se fija el rango de calificación y el significado de cada valor, para que dos personas distintas puedan puntuar la misma alternativa y obtener un resultado equivalente.
          .row(numero="4" titulo="Calificar cada alternativa")
            .col-12
              p.mb-0 Se puntúa cada opción en cada criterio con la información disponible, dejando anotada la fuente que respalda la cifra.
          .row(numero="5" titulo="Calcular el puntaje ponderado")
            .col-12
              p.mb-0 Se multiplica cada calificación por el peso de su criterio y se suman los productos para obtener el resultado de cada alternativa.
          .row(numero="6" titulo="Revisar la sensibilidad")
            .col-12
              p.mb-0 Se comprueba qué ocurre con el orden si se modifica el peso de un criterio, porque un resultado que se invierte con un ajuste pequeño no es concluyente.

    //- La pestaña de 25x8 en (289,4310) marca este bloque como `.cajon`.
    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 Los seis pasos se apoyan unos en otros, pero el último es el que distingue un análisis serio de un ejercicio decorativo. Si al cambiar el peso de un solo criterio la alternativa ganadora se invierte, el resultado no es concluyente y conviene reunir más información antes de decidir.

    p.mt-4(data-aos="fade-right") La siguiente tabla presenta un ejemplo completo de aplicación, con tres alternativas evaluadas en seis criterios, y permite advertir cómo el peso asignado a cada criterio se traduce en el puntaje final:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Ejemplo de matriz de ponderación de alternativas
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Criterio y peso
                th Alternativa A: producto nuevo
                th Alternativa B: mejora del proceso
                th Alternativa C: nuevo modelo de negocio
            tbody
              tr
                td Rentabilidad esperada (25 %)
                td 8 × 0,25 = 2,00
                td 7 × 0,25 = 1,75
                td 9 × 0,25 = 2,25
              tr
                td Factibilidad técnica (20 %)
                td 7 × 0,20 = 1,40
                td 9 × 0,20 = 1,80
                td 6 × 0,20 = 1,20
              tr
                td Inversión requerida (20 %)
                td 6 × 0,20 = 1,20
                td 8 × 0,20 = 1,60
                td 5 × 0,20 = 1,00
              tr
                td Impacto social (15 %)
                td 7 × 0,15 = 1,05
                td 6 × 0,15 = 0,90
                td 9 × 0,15 = 1,35
              tr
                td Escalabilidad (10 %)
                td 9 × 0,10 = 0,90
                td 5 × 0,10 = 0,50
                td 8 × 0,10 = 0,80
              tr
                td Tiempo de implementación (10 %)
                td 7 × 0,10 = 0,70
                td 9 × 0,10 = 0,90
                td 6 × 0,10 = 0,60
              tr
                td #[b Puntaje ponderado total]
                td #[b 7,25]
                td #[b 7,45]
                td #[b 7,20]

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/ic-4.svg" style="width: 84px")
          .col
            p.mb-0 El ejemplo muestra por qué el puntaje no debe leerse como un veredicto. Las tres alternativas quedan separadas por menos de tres décimas, diferencia que cualquier ajuste razonable de los pesos podría invertir. En un caso así, la decisión no la resuelve la matriz: la resuelve el criterio del emprendedor sobre qué riesgo está en condiciones de asumir, con la ventaja de que ahora sabe exactamente en qué se apoya esa preferencia.
        p.mt-4.mb-0(data-aos="fade-right") Ese resultado conduce a examinar de cerca los criterios mismos, porque de su elección depende todo lo que la matriz calcula después. Un criterio mal escogido, o un peso asignado sin discusión, produce un puntaje impecable que ordena mal las opciones. Conviene entonces detenerse en cómo se eligen y en qué distingue a unos de otros, antes de volver a llenar una tabla.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ilus-2.png").w-100

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Criterios cuantitativos y cualitativos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/foto-5.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 La definición de los criterios y de sus pesos no es un acto neutral. Refleja los valores, las prioridades y las restricciones de quien decide. Un emprendedor con obligaciones financieras inmediatas pondera con más fuerza el plazo de retorno; uno que trabaja con una comunidad organizada pondera el impacto social. Ninguna de las dos posturas es incorrecta, pero ambas deben quedar declaradas.

    p.mt-4(data-aos="fade-right") Conviene además que cada criterio mida algo distinto de los demás. Cuando dos de ellos capturan la misma dimensión, por ejemplo, la inversión requerida y el plazo de retorno calculado sobre esa misma inversión, el peso de ese factor se duplica sin que nadie lo advierta y la opción que destaca allí obtiene una ventaja artificial.

    p(data-aos="fade-right") Los criterios se agrupan en dos familias, y la diferencia entre ellas no está en su importancia sino en la forma de valorarlos:

    //- Dos tarjetas de 396x230 con el círculo de 150 montado sobre el borde y, entre ellas, el
    //- conector de 188x230 que el XD rotula «se conectan».
    .row.justify-content-center.align-items-center.mt-5
      .col-10.col-md-5.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/fam-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Criterios cuantitativos
                  p.text-center.mb-0 Se expresan en cifras verificables y admiten comparación directa.
      //- El conector del XD: rect #F9FBD8 de 188x230 con r=20 y la flecha doble en el acento.
      .col-md-2.col-lg-2.mb-4.mb-md-0
        .bg-1.r-20.p-3.text-center
          p.text-center.mb-2 se conectan
          i.fas.fa-arrows-left-right.fa-lg.color-acento-contenido
      .col-10.col-md-5.col-lg-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/fam-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Criterios cualitativos
                  p.text-center.mb-0 Exigen un juicio argumentado y deciden cuando las cifras se parecen.

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") Excluir los cualitativos por difíciles de medir empobrece el análisis, porque son ellos los que explican por qué una alternativa rentable puede resultar inconveniente.
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/ic-5.svg" style="width: 84px")
          .col
            p.mb-0 Un criterio cualitativo puede calificarse sin perder rigor si se define antes qué significa cada valor de la escala. Establecer, por ejemplo, que la calificación más alta en coherencia con la política empresarial corresponde a la opción que no obliga a modificar ningún compromiso vigente convierte un juicio difuso en una regla que otra persona puede aplicar y obtener el mismo resultado.
        p.mt-4.mb-0(data-aos="fade-right") Siete criterios concentran la mayor parte de las decisiones de innovación, y cada uno responde a una preocupación distinta de la empresa. Reconocerlos por separado ayuda a elegir los pocos que el problema exige, en lugar de arrastrar una lista prestada de otra decisión:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-6.png").w-100.r-10

    //- Siete criterios de tres en tres: el XD dibuja los tres primeros y deja los cuatro últimos,
    //- con sus círculos de 128, en el pasteboard. Detrás va la banda decorativa de 1328x254.
    .banda-2.mt-4
      SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-1.svg" style="width: 128px").m-auto
          h4.text-center Rentabilidad esperada
          p.text-center.mb-0 Margen o utilidad que la alternativa genera una vez descontados los costos asociados a su puesta en marcha. Es un criterio cuantitativo y su calificación debe apoyarse en cotizaciones reales, no en porcentajes estimados de memoria.
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-2.svg" style="width: 128px").m-auto
          h4.text-center Inversión requerida
          p.text-center.mb-0 Monto de recursos propios o financiados que la opción exige antes de producir su primer ingreso. Cuanto mayor sea, más peso adquiere la pregunta por el origen del dinero y por el costo de conseguirlo.
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-3.svg" style="width: 128px").m-auto
          h4.text-center Plazo de retorno
          p.text-center.mb-0 Tiempo estimado para recuperar la inversión realizada. Resulta decisivo cuando el flujo de caja es ajustado, porque una alternativa muy rentable a cinco años puede ser inviable para quien necesita liquidez en seis meses.
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-4.svg" style="width: 128px").m-auto
          h4.text-center Factibilidad técnica
          p.text-center.mb-0 Grado en que la organización dispone hoy del conocimiento, del equipo y del personal que la alternativa demanda. Una opción atractiva que exige una competencia inexistente en el equipo traslada el riesgo a la ejecución.
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-5.svg" style="width: 128px").m-auto
          h4.text-center Coherencia con la política empresarial
          p.text-center.mb-0 Ajuste entre la opción y los objetivos, los valores y las reglas internas que la organización ya definió. Es un criterio cualitativo y suele explicar por qué una alternativa rentable termina descartada sin conflicto.
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-6.svg" style="width: 128px").m-auto
          h4.text-center Riesgo reputacional
          p.text-center.mb-0 Efecto que la decisión puede producir sobre la confianza de clientes, proveedores y comunidad. Se valora con juicio argumentado y adquiere más peso cuanto más pequeño y local sea el mercado atendido.
        .tarjeta.tarjeta--patron.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t2/crit-7.svg" style="width: 128px").m-auto
          h4.text-center Impacto social y ambiental
          p.text-center.mb-0 Beneficio o perjuicio que la alternativa genera en el territorio donde la empresa opera. Además de su valor propio, condiciona el acceso a instrumentos públicos que exigen resultados verificables en esta dimensión.

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ilus-3.png").w-100
      .col-lg-9
        p(data-aos="fade-left") Los siete criterios no suelen emplearse todos en la misma decisión. Una matriz con demasiados factores diluye los pesos y produce puntajes casi idénticos, de modo que deja de distinguir una opción de otra. Seleccionar solo los que resultan pertinentes al problema rinde más que aplicar la lista completa por considerarla más rigurosa.
        p.mb-0(data-aos="fade-left") Con los criterios elegidos y su escala definida, podría suponerse que el resultado ya está asegurado. Falta, sin embargo, considerar a quien pone las calificaciones. Las cifras las escribe una persona que ha convivido con el problema durante meses y que llega al ejercicio con una preferencia ya formada. De ahí que el análisis deba protegerse también de los desvíos propios de quien lo realiza.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Sesgos que distorsionan la decisión

    //- La pestaña de 25x8 en (185,7480) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Los estudios sobre economía del comportamiento han mostrado que las personas no deciden siempre de forma racional. Existen atajos mentales que agilizan el juicio en la vida cotidiana, pero introducen errores sistemáticos cuando se aplican a decisiones empresariales de consecuencias duraderas. Conocerlos no los elimina, aunque sí permite anticiparlos y contrarrestarlos.
        p.mt-4.mb-0(data-aos="fade-right") En el emprendimiento estos desvíos tienen un costo que puede medirse en dinero y en tiempo perdido. No se manifiestan como errores evidentes, sino como decisiones que en su momento parecieron razonables y que solo al revisarlas se revelan equivocadas. Tres preguntas frecuentes en la práctica empresarial encuentran aquí su explicación:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-7.png").w-100.r-10

    //- Tres tarjetas #F0F49D de 396x190 con el círculo #83C1E8 de 150 montado sobre el borde.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/preg-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  p.text-center.mb-0
                    b ¿Por qué una empresa insiste en una línea que no vende?
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/preg-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  p.text-center.mb-0
                    b ¿Por qué se sobreestima la demanda de un producto propio?
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t2/preg-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  p.text-center.mb-0
                    b ¿Por qué el precio de la primera cotización condiciona toda la negociación posterior?

    p.mt-4(data-aos="fade-right") Las tres preguntas comparten una misma respuesta, y no está en la falta de información sino en la manera de procesarla. Quien decide dispone de los datos, pero los interpreta a favor de aquello que ya prefería.

    //- Foto de 292x190 en (289,8140) y caja #FED9FF de 708x190 a su derecha: el grupo mide 1020.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-8.png").w-100
      .col-lg-7
        .bg-3.p-4(data-aos="fade-left")
          p.mb-0 Estos desvíos se acentúan bajo ciertas condiciones. Aparecen con más fuerza cuando la decisión se toma con prisa, cuando quien decide es también quien propuso la idea y cuando el equipo comparte una misma trayectoria y no encuentra dentro de sí un criterio distinto. Reconocer esas condiciones permite anticipar en qué momento del proyecto conviene extremar el cuidado.

    p.mt-4(data-aos="fade-right") Cinco sesgos concentran la mayor parte de esos errores. Cada uno actúa en un momento distinto del análisis, de modo que reconocerlos por separado facilita detectarlos a tiempo:

    .row.justify-content-center.mt-4
      .col-lg-10
        ImagenInfografica.color-acento-botones(data-aos="fade-up")
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/temas/t2/infografia-1.svg" alt="Los cinco sesgos más frecuentes en innovación: confirmación de lo que ya se cree, exceso de confianza, anclaje en la primera cifra, costo hundido y disponibilidad de lo reciente.").w-100
          .tarjeta.color-primario.p-3(x="30%" y="49%" numero="+")
            p.mb-0 #[b Confirmación de lo que ya se cree:] se busca y se recuerda la información que respalda la opción preferida y se descarta la que la contradice.
          .tarjeta.color-primario.p-3(x="37.5%" y="64%" numero="+")
            p.mb-0 #[b Exceso de confianza:] se sobreestima la capacidad propia y la demanda del mercado, con lo que se subestiman los plazos y los costos.
          .tarjeta.color-primario.p-3(x="51%" y="76%" numero="+")
            p.mb-0 #[b Anclaje en la primera cifra:] la primera cifra conocida condiciona todas las estimaciones posteriores, aunque carezca de fundamento.
          .tarjeta.color-primario.p-3(x="65%" y="64%" numero="+")
            p.mb-0 #[b Costo hundido:] se persiste en una decisión por lo ya invertido, en lugar de valorar lo que falta por invertir.
          .tarjeta.color-primario.p-3(x="72%" y="49%" numero="+")
            p.mb-0 #[b Disponibilidad de lo reciente:] se juzga probable aquello que se recuerda con facilidad, como un caso reciente o cercano.

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ilus-4.png").w-100
      .col-lg-9
        p(data-aos="fade-left") Aunque se manifiestan de forma diferente, todos conducen al mismo resultado. La matriz termina confirmando la preferencia que ya existía en lugar de someterla a examen, porque la calificación se ajusta sin intención deliberada hasta que la opción favorita alcanza el primer lugar. El riesgo no está en cometer alguno de ellos, sino en no advertirlo mientras ocurre.
        p.mb-0(data-aos="fade-left") Advertirlo a tiempo depende menos de la atención individual que del procedimiento. Cuatro prácticas incorporadas al trabajo que el equipo ya realiza bastan para reducir ese riesgo sin exigir recursos adicionales, y se ordenan según el momento del análisis en que intervienen:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Definir los criterios y los pesos antes de conocer las alternativas, de modo que la regla no se acomode al resultado deseado.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Asignar a un integrante del equipo la tarea explícita de argumentar en contra de la opción mejor calificada.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Contrastar las cifras propias con al menos una fuente externa, sea un proveedor, un cliente o un registro sectorial.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 4
              | Registrar por escrito el supuesto que sostiene cada calificación, de manera que pueda revisarse cuando cambien las condiciones.

    p.mt-4(data-aos="fade-right") Las cuatro prácticas comparten un mismo principio, que consiste en introducir un criterio distinto antes de cerrar la decisión. No garantizan un acierto, pero evitan que el análisis se convierta en una justificación elaborada de lo que ya estaba resuelto de antemano.

    //- Foto de 503x359 en (290,9575) y franja #F0F49D de 1020x356 con el icono de 80 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/foto-9.png')})` }")
          .bloque-texto-g__texto.p-4
            figure.mb-3
              img(src="@/assets/curso/temas/t2/ic-6.svg" style="width: 80px")
            p.mb-0 Con los criterios definidos y los desvíos controlados, resta el paso que da sentido a todo el ejercicio, que es convertir el resultado en un argumento que otros puedan revisar. Un puntaje sin explicación obliga a rehacer el análisis cada vez que alguien lo cuestiona, mientras que una conclusión escrita permite discutir un punto sin desmontar los demás. Esos elementos, y el orden en que se presentan, constituyen el último contenido del tema.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Conclusión fundamentada

    //- Franja #F0F49D de 919x281 a la izquierda con la caja blanca y la foto de 614x281 a la
    //- derecha: eso es `--inverso`.
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/foto-10.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 El producto del análisis de alternativas no es un número, sino una conclusión argumentada. Esa conclusión indica cuál opción se recomienda, expone las razones que la sostienen, reconoce sus limitaciones y señala en qué condiciones convendría revisarla. Una recomendación que se limita a nombrar la alternativa ganadora obliga a repetir el análisis completo cada vez que alguien la cuestione.

    p.mt-4(data-aos="fade-right") La diferencia entre una conclusión y una preferencia está en la posibilidad de revisarla. Cuando el documento expone el supuesto que sostiene cada calificación, un tercero puede señalar exactamente dónde discrepa y el equipo puede corregir ese punto sin desmontar todo lo demás.

    //- La pestaña de 25x8 en (497,10563) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-11.png").w-100.r-10
      .col-lg-9
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 El documento que recoge la conclusión no necesita ser extenso. Una página basta si expone con claridad la opción recomendada, los criterios que la sostienen y las circunstancias que obligarían a reconsiderarla. Su valor no está en el volumen, sino en que quede fechado y disponible para el equipo, de modo que la decisión pueda rastrearse cuando el contexto cambie.
        p.mt-4.mb-0(data-aos="fade-left") Redactar la conclusión obliga a ordenar lo que hasta ese punto estaba disperso en la matriz de calificación. No basta con señalar cuál alternativa obtuvo el mejor puntaje: hay que dejar por escrito qué la respalda, qué quedó sin verificar y en qué circunstancias dejaría de ser la mejor opción. Ese orden protege al equipo cuando el contexto cambia y evita que la discusión vuelva a empezar desde cero. Una conclusión fundamentada se construye con cuatro elementos, en este orden:

    //- Cuatro tarjetas de 299/315/315/301 x341 con el círculo #83C1E8 de 98 dentro.
    .tarjeta--container.row.mt-4(data-aos="fade-up" style="--alto-tarjeta: 341px")
      .col-md.tarjeta.bg-1.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t2/elem-1.svg" style="width: 98px").m-auto
        h4.text-center Recomendación
        p.mb-0 Enunciado directo de la alternativa seleccionada y del alcance concreto con el que se propone ejecutarla.
      .col-md.tarjeta.bg-2.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t2/elem-2.svg" style="width: 98px").m-auto
        h4.text-center Razones
        p.mb-0 Los dos o tres criterios que resultaron decisivos, con la cifra o el hecho que respalda cada uno.
      .col-md.tarjeta.bg-3.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t2/elem-3.svg" style="width: 98px").m-auto
        h4.text-center Limitaciones
        p.mb-0 Los supuestos que podrían no cumplirse y los datos que no fue posible verificar en el momento del análisis.
      .col-md.tarjeta.bg-5.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t2/elem-4.svg" style="width: 98px").m-auto
        h4.text-center Condiciones de revisión
        p.mb-0 Los hechos concretos que, de ocurrir, obligarían a reconsiderar la decisión tomada.

    .row.justify-content-center.mt-4
      .col-lg-10
        p(data-aos="fade-right") Los cuatro elementos convierten una elección en un compromiso verificable. Quien los redacta asume por escrito qué espera que ocurra y en qué momento admitirá que no ocurrió, que es justamente lo que un financiador, un socio o un evaluador necesitan para confiar en la propuesta.

        p(data-aos="fade-right") Toda decisión documentada llega tarde o temprano al lugar donde se ejecuta. Allí deja de ser un argumento y se convierte en una operación con costos, tiempos y estándares que pueden medirse.

        p.mb-0(data-aos="fade-right") Intervenir un proceso sigue un recorrido reconocible, que va de lo que hoy ocurre a lo que se pretende demostrar:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Describir el proceso tal como opera hoy: entradas, actividades, responsables y salidas.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Ubicar el punto donde se pierde tiempo, material o calidad, con una medición y no con una impresión.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Definir la intervención y el cambio concreto que introduce en la operación.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 4
              | Fijar el indicador y el momento en que se comprobará si la mejora ocurrió.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ilus-5.png").w-100
      .col-lg-8
        p(data-aos="fade-left") Los cuatro pasos casi nunca se recorren una sola vez. Una medición nueva puede mostrar que el punto crítico estaba en otro lugar, y entonces la descripción del proceso vuelve a revisarse. Lo que sostiene la mejora no es haber acertado con la intervención desde el principio, sino haber dejado registrado el estado inicial: sin esa referencia, cualquier resultado posterior queda como una afirmación sin respaldo.
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/ic-7.svg" style="width: 84px")
          .col
            p.mb-0 Recorrer esos pasos supone un conocimiento que no siempre está a la mano: reconocer de qué partes se compone un sistema productivo, nombrar con precisión la dificultad que lo afecta y disponer de una cifra que la describa. A ese trabajo se le llama mejoramiento de procesos productivos, y es donde la idea de innovación se vuelve una operación con resultados verificables.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
