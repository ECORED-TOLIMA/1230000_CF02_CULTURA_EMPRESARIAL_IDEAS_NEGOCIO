<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Innovación y política de fomento

    //- Foto de 614x300 a la izquierda y franja #F0F49D de 919x300 en (495,316) con la caja
    //- blanca de 685x210: el orden por defecto del componente.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 La palabra innovación circula con tanta frecuencia en el lenguaje empresarial que ha terminado por designar casi cualquier cambio. En el campo de la gestión, sin embargo, tiene un significado preciso y exigente: solo hay innovación cuando una idea nueva se pone en práctica y produce un beneficio verificable para alguien. Una propuesta prometedora que permanece en el papel es una intención; una mejora aplicada cuyo efecto nadie reconoce es una rutina.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-1.svg" style="width: 84px")
      .col
        p.mb-0 Esa precisión importa porque el tejido empresarial colombiano está compuesto en su mayoría por unidades de pequeña escala, con recursos limitados y márgenes estrechos. Para ellas, innovar rara vez significa incorporar tecnología de punta. Significa reorganizar un proceso que genera desperdicio, adaptar una solución que ya funciona en otro sector o atender una necesidad que la oferta local no cubre. El resultado se mide en costos, en tiempo o en clientes atendidos, no en la novedad del recurso empleado.

    //- La pestaña de 25x8 en (185,770) marca este bloque como `.cajon`; a su derecha la
    //- ilustración de 292x169.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Este primer tema construye el marco conceptual sobre el que se apoya el resto del recorrido. Delimita qué cuenta como innovación, distingue los ámbitos en los que puede ocurrir, separa las mejoras graduales de las que redefinen un mercado y sitúa el conjunto dentro de la institucionalidad que lo promueve en el país.
        p.mt-4.mb-0(data-aos="fade-right") Cuatro contenidos ordenan ese marco, del concepto a la institucionalidad que lo respalda:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-1.png").w-100

    //- La cuarta tarjeta está pintada en el XD con el color y el icono del estado :hover
    //- (tarjeta #CDE6F6, círculo #EBE9FB). Muestreado en el PDF, no en la ficha.
    .row.no-pointer.mt-4(data-aos="fade-up")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-1.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-1-hover.svg")
          h4.text-center Concepto de innovación en la empresa
          p.mb-0 Los tres elementos que debe reunir una iniciativa para considerarse innovación y la diferencia que la separa de la invención y del ajuste rutinario de la operación. Se aplica al verificar si una mejora reciente cumple las tres condiciones antes de presentarla en una convocatoria.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-2.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-2-hover.svg")
          h4.text-center Tipos de innovación
          p.mb-0 Los ámbitos en los que una organización puede innovar y los criterios que orientan la elección de uno u otro según el problema que se enfrenta. Sirve para nombrar correctamente la iniciativa, presupuestarla con las cifras que le corresponden y medirla con el indicador adecuado.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-3.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-3-hover.svg")
          h4.text-center Innovación incremental y disruptiva
          p.mb-0 El alcance del cambio, el riesgo que supone cada opción y las condiciones en las que resulta razonable inclinarse por una u otra. Orienta la decisión de una empresa que debe elegir entre mejorar lo que ya produce o abrir una apuesta de mayor alcance.
      .col-md-6.col-lg-3
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-4.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-4-hover.svg")
          h4.text-center Política pública de innovación
          p.mb-0 Las entidades, las normas y los espacios de concertación que financian y acompañan los proyectos de innovación en el territorio. Permite ubicar la convocatoria, el programa de acompañamiento o el crédito que corresponde al estado de cada proyecto y a su capacidad real.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-2.svg" style="width: 84px")
      .col
        p.mb-0 Los cuatro contenidos comparten un mismo propósito, que es evitar que la innovación se invoque como adorno. Quien distingue lo que es innovación de lo que no lo es, reconoce en qué frente puede innovar y sabe a qué puerta institucional acudir, dispone de un criterio para decidir y de una ruta para gestionar los recursos que la decisión requiere.

    //- Foto de 292x220 en (289,1593) y caja #F9FBD8 de 708x220 con r=10 a su derecha: el grupo
    //- mide 1020 y va centrado.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-2.png").w-100.r-10
      .col-lg-7
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 El recorrido empieza por el concepto mismo de innovación en la empresa, porque de él dependen todas las decisiones que vienen después. Mientras la palabra designe cualquier cambio, no sirve para elegir en qué invertir ni para sustentar una propuesta ante quien debe evaluarla. El numeral que sigue precisa qué condiciones debe reunir una iniciativa para recibir ese nombre y fija la frontera que lo distingue de una idea que aún no se ha aplicado o de una mejora cuyo efecto nadie alcanza a reconocer, una distinción que el resto del componente utiliza de manera constante.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto de innovación en la empresa

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") El marco que hoy orienta la medición de la innovación en el mundo proviene del Manual de Oslo, elaborado por la Organización para la Cooperación y el Desarrollo Económicos [OCDE] y Eurostat (2018). Allí la innovación se define como la introducción de un producto, un proceso, un método de comercialización o una forma de organización nuevos o mejorados de manera significativa en las prácticas de la empresa. La definición no exige originalidad mundial: exige novedad para quien la adopta.
        //- Caja #F9FBD8 de 916x160 con r=10 en (185,2176) y el icono magenta de 84 dentro.
        .bg-1.r-10.p-4(data-aos="fade-right")
          .row.align-items-center
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-3.svg" style="width: 84px")
            .col
              p.mb-0 En Colombia, la Ley 1286 de 2009 recoge esa misma noción al organizar el Sistema Nacional de Ciencia, Tecnología e Innovación. El texto reconoce que el cambio puede ocurrir tanto en dimensiones tecnológicas como en las que no lo son, lo que amplía el margen de acción de quien no dispone de presupuesto para investigación y desarrollo. Una panadería que rediseña su ruta de reparto para reducir el tiempo de entrega innova, aunque no incorpore ningún equipo nuevo.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-3.png").w-100.r-10

    //- Ilustración de 292x187 en (289,2366) y el texto de 708 a su derecha: el grupo mide 1020
    //- y va centrado.
    .row.justify-content-center.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-2.png").w-100
      .col-lg-7
        p(data-aos="fade-left") Conviene señalar de dónde suelen surgir estas iniciativas. En las organizaciones de menor tamaño la señal rara vez proviene de un área dedicada a la investigación: llega de una queja repetida del cliente, de una advertencia de quien opera la máquina o de una condición que impone un proveedor. Atender esas fuentes de manera sistemática, y no ocasional, es lo que convierte la innovación en una práctica de gestión y no en un hecho fortuito.
        p.mb-0(data-aos="fade-left") De esa definición se desprenden tres condiciones que deben cumplirse de manera simultánea. La ausencia de cualquiera de ellas deja la iniciativa por fuera del concepto:

    //- Tres tarjetas #F0F49D de 396x250 con el círculo #83C1E8 de 150 montado sobre el borde:
    //- es `.tarjeta-avatar` del kit.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/cond-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Novedad
                  p.text-center.mb-0 El cambio introduce algo inexistente hasta entonces en la empresa o mejora de forma sustancial lo que ya operaba.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/cond-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Implementación
                  p.text-center.mb-0 La idea se pone en práctica y modifica la operación real; mientras permanece en el papel sigue siendo un proyecto.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/cond-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Generación de valor
                  p.text-center.mb-0 El cambio produce un beneficio identificable para el cliente, para la organización o para la comunidad.

    p.mt-4(data-aos="fade-right") Las tres condiciones funcionan como un filtro. Una idea nueva sin aplicación es una invención; una aplicación sin novedad es una rutina; y una novedad aplicada que nadie valora es un gasto. Solo cuando las tres coinciden la organización puede afirmar que innovó y sostener esa afirmación ante un evaluador, un financiador o un cliente.

    //- Caja #FED9FF de 708x210 en (289,3032) y la ilustración de 292x210 a su derecha.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .bg-3.p-4(data-aos="fade-right")
          p.mb-0 Establecido qué cuenta como innovación, la pregunta siguiente es dónde puede aparecer el cambio. Una misma empresa dispone de varios frentes para innovar, y cada uno exige una inversión, un plazo y una forma de medición distintos. Confundirlos lleva a presupuestar mal la iniciativa y a evaluarla con una cifra que no le corresponde. Enseguida se delimitan esos frentes y se ofrece un criterio para elegir entre ellos según el problema que la organización enfrenta.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-3.png").w-100

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Tipos de innovación

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-4.png").w-100.r-10
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 La innovación no ocurre en un solo lugar de la empresa. El Manual de Oslo distingue cuatro ámbitos y la práctica empresarial colombiana ha incorporado un quinto, la innovación social, que responde a problemas colectivos que el mercado no resuelve por sí mismo. Reconocer el ámbito en el que se sitúa una iniciativa evita confundir el esfuerzo invertido con el resultado obtenido.
        p.mt-4.mb-0(data-aos="fade-left") La distinción tiene consecuencias prácticas. Cada ámbito exige recursos, plazos e indicadores distintos, y cada uno se financia por vías diferentes. Un cambio de empaque, una reorganización del turno de producción y la apertura de un canal de venta directa son tres innovaciones legítimas, pero se preparan, se costean y se miden de manera distinta.

    //- Caja #FED9FF de 916x150 en (185,3784) y la ilustración de 292x223 a su derecha.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .bg-3.p-4(data-aos="fade-right")
          p.mb-0 En la práctica colombiana el ámbito no siempre resulta evidente al comienzo. Una empresa que decide vender por un canal digital suele describirlo como innovación de producto, cuando en rigor ha modificado su modelo de negocio y, con él, la manera de llegar al cliente y de cobrar. Nombrar mal el ámbito lleva a presupuestar la iniciativa con las cifras equivocadas y a medir su éxito con un indicador que no le corresponde.
        p.mt-4.mb-0(data-aos="fade-right") Los cinco ámbitos en los que una organización puede innovar se describen enseguida, con el tipo de situación que hace aconsejable cada uno:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-4.png").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4 r-20")
          div(titulo="Innovación de producto")
            p.mb-0 Desarrollo de un bien o de un servicio con características nuevas o mejoradas de forma sustancial, sea en su función, en su calidad o en su presentación. #[b Ejemplo:] una empresa de lácteos de Sopó incorpora un yogur sin azúcar añadido dirigido a consumidores que restringen ese consumo, con lo que atiende un segmento que antes compraba producto importado.
          div(titulo="Innovación de proceso")
            p.mb-0 Adopción de un método de producción, de logística o de distribución distinto del que la empresa venía empleando, con el fin de reducir costos, tiempos o variabilidad. #[b Ejemplo:] un taller de confección de Medellín reorganiza el flujo de corte y ensamble en células de trabajo y recorta el plazo de entrega de quince a nueve días.
          div(titulo="Innovación en el modelo de negocio")
            p.mb-0 Redefinición de la manera en que la organización crea, entrega y captura valor, lo que puede alterar el canal, el esquema de cobro o el segmento atendido. #[b Ejemplo:] una editorial de Bucaramanga sustituye la venta por unidad por una suscripción anual, con lo que asegura ingresos recurrentes y reduce el inventario en bodega.
          div(titulo="Innovación organizacional")
            p.mb-0 Introducción de prácticas de gestión, formas de organizar el trabajo o modos de relación externa que la empresa no aplicaba. #[b Ejemplo:] una comercializadora de Barranquilla implementa reuniones diarias de quince minutos entre bodega y ventas, con lo que disminuyen los pedidos incompletos y las devoluciones.
          div(titulo="Innovación social")
            p.mb-0 Solución original a un problema colectivo que ni el mercado ni el Estado atienden de manera suficiente, sostenida con un modelo económico viable. #[b Ejemplo:] una asociación de recicladores de Cali estructura una ruta de recolección selectiva con empresas del sector, con lo que formaliza el ingreso de sus integrantes.

    p.mt-4(data-aos="fade-right") Los cinco ámbitos no son excluyentes y con frecuencia se encadenan, pues un cambio en el proceso habilita un producto nuevo, y ese producto obliga a revisar el canal por el que se vende. Lo que la organización debe evitar es declarar innovación en todos los frentes a la vez, porque dispersa los recursos y ninguno alcanza el punto en que produce un resultado medible.

    p(data-aos="fade-right") Para orientar la elección, la siguiente tabla reúne los cinco ámbitos, la situación que hace aconsejable cada uno y el indicador con el que se verifica su resultado:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Tipos de innovación y criterios de selección
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Tipo
                th Situación que la hace aconsejable
                th Indicador de verificación
            tbody
              tr
                td Producto
                td Necesidades que la oferta actual no cubre.
                td Ventas del nuevo producto en los primeros seis meses.
              tr
                td Proceso
                td Cuellos de botella, desperdicio o variabilidad en la producción.
                td Reducción del costo unitario o del tiempo de ciclo.
              tr
                td Modelo de negocio
                td El esquema vigente no captura suficiente valor o aparece un segmento nuevo.
                td Apertura de un canal o de un segmento con ingresos en doce meses.
              tr
                td Organizacional
                td La estructura o la gestión frenan la capacidad de respuesta.
                td Reducción del tiempo de respuesta interno.
              tr
                td Social
                td Problema colectivo desatendido con disposición a pagar.
                td Personas beneficiadas y mejora verificable en su condición.

    //- Cajón de 916x140 en (186,5379) con la ilustración de 292x261 a su derecha.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 La tabla sugiere una regla práctica: el ámbito se elige a partir del problema, no del atractivo del cambio. Cuando la dificultad está en el costo unitario, la respuesta es de proceso; cuando está en la falta de clientes, es de producto o de modelo de negocio; y cuando está en la coordinación interna, es organizacional.
        p.mt-4.mb-0(data-aos="fade-right") Dos iniciativas situadas en el mismo frente pueden diferir por completo en la magnitud del cambio que introducen, en el riesgo que comprometen y en el tiempo que tardan en devolver la inversión. Esa magnitud, y no la tecnología empleada, determina si la empresa puede asumir la apuesta con su operación actual. El desarrollo que viene contrasta las dos rutas posibles y las condiciones en que conviene cada una.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-6.png").w-100

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Innovación incremental y disruptiva

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-5.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Dos iniciativas pueden ocurrir en el mismo ámbito y tener alcances muy distintos. La primera mejora lo que ya existe sin alterar la lógica del negocio; la segunda modifica las reglas del mercado en el que la empresa compite. La diferencia no está en la tecnología empleada, sino en el efecto que produce sobre la posición de los competidores.

    //- La pestaña de 25x8 en (185,6201) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 La distinción tiene efectos sobre la manera de administrar el proyecto. Una mejora acumulada se financia con el flujo corriente, se mide en meses y admite corrección sobre la marcha. Una apuesta de mayor alcance exige reservar recursos desde el comienzo, tolerar resultados nulos durante varios períodos y sostener la decisión frente a un equipo que no ve avances inmediatos.
        p.mt-4.mb-0(data-aos="fade-right") La primera y la segunda de esas iniciativas constituyen dos rutas con nombre propio dentro de la gestión empresarial. Conviene examinarlas por separado antes de compararlas, pues tres rasgos bastan para reconocerlas, que son la forma en que el cambio avanza, el riesgo que compromete y el plazo en que la inversión regresa. Cada ruta se describe enseguida con un ejemplo:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-6.png").w-100.r-10

    //- Dos tarjetas pegadas de 510x492 con el círculo blanco de 160 dentro, sobre la banda
    //- decorativa #FFF2FF de 1328x443.
    .banda-1.mt-5
      .row.justify-content-center
        .col-lg-10
          .tarjeta--container.row(data-aos="fade-up")
            .col-md.tarjeta.bg-1-p.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t1/ruta-1.svg" style="width: 160px").m-auto
              h4.text-center Innovación incremental
              p.mb-0 Avanza por acumulación, mediante mejoras pequeñas y sostenidas que reducen costos, elevan la calidad o afinan el servicio. Su riesgo es bajo y su retorno, previsible. Una imprenta que reordena sus tirajes para disminuir los cambios de tinta entre cada pedido recorre esta ruta y no detiene la producción corriente.
            .col-md.tarjeta.bg-2-s.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t1/ruta-2.svg" style="width: 160px").m-auto
              h4.text-center Innovación disruptiva
              p.mb-0 Concepto formulado por Clayton Christensen en 1997, entra por segmentos que los competidores establecidos consideran poco atractivos, con una oferta más simple o económica, y desde allí escala hasta desplazarlos. Su riesgo es alto y su retorno, incierto. Un servicio de envíos dirigido a comerciantes rurales desatendidos ejemplifica esa entrada.

    p.mt-4(data-aos="fade-right") Los dos ejemplos muestran que el nombre de la ruta no depende del tamaño de la empresa ni del dinero invertido, sino de a quién llega el cambio. La imprenta mejora el servicio para el cliente que ya tiene; el servicio de envíos atiende a quien nadie atendía.

    //- Caja #F9FBD8 de 1020x150 con r=10 en (289,7071) y el icono magenta de 84 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-1.r-10.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-4.svg" style="width: 84px")
            .col
              p.mb-0 Ambas rutas pueden convivir en una misma organización. Lo habitual es que la operación diaria se sostenga con mejoras acumuladas mientras una parte acotada del tiempo y del presupuesto explora una apuesta de mayor alcance. Esa distribución protege el ingreso corriente sin renunciar a la búsqueda, y permite que un hallazgo prometedor se pruebe en pequeña escala antes de comprometer la capacidad instalada.

    p.mt-4(data-aos="fade-right") Para las empresas de menor escala, la ruta incremental suele ser la más razonable, porque no compromete la operación que sostiene el ingreso corriente. La ruta disruptiva exige capacidad para sostener pérdidas durante un período prolongado, condición que pocas unidades productivas pequeñas reúnen.

    p(data-aos="fade-right") La siguiente figura reúne ese contraste en los cuatro criterios que intervienen en la decisión y facilita compararlos antes de comprometer recursos:

    .row.justify-content-center.mt-4
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span  Innovación incremental frente a innovación disruptiva
        figure.mb-0(data-aos="fade-up")
          img(src="@/assets/curso/temas/t1/figura-1.svg" alt="Comparación de la innovación incremental y la disruptiva en cuatro criterios: alcance del cambio, riesgo, horizonte de retorno y condición para emprenderla.").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.p-4(data-aos="fade-up")
          p.mb-0 Cualquiera que sea el alcance elegido, la iniciativa no ocurre en un vacío institucional. Colombia dispone de normas, entidades e instrumentos que financian y acompañan los proyectos de innovación, y desconocerlos obliga a la empresa a asumir sola un esfuerzo que podría compartir. El apartado que cierra este tema identifica esas entidades, detalla el tipo de apoyo que presta cada una y propone una ruta para consultar la oferta disponible antes de formular una propuesta.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Política pública de innovación

    p.mt-4(data-aos="fade-right") Colombia cuenta con una institucionalidad dedicada a promover la innovación empresarial. Su norma marco es la Ley 1286 de 2009, que fortaleció el Sistema Nacional de Ciencia, Tecnología e Innovación y elevó a Colciencias a la categoría de departamento administrativo; una década después, la Ley 1951 de 2019 creó el Ministerio de Ciencia, Tecnología e Innovación. Desde entonces la política se despliega mediante planes nacionales, convocatorias de financiación y programas de acompañamiento técnico dirigidos a empresas de distinto tamaño.

    //- Foto de 506x358 en (289,8574) y franja #F0F49D de 1020x358 con el icono de 80 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-7.png')})` }")
          .bloque-texto-g__texto.p-4
            figure.mb-3
              img(src="@/assets/curso/temas/t1/ic-5.svg" style="width: 80px")
            p.mb-0 Ahora bien, la ejecución no ocurre únicamente en el nivel nacional. Las Comisiones Regionales de Competitividad, presentes en los treinta y dos departamentos, traducen las prioridades nacionales a las apuestas productivas de cada territorio. Consultar la agenda departamental antes de formular una propuesta permite alinearla con las cadenas que ya cuentan con recursos asignados, lo que eleva de manera considerable su probabilidad de apoyo.

    p.mt-4(data-aos="fade-right") El apoyo público no se limita a la entrega de recursos. Buena parte de la oferta consiste en cuatro servicios que la empresa puede solicitar desde el comienzo del proyecto:

    //- Cuatro tarjetas #F0F49D de 291x250 con el círculo #83C1E8 de 150 montado sobre el borde.
    .row.justify-content-center.mt-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/serv-1.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Asistencia técnica
                  p.text-center.mb-0 Acompañamiento de expertos para revisar el proyecto y ajustar su formulación.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/serv-2.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Formación del equipo
                  p.text-center.mb-0 Cursos y talleres que fortalecen las competencias de quienes ejecutan la iniciativa.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/serv-3.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Acceso a laboratorios
                  p.text-center.mb-0 Uso de equipos y espacios de prueba sin necesidad de adquirirlos.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/serv-4.svg" alt="").m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  h4.text-center Contacto con otras empresas
                  p.text-center.mb-0 Vínculo con organizaciones de la misma cadena para compartir aprendizajes.

    p.mt-4(data-aos="fade-right") Estos cuatro servicios suelen decidir el resultado de una iniciativa tanto como la financiación. Una organización que solo consulta las convocatorias de dinero desaprovecha la parte de la oferta que puede usar de inmediato y sin contrapartida.

    p(data-aos="fade-right") Cinco entidades concentran la mayor parte de esa oferta en Colombia y conviene reconocerlas antes de formular una propuesta. De cada una interesa saber qué función cumple dentro del sistema y qué tipo de iniciativa financia o acompaña, para no confundir competencias que se parecen entre sí:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b MinCiencias:] define la política nacional de innovación y financia proyectos de investigación aplicada mediante convocatorias públicas.
            li
              i.far.fa-circle-dot
              | #[b iNNpulsa Colombia:] cofinancia el fortalecimiento y el escalamiento de empresas ya constituidas con ventas comprobables.
            li
              i.far.fa-circle-dot
              | #[b Comisiones Regionales de Competitividad:] acuerdan con el sector público y el privado en cada departamento las apuestas productivas que orientan la inversión pública.
            li
              i.far.fa-circle-dot
              | #[b Cámaras de Comercio:] acompañan la formulación, administran el registro mercantil y conectan con redes de proveedores.
            li.mb-0
              i.far.fa-circle-dot
              | #[b SENA:] financia y asesora iniciativas de aprendices y egresados, y aporta formación técnica al equipo de trabajo.

    //- Ilustración #FED9FF de 292x163 en (185,9916) a la izquierda de los dos párrafos.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-5.png").w-100
      .col-lg-9
        p(data-aos="fade-left") Las cinco entidades no compiten entre sí, sino que atienden etapas distintas del mismo recorrido. Una idea todavía sin constituir encuentra acompañamiento y capital semilla; una empresa con ventas comprobables accede a cofinanciación para crecer. Reconocer esa correspondencia entre etapa y entidad ahorra tiempo y evita que el equipo se desgaste antes de empezar.
        p.mb-0(data-aos="fade-left") La consulta de esa oferta rinde más cuando sigue un orden. Los cinco pasos que se enumeran enseguida van de lo general a lo particular, desde la apuesta productiva del departamento hasta los documentos que exige cada convocatoria, y pueden recorrerse en pocos días:

    //- Caja #CDE6F6 de 1228x214 con r=10 en (185,10109): ocupa el ancho completo del contenido.
    .bg-2.r-10.p-4.mt-4(data-aos="fade-up")
      ol.lista-ol--cuadro.mb-0
        li
          .lista-ol--cuadro__vineta
            span 1
          | Identificar la cadena productiva del proyecto y verificar si aparece entre las apuestas priorizadas por la Comisión Regional de Competitividad del departamento.
        li
          .lista-ol--cuadro__vineta
            span 2
          | Consultar el plan de desarrollo departamental y el municipal vigentes para reconocer los programas que ya tienen recursos asignados al sector.
        li
          .lista-ol--cuadro__vineta
            span 3
          | Revisar las convocatorias abiertas de MinCiencias y de iNNpulsa, con atención a los requisitos de antigüedad y de ventas mínimas.
        li
          .lista-ol--cuadro__vineta
            span 4
          | Contactar la Cámara de Comercio de la jurisdicción para conocer los servicios de acompañamiento y las ruedas de negocio programadas.
        li.mb-0
          .lista-ol--cuadro__vineta
            span 5
          | Registrar las fechas de cierre y los documentos exigidos en cada convocatoria, de modo que la postulación no dependa de una preparación de última hora.

    //- Caja #F9FBD8 de 1020x140 con r=10 en (290,10363) y el icono magenta de 84 dentro.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-1.r-10.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-6.svg" style="width: 84px")
            .col
              p.mb-0 La secuencia convierte una búsqueda dispersa en un procedimiento verificable. Quien la recorre llega a la formulación con información sobre plazos, montos y requisitos, y puede ajustar el alcance del proyecto a lo que el instrumento efectivamente financia, en lugar de acomodar después una propuesta que ya estaba escrita.

    p.mt-4.mb-0(data-aos="fade-right") Con el concepto delimitado y el marco institucional identificado, el trabajo se desplaza hacia la decisión. Nada de lo expuesto hasta aquí indica todavía qué debe hacer una empresa concreta con los recursos que dispone, y esa pregunta no se resuelve por intuición. El tema que sigue aporta el método con que se comparan las alternativas y se sustenta la que finalmente se adopta, sin que el resultado dependa del criterio de quien tuvo la última palabra.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
