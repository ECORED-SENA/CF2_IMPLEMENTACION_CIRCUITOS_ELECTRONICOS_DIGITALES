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
            p.mb-0 <b style="font-size: 18px">Los diagramas esquemáticos</b> constituyen un paso importante en la implementación de un circuito, pues en ellos se detallan de forma simbólica, los componentes a utilizar y la interconexión existente entre los mismos. Estos diagramas pueden ser elaborados a mano; de hecho, casi siempre el primer bosquejo de un circuito se elabora con esta técnica. Actualmente, existen aplicaciones de <em>software</em> avanzado que facilitan esta tarea, incluso se puede hacer <em>online</em> de forma gratuita.

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

    #MapaGroup01.mb-5(data-aos="fade-down")
      .row.justify-content-center
        .col-md-11
          .row.justify-content-center.align-items-end
            .col-md
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
                img.ChangeSRC01(src='@/assets/curso/tema1-1-tema1-img1.svg', alt='botón 1')
              img.w-25.mx-auto.mb-0.multi-collapse1.collapse.show(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')
            .col-md.absoluta
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2')(@mouseover="mostrarIndicador = false")
                .indicador--click(v-if="mostrarIndicador")
                img.ChangeSRC02(src='@/assets/curso/tema1-1-tema2-img1.svg', alt='botón 2' )
              img.w-25.mx-auto.mb-0.multi-collapse2.collapse(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')
            .col-md
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='false' aria-controls='.multi-collapse2')
                img.ChangeSRC03(src='@/assets/curso/tema1-1-tema3-img1.svg', alt='botón 3' )
              img.w-25.mx-auto.mb-0.multi-collapse3.collapse(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')
            .col-md
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse4' aria-expanded='false' aria-controls='.multi-collapse2')
                img.ChangeSRC04(src='@/assets/curso/tema1-1-tema4-img1.svg', alt='botón 4' )
              img.w-25.mx-auto.mb-0.multi-collapse4.collapse(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')
            .col-md
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse5' aria-expanded='false' aria-controls='.multi-collapse2')  
                img.ChangeSRC05(src='@/assets/curso/tema1-1-tema5-img1.svg', alt='botón 5' )
              img.w-25.mx-auto.mb-0.multi-collapse5.collapse(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')
            .col-md
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse6' aria-expanded='false' aria-controls='.multi-collapse2')  
                img.ChangeSRC06(src='@/assets/curso/tema1-1-tema6-img1.svg', alt='botón 6' )
              img.w-25.mx-auto.mb-0.multi-collapse6.collapse(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')
            .col-md
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse7' aria-expanded='false' aria-controls='.multi-collapse2') 
                img.ChangeSRC07(src='@/assets/curso/tema1-1-tema7-img1.svg', alt='botón 7' )
              img.w-25.mx-auto.mb-0.multi-collapse7.collapse(src='@/assets/curso/tema1-1-ind.svg', alt='indicador 1' data-bs-parent='#MapaGroup01')  
        
            
      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse1.collapse.show(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4          
          p Al ver el símbolo para la compuerta AND, se puede predecir mentalmente, sin necesidad de cálculos, que con aplicar tensión en ambas entradas, se obtendrá tensión en la salida, y que con una de ellas que esté apagada, se tendrá apagada la salida. Esto es así porque la tabla de verdad para la compuerta AND me brinda esa información.
        .row.justify-content-around
          .col-md-5
            h4 Símbolo para la compuerta lógica AND
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema1-form1.svg', alt='Símbolo para la compuerta lógica AND')
            p Su <b>ecuación matemática</b> para implementar en el álgebra de boole sería:
            p.text-center 𝑌 = 𝐴 ⋅ 𝐵
            p.mb-0 Es decir que la compuerta lógica AND, corresponde a la multiplicación en este caso se le conoce como multiplicación lógica.
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema1-tabla1.svg', alt='Tabla de verdad')

      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse2.collapse(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4 
          p La compuerta lógica Or corresponde a la conjunción “o” a continuación su símbolo y ecuación.
        .row.justify-content-around
          .col-md-5
            h4 Símbolo para la compuerta lógica OR
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema2-form1.svg', alt='Símbolo para la compuerta lógica OR')
            p Su <b>ecuación matemática</b> ppara implementar en el álgebra de boole sería:
            p.text-center 𝑌 = 𝐴 + 𝐵
            p.mb-0 Se evidencia que para el análisis matemático tiene el comportamiento de la suma, por eso es también conocida como la suma lógica. Sin embargo, se observa que para el 1+1, que sería 2, acá el número 2 no existe por tratarse de un sistema binario donde solo se usan los símbolos 0 y 1.
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema2-tabla1.svg', alt='Tabla de verdad')  
      
      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse3.collapse(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4 
          p Existe una compuerta especial de una sola entrada. Generalmente se usa combinada con otras compuertas lógicas y se trata de la compuerta negadora (Not o No), que pone en su salida un valor contrario al de la entrada, es decir “Niega” lo que esté en la entrada. Esta negación se representa en la ecuación matemática  con una barra encima de la letra. La siguiente figura ilustra esta compuerta en su simbología y ecuación. A esta compuerta también se le conoce como “Complemento”.
        .row.justify-content-around
          .col-md-5
            h4 Símbolo y ecuación para la compuerta lógica NOT
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema3-form1.svg', alt='Símbolo y ecuación para la compuerta lógica NOT')
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema3-tabla1.svg', alt='Tabla de verdad')  

      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse4.collapse(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4 
          p Al combinar esta compuerta con las anteriores, se obtienen dos compuertas adicionales, que posteriormente se convirtieron en las de mayor aplicación, tanto así, que se les conoce como compuertas universales. Con una sola de ellas se pueden obtener cualquier circuito lógico, facilitando así la implementación en circuitos complejos.
          p La primera de ellas es la compuerta NAND. Se obtiene al negar la compuerta AND, es decir conectar una compuerta negadora a su salida. La tabla de verdad se obtiene negando es decir invirtiendo o complementando los valores de la salida Y.
        .row.justify-content-around
          .col-md-6
            h4 Símbolo y ecuación para la compuerta lógica NAND
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema4-form1.svg', alt='Símbolo y ecuación para la compuerta lógica NAND')
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema4-tabla1.svg', alt='Tabla de verdad')   

      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse5.collapse(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4 
          p Al combinar esta compuerta con las anteriores, se obtienen dos compuertas adicionales, que posteriormente se convirtieron en las de mayor aplicación, tanto así, que se les conoce como compuertas universales. Con una sola de ellas se pueden obtener cualquier circuito lógico, facilitando así la implementación en circuitos complejos.
          p La segunda de ellas es NOR. Análogamente se hace el mismo procedimiento para obtener este tipo de compuerta. La tabla de verdad se obtiene negando es decir invirtiendo o complementando los valores de la salida Y.
        .row.justify-content-around
          .col-md-6
            h4 Símbolo y ecuación para la compuerta lógica NOR
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema5-form1.svg', alt='Símbolo y ecuación para la compuerta lógica NOR')
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema5-tabla1.svg', alt='Tabla de verdad')    

      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse6.collapse(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4 
          p Existen dos compuertas de aplicación especial. Una de ellas es la OR Exclusiva, la cual se comporta como una OR pero excluye los dos valores que son iguales. A continuación su diagrama y simbología:
        .row.justify-content-around
          .col-md-5
            h4 Símbolo y ecuación para la compuerta lógica XOR
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema6-form1.svg', alt='Símbolo y ecuación para la compuerta lógica XOR')
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema6-tabla1.svg', alt='Tabla de verdad') 

      .row.justify-content-center.tarjeta.bg-gris4.py-4.multi-collapse7.collapse(data-bs-parent='#MapaGroup01')
        .col-md-10.mb-4 
          p Existen dos compuertas de aplicación especial. Una de ellas es XOR y esta es también conocida como OR Inclusiva, la cual incluye o ponen en 1 la salida cuando los valores en sus entradas son iguales; también es conocida como el comparador digital porque pone un 1 lógico en la salida cuando las entradas son iguales. A continuación su diagrama y simbología:
        .row.justify-content-around
          .col-md-5
            h4 Símbolo y ecuación para la compuerta lógica XNOR         
            img.px-2.mb-4(src='@/assets/curso/tema1-1-tema7-form1.svg', alt='Símbolo y ecuación para la compuerta lógica XNOR')
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/tema1-1-tema7-tabla1.svg', alt='Tabla de verdad')                                   


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
          h4.text-center.text-white.bg-botones1.py-1.mb-4 <em>Datasheet</em> para la compuerta lógica NAND 7400
          .row.justify-content-center
            .col-md-11.tarjeta.py-3.px-4.mb-2
              img(src='@/assets/curso/tema1-2-img.svg', alt='Imagen decorativa')                   
    .row.justify-content-center.mb-4
      .col-md-10.bg-gris.borde-botones-sin-top
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Estas hojas de datos son necesarias para armar, bien sea el prototipo o el circuito final. El <em>software</em> de generación de la PCB también necesita ser alimentado con la información proporcionada en  estas hojas. Cada fabricante suministra su <em>datasheet</em> para sus productos, por eso es normal encontrar varias hojas para una misma referencia. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-celeste
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Al adquirir un elemento es importante consultar la hoja de datos proporcionada por ese fabricante, algunos datos son estándares y no varían, más que todo los referidos a tamaño, distribución de pines y tensiones de operación, otros pueden variar como la temperatura, frecuencia de operación y otros.

    p.mb-4(data-aos="fade") Es importante familiarizarse con las referencias de estos componentes, pues de ellas parte la consulta a las hojas de datos, ya que estas referencias por sí solas brindan información importante. Las compuertas lógicas tienen varios procesos de fabricación y de acuerdo a estos se definen la mayoría de las veces, de aquí se derivan las siguientes familias lógicas, las cuales se podrán observar en la siguiente figura 3.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        h3 Familias lógicas
    figure.mb-5
      img(src='@/assets/curso/tema1-2-infog.png', alt='Familias lógicas')

    p.mb-5(data-aos="fade") También, la referencia suministra información relacionada a este tema; la siguiente tabla 1 muestra esta clasificación.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-9
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr.bg-contenido1.text-white
                th(colspan="3" style="font-size: 18px;") Distribución de las compuertas lógicas
              tr
                th Familia de circuitos lógicos integrados con transistores
                th Tecnología
                th Serie     
            tbody
              tr
                td(rowspan="6") <b>Bipolares</b>
                td(rowspan="5") TTL
                td TTL estándar    
              tr
                td TTL de baja potencia 
              tr
                td TTL shoottky
              tr
                td TTL shootttky de baja potencia 
              tr
                td TTL shoottky avanzado    
              tr
                td ECL
                td
              tr
                td(rowspan="5") <b>MOSFET</b>
                td(rowspan="3") CMOS
                td CMOS estándar
              tr
                td CMOS HC
              tr
                td CMOS HCT
              tr
                td NMOS
                td
              tr
                td PMOS
                td  
              tr
                td(colspan="3" style="text-align: center") BiCMOS Combina transistores bipolares con transistores MOSFET

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-secundario3
        .row.justify-content-center
          .col-md-10.py-3
            h4 La familia TTL, por su parte consta de varias series: 
            ul.lista-ul.px-2
              li.mb-0
                i.lista-ul__vineta
                | Serie TTL Prefijo Negador con 6 compuertas
              li.mb-0
                i.lista-ul__vineta
                | Standard TTL 74 7404
              li.mb-0
                i.lista-ul__vineta
                | Schottky TTL 74S 74S04
              li.mb-0
                i.lista-ul__vineta
                | Bajo Consumo (LS: Low-Power Schottky) TTL 74LS 74LS04
              li.mb-0
                i.lista-ul__vineta
                | Avanzada Schottky TTL 74AS 74AS04
              li.mb-0
                i.lista-ul__vineta
                | Avanzada de bajo consumo, Schottky TTL 74ALS 74ALS04      

    .row.justify-content-center.mb-4
      .col-md-9(data-aos="fade-down")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-2-img2.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Al utilizar toda la información que suministran los <em>datasheet</em>, se puede llegar a implementar, por ejemplo, un circuito integrado para una compuerta AND, como el de la imagen, al tratar de armarlo en una protoboard para las pruebas de funcionamiento de sus compuertas. 

    p(data-aos="fade") Actualmente, es posible simular estos circuitos, al mismo tiempo que se hace la diagramación. Existe <em>software</em> en línea para estas tareas.

    Separador


    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3. <em>Software</em> para diagramación

    p(data-aos="fade") En términos generales, el <em>software</em> de diagramación viene integrado al <em>software</em> de simulación, es decir que al mismo tiempo que se implementa el esquemático, este hace la simulación, ya que esta consiste en presentar solo dos estados. En este caso solo se necesita aplicar las reglas de diseño, lo cual se logra siguiendo las normas aplicadas al diseño electrónico (www.ipc.org).

    p.mb-4(data-aos="fade") Los <em>software</em> más comunes diseñados especialmente para simular circuitos digitales son, ver figura 4:

    .row.mb-5
      .col-md-5.absoluta.mb-4
        img(src='@/assets/curso/tema1-3-img.png', alt='Imagen decorativa')
        img.img-absoluta.imagen_agrandando(src='@/assets/curso/tema3-1-ico.svg', alt='Imagen decorativa')
      .col-md-7.hover-tema1-3
        .row.justify-content-center.tarjeta.bg-botones3.mb-3
          .col-md-10.py-3.text-white
            h4 Los software más comunes diseñados especialmente para simular circuitos digitales son:
            ul.lista-ul.px-2.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Logisim
              li.mb-0
                i.lista-ul__vineta
                | Viernes Lógico
              li.mb-0
                i.lista-ul__vineta
                | Hades 
              li.mb-0
                i.lista-ul__vineta
                | Lógica multimedia 
              li.mb-0
                i.lista-ul__vineta
                | Simulador de Puerta Lógica    
              li.mb-0
                i.lista-ul__vineta
                | Simulador Lógico CEDAR   
              li.mb-0
                i.lista-ul__vineta
                | CircuitMod   
              li.mb-0
                i.lista-ul__vineta
                | Crocclip            
        .row.justify-content-center.tarjeta.bg-gris6
          .col-md-10.py-3.text-white
            h4 También existen softwares <em>online</em> de uso libre:
            ul.lista-ul.px-2.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Circuitlab
              li.mb-0
                i.lista-ul__vineta
                | Inventable
              li.mb-0
                i.lista-ul__vineta
                | Weblidi 
  
    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .tarjeta.bg-degrade-morado.p-3
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-3.px-lg-4
              img.px-lg-3.mb-0(src="@/assets/curso/tema3-1-ico2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-2 Recuerda
                  p.text-small.mb-0 Luego de revisar todo lo relacionado con los diagramas esquemáticos, y una vez finalizado el estudio de los cálculos de circuitos electrónicos digitales, se presentará una implementación del software Circuitlab, incluyendo la simulación.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
