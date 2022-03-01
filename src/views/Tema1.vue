<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Diagramas esquemáticos de circuitos electrónicos digitales

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-12.tarjeta.bg-degrade-azul
        .row.justify-content-center
          .col-md-10.py-3.text-white
            p.mb-0 <b style="font-size: 18px">Los diagramas esquemáticos</b> constituyen un paso importante en la implementación de un circuito, pues en ellos se detallan de forma simbólica, los componentes a utilizar y la interconexión existente entre los mismos. Estos diagramas pueden ser elaborados a mano; de hecho, casi siempre el primer bosquejo de un circuito se elabora con esta técnica. Actualmente, existen aplicaciones de software avanzado que facilitan esta tarea, incluso se puede hacer online de forma gratuita.

    .row.justify-content-center
      .col-md-10
        p(data-aos="fade") Para la electrónica digital existe una simbología especial y los diagramas esquemáticos son de fácil entendimiento, aunque juega un papel muy importante la aplicación de la lógica para el análisis de funcionamiento. La siguiente figura 1 presenta un diagrama de estos.
      .row.justify-content-center.mb-0
        .col-md-10
          .row.borde-botones
            h4.text-center.text-white.bg-botones1.py-1.mb-4 Diagrama esquemático de un circuito integral
            .row.justify-content-center
              .col-md-12.tarjeta.py-3.px-4.mb-2
                img(src='@/assets/curso/tema1-img.svg', alt='Imagen decorativa')                   
      .row.justify-content-center.mb-4
        .col-md-10.bg-gris.borde-botones-sin-top
          .row.justify-content-center
            .col-md-10.py-3
              p.mb-0 Con estos diagramas esquemáticos se puede predecir con exactitud el funcionamiento del circuito, se puede hacer uso de la lógica en un análisis de escritorio, aunque también se puede aplicar el álgebra de boole para obtener un resultado calculado

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.bg-contenido4
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 <b style="font-size: 18px;">Es importante</b>, conocer a fondo la simbología electrónica para poder implementar con éxito un diagrama esquemático y tener claro la lógica y aplicación del álgebra de boole para efectuar el análisis de funcionamiento.

    Separador


    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1. Simbología para electrónica digital

    p(data-aos="fade") Los símbolos electrónicos aplicados a la electrónica digital, por sí solos, ya brindan información de lo que se espera en un circuito electrónico; tal como se explica en cada una de las compuertas y que se puede visualizar en el siguiente recurso: 




    p(data-aos="fade") La combinación de estas compuertas fue lo que dio origen a los circuitos digitales y un análisis lógico permite implementar cualquier circuito, desde el más simple, hasta el más complejo, como un sistema de cómputo, todos basados en la misma lógica de dos estados.

    Separador


    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2. Hojas de datos

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.tarjeta.bg-botones4
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 <b style="font-size: 18px;">Las hojas de datos</b> son un componente esencial en la implementación de circuitos electrónicos, en ellas está consignada la información pertinente para el desarrollo. También se encuentran datos relacionados con el funcionamiento, temperaturas de operación, tamaños de pistas, grosor de pines, encapsulado, velocidad de respuesta  y muchos más; para el caso de los circuitos integrados digitales, se incluye información simbólica de las compuertas internas en los integrados. Un ejemplo de este recurso se encuentra en la siguiente figura 2.

    .row.justify-content-center.mb-0
      .col-md-10
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1.mb-4 Datasheet para la compuerta lógica NAND 7400
          .row.justify-content-center
            .col-md-11.tarjeta.py-3.px-4.mb-2
              img(src='@/assets/curso/tema1-2-img.svg', alt='Imagen decorativa')                   
    .row.justify-content-center.mb-4
      .col-md-10.bg-gris.borde-botones-sin-top
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Estas hojas de datos son necesarias para armar, bien sea el prototipo o el circuito final. El software de generación de la PCB también necesita ser alimentado con la información proporcionada en  estas hojas. Cada fabricante suministra su datasheet para sus productos, por eso es normal encontrar varias hojas para una misma referencia. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-celeste
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Al adquirir un elemento es importante consultar la hoja de datos proporcionada por ese fabricante, algunos datos son estándares y no varían, más que todo los referidos a tamaño, distribución de pines y tensiones de operación, otros pueden variar como la temperatura, frecuencia de operación y otros.

    p(data-aos="fade") Es importante familiarizarse con las referencias de estos componentes, pues de ellas parte la consulta a las hojas de datos, ya que estas referencias por sí solas brindan información importante. Las compuertas lógicas tienen varios procesos de fabricación y de acuerdo a estos se definen la mayoría de las veces, de aquí se derivan las siguientes familias lógicas, las cuales se podrán observar en la siguiente figura 3.





  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
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
