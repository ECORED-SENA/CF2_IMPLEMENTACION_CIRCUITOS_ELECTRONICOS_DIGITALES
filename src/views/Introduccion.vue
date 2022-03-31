<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") La aplicación de los sistemas digitales dio origen a un cambio vertiginoso en el estilo de vida de la especie humana después del desarrollo de boole en 1854 (George Boole, 02 de noviembre de 1815 a 8 de diciembre de 1864, matemático inglés). Sin embargo, esto no sucedió sino hasta 1940, para que, con la invención del transistor, se pudieran implementar los primeros sistemas prácticos y funcionales. En el siguiente video se explicarán los aspectos necesarios para la implementación de los sistemas electrónicos digitales.
    
    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/YPY2Kz0MVtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-md-10
        .row.d-flex
          .col-md-2.bg-secundario1.py-4(data-aos="fade-right")
            .imagen_girando
              img(src='@/assets/curso/banner2.png' alt='Imagen decorativa', style="width:70px; margin: 0 auto;")
          .col-md-10.bg-celeste.py-4(data-aos="fade-left")
            p.mb-0 Es importante tener en cuenta las condiciones seguras a la hora de trabajar, la manipulación de los elementos electrónicos asociados y las herramientas de trabajo que ayudan con el análisis de las magnitudes físicas asociadas a estos sistemas.




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
