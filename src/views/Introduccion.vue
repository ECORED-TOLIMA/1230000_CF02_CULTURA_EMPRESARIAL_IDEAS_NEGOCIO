<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //- Foto de 396x293 (col-4) y, a la derecha, el párrafo y la caja #F9FBD8 de 812x177 con
    //- r=10 en (601,432), las dos arrancando en x=601.
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/intro/foto.png").w-100
      .col-lg-8
        p(data-aos="fade-left") Muchas empresas colombianas identifican con claridad aquello que no funciona: un proceso que desperdicia materia prima, un cliente que se queja del plazo de entrega, un margen que se estrecha cada trimestre. El paso siguiente, convertir ese diagnóstico en una propuesta concreta de cambio, resulta más difícil, porque exige elegir entre varias respuestas posibles y sustentar la elección con argumentos que otros puedan revisar.

        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 Formular esa propuesta con método marca la diferencia entre una intuición y un proyecto financiable. Quien compara alternativas con criterios explícitos, reconoce los problemas tecnológicos de su sistema productivo y traduce la solución en cifras verificables, dispone de un documento que resiste la revisión de un evaluador, de un banco o de una convocatoria pública, y de un argumento para convencer al equipo que deberá aplicarlo.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/intro/icono-1.svg" style="width: 84px")
      .col
        p.mb-0 El recorrido avanza de la definición a la aplicación: delimita qué cuenta como innovación y qué institucionalidad la respalda, desarrolla el método para comparar alternativas y decidir entre ellas, aborda el mejoramiento de los procesos productivos y sus indicadores, estructura la propuesta y su presentación, y cierra con cuatro casos que muestran la secuencia completa aplicada en distintos territorios del país.

    .row.mt-4
      .col-lg-8
        p.mb-0(data-aos="fade-right") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    //- El XD deja este espacio como marcador («Espacio para video») y ni el .xd ni el DI traen
    //- la URL: se queda el iframe del scaffold hasta que llegue el enlace real.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
}
</script>

<style lang="sass"></style>
