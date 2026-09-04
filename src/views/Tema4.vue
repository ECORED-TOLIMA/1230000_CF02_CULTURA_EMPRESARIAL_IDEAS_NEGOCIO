<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Propuesta de innovación

    //- Franja #F0F49D de 919x296 a la izquierda con la caja blanca y la foto de 614x296 a la
    //- derecha: eso es `--inverso`.
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una idea de innovación solo se convierte en proyecto cuando se escribe. El documento obliga a precisar el problema, a cuantificar la solución, a establecer plazos y a nombrar responsables, cuatro exigencias que la conversación informal permite eludir. Lo que en la cabeza parecía resuelto muestra sus inconsistencias en cuanto hay que ponerlo en una página destinada a otra persona.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-1.svg" style="width: 84px")
      .col
        p.mb-0 A esa función interna se suma una externa: el documento es el instrumento con el que la organización solicita recursos, convoca aliados y compromete a su propio equipo. Un evaluador de convocatoria, un banco o un socio potencial no conocen la empresa; conocen lo que la propuesta dice de ella, y deciden a partir de la coherencia entre el problema planteado y la solución ofrecida.

    //- La pestaña de 25x8 en (185,756) marca este bloque como `.cajon`; la ilustración #FB82FF
    //- de 292x217 va a su derecha.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 La redacción de la propuesta rara vez se resuelve en un solo intento. Suele avanzar por versiones: una primera que ordena las ideas, una segunda que incorpora las cifras verificadas y una tercera que ajusta la extensión y el lenguaje al destinatario. Someter cada versión al criterio de alguien ajeno al proyecto revela los vacíos que quien la escribió ya no distingue, porque conoce de antemano lo que quiso decir.
        p.mt-4.mb-0(data-aos="fade-right") Este tema desarrolla la construcción completa de esa propuesta, desde su estructura hasta el momento en que se expone ante quien debe respaldarla:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-1.png").w-100

    //- Lista #FED9FF de 1020x391 sobre la banda decorativa #F2F9FD de 1328x377.
    .banda-4.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | #[b Estructura de la propuesta de innovación:] los componentes que debe contener el documento y el orden en que conviene redactarlos para que el conjunto resulte coherente.
              li
                i.far.fa-circle-dot
                | #[b Lienzo del modelo de negocio:] la herramienta que resume en una sola página cómo la organización crea, entrega y captura valor con la solución propuesta.
              li
                i.far.fa-circle-dot
                | #[b Propuesta de valor diferenciada:] la manera de enunciar por qué el cliente debe preferir esta solución y no las que ya existen en el mercado.
              li
                i.far.fa-circle-dot
                | #[b Instrumentos de apoyo y financiación:] las fuentes disponibles en el país, sus requisitos de acceso y el tipo de proyecto al que se ajusta cada una.
              li.mb-0
                i.far.fa-circle-dot
                | #[b Presentación del proyecto ante audiencias:] cómo se expone la propuesta en distintos formatos y qué examinan quienes deciden sobre ella.

    p.mt-4(data-aos="fade-right") Los cinco contenidos siguen el mismo orden en que se construye un proyecto real, pues primero se estructura, luego se modela, después se argumenta el valor, enseguida se busca la fuente y, por último, se sustenta ante quien decide. Alterar ese orden suele producir propuestas que describen bien la solución, pero no explican para quién es.

    p(data-aos="fade-right") El diagnóstico del proceso, la alternativa elegida y sus indicadores ya existen. Ordenar ese material antes de escribir define la forma que tomará el documento y el lugar de cada parte.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Estructura de la propuesta de innovación

    p.mt-4(data-aos="fade-right") La propuesta de innovación es el documento con el que la organización somete su iniciativa al criterio de un tercero. Su extensión varía según el destinatario, pero su lógica interna se mantiene: un problema bien delimitado, una respuesta proporcional a ese problema y una estimación honesta de lo que la respuesta cuesta.

    //- Foto de 292x250 en (185,1879) y caja #FED9FF de 916x250 a su derecha, con el icono
    //- magenta de 84 dentro.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/foto-2.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-3.p-4.h-100(data-aos="fade-left")
          figure.mb-3
            img(src="@/assets/curso/temas/t4/ic-2.svg" style="width: 84px")
          p.mb-0 La proporción entre las partes es lo primero que se pierde. El error más común en las propuestas que se presentan a convocatorias públicas no es la falta de información, sino ese desequilibrio: documentos que dedican seis páginas a la solución y tres líneas al mercado revelan que la iniciativa nació del entusiasmo por la idea y no del reconocimiento de una necesidad.

    p.mt-4(data-aos="fade-right") La extensión no se decide al azar. Una convocatoria pública fija el número de páginas en sus términos de referencia; un banco atiende sobre todo a la proyección financiera y a las garantías; un aliado potencial se detiene en el mercado y en el equipo que ejecutará la iniciativa. El contenido es el mismo en los tres casos, pero el peso de cada parte se ajusta a quien va a decidir.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-2.p-4(data-aos="fade-right")
          p.mb-0 La estructura tampoco es una exigencia formal impuesta desde fuera. Responde al orden en que un tercero necesita entender la iniciativa, pues nadie valora una solución antes de conocer el problema que atiende, ni un presupuesto antes de saber qué se produce y para quién. Por eso los formatos que piden unos y otros coinciden en los mismos apartados, y difieren sobre todo en la extensión que conceden a cada uno.
        .row.align-items-start.mt-4(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t4/ic-3.svg" style="width: 84px")
          .col
            p.mb-0 Ninguna de esas decisiones se toma al final. La corrección empieza con dos comprobaciones previas a la redacción: que la iniciativa concuerde con lo que la organización ya decidió ser, y que el documento los contenga todos, sin dejar ninguno corto. La primera toma minutos y ahorra semanas de trabajo sobre un proyecto que la propia empresa no habría respaldado.
      .col-lg-4
        figure.mb-0
          img(src="@/assets/curso/temas/t4/foto-3.png").w-100.r-10

    p.mt-4(data-aos="fade-right") Antes de la redacción, la propuesta debe contrastarse con la política empresarial de la organización, es decir, con el conjunto de decisiones, valores y reglas internas que orientan su operación:

    //- La cuarta tarjeta está pintada en el XD con el color y el icono del estado :hover
    //- (tarjeta #CDE6F6, círculo #EBE9FB). Muestreado en el PDF, no en la ficha.
    .row.no-pointer.mt-4(data-aos="fade-up")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 426px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t4/pol-1.svg")
                img.icono-hover(src="@/assets/curso/temas/t4/pol-1-hover.svg")
          p.text-center.mb-0
            b La misión que declara
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 426px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t4/pol-2.svg")
                img.icono-hover(src="@/assets/curso/temas/t4/pol-2-hover.svg")
          p.text-center.mb-0
            b Los objetivos que persigue
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 426px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t4/pol-3.svg")
                img.icono-hover(src="@/assets/curso/temas/t4/pol-3-hover.svg")
          p.text-center.mb-0
            b Los criterios con que invierte
      .col-md-6.col-lg-3
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 426px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t4/pol-4.svg")
                img.icono-hover(src="@/assets/curso/temas/t4/pol-4-hover.svg")
          p.text-center.mb-0
            b Los compromisos que mantiene vigentes

    p.mt-4(data-aos="fade-right") Los cuatro elementos funcionan como un filtro previo, no como un trámite. Una iniciativa que contradice cualquiera de ellos no prospera, por rentable que parezca, porque la propia empresa termina frenándola cuando llega el momento de asignarle recursos.

    p(data-aos="fade-right") Ese contraste no exige un procedimiento formal. Tres preguntas bastan para resolverlo antes de invertir tiempo en la redacción:

    //- Tres tarjetas #F0F49D de 396x190 con el círculo de 150 montado sobre el borde.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/preg-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  p.text-center.mb-0
                    b ¿La propuesta concuerda con la misión y los objetivos declarados?
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/preg-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  p.text-center.mb-0
                    b ¿El esfuerzo que exige cabe en la capacidad y el presupuesto disponibles?
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/preg-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  p.text-center.mb-0
                    b ¿La solución respeta los acuerdos vigentes y la reputación construida?

    p.mt-4(data-aos="fade-right") Una respuesta negativa en cualquiera de las tres no obliga a abandonar la iniciativa, pero sí a ajustar su alcance antes de seguir adelante. Ese ajuste temprano cuesta mucho menos que rehacer el documento cuando ya se comprometieron recursos.

    p(data-aos="fade-right") Ocho apartados componen ese documento, y cada uno responde una pregunta que de todos modos habrá que contestar. Estos son, en el orden en que se presentan:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | #[b Resumen ejecutivo:] presentación breve del conjunto, con el problema, la solución, el mercado al que se dirige y el capital que requiere.
            li
              .lista-ol--cuadro__vineta
                span 2
              | #[b Identificación del problema u oportunidad:] descripción del hecho que motiva la iniciativa, con la magnitud que alcanza y la fuente de la que proviene ese dato.
            li
              .lista-ol--cuadro__vineta
                span 3
              | #[b Descripción de la solución propuesta:] explicación del cambio que introduce, de lo que lo distingue de lo ya existente y de la parte del proceso sobre la que actúa.
            li
              .lista-ol--cuadro__vineta
                span 4
              | #[b Análisis del mercado:] caracterización de quiénes comprarían, cuántos son, cuánto pagan hoy por resolver el mismo problema y qué otras empresas lo ofrecen.
            li
              .lista-ol--cuadro__vineta
                span 5
              | #[b Plan técnico y operativo:] detalle de cómo se producirá, con qué equipos e insumos, en qué instalaciones y bajo qué normas técnicas.
            li
              .lista-ol--cuadro__vineta
                span 6
              | #[b Plan organizacional:] definición del tipo de empresa, de los permisos requeridos y de la manera en que se distribuyen las responsabilidades del equipo.
            li
              .lista-ol--cuadro__vineta
                span 7
              | #[b Plan financiero:] estimación de la inversión, de los costos de operación, del punto de equilibrio y del retorno esperado, con sus supuestos declarados.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 8
              | #[b Indicadores de impacto:] medidas con las que se verificará el resultado de la propuesta, tanto en la empresa como en el territorio donde opera.

    //- Ilustración #F0F49D de 292x193 en (185,4051) y caja #F9FBD8 de 916x120 a su derecha.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-8.png").w-100
      .col-lg-9
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 El orden de los ocho componentes corresponde a la consulta, no a la redacción. Es más eficaz empezar por el mercado, porque de él dependen las cifras del plan financiero, y dejar de último el resumen ejecutivo, que solo puede escribirse cuando el resto del documento ya existe.
        p.mt-4.mb-0(data-aos="fade-left") Para orientar la elaboración de cada componente, la siguiente tabla precisa las preguntas que debe resolver y las fuentes de información disponibles en el país:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span  Componentes de la propuesta y fuentes de información
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Componente
                th Preguntas que debe resolver
                th Fuente de información
            tbody
              tr
                td Resumen ejecutivo
                td ¿Qué problema atiende? ¿Qué solución propone? ¿A qué mercado se dirige? ¿Cuánto capital requiere?
                td Los demás componentes del documento, una vez terminados
              tr
                td Identificación del problema u oportunidad
                td ¿Qué hecho la motiva? ¿Cuál es su magnitud?
                td Registros propios de la empresa, informes gremiales y estadísticas oficiales del sector
              tr
                td Descripción de la solución propuesta
                td ¿En qué consiste el cambio? ¿Sobre qué parte del proceso actúa?
                td Diagnóstico del proceso, fichas técnicas y pruebas realizadas por la empresa
              tr
                td Análisis del mercado
                td ¿Quiénes son los clientes? ¿Cuál es el tamaño del mercado?
                td Departamento Administrativo Nacional de Estadística (DANE), Registro Único Empresarial y Social (RUES), Confecámaras y encuestas propias de validación
              tr
                td Plan técnico y operativo
                td ¿Cómo se producirá? ¿Qué equipos e insumos se requieren?
                td Cotizaciones de proveedores, fichas técnicas y normas del sector
              tr
                td Plan organizacional
                td ¿Qué tipo de empresa se constituye? ¿Qué permisos se requieren? ¿Cómo se organiza el equipo?
                td Cámara de Comercio, Dirección de Impuestos y Aduanas Nacionales (DIAN) y ministerio del sector correspondiente
              tr
                td Plan financiero
                td ¿Cuánta inversión requiere? ¿Cuál es el punto de equilibrio? ¿Qué retorno se espera?
                td Cotizaciones reales, precios de mercado y proyecciones propias
              tr
                td Indicadores de impacto
                td ¿Cuántos empleos genera? ¿Cuántas personas se benefician? ¿Qué objetivos permite verificar?
                td Indicadores definidos en el diseño de la propuesta

    p.mt-4(data-aos="fade-right") La tercera columna deja una lección práctica: ninguna pregunta se responde con una opinión. Buena parte de esas fuentes son públicas y gratuitas, y el resto se encuentra dentro de la empresa, de modo que la dificultad no está en conseguir el dato sino en buscarlo. Conviene registrar, junto a cada cifra, la entidad que la produce y la fecha de consulta.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-4.svg" style="width: 84px")
      .col
        p.mb-0 Definida la estructura, resulta útil disponer de una representación que permita abarcar el negocio completo antes de redactar cada componente por separado. Escribir capítulo por capítulo tiene el riesgo de producir partes correctas que no encajan entre sí, y esa incoherencia se descubre tarde. El lienzo del modelo de negocio responde a esa necesidad con sus nueve bloques, ordenados de modo que las decisiones de uno se contrasten con las de los demás.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Lienzo del modelo de negocio

    p.mt-4(data-aos="fade-right") Esta herramienta, propuesta por Alexander Osterwalder e Yves Pigneur en 2010, organiza en nueve bloques la manera en que una organización crea, entrega y captura valor. Su ventaja frente a un documento extenso es la simultaneidad: permite comprobar en una sola página si el segmento de clientes, el canal elegido y la estructura de costos son coherentes entre sí.

    //- Foto de 292x190 en (185,5317) y caja #FED9FF de 916x190 a su derecha.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/foto-4.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-3.p-4.h-100.d-flex.align-items-center(data-aos="fade-left")
          p.mb-0 Para una propuesta de innovación, el lienzo cumple una función de verificación. Al completarlo, la organización descubre con frecuencia que la solución que ha diseñado exige un canal que no tiene, o que sus ingresos previstos no cubren los costos de la actividad clave. Detectar esa inconsistencia en una hoja resulta mucho menos costoso que descubrirla después de invertir.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-5.svg" style="width: 84px")
      .col
        p.mb-0 El lienzo no reemplaza la propuesta escrita ni el plan financiero, y conviene no confundir su alcance. Cabe en una página, se completa en una sesión de trabajo y admite correcciones sin rehacer nada, de modo que sirve para probar varias configuraciones del negocio antes de comprometer la redacción extensa. Esa condición provisional es su ventaja y, al mismo tiempo, la razón por la que ningún evaluador lo acepta como sustituto del documento.

    p.mt-4(data-aos="fade-right") Cada bloque responde una pregunta distinta sobre el negocio, y ninguno se sostiene por separado. Estos son los nueve que componen el lienzo:

    //- Lista #FED9FF de 1020x479 sobre la banda decorativa #F2F9FD de 1328x460.
    .banda-5.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | #[b Segmentos de clientes:] los grupos de personas u organizaciones a los que la propuesta se dirige, definidos por su necesidad común.
              li
                i.far.fa-circle-dot
                | #[b Propuesta de valor:] el conjunto de beneficios que resuelven el problema del cliente mejor que las opciones disponibles.
              li
                i.far.fa-circle-dot
                | #[b Canales:] los medios por los que la propuesta llega al cliente, desde el primer contacto hasta la entrega y el servicio posterior.
              li
                i.far.fa-circle-dot
                | #[b Relación con los clientes:] el tipo de vínculo que se establece con cada segmento, sea personal, automatizado o mediado por una comunidad.
              li
                i.far.fa-circle-dot
                | #[b Fuentes de ingreso:] las formas en que el cliente paga, incluidas la venta directa, la suscripción, el arrendamiento y la comisión.
              li
                i.far.fa-circle-dot
                | #[b Recursos clave:] los activos indispensables para operar ya sean físicos, humanos, financieros o de conocimiento.
              li
                i.far.fa-circle-dot
                | #[b Actividades clave:] las acciones que la organización debe realizar bien para que la propuesta de valor se cumpla.
              li
                i.far.fa-circle-dot
                | #[b Aliados clave:] los proveedores y socios que aportan lo que la organización no puede o no le conviene hacer por sí misma.
              li.mb-0
                i.far.fa-circle-dot
                | #[b Estructura de costos:] los desembolsos que genera la operación del modelo, con distinción entre los fijos y los variables.

    p.mt-4(data-aos="fade-right") Los nueve bloques no tienen el mismo peso. Un lienzo con canales bien pensados y una propuesta de valor imprecisa describe cómo se venderá algo que todavía no se sabe por qué alguien compraría.

    p(data-aos="fade-right") Con los nueve bloques identificados, queda por resolver en qué orden se completan. La secuencia más extendida avanza en cuatro pasos:

    //- Caja #CDE6F6 de 1020x182 en (290,6369) con la ilustración de 276x145 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Definir a quién se dirige la propuesta y qué valor recibe.
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | Establecer los canales y la relación con que ese valor llega hasta el cliente.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | Identificar los recursos, las actividades y los aliados que hacen posible la entrega.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span 4
                  | Estimar los costos de operar el modelo y los ingresos que produce.
            .col-lg-4
              figure.mb-0
                img(src="@/assets/curso/temas/t4/ilus-2.png").w-100

    //- Las tres opciones alternan #CDE6F6 y #F9FBD8; el radio de 10 solo lo llevan la primera
    //- por arriba y la última por abajo. La foto de 288x476 va a la derecha del conjunto.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") El orden importa porque cada paso aporta el dato que el siguiente necesita. Empezar por los costos, por ejemplo, obliga a estimar el gasto de un modelo cuyo cliente todavía no está definido, y esa cifra habrá que rehacerla.
        p(data-aos="fade-right") Completar el lienzo no depende de un programa costoso. Existen tres opciones de acceso libre o con versión gratuita, y cada una se ajusta a una forma distinta de trabajo:
        .r-10.overflow-hidden(data-aos="fade-right")
          .bg-2.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/opc-1.svg" style="width: 70px")
              .col
                p.mb-0 #[b Plantilla impresa:] el lienzo dibujado en un pliego que se fija en la pared y se completa con notas adhesivas, de manera que una idea puede pasar de un bloque a otro mientras el equipo discute. Es la opción del trabajo presencial.
          .bg-1.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/opc-2.svg" style="width: 70px")
              .col
                p.mb-0 #[b Canvanizer:] un lienzo en línea que se abre desde el navegador, sin instalar nada. Se comparte por enlace y varias personas escriben en él al mismo tiempo, de modo que sirve cuando el equipo está en ciudades distintas.
          .bg-2.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/opc-3.svg" style="width: 70px")
              .col
                p.mb-0 #[b Strategyzer:] la plataforma de los autores del modelo. Además del lienzo ofrece plantillas guiadas, que indican qué se espera en cada bloque, con una versión gratuita limitada y planes de pago para el resto de sus funciones.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/foto-5.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Cualquiera de las tres opciones rinde lo mismo si el ejercicio se hace en equipo. El valor del lienzo no está en la herramienta que lo soporta, sino en la discusión que provoca entre quienes conocen el proceso, venden el producto y manejan las cuentas.

    //- La pestaña de 25x8 en (289,7188) marca este bloque como `.cajon`.
    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 Establecido el modelo completo, vale la pena detenerse en el bloque que sostiene a todos los demás. Si el valor que la propuesta ofrece no se enuncia con precisión, el canal, el ingreso y la estructura de costos se construyen sobre un supuesto que nadie verificó. Queda por establecer cómo se redacta ese enunciado, qué información sobre el cliente exige y qué atributos permiten comprobar que quedó bien construido.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Propuesta de valor diferenciada

    //- Ilustración #FB82FF de 292x274 a la izquierda; a su derecha el icono con el párrafo y la
    //- caja #CDE6F6 de 919x160.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-3.png").w-100
      .col-lg-9
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t4/ic-6.svg" style="width: 84px")
          .col
            p.mb-0 Este enunciado responde por qué un cliente debe preferir esta solución y no otra. No describe el producto: describe el resultado que el cliente obtiene. La diferencia es sustancial, porque nadie compra un sistema de gestión de pedidos, sino la certeza de que ningún pedido se pierda.
        .bg-2.p-4.mt-4(data-aos="fade-left")
          p.mb-0 Su construcción exige conocer al cliente más allá de sus datos demográficos. Dos empresas del mismo tamaño y del mismo sector pueden tener necesidades opuestas según el momento que atraviesan, de modo que el tamaño y la actividad no bastan para decidir qué ofrecerles. Esa información no se deduce en una oficina: se obtiene con un protocolo sencillo de investigación que consiste en preguntar, acompañar y probar, dejando registro de la fuente y de la fecha de cada dato.

    p.mt-4(data-aos="fade-right") La formulación se somete a una prueba sencilla: quien la recibe por primera vez debe poder repetirla con sus propias palabras. Cuando hace falta una explicación adicional para que se entienda, la solución todavía está descrita y no formulada. Ese paso no es un asunto de redacción, porque obliga a decidir cuál de todos los beneficios posibles sostiene realmente la preferencia del cliente.

    p(data-aos="fade-right") Una propuesta de valor sólida se reconoce por cuatro atributos, que conviene comprobar sobre el enunciado ya redactado y no sobre la intención que lo inspiró:

    //- Cuatro tarjetas de 299/315/315/301 x330 con el círculo #EBE9FB de 98 dentro.
    .tarjeta--container.row.mt-4(data-aos="fade-up")
      .col-md.tarjeta.bg-1.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/atr-1.svg" style="width: 98px").m-auto
        h4.text-center Específica
        p.mb-0 Nombra el problema concreto que resuelve, sin recurrir a fórmulas generales sobre calidad o servicio.
      .col-md.tarjeta.bg-2.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/atr-2.svg" style="width: 98px").m-auto
        h4.text-center Cuantificada
        p.mb-0 Expresa el beneficio en una magnitud verificable, como tiempo ahorrado, costo reducido o error evitado.
      .col-md.tarjeta.bg-3.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/atr-3.svg" style="width: 98px").m-auto
        h4.text-center Creíble
        p.mb-0 Se sostiene en una capacidad que la organización demuestra tener, no en una promesa sin respaldo.
      .col-md.tarjeta.bg-5.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/atr-4.svg" style="width: 98px").m-auto
        h4.text-center Diferenciada
        p.mb-0 Señala en qué se aparta de lo que el cliente ya puede conseguir con las opciones existentes.

    p.mt-4(data-aos="fade-right") Los cuatro se comprueban uno por uno, ya que el efecto de omitir cada uno es distinto. Una propuesta que falla en el primero resulta vaga; en el segundo, incomprobable; en el tercero, poco confiable; y en el cuarto, prescindible, porque el cliente puede obtener lo mismo en otra parte.

    p(data-aos="fade-right") Nada de eso se resuelve con lo que la empresa tenga en su catálogo: depende de lo que se sepa del cliente. Tres aspectos concentran lo que hace falta averiguar:

    //- Tres tarjetas #F0F49D de 396x273 con el círculo de 150 montado sobre el borde.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/asp-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Tareas que intenta resolver
                  p.text-center.mb-0 Aquello que el cliente busca conseguir, sea funcional, como cumplir un pedido a tiempo, o emocional, como sentirse respaldado por su proveedor.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/asp-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Frustraciones que enfrenta
                  p.text-center.mb-0 Los obstáculos, riesgos y costos que encuentra al resolver esa tarea con los medios de los que dispone hoy.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/asp-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Beneficios que valoraría
                  p.text-center.mb-0 Los resultados que superarían su expectativa actual y por los que estaría dispuesto a pagar una diferencia.

    p.mt-4(data-aos="fade-right") El cruce entre esos tres aspectos y lo que la organización sabe hacer delimita el espacio donde la propuesta de valor tiene sentido. Fuera de ese cruce quedan las soluciones técnicamente correctas que nadie necesita y las necesidades reales que la empresa no está en condiciones de atender.

    //- Caja #FED9FF de 1020x216 en (289,8966) con la foto de 396x216 encajada a la derecha.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.overflow-hidden(data-aos="fade-up")
          .row.g-0.align-items-center
            .col-lg-7.p-4
              p.mb-0 Una propuesta de valor bien construida no pone el proyecto en marcha por sí sola: falta el dinero. Pocas iniciativas de innovación se financian por completo con recursos propios, y la que lo intenta suele avanzar más despacio de lo que su mercado permite. Conseguir apoyo externo obliga entonces a distinguir qué ofrece cada fuente disponible en el país y qué exige de la empresa que se postula.
            .col-lg-5
              figure.mb-0.h-100
                img(src="@/assets/curso/temas/t4/foto-6.png").w-100.h-100.object-fit-cover.r-10

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mb-0(data-aos="fade-right") Lo construido hasta aquí no se pierde. El documento estructurado, el lienzo diligenciado y el argumento de valor son ya lo que cada entidad pide como soporte de una solicitud.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Instrumentos de apoyo y financiación

    //- Franja #F0F49D de 919x296 a la izquierda con la caja blanca y la foto de 614x296 a la
    //- derecha: eso es `--inverso`.
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/foto-7.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 El ecosistema colombiano de financiación para proyectos de innovación reúne instrumentos de naturaleza muy distinta. Algunos entregan recursos que no se devuelven, otros facilitan el acceso al crédito y otros aportan capital a cambio de participación en la empresa. Elegir el instrumento equivocado retrasa el proyecto y, en ocasiones, compromete su viabilidad.

    p.mt-4(data-aos="fade-right") El criterio de elección no es el monto disponible, sino el ajuste entre el estado del proyecto y lo que el instrumento exige. Una iniciativa sin ventas no puede postularse a un programa que pide un año de operación comprobada, y una empresa consolidada desaprovecha su historial si busca capital semilla en lugar de crédito con tasa preferencial.

    //- Ilustración #CDE6F6 de 292x223 en (185,9929) y caja #F9FBD8 de 916x150 a su derecha.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-7.png").w-100
      .col-lg-9
        .bg-1.p-4(data-aos="fade-left")
          p.mb-0 Ningún apoyo es gratuito, aunque no haya que devolverlo. Casi todos los instrumentos piden una contrapartida, sea en recursos propios, en tiempo del equipo o en bienes que la empresa ya posee, y obligan a rendir informes durante la ejecución. Estimar ese costo antes de la postulación evita comprometerse con una carga que la operación diaria no alcanza a sostener.
        p.mt-4.mb-0(data-aos="fade-left") A la elección del instrumento se suma una condición que muchas iniciativas descubren tarde. Antes de revisar el proyecto, toda entidad verifica tres requisitos formales:

    //- Tres tarjetas #F0F49D de 396x250 con el círculo de 150 montado sobre el borde.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/req-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Registro mercantil
                  p.text-center.mb-0 La matrícula ante la cámara de comercio, renovada cada año antes del 31 de marzo.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/req-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Aportes y tributos
                  p.text-center.mb-0 La seguridad social del equipo y las declaraciones tributarias, presentadas y pagadas sin mora.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/req-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Estados financieros
                  p.text-center.mb-0 El balance y el estado de resultados del último período, firmados por el representante legal y el contador.

    p.mt-4(data-aos="fade-right") Son lo primero que se comprueba en cualquier postulación. Poner esos documentos en regla antes de que abra la convocatoria evita que un proyecto viable quede fuera por una razón administrativa.

    p(data-aos="fade-right") Seis fuentes concentran la financiación de proyectos de innovación en el país, y se diferencian en tres asuntos: el tipo de recurso que entregan, lo que piden para otorgarlo y el caso en que resultan apropiadas. La siguiente tabla las reúne para compararlas:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span  Fuentes de financiación para proyectos de innovación en Colombia
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Fuente
                th Tipo de recurso
                th Requisito principal
                th Caso en que conviene
            tbody
              tr
                td Fondo Emprender del SENA
                td Capital semilla no reembolsable
                td Plan de negocio aprobado y vínculo con el SENA
                td Iniciativas nuevas con plan formulado
              tr
                td iNNpulsa Colombia
                td Cofinanciación no reembolsable
                td Empresa constituida con operación y ventas
                td Empresas en crecimiento que escalan
              tr
                td Fondo Nacional de Garantías
                td Garantía sobre crédito bancario
                td Proyecto viable y capacidad de pago
                td Emprendedores sin activos para respaldar
              tr
                td Bancóldex
                td Crédito con tasa preferencial
                td Empresa constituida con estados financieros
                td Modernización tecnológica del proceso
              tr
                td Cajas de compensación
                td Crédito de bajo interés
                td Afiliación vigente e historial de pago
                td Emprendedores con vinculación laboral formal
              tr
                td Plataformas de financiación colectiva
                td Aportes de capital o deuda
                td Campaña de comunicación activa
                td Proyectos con comunidad de seguidores

    //- El texto rompe a 708 y la ilustración de 292 va a su derecha: el grupo mide 1020 y va
    //- centrado.
    .row.justify-content-center.mt-4
      .col-lg-7.mb-4.mb-lg-0
        p(data-aos="fade-right") La tabla sugiere una secuencia razonable. Un proyecto suele empezar con capital semilla o recursos propios, demostrar operación durante algunos meses y solo entonces acceder a cofinanciación o crédito, cuando ya dispone de las cifras que se le van a pedir.
        .bg-2.p-4(data-aos="fade-right")
          p.mb-0 Conseguir el dinero no cierra el trabajo de formulación. Casi ninguna de estas fuentes decide solo con el documento: en algún punto alguien de la empresa tiene que sustentar la iniciativa en persona, y esa sustentación se prepara aparte, con sus propias reglas. De ella depende que un proyecto bien formulado llegue a ejecutarse o quede archivado.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-4.png").w-100.r-10

    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Presentación del proyecto ante audiencias

    //- Ilustración #FB82FF de 395x205 a la izquierda de los dos párrafos.
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-5.png").w-100
      .col-lg-8
        p(data-aos="fade-left") La presentación de una propuesta ante financiadores, aliados, clientes o comunidades es una competencia distinta de la formulación. Un documento sólido mal expuesto pierde oportunidades que una idea modesta bien presentada aprovecha. La razón es simple: quien recibe la propuesta dispone de pocos minutos y decide con lo que alcanza a comprender en ese tiempo.
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t4/ic-7.svg" style="width: 84px")
          .col
            p.mb-0 La exposición no repite el documento, lo destila. Selecciona el problema, la solución y la cifra que mejor sostiene la promesa, y deja el resto para las preguntas. Una presentación que intenta cubrirlo todo termina sin transmitir nada, porque el auditorio retiene ideas, no páginas.

    //- Caja #F9FBD8 de 1228x140 en (185,11925): ancho completo del contenido, con el icono de 80.
    .bg-1.p-4.mt-4(data-aos="fade-up")
      .row.align-items-center
        .col-12.col-md-auto.mb-3.mb-md-0
          figure.mb-0
            img(src="@/assets/curso/temas/t4/ic-8.svg" style="width: 80px")
        .col
          p.mb-0 Su preparación exige ensayo y reloj. Recorrerla completa revela frases que no se sostienen al exponerlas y ajusta el contenido al plazo real, que en la mayoría de los espacios de presentación es breve. El ensayo también permite anticipar lo que preguntará quien decide y separar la información que conviene reservar para responder.

    p.mt-4(data-aos="fade-right") La estructura que mejor funciona en una exposición breve no improvisa el orden. Siete pasos, en esta secuencia, permiten que cada idea prepare la siguiente:

    //- Lista #FED9FF de 1020x370 sobre la banda decorativa #F2F9FD de 1328x342.
    .banda-6.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | #[b Problema:] se enuncia con una situación concreta y una cifra que muestre su magnitud, de modo que quien la recibe reconozca que existe.
              li
                i.far.fa-circle-dot
                | #[b Solución:] se describe en una frase qué hace la propuesta y sobre qué parte del problema actúa, sin detalle técnico.
              li
                i.far.fa-circle-dot
                | #[b Mercado:] se dimensiona a quién alcanza la propuesta, con una cifra que permita calcular el tamaño de la oportunidad.
              li
                i.far.fa-circle-dot
                | #[b Modelo de ingreso:] se explica cómo entra el dinero y en qué momento el proyecto cubre sus propios costos.
              li
                i.far.fa-circle-dot
                | #[b Equipo:] se señala qué hace competente a quienes ejecutarán la propuesta, con hechos y no con adjetivos.
              li
                i.far.fa-circle-dot
                | #[b Resultado esperado:] se presenta la cifra que la propuesta se compromete a alcanzar y el plazo en que lo hará.
              li.mb-0
                i.far.fa-circle-dot
                | #[b Solicitud:] se precisa qué se pide, sea dinero, aval, contacto o acompañamiento, y para qué se destinará.

    p.mt-4(data-aos="fade-right") Los siete pasos no se distribuyen por igual. El problema y la solución ocupan la mitad del tiempo disponible, porque si quien la recibe no comprende qué se resuelve, el resto de la información no encuentra dónde asentarse.

    p(data-aos="fade-right") Quienes evalúan proyectos de innovación recorren siempre los mismos cinco aspectos, cualquiera que sea la convocatoria:

    //- Caja #CDE6F6 de 1020x398 en (289,12683) con la ilustración #FB82FF de 279x340 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | #[b Magnitud del problema:] examinan si la necesidad que la propuesta atiende es real y suficientemente extendida como para sostener un negocio.
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | #[b Viabilidad de la solución:] verifican que lo propuesto pueda ejecutarse con la tecnología, los plazos y los recursos declarados.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | #[b Capacidad del equipo:] valoran si quienes presentan la iniciativa reúnen la experiencia y la dedicación que su ejecución exige.
                li
                  .lista-ol--cuadro__vineta
                    span 4
                  | #[b Sostenibilidad financiera:] revisan si los ingresos previstos cubren los costos y en qué momento el proyecto deja de depender del apoyo.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span 5
                  | #[b Impacto verificable:] comprueban que los resultados anunciados se puedan medir con indicadores definidos desde el inicio.
            .col-lg-4
              figure.mb-0
                img(src="@/assets/curso/temas/t4/ilus-6.png").w-100

    p.mt-4(data-aos="fade-right") Los cinco aspectos explican por qué las preguntas suelen repetirse de una convocatoria a otra. Anticiparlas y llevar la respuesta preparada, con el dato que la respalda, transmite más solidez que cualquier recurso de apoyo empleado en la exposición.

    p(data-aos="fade-right") La preparación y el envío de la presentación se apoyan en cuatro tipos de herramienta, todas con opciones sin costo:

    //- Cuatro tarjetas #F0F49D de 291x250 con el círculo de 150 montado sobre el borde.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/herr-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Formularios en línea
                  p.text-center.mb-0 Permiten validar hipótesis sobre el cliente y la propuesta con encuestas breves y de bajo costo.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/herr-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Grabadores de pantalla
                  p.text-center.mb-0 Facilitan enviar una exposición en video cuando no es posible una reunión presencial.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/herr-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Editores gráficos en línea
                  p.text-center.mb-0 Apoyan la elaboración de la presentación y de los materiales que la acompañan.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t4/herr-4.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Mensajería empresarial
                  p.text-center.mb-0 Sostiene el contacto posterior con clientes y aliados y documenta los acuerdos alcanzados.

    p.mt-4(data-aos="fade-right") Las cuatro herramientas cumplen una función auxiliar. Ninguna sustituye la preparación del contenido, aunque todas amplían el alcance de una propuesta cuando el equipo no dispone de presupuesto para producir materiales.

    //- Foto de 506x376 y franja #F0F49D de 1020x376 con el icono de 80 dentro del texto.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/foto-8.png')})` }")
          .bloque-texto-g__texto.p-4
            figure.mb-3
              img(src="@/assets/curso/temas/t4/ic-9.svg" style="width: 80px")
            p.mb-0 Con la propuesta formulada, financiada y expuesta, resta examinar cómo se combinan todos estos elementos en situaciones concretas. Los conceptos desarrollados hasta aquí adquieren su sentido pleno cuando se aplican sobre una empresa con nombre, con cifras y con restricciones reales, porque allí se advierte qué parte del método resulta indispensable. El tema final reúne cuatro casos del contexto colombiano que recorren esa secuencia en sectores y regiones distintos.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
