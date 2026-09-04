<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Casos de formulación en Colombia

    //- Foto de 292x331 (r=10) en (185,323) y la columna de 917 a su derecha, con el icono
    //- magenta de 84 y la caja #CDE6F6 de 919x120 dentro.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-1.png").w-100.h-100.object-fit-cover.r-10
      .col-lg-9
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 Los cuatro casos que se presentan a continuación ejemplifican situaciones del contexto colombiano en las que una empresa reconoce un problema en su proceso, compara alternativas y formula una propuesta de innovación. Cada uno corresponde a un ámbito distinto, de proceso, digital, de modelo de negocio y tecnológico, para mostrar que la misma secuencia metodológica se aplica en escenarios muy diferentes.
        .bg-2.p-4.mt-4(data-aos="fade-left")
          p.mb-0 Ninguno corresponde a una empresa existente. Reúnen condiciones frecuentes en el tejido productivo del país con el fin de facilitar el análisis. Conviene examinarlos siguiendo la secuencia estudiada y verificando, en cada paso, que la solución elegida guarde proporción con el problema identificado y con los recursos disponibles.
        p.mt-4.mb-0(data-aos="fade-left") Cada caso conserva la misma estructura de exposición: la descripción de la organización y de su operación, el diagnóstico que identifica la dificultad, la alternativa seleccionada y el resultado que se espera obtener. Recorrerlos en ese orden permite comparar decisiones tomadas en circunstancias distintas sin volver a situarse en cada caso.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Innovación de proceso en Moniquirá

    //- Columna de 916 con el párrafo, el `.cajon` de 916x130 y la fila icono+texto; la foto de
    //- 292x348 en (1121,896) ocupa las tres alturas.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") Una empresa familiar de Moniquirá, en Boyacá, produce bocadillo de guayaba con un proceso artesanal que sostiene desde hace dos décadas. Su producción semanal alcanza mil doscientas unidades y su mercado se concentra en tiendas del municipio y en dos distribuidores de Tunja. La demanda supera con holgura esa capacidad, pero la empresa no logra atenderla.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 El diagnóstico del proceso revela dos dificultades concretas. La cocción se realiza en pailas de leña sin control de temperatura, lo que produce una variación de textura cercana al treinta por ciento entre lotes, y el empaque manual limita la vida útil del producto a quince días, insuficiente para llegar a mercados más distantes.
        .row.align-items-start.mt-4(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-2.svg" style="width: 84px")
          .col
            p.mb-0 Ambas dificultades tienen un efecto comercial que la empresa había atribuido a otras causas. La variación de textura genera devoluciones de los distribuidores y desalienta los pedidos de mayor volumen, mientras que la vida útil corta impide negociar con supermercados regionales, que exigen plazos superiores a un mes. El problema, enunciado al comienzo como falta de capacidad, resulta ser una restricción de calidad y de conservación.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-2.png").w-100.h-100.object-fit-cover

    //- Caja #CDE6F6 de 1020x244 (r=10) con la lista numerada de 630 y la ilustración #F0F49D
    //- de 292x194 a la derecha.
    .row.justify-content-center.mt-4
      .col-lg-10
        p(data-aos="fade-right") Aplicada la matriz de ponderación con seis criterios, la alternativa de innovación de proceso obtiene el mayor puntaje, por encima de ampliar el punto de venta y de contratar más personal. La propuesta formulada se compone de tres intervenciones:
        .bg-2.r-10.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-lg-8
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Sustituir el sistema de cocción por una marmita eléctrica con control de temperatura, que estandariza la textura y elimina la variación entre lotes.
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | Incorporar una selladora al vacío que extienda la vida útil del producto de quince a noventa días y habilite mercados regionales.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span 3
                  | Documentar el procedimiento en fichas de control por lote, de modo que la calidad deje de depender de la experiencia de una sola persona.
            .col-lg-4.mt-4.mt-lg-0
              figure.mb-0
                img(src="@/assets/curso/temas/t5/ilus-1.png").w-100

    p.mt-4(data-aos="fade-right") Las tres intervenciones responden al mismo problema desde ángulos complementarios. La primera actúa sobre la causa de la variación, la segunda sobre la restricción de mercado que esa variación imponía y la tercera sobre la permanencia del resultado cuando el equipo cambie.

    p(data-aos="fade-right") El impacto estimado de la propuesta se concentra en cuatro resultados:

    //- Lista #FED9FF de 1020x230 (r=10) sobre la banda #F2FCFF de 1328x46.
    .banda-7.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | Incremento del cuarenta por ciento en el volumen producido con el mismo personal
              li
                i.far.fa-circle-dot
                | Reducción de la variación de textura por debajo del cinco por ciento entre lotes
              li
                i.far.fa-circle-dot
                | Acceso a dos mercados regionales antes inalcanzables por la vida útil del producto
              li.mb-0
                i.far.fa-circle-dot
                | Vinculación de cuatro cultivadores de guayaba del municipio como proveedores estables

    p.mt-4(data-aos="fade-right") El caso muestra que una innovación de proceso bien delimitada produce efectos que exceden el proceso mismo. Al estabilizar la calidad, la empresa no solo produce más, sino que accede a compradores que antes la descartaban y arrastra consigo a proveedores de su propio territorio.

    //- Ilustración #FB82FF de 292x275 en (185,2082) y caja #CDE6F6 de 916x275 con el icono de 84.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/ilus-2.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-2.p-4.h-100(data-aos="fade-left")
          figure.mb-3
            img(src="@/assets/curso/temas/t5/ic-3.svg" style="width: 84px")
          p.mb-0 La situación que sigue traslada esa misma secuencia a una empresa de servicios, donde la dificultad no está en una máquina sino en la información que se pierde entre la solicitud del cliente y el técnico que debe atenderla. Allí el diagnóstico no se apoya en la variación de un lote, sino en el porcentaje de órdenes atendidas fuera del plazo comprometido, una cifra que la organización ya producía sin haberla examinado.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Mejoramiento digital en Neiva

    p.mt-4(data-aos="fade-right") Una empresa de servicios de Neiva, en el Huila, atiende el mantenimiento de equipos de cómputo de ciento ochenta clientes empresariales. Su equipo lo integran seis técnicos y una persona encargada de recibir las solicitudes por teléfono y por mensajería, que las anota en un cuaderno y las distribuye cada mañana.

    //- Foto de 396x291 (r=10) en (185,2672) y, a su derecha, el párrafo y el `.cajon` de 812x170.
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-3.png").w-100.h-100.object-fit-cover.r-10
      .col-lg-8
        p(data-aos="fade-left") El problema aparece en las cifras del servicio: cuatro de cada diez órdenes se atienden fuera del plazo ofrecido. La causa no es la capacidad técnica, sino la pérdida de información. Las solicitudes que llegan fuera del horario de la persona encargada no quedan registradas, y ningún técnico puede consultar el historial de un equipo antes de desplazarse.
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 El incumplimiento tiene un costo que la empresa puede estimar. Cada orden atendida fuera de plazo genera una segunda visita, consume horas de un técnico que ya estaba asignado a otro cliente y erosiona la renovación de los contratos anuales, que constituyen la fuente estable de ingreso. Cuantificar ese costo fue lo que permitió comparar la inversión en una solución con lo que la situación vigente estaba costando.

    p.mt-4(data-aos="fade-right") La propuesta formulada consiste en implementar una herramienta de gestión de solicitudes de servicio que registre cada orden desde su recepción, la asigne según la carga de cada técnico y conserve el historial de intervenciones por equipo. La secuencia del cambio se resume así:

    //- Cuatro tarjetas de 299/315/315/301 x330 con el círculo blanco de 98 dentro.
    .tarjeta--container.row.mt-4(data-aos="fade-up" style="--alto-tarjeta: 330px")
      .col-md.tarjeta.bg-1.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t5/tab-1.svg" style="width: 98px").m-auto
        h4.text-center Problema
        p.mb-0 Cuatro de cada diez órdenes se atienden fuera del plazo ofrecido al cliente.
      .col-md.tarjeta.bg-2.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t5/tab-2.svg" style="width: 98px").m-auto
        h4.text-center Causa identificada
        p.mb-0 Las solicitudes se registran a mano y se pierden fuera del horario de oficina.
      .col-md.tarjeta.bg-3.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t5/tab-3.svg" style="width: 98px").m-auto
        h4.text-center Intervención
        p.mb-0 Una herramienta que recibe asigna y documenta cada orden con su historial.
      .col-md.tarjeta.bg-5.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t5/tab-4.svg" style="width: 98px").m-auto
        h4.text-center Resultado esperado
        p.mb-0 Las órdenes fuera de plazo descienden del cuarenta al diez por ciento en sesenta días.

    p.mt-4(data-aos="fade-right") La secuencia ejemplifica un rasgo característico de los problemas tecnológicos: la falla que experimenta el cliente, el retraso, se encontraba a varios pasos de su causa real, el registro manual. Sin ese análisis, la empresa habría contratado más técnicos sin resolver nada.

    p(data-aos="fade-right") En el caso que sigue el problema no aparece dentro de la operación, sino en el camino que recorre el producto hasta el comprador final. Una asociación puede fabricar con excelencia y aun así recibir una fracción del valor que su trabajo genera, lo que desplaza la innovación desde el proceso hacia el modelo de negocio y obliga a intervenir el canal, el precio y la organización interna a la vez.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Innovación social en Guapi

    p.mt-4(data-aos="fade-right") Una asociación de mujeres artesanas de Guapi, en el Cauca, reúne a treinta y cinco tejedoras que elaboran canastos, bolsos y sombreros con fibras naturales de la región. La calidad de su trabajo está reconocida en ferias nacionales, pero sus ingresos no reflejan ese reconocimiento.

    //- Franja #F0F49D de 919x296 a la izquierda con la caja blanca y la foto de 614x296 a la
    //- derecha: eso es `--inverso`.
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/foto-4.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 El diagnóstico identifica la causa en el canal de comercialización. La producción se vende a intermediarios que visitan el municipio y pagan alrededor del 20 % del precio que la pieza alcanza en las ciudades. Las artesanas conocen esa diferencia, pero carecen de un canal propio y de capacidad de acopio para sostener pedidos de mayor volumen.

    p.mt-4(data-aos="fade-right") La asociación cuenta con dos activos que la propuesta aprovecha. El primero es el reconocimiento obtenido en las ferias, que reduce el esfuerzo necesario para dar a conocer las piezas fuera de la región. El segundo es su organización interna, con reglas de trabajo ya acordadas entre las tejedoras, que permite asumir compromisos colectivos sin necesidad de crear una estructura nueva.

    p(data-aos="fade-right") La propuesta corresponde a una innovación en el modelo de negocio y se compone de cuatro elementos:

    //- Cuatro bandas de 1020x110 que alternan #CDE6F6 y #F9FBD8, con el icono magenta de 70.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.p-3.r-arriba-10(data-aos="fade-right")
          .row.align-items-center.g-0
            .col-auto.pe-3
              figure.mb-0
                img(src="@/assets/curso/temas/t5/elem-1.svg" style="width: 70px")
            .col
              p.mb-0 #[b Canal de venta propio:] una tienda en línea sencilla, integrada con redes sociales, que permita vender directamente a compradores de otras ciudades y documentar el origen de cada pieza.
        .bg-1.p-3(data-aos="fade-right")
          .row.align-items-center.g-0
            .col-auto.pe-3
              figure.mb-0
                img(src="@/assets/curso/temas/t5/elem-2.svg" style="width: 70px")
            .col
              p.mb-0 #[b Fondo rotatorio de materia prima:] un mecanismo colectivo que compre la fibra al por mayor y la distribuya entre las asociadas, con lo que reduce el costo unitario del insumo.
        .bg-2.p-3(data-aos="fade-right")
          .row.align-items-center.g-0
            .col-auto.pe-3
              figure.mb-0
                img(src="@/assets/curso/temas/t5/elem-3.svg" style="width: 70px")
            .col
              p.mb-0 #[b Estandarización de referencias:] la definición de un catálogo con medidas, acabados y tiempos de entrega uniformes, condición indispensable para atender pedidos empresariales.
        .bg-1.p-3.r-abajo-10(data-aos="fade-right")
          .row.align-items-center.g-0
            .col-auto.pe-3
              figure.mb-0
                img(src="@/assets/curso/temas/t5/elem-4.svg" style="width: 70px")
            .col
              p.mb-0 #[b Acuerdo de precio mínimo:] un compromiso interno que fija el valor por debajo del cual ninguna pieza se vende, de modo que el canal propio no compita contra las propias asociadas.

    //- Columna de 915 con el párrafo y la fila ilustración+caja; la ilustración #FED9FF de
    //- 292x408 en (1122,4852) ocupa las dos alturas.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-right") Los cuatro elementos se sostienen entre sí. El canal propio carece de sentido sin referencias estandarizadas que permitan prometer una entrega, y el fondo de materia prima solo funciona si existe un acuerdo de precio que proteja el ingreso de todas. La innovación social, en este caso, es tanto organizativa como comercial.
        .row.g-0
          .col-lg-4
            figure.mb-0.h-100
              img(src="@/assets/curso/temas/t5/ilus-4.png").w-100.h-100.object-fit-cover
          .col-lg-8
            .bg-1.p-4.h-100(data-aos="fade-left")
              p.mb-0 El resultado estimado es un incremento cercano al setenta por ciento en el ingreso de las treinta y cinco asociadas, sin aumentar el volumen producido. El cambio no está en producir más, sino en capturar la parte del valor que hasta ahora quedaba en manos del intermediario.
        p.mt-4.mb-0(data-aos="fade-right") El último caso incorpora un elemento que los anteriores no exigían, que es la decisión de invertir en una herramienta tecnológica. Cuando la solución supone un desembolso y un cambio en la forma de trabajar del equipo, la comparación de alternativas debe apoyarse en una medición previa y en un cálculo de retorno, porque de esas dos cifras depende que la propuesta resulte defendible ante quien la financia.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/ilus-3.png").w-100.h-100.object-fit-cover

    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Innovación tecnológica en Manizales

    p.mt-4(data-aos="fade-right") En Manizales, Caldas, una empresa familiar fabrica piezas metálicas para el sector de la construcción y lleva veintidós años en el mercado. Cuenta con dieciocho trabajadores y una cartera estable de clientes regionales que valoran su cumplimiento.

    //- Caja #CDE6F6 de 916x260 con el icono de 84 y foto de 292x260 (r=10) en (1121,5575).
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .bg-2.p-4.h-100(data-aos="fade-right")
          figure.mb-3
            img(src="@/assets/curso/temas/t5/ic-4.svg" style="width: 84px")
          p.mb-0 La presión aparece por el lado del costo. La programación del corte de lámina se realiza de forma manual, lo que genera un desperdicio cercano al 8 % del material y obliga a rehacer tres de cada diez piezas cuando el plano presenta cambios de última hora. En un insumo cuyo precio fluctúa, ese margen decide la competitividad de cada cotización.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-5.png").w-100.h-100.object-fit-cover.r-10

    p.mt-4(data-aos="fade-right") La empresa enfrenta una decisión que su trayectoria no le había exigido. Incorporar una herramienta informática al proceso de corte modifica la manera de trabajar de quienes llevan años programando a mano, y el resultado depende tanto del programa que se adquiera como de la disposición del equipo para adoptarlo. Esa consideración, que no aparece en el cálculo económico, forma parte de la factibilidad técnica de la alternativa.

    p(data-aos="fade-right") La alternativa seleccionada consiste en adquirir un programa de diseño asistido que genere de manera automática las rutas de corte a partir del plano del cliente y optimice el aprovechamiento de la lámina. La decisión se construye en cuatro pasos:

    //- Cuatro tarjetas de 292x352: el XD dibuja la última en el estado :hover.
    .row.mt-4(data-aos="fade-up")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 352px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/paso-1.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/paso-1-hover.svg")
          h4.text-center 1. Medición de la línea de base
          p.mb-0 Se registra durante ocho semanas el desperdicio real de material y el porcentaje de piezas rehechas.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 352px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/paso-2.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/paso-2-hover.svg")
          h4.text-center 2. Comparación de alternativas
          p.mb-0 Se evalúan la compra del programa, la contratación de un programador externo y el cambio de proveedor de lámina.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 352px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/paso-3.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/paso-3-hover.svg")
          h4.text-center 3. Verificación de la capacidad interna
          p.mb-0 Se comprueba que dos operarios pueden capacitarse en el manejo del programa sin detener la producción.
      .col-md-6.col-lg-3
        .tarjeta--boton.color-1.p-4.h-100(style="--alto-tarjeta: 352px")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/paso-4.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/paso-4-hover.svg")
          h4.text-center 4. Cálculo del retorno
          p.mb-0 Se contrasta la inversión requerida con el ahorro mensual estimado en material y en reprocesos.

    p.mt-4(data-aos="fade-right") El cálculo arroja una recuperación de la inversión en catorce meses, plazo que la empresa puede sostener con su flujo actual. Lo determinante del caso, sin embargo, es el primer paso, porque sin las ocho semanas de medición previa a la propuesta, habría carecido de la cifra que hace verificable el ahorro anunciado.

    p(data-aos="fade-right") Las cuatro situaciones confirman que la secuencia estudiada se sostiene con independencia del sector, del tamaño de la organización y de la región donde opera. Cambian el problema que la origina, la cifra que lo describe y el instrumento con que se financia la solución, pero se mantienen el diagnóstico que precede a la decisión, la comparación explícita de alternativas y la medición que verifica el resultado anunciado.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
