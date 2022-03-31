<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Ensamble de circuitos digitales

    p(data-aos="fade") Anteriormente el ensamble de circuitos digitales era un proceso de cuidado, con el avance de la tecnología y la implementación de las tarjetas integradas, este proceso se ha vuelto más flexible y más confiable. 

    p.mb-5(data-aos="fade") Los circuitos digitales generalmente requieren de tensiones reguladas para su operación, si esto no es así, se vuelven inestables y resultan en un funcionamiento erróneo y poco confiable, más si no se respetan las reglas de diseño.

    .row.justify-content-center
      .col-md-10(data-aos="fade-down")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-img.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 El grosor de pistas, mal trazo, capacitancia parásitas, cables muy largos son algunos de los factores que influyen en el mal funcionamiento de estos circuitos.

    Separador


    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1. Prototipos

    p.mb-5(data-aos="fade") En todo diseño de circuitos electrónicos es necesario pasar por el proceso de prototipado, este nos permite probar funcionalidad, hacer ajustes y hacer algunos cambios, aunque el prototipo no pasa a ser el diseño final, es necesario aplicar todos los procesos ideados, ya que el objetivo de este, es demostrar que es completamente funcional. La siguiente figura 7 presenta el sentido de su desarrollo.

    .row.justify-content-center.mb-0
      .col-md-10
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1.mb-4 Importancia del prototipado
          .row.justify-content-center
            .col-md-10.tarjeta.bg-gris4.py-3.px-4.mb-2
              p.mb-0 <b>Lo primero que debemos tener claro</b> para iniciar el proceso de prototipado, es precisamente el sentido de este. Un prototipo es un montaje de prueba, eso es lo que indica el nombre:  
            .col-md-12.py-4
              .row.align-items-end
                .col-md-7.z-999
                  img(src='@/assets/curso/tema4-1-img.jpg', alt='Imagen decorativa') 
                .col-md-5
                  .row.align-items-center
                    .col-md-5
                      p.mb-0 <b style="font-size: 18px;"> Proto</b> (prueba)
                    .col-md-2.p-0
                      h2.mb-0(style="color: #43BABE; font-size: 80px;") +  
                    .col-md-5
                      p <b style="font-size: 18px;">Tipo</b> (Modelo que reúne los caracteres esenciales de un conjunto y que sirve como pauta para imitarlo, reproducirlo o copiarlo).
                  p Al referirnos al prototipo de un circuito electrónico, esto nos quiere decir que al armarlo debe cumplir con todas las especificaciones del circuito final. 
    .row.justify-content-center.mb-5
      .col-md-10.bg-gris.borde-botones-sin-top
        .row.justify-content-center
          .col-md-10.py-3
            p.text-center.mb-0 Sirve para corregir errores y hacer ajustes de funcionamiento.

    .row.justify-content-center.mb-4
      .col-md-9(data-aos="fade-down")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-1-img2.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Una de las herramientas con la que se debe contar para iniciar el proceso de prototipado es la <em>protoboard</em>, la cual permite realizar montajes previos y ser probados sin destruir elementos, antes de llegar al diseño final.

    p(data-aos="fade") Para el caso de los circuitos digitales con compuertas, el prototipo se limita a la <em>protoboard</em>, de aquí parte directamente a la implementación en PCB.

    Separador


    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2. Conexionado

    p(data-aos="fade") El conexionado influye en el funcionamiento del circuito, sobre todo si no se tiene en cuenta el apantallamiento y eliminación de ruido eléctrico, es por eso que hay que centrarse en los parámetros generales del circuito; es decir aquello que no varía mucho; tal es el caso de los componentes electrónicos (resistores, capacitores, bobinas, circuitos integrados, cables) y la placa de circuito impreso.

    p.mb-4(data-aos="fade") Es importante definir bien los parámetros para estos componentes, cualquier error, por mínimo que parezca, puede desencadenar en un mal funcionamiento del circuito. Naturalmente estos procesos han evolucionado. A través del tiempo se han dado las pautas para ir estableciendo reglas de diseño, todas ellas encaminadas al mejor desempeño, a la menor afectación posible. La siguiente figura 8 detalla un poco más sobre estos parámetros.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-botones1  
        .row.justify-content-center
          .col-md-10.py-3.text-white
            p.mb-0 Las reglas de diseño en sí son varios parámetros que establecen el conexionado,  aunque muchas de estas se definen en el <em>software</em> de simulación y modelado; también, hay que tener en cuenta algunos aspectos externos. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-9
        ImagenInfografica.color-acento-contenido.tema4-2
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4-2-img.svg', alt='Conexionado')

          .tarjeta.bg-gris4.p-3(x="5%" y="81%" numero="+")
            .h4.text-center.mb-0 Cantidad de capas
          .tarjeta.bg-gris4.p-3(x="7%" y="57%" numero="+")
            .h4.text-center.mb-0 Grosor de pistas en la placa
          .tarjeta.bg-gris4.p-3(x="13%" y="30%" numero="+")
            .h4.text-center.mb-0 Separación de pistas
          .tarjeta.bg-gris4.p-3(x="25%" y="12%" numero="+")
            .h4.text-center.mb-0 Colocación de componentes
          .tarjeta.bg-gris4.p-3(x="49%" y="6%" numero="+")
            .h4.text-center.mb-0 Pad
          .tarjeta.bg-gris4.p-3(x="75%" y="12%" numero="+")
            .h4.text-center.mb-0 Grilla
          .tarjeta.bg-gris4.p-3(x="88%" y="30%" numero="+")
            .h4.text-center.mb-0 Desacoples
          .tarjeta.bg-gris4.p-3(x="92%" y="57%" numero="+")
            .h4.text-center.mb-0 Chasis
          .tarjeta.bg-gris4.p-3(x="95%" y="81%" numero="+")
            .h4.text-center.mb-0 Fijación de conectores  
    
    Separador


    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3. Tarjetas integradas

    p(data-aos="fade") Las tarjetas integradas se constituyeron en una revolución para la implementación de circuitos electrónicos digitales. Son las responsables de prácticamente la desaparición de los circuitos integrados de compuertas digitales, ya que pueden desarrollar cualquier circuito sin necesidad de montajes. En algunos casos solo es necesario implementar ciertos componentes periféricos y naturalmente en conexionado de componentes complementarios. Son ejemplos de estas tarjetas integradas: Basys con la interfaz Xilinx,  Basic Stam, Energía, Elvis de Nationals Instruments, y los que usan tarjetas embebidas como Coolrunner II. 

    p(data-aos="fade") Este tipo de plataforma, permiten la implementación de todo un circuito digital sin usar compuertas lógicas externas. Todas son creadas en un chip conocido como Arreglo Lógico Programable (PAL, por sus siglas en inglés). Las plataformas más avanzadas son conocidas como FPGA (Field Programmable Gate Arrays)

    p.mb-4(data-aos="fade") La siguiente imagen presenta un ejemplo de una tarjeta integrada Basys 3 FPGA con sus componentes.

    .row.justify-content-center.mb-0
      .col-md-10
        .row.borde-botones
          .row.justify-content-center
            .col-md-9
              img(src='@/assets/curso/tema4-3-img.svg', alt='Imagen decorativa') 
          h5.text-white.bg-botones1.py-2.mb-0 Nota. Tomada de Mouser Electronics (2020)        

    Separador


    #t_4_4
    .titulo-segundo.color-acento-contenido
      h2 4.4. <em>Software</em> de aplicación

    p(data-aos="fade") Generalmente el <em>software</em> utilizado para simular el circuito es el mismo usado para su implementación final; en el caso de no hacerlo puede generar el archivo para implementarlo en aplicaciones que sí lo hagan. En el caso de las tarjetas integradas solo es necesario transferir el código a la tarjeta, normalmente esto lo hace la misma aplicación de desarrollo y solo es necesario conectarla al PC usando un puerto USB. 

    .row.justify-content-center.mb-0
      .col-md-10
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1.mb-4 Tarjeta Arduino (Kit de componentes)
          .row.justify-content-center
            .col-md-10.mb-4
              img(src='@/assets/curso/tema4-4-img.jpg', alt='Tarjeta Arduino (Kit de componentes)') 
      .col-md-10.bg-gris.borde-botones-sin-top.mb-5
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Una de las tarjetas de desarrollo más utilizada en la actualidad es Arduino, la cual permite la programación e implementación desde cualquier circuito lógico simple, hasta un circuito complejo.

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-4-img2.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 El <em>software</em> utilizado para programar este tipo de plataformas, es sencillo y de fácil implementación algunos de ellos son de tipo gráfico como micro:bit (https://microbit.org/) pensado para robótica en niños. 
    
    p.mb-5(data-aos="fade") Actualmente existen multitud de plataformas para desarrollo de circuitos, incluso implementando funcionalidades avanzadas y programación y con tutoriales de aprendizajes, integrados a ellas.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-degrade-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4.imagen_girando
              img.px-lg-3.mb-0(src="@/assets/curso/banner2.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-2 Arduino
                  p.text-small.mb-0 El siguiente video es un tutorial de arduino que complementa la información, este también lo podrá encontrar en el material de apoyo.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.youtube.com/watch?v=eBVvD85Ml2c&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2" target="_blank")
                    span Video
                    i.fas.fa-play-circle

</template>

<script>
export default {
  name: 'Tema4',
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
