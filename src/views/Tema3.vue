<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 <em>Software</em> de simulación de circuitos electrónicos digitales

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-degrade-verde.borde-redondo
        .row.justify-content-center
          .col-md-10.py-3.text-white
            p.mb-0 Los <em>software</em> de simulación son una herramienta muy útil y de amplia aplicación en la implementación de circuitos electrónicos digitales, estas permiten concebir los diseños desde la etapa inicial, permitiendo incluso, hacer algunos montajes sin los cálculos previos, es decir, aplicando solo la lógica, algunos de ellos son los siguientes.

    .row.justify-content-center
      .col-md-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3-paso1.jpg', alt='Proteus')
            .col-md-9
              p Uno de los <em>software</em> más utilizados es Proteus. Sin embargo, es una herramienta con licencia cerrada y se debe pagar para su uso; además de la simulación este permite el diseño de la PCB. 
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Otra herramienta potente para la simulación y desarrollo es el Altium, también de licencia propietaria de grandes prestaciones.
            .col-md-3
              figure
                img(src='@/assets/curso/tema3-paso2.jpg', alt='Altium')
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3-paso3.jpg', alt='Aplicaciones')
            .col-md-9
              p Existen muchas aplicaciones gratuitas y de funcionamiento online, que permiten la simulación efectiva de la mayoría de los circuitos digitales, algunas de ellas parten del diagrama esquemático y muestran sobre este los estados lógicos, es decir, en los mismos diagramas de las compuertas lógicas, se muestran los resultados.
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Algunos programas con gráficos 3D permiten visualizar el mismo circuito integrado físico, montado sobre la protoboard, tratando de representarlo, como se vería en la realidad. Estas versiones las hay incluso de uso libre y en línea, Tinkercad es una de ellas.
            .col-md-3
              figure
                img(src='@/assets/curso/tema3-paso4.jpg', alt='gráficos 3D')
   
    Separador


    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1. Tipos y aplicación

    p.mb-5(data-aos="fade") Dentro de los tipos de simuladores encontramos diferentes características entre ellos, siendo la más sobresaliente la relacionada con el tipo de simulación y la interfaz mostrada al usuario, se encuentran, por ejemplo:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg-celeste3.p-4(titulo="Simulador esquemático")
        .row.align-items-center
          .col-md-6
            h4 Simulador esquemático
            p Este tipo de simulador permite dibujar el diagrama esquemático y realizar la simulación sobre los símbolos de los mismos elementos. Son los más utilizados por personal avanzado, ya que permite interpretar funcionamiento de manera más precisa, pero se requiere de mayor conocimiento de los procedimientos. 
            p Proteus es un ejemplo de este tipo de <em>software</em>, la imagen muestra los estados en la salida de los elementos. Los recuadros en cada una de las entradas y salidas indican un 0 lógico para el color azul y un 1 lógico para el color rojo. 
            p Circuit Maker, y <em>software</em> en línea como Circuitlab, también son ejemplos de simuladores esquemáticos
          .col-md-6
            img(src='@/assets/curso/tema3-1-tab1.jpg', alt='Simulador esquemático')
      .tarjeta.bg-celeste3.p-4(titulo="Simulador con ilustraciones realistas")
        .row.align-items-center
          .col-md-6
            h4 Simulador con ilustraciones realistas
            p Este tipo de <em>software</em> permite visualizar el componente como si se tratara de su presentación física. Se puede ver una protoboard o incluso la PCB; Tinkercad o Multisim son ejemplos de este tipo de <em>software</em>. 
            p Es tipo de programas son recomendados para principiantes y para personas que quieren adquirir destreza en el manejo y la identificación de componentes.
          .col-md-6
            img(src='@/assets/curso/tema3-1-tab2.jpg', alt='Simulador con ilustraciones realistas')   
            p.mb-0 Simulación realista. Captura de pantalla de ThinkerCad. 
      .tarjeta.bg-celeste3.p-4(titulo="Simulador de plataforma")
        .row.align-items-center
          .col-md-6
            h4 Simulador de plataforma
            p Este tipo de <em>software</em> de simulación casi siempre se apoya de una plataforma o tarjeta integrada, donde el circuito pasa a ser, de una simulación a un prototipo real. 
            p Arduino es un ejemplo de este tipo de plataformas. También encontramos a Coolrunner y Basys.
          .col-md-6
            img(src='@/assets/curso/tema3-1-tab3.jpg', alt='Simulador de plataforma')  


    p.mb-5(data-aos="fade") Para efectos de aplicación se utilizarán sólo dos tipos de simulador: los esquemáticos y los de gráficos realistas. A continuación se explica cada uno de ellos. 

    ImagenInfograficaB.color-acento-contenido.tema3-1
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3-1-infog.png', alt='dos tipos de simulador')

      div.tarjeta.p-3(x="37%" y="62%" tooltip="Simulador esquemático")
        .h3.mb-2 Simulador esquemático
        p De estos encontramos <em>software</em> en línea de tipo gratuito. Un ejemplo es CircuitLab, en el cual se puede iniciar con las compuertas lógicas para implementar un circuito como el de la imagen y comprobar luego en la tabla de verdad los resultados. Para usar este <em>software</em> en línea debe crear una cuenta.
        .row.justify-content-center
          .col-md-9.mb-4
            img(src='@/assets/curso/tema3-1-imginfog1.jpg', alt='Simulador esquemático')
        p También puede probar la equivalencia de circuitos; por ejemplo, se puede aplicar la ley distributiva armando en paralelo los circuitos correspondientes y comprobar que la salida es la misma para todos los valores de la tabla de verdad.

      div.tarjeta.p-3(x="63%" y="62%" tooltip="Simulador gráfico realista")
        .h3.mb-2 Simulador gráfico realista
        p Para simular un circuito con interfaz realista se utiliza la herramienta gratuita Tinkercad. Para el manejo de las compuertas lógicas se debe tener claro sus preferencias y diagramas internos, según la hoja de datos; estas son la referencias más comunes:
        .row.justify-content-center
          .col-md-4.mb-4
            ul.lista-ul.px-md-4.px-2
              li.mb-0
                i.lista-ul__vineta
                | AND = 7408.
              li.mb-0 
                i.lista-ul__vineta
                | OR = 7432.
              li.mb-0 
                i.lista-ul__vineta
                | NOT = 7404.
          .col-md-4.mb-4
            ul.lista-ul.px-md-4.px-2
              li.mb-0
                i.lista-ul__vineta
                | NAND =7400.
              li.mb-0 
                i.lista-ul__vineta
                | NOR = 7402.
              li.mb-0 
                i.lista-ul__vineta
                | XOR = 7486.
        p.mb-4 Es necesario hacer uso de los conocimientos de electrónica para interpretar el montaje en la protoboard. Una de las ventajas de los <em>software</em> de simulación con ilustraciones realistas, tal como lo presenta la imagen, es que permiten ver el montaje como sería en la realidad y luego al armarlo de forma física, la probabilidad de cometer errores en el montaje, es menor.
        .row.justify-content-center
          .col-md-9
            img(src='@/assets/curso/tema3-1-imginfog2.jpg', alt='Simulador esquemático')

    Separador


    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2. Generación de archivos de trabajo

    p(data-aos="fade") Los archivos de trabajo en la implementación de circuitos electrónicos digitales está limitada a la importación de las imágenes y los listados de componentes. Para el desarrollo y el prototipado es probable que se necesiten generar archivos de fresado, serigrafía y otros.

    p(data-aos="fade") Para el caso de Tinkercad, por ejemplo, es solo dar clic sobre el ícono de listado, se pone en modo lista y luego se importa el archivo en dicho formato, tal como se presenta a continuaciónn.

    .row.justify-content-center.mb-5
      .col-md-10
        .row.borde-botones.justify-content-center
          img.py-3(src='@/assets/curso/tema3-2-img.jpg', alt='Tinkercad en modo List') 
          h5.text-white.bg-botones1.py-2.mb-0 Nota. Tinkercad en modo List. Captura de pantalla.  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-primario1
        .row.justify-content-center
          .col-md-10.py-3.text-white
            p.mb-0 El archivo esquemático se puede importar en varios formatos incluyendo el formato de imagen .jpg o .png. Para el caso de los circuitos digitales solo será necesario importar un archivo de imagen para guardar los esquemas utilizados en la implementación.

</template>

<script>
export default {
  name: 'Tema3',
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
