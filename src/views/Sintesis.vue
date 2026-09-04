<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p(data-aos="fade-down") El componente formativo presenta la formulación de propuestas de innovación como el paso que convierte el diagnóstico del entorno en una decisión sustentada. Los cinco ejes temáticos que lo conforman avanzan del concepto a la aplicación: delimitan qué cuenta como innovación y qué política pública la respalda en el país, desarrollan las alternativas de solución y el método para decidir entre ellas con criterios explícitos, abordan el mejoramiento de los procesos productivos y los indicadores que verifican su resultado, estructuran la propuesta de innovación desde su lienzo hasta su presentación ante quienes deben respaldarla, y cierran con cuatro casos de formulación en distintos territorios del país. Este recorrido ayuda a comprender que una propuesta de innovación no se sostiene en la novedad de la idea, sino en la precisión con que se define el problema y en la evidencia con que se anuncia el resultado.

    p.mt-4.mb-0(data-aos="fade-down") A continuación, se presenta el mapa conceptual que organiza los ejes temáticos y las relaciones que los articulan:

    //- El mapa se exporta del artboard «Síntesis – PDF» (1228x824 en 186,523): mide justo el
    //- ancho útil de la tarjeta, así que va al 100 % sin columna que lo estreche.
    figure.mt-4(data-aos="fade-up")
      img(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual del componente formativo «Formulación de ideas de negocio e innovación empresarial», que se desarrolla a través de cinco ejes: innovación y política de fomento, alternativas de solución y toma de decisiones, mejoramiento de procesos productivos, propuesta de innovación y casos de formulación en Colombia.").w-100

    .row.justify-content-center.mt-5
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
