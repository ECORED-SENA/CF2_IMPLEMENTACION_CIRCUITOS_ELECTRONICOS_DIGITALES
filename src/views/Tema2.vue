<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Cálculos de circuitos electrónicos digitales

    p(data-aos="fade") Aunque en la actualidad existen aplicaciones que resuelven problemas de tipo booleano, las técnicas usadas para resolverlos siempre serán útiles y permiten un análisis efectivo y resultados confiables.

    p(data-aos="fade") Los cálculos están orientados a obtener un valor de dos posibles y con la combinación de estos, y siguiendo el sistema numérico binario, se puede obtener infinitos valores.

    p.mb-5(data-aos="fade") Los cálculos en circuitos digitales, van orientados a obtener uno o más valores de salida, dada una condición de entrada, es decir que se debe aplicar la lógica para seguir el circuito, interpretando su simbología hasta llegar a la salida y predecir lo que sucederá.  En la siguiente figura 5 se presenta un ejemplo.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        ImagenInfografica.color-acento-contenido.tema2.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-1-img.jpg', alt='Cálculos en circuitos digitales')

          .tarjeta.bg-gris4.p-3(x="57%" y="7%" numero="+")
            p.mb-0 <b style="font-size: 18px;">Por ejemplo</b>, dado el circuito de la imagen, se puede predecir su salida analizando cada compuerta según su tabla de verdad.

          .tarjeta.bg-gris4.p-3(x="47%" y="68%" numero="+")
            p <b style="font-size: 18px;">Todas las entradas están en 0</b>, por lo que un compuerta AND pone un 0 en su salida para esta condición, lo que indica que todas las compuertas AND, le entregan a las entrada de la NAND un 0 lógico; según su tabla de verdad la NAND pone un 1 lógico en su salida. Por lo que ese sería el resultado, la ecuación matemática se puede escribir de la siguiente manera:
            img(src='@/assets/curso/tema2-1-imginfog1.svg', alt='Tinkercad en modo List') 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.tarjeta.bg-gris4
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 <b style="font-size: 18px;">Una técnica en los cálculos de circuitos digitales</b>, consiste en minimizar el uso de compuertas lógicas; es decir, llevar el circuito a otro, de tal manera que se usen menos compuertas, reduciendo los gastos, la complejidad y el circuito hace el mismo trabajo.

    Separador


    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1. Conceptos

    p(data-aos="fade") Además de los conceptos ya definidos, se deben tener en cuenta algunos aspectos que ayudan con el análisis de los problemas presentados. Lo primero a tener presente  es que se debe iniciar con la obtención de la tabla de verdad; para elaborar una tabla de verdad es necesario tener claro el concepto de sistemas numéricos. En libro Sistemas Digitales, Principio y aplicaciones de Tocci, R., et. Al (2007), en su capítulo 2, trata de manera muy didáctica este concepto.

    p.mb-5(data-aos="fade") La tabla de verdad se construye escribiendo todas las posibles entradas y sus combinaciones, es decir teniendo en cuenta cuando esté en 1 y en 0 y escribir la salida deseada según lo requiera el problema. A continuación se expone un caso de análisis.

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Dgcg9kpy7bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador


    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2. Leyes

    p(data-aos="fade") Las leyes aplicadas a los circuitos digitales, ayudan mucho en la resolución de problemas, algunas de estas tienen similitud con las ya conocidas en las matemáticas tradicionales, otras son exclusivas y solo tienen aplicación en este contexto. Es necesario familiarizarse con ellas para tener éxito en el análisis de circuitos digitales.      

    AcordionA.tema2-2.mb-5(tipo="a" clase-tarjeta="tarjeta bg-botones1")
      .row.justify-content-center(titulo="Ley conmutativa")
        .col-md-11.mb-4.mb-md-0
          p Esta ley establece que no importa el orden de la variables aplicada a la entrada, el resultado será el mismo; corresponde con la matemática tradicional:
        .col-md-8
          img.mb-4(src='@/assets/curso/tema2-2-acord1-1.svg', alt='Ley conmutativa')
          p Sucede lo mismo para la OR:
          img(src='@/assets/curso/tema2-2-acord1-2.svg', alt='Ley conmutativa')  
      .row.justify-content-center(titulo="Ley asociativa")
        .col-md-11.mb-4.mb-md-0
          p Esta ley establece que cuando se opera con más  de dos variables, el resultado es el mismo inde­pendientemente de la forma en que se agrupen las variables. Para la compuerta OR:
        .col-md-8
          img.mb-4(src='@/assets/curso/tema2-2-acord2-1.svg', alt='Ley asociativa')
          p Sucede lo mismo para la AND:
          img(src='@/assets/curso/tema2-2-acord2-2.svg', alt='Ley asociativa')    
      .row.justify-content-center(titulo="Ley distributiva")
        .col-md-11.mb-4.mb-md-0
          p Esta ley es la misma que la de la matemática tradicional con la diferencia de acá podemos demostrarla usando las compuertas:
        .col-md-8
          img.mb-4(src='@/assets/curso/tema2-2-acord3-1.svg', alt='Ley distributiva')
        .col-md-11.mb-4.mb-md-0
          p La ley distributiva expresa también el proceso de sacar factor común en el que la variable común A se saca como factor de las otras dos.

    p(data-aos="fade") Las siguientes expresiones más que leyes pasan a ser reglas:

    .row.justify-content-center
      .col-md-10(data-aos="fade-down")
        ImagenInfografica.color-acento-contenido.tema2-2
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-2-infog.svg', alt='reglas')

          .tarjeta.bg-gris5.p-3(x="25.7%" y="11%")
            p Como una de las entradas está forzada a ser siempre 0, el valor que tome la variable se verá reflejado en la salida. Esto también se deduce analizando la tabla de verdad de la compuerta Or.
            img(src='@/assets/curso/tema2-2-infog-1.svg', alt='A + 0 = A' style="width: 190px; margin: 0 auto;")

          .tarjeta.bg-gris5.p-3(x="25.7%" y="26%")
            p Como una de las entradas está forzada a ser siempre 1, la salida siempre será 1 . Esto también se deduce analizando la tabla de verdad de la compuerta Or.
            img.mb-4(src='@/assets/curso/tema2-2-infog-2.svg', alt='A + 1 = 1' style="width: 190px; margin: 0 auto;")  
            p Se puede hacer el mismo procedimiento para la compuerta AND y obtendremos los resultados de las reglas 3 y 4.
            .row.justify-content-around
              .col-md-4
                p 3.   A ・ 0 = 0
              .col-md-4
                p 4.   A ・ 1 = A

          .tarjeta.bg-gris5.p-3(x="25.7%" y="63%")
            p En este caso se está aplicando la misma variable a ambas entradas, por tabla de verdad se deduce que el valor que tome la variable A será el que se refleje en Y.
            img.mb-4(src='@/assets/curso/tema2-2-infog-4.svg', alt='A + A = A' style="width: 190px; margin: 0 auto;")  
            p También se puede hacer el mismo análisis para la compuerta AND y obtener la regla 7.
            .row.justify-content-around
              .col-md-5
                p 7.   A ・ A = A

          .tarjeta.bg-gris5.p-3(x="25.7%" y="77%")
            p La lógica nos dice que al aplicar una sola variable a ambas entradas, pero una de ellas se niega o complementa antes de aplicarla, quiere esto decir que una de ellas siempre será 1 y para la compuerta Or, cualquiera que esté en 1, resulta un 1 en la salida.
            img.mb-4(src='@/assets/curso/tema2-2-infog-5.svg', alt='A + Ā = 1' style="width: 190px; margin: 0 auto;")  
            p Se puede aplicar el mismo procedimiento para probar la regla número 8.
            .row.justify-content-around
              .col-md-4
                p 8.   A ・ Ā = 0     

          .tarjeta.bg-gris5.p-3(x="62%" y="37.7%")
            p La regla número 9 dice que si se niega dos veces una misma variable, se obtiene el valor inicial.
            img.mb-4(src='@/assets/curso/tema2-2-infog-6.svg', alt='Ā = A ' style="width: 260px; margin: 0 auto;") 

          .tarjeta.bg-gris5.p-3(x="62%" y="51.7%")
            p La regla número 10 se puede probar implementando el álgebra de boole:
            ul.lista-ul.px-md-4.px-2
              li.mb-0
                i.lista-ul__vineta
                | A + AB = A (aplicar ley distributiva) A(1 + B) 
              li.mb-0
                i.lista-ul__vineta
                | Aplicar la regla 2 a la expresión dentro del paréntesis 1 + B = 1
              li.mb-0
                i.lista-ul__vineta
                | Nos queda A*1 que según la regla 4 es igual a A
            p El siguiente es el circuito equivalente:    
            img.mb-4(src='@/assets/curso/tema2-2-infog-7.svg', alt='Ā = A ' style="width: 260px; margin: 0 auto;")   

          .tarjeta.bg-gris5.p-3(x="62%" y="65.7%")
            p.mb-0 También se recurre al álgebra de boole para probar la regla 11. Se aplica la regla 10 al término “A”   (A = A + AB) y se reemplaza en la ecuación original: 
            .row.justify-content-around
              .col-md-4
                img.mb-3(src='@/assets/curso/tema2-2-infog-8-1.svg', style="width: 260px; margin: 0 auto;")   
            p.mb-0 Se aplica la Regla 7:  <b>A = AA.  </b>  
            p.mb-0 Quedando:  <b>AA + AB + ĀB </b>  
            p.mb-0 Luego se puede agregar al término: <b>ĀA</b>
            p.mb-0 Según la regla 8 es igual a 0 y no altera la ecuación <b>ĀA + AA + AB + ĀB</b> 
            .row.align-items-center
              .col-md-8
                p.mb-0 Se aplica, entonces, la ley distributiva:
              .col-md-4
                img(src='@/assets/curso/tema2-2-infog-8-2.svg', style="width: 300px; margin: 0 auto;") 
            .row
              .col-md-6
                p.mb-0 Se aplica la regla 6: 
              .col-md-3
                img(src='@/assets/curso/tema2-2-infog-8-3.svg', style="width: 55px; margin: 0 auto;") 
            p.mb-3 Finalmente, se aplica la regla 4: <b>A+ B</b>
            p El siguiente es el circuito equivalente
            img.mb-4(src='@/assets/curso/tema2-2-infog-8.svg', alt='A + ĀB = A + B' style="width: 260px; margin: 0 auto;")

          .tarjeta.bg-gris5.p-3(x="62%" y="80%")
            p También se recurre al álgebra de boole para probar la regla 11. Se aplica la regla 10 al término “A”   (A = A + AB) y se reemplaza en la ecuación original: 
            img.mb-4(src='@/assets/curso/tema2-2-infog-9.svg', alt='(A+B) (A+C) = A + BC' style="width: 260px; margin: 0 auto;")
            p Queda como opción de ejercitación construir la tabla de verdad y aplicar el álgebra de boole para su demostración matemática.
    
    Separador


    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3. Teoremas

    p(data-aos="fade") Los teoremas aplicados al cálculo digital, y que se complementan muy bien con las leyes y reglas del álgebra de boole, fueron propuestos por Augustus De Morgan (Madurai, India; 27 de junio de 1806 - Londres, 18 de marzo de 1871)  y son de amplia utilización en la simplificación de ecuaciones booleanas y por lo tanto de compuertas aplicadas a un circuito.

    p.mb-4(data-aos="fade") Estos teoremas proponen lo siguiente, ver figura 6:
    
    

    .row.justify-content-center.mb-4
      .col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 6.</b> Representación del teorema
        .row
          .col-md-6.bg-primario1.p-4
            p.text-white.mb-0 Se puede cambiar una expresión que está con compuertas AND a otra con la misma función pero que usan solo compuertas OR.
          .col-md-6.borde-azul.p-3
            img(src='@/assets/curso/tema2-3-img.svg', alt='Ley distributiva')

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .row
          .col-md-6.bg-contenido1.p-4
            p.text-white.mb-0 Se puede cambiar una expresión que está con compuertas AND a otra con la misma función pero que usan solo compuertas OR.
          .col-md-6.borde-azul.p-3
            img(src='@/assets/curso/tema2-3-img2.svg', alt='Ley distributiva')

    p.mb-5(data-aos="fade") La aplicación principal de los teoremas de De Morgan es la de llevar una expresión utilizando compuertas lógicas de un solo tipo. Esto es ventajoso para los circuitos puesto que solo requieren de un solo tipo de producto y para el caso de los fabricantes, permite usar la misma plantilla para el desarrollo de todos los productos; se plantea el siguiente ejemplo.

    .row.justify-content-center
      .col-md-10(data-aos="fade-down")
        SlyderE.tarjeta(indicadores="centro")
          .row.justify-content-around.bg-botones3.tarjeta.py-4
            .col-md-5.col-6.mb-4.mb-md-0
              img.py-3(src='@/assets/curso/tema2-3-slider1-1.svg', alt='Imagen decorativa')
            .col-md-5.col-6
              img.py-3(src='@/assets/curso/tema2-3-slider1-2.svg', alt='Imagen decorativa')
          .tarjeta.bg-botones3.p-4
            .row.justify-content-around.bg-slyder.tarjeta
              .col-md-5.mb-4.mb-md-0.py-4
                p Dada la siguiente ecuación, aplicar los teoremas de De Morgan para simplificar el circuito:
                img.mb-4(src='@/assets/curso/tema2-3-slider2-1.svg', alt='Formula' style="width: 100px; margin: 0 auto;") 
                p.mb-3 El circuito según la ecuación sería este con cuatro compuertas y dos circuitos integrados:
                img.mb-0(src='@/assets/curso/tema2-3-slider2-3.svg', alt='Formula' style="width: 210px; margin: 0 auto;")
              .col-md-5.col-6
                img(src='@/assets/curso/tema2-3-slider2-2.svg', alt='Imagen decorativa')    
          .tarjeta.bg-botones3.p-4
            .row.justify-content-around.tarjeta
              .col-md-5.col-6.mb-4.mb-md-0.py-4
                img.py-2(src='@/assets/curso/tema2-3-slider3-1.svg', alt='Imagen decorativa')
              .col-md-6
                .row.align-items-center.mb-3
                  .col-md-8.text-white
                    p.mb-0 Apliquemos el primer teorema solo a los términos debajo del complemento, es decir a la suma de las variables cada una de ellas negada:
                  .col-md-4.col-5
                    img.py-3(src='@/assets/curso/tema2-3-slider4-1.svg', alt='Imagen decorativa')
                .row.align-items-center.mb-3
                  .col-md-8.text-white
                    p.mb-0 Como esta expresión estaba toda negada, se le debe colocar la negación a la obtenida:
                  .col-md-4.col-5
                    img.py-3(src='@/assets/curso/tema2-3-slider4-2.svg', alt='Imagen decorativa')   
                .row.align-items-center.mb-3
                  .col-md-8.text-white
                    p.mb-0 Si aplicamos la regla 9 entonces la ecuación final nos queda:
                  .col-md-4.col-5
                    img.py-3(src='@/assets/curso/tema2-3-slider4-3.svg', alt='Imagen decorativa')     
                .row.align-items-center.mb-3
                  .col-md-8.text-white
                    p.mb-0 Lo que nos deja con la implementación de una sola compuerta AND de tres entradas.
                  .col-md-4.col-5
                    img.py-3(src='@/assets/curso/tema2-3-slider4-4.svg', alt='Imagen decorativa')    
          .row.justify-content-end.align-items-center.bg-botones3.tarjeta
            .col-md-7.mb-4.mb-md-0
              img(src='@/assets/curso/tema2-3-slider5-2.svg', alt='Imagen decorativa')
            .col-md-4.col-6
              img(src='@/assets/curso/tema2-3-slider5-1.svg', alt='Imagen decorativa')

    Separador


    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4. Mapas de Karnaugh

    p.mb-4(data-aos="fade") Los mapas de Karnaugh son una herramienta útil que permite obtener ecuaciones de forma simple y sin tener que recurrir a reducciones posteriores. Son tan utilizados, que existen aplicaciones en línea y de forma gratuita para obtener los resultados. Fueron propuestos por Maurice Karnaugh, (nacido el 4 de octubre de 1924 en la ciudad de Nueva York) quien es un físico y matemático estadounidense. También se les conoce como diagrama de Veitch. Está conformado por una tabla de tantas celdas como variables posea la tabla de verdad; es decir se construyen partiendo de la tabla de verdad. A continuación se presentan algunos ejemplos.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10  
        AcordionA.tema2-4.mb-5(tipo="a" clase-tarjeta="tarjeta bg-contenido1")
          .row.justify-content-center(titulo="Mapa para dos variables")
            .col-md-11.mb-4.mb-md-0
              p Para la construcción del mapa, se debe entender primero que todo que en la casilla del mapa va el correspondiente  valor decimal, es decir el peso de la casilla en la tabla de verdad, aunque este valor luego será reemplazado por un 1 o un 0, de acuerdo al valor real en la tabla de verdad. En otras palabras, con esto lo que se quiere indicar es que cada casilla debe ir asociada a su respectivo valor de acuerdo al código binario y según la combinación de los valores de las variables A y B. 
              .row.justify-content-center
                .col-md-5
                  img(src='@/assets/curso/tema2-4-acord1-1.svg', alt='Imagen decorativa')
                .col-md-5
                  img(src='@/assets/curso/tema2-4-acord1-2.svg', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Mapa para tres variables")
            .col-md-11.mb-4.mb-md-0
              p A continuación se presenta un mapa con tres variables.
              .row.justify-content-center
                .col-md-5
                  img(src='@/assets/curso/tema2-4-acord2-1.svg', alt='Imagen decorativa')
                .col-md-5
                  img(src='@/assets/curso/tema2-4-acord2-2.svg', alt='Imagen decorativa') 
          .row.justify-content-center(titulo="Mapa para cuatro variables")
            .col-md-5
              img(src='@/assets/curso/tema2-4-acord3-1.svg', alt='Imagen decorativa')
            .col-md-6
              p Para la construcción de estos últimos mapas hay que tener en cuenta algunos detalles. Nótese que hay un salto en las casillas correspondientes al 12, 13, 14 y 15; al seguir por ejemplo, la primera fila, salta del 4 al 12 y luego viene el 8, esto no es un error es así porque en la secuencia binaria,  en el encabezado, solo debe variar un bit de una casilla a la siguiente, nótese que si se coloca el 8 inmediatamente del 4, cambiarían dos bit, del 0100(4) al 1000(8), cambia el bit correspondiente a la D y el de la C; en cambio del 0100(4) al 1100(12) solo cambia el bit correspondiente a la C. Lo mismo sucede para las columnas.
              p Esta secuencia corresponde al código reflejado o código Gray.
              img(src='@/assets/curso/tema2-4-acord3-2.svg', alt='Imagen decorativa')               

    p.mb-4(data-aos="fade") Cada casilla lleva asociado su código binario según la tabla de verdad, es decir el 0000 decimal (0), se obtiene combinando los dos valores de sus variables A y B en el encabezado de las columnas y C y D, en el encabezado de las filas. Para el 2 por ejemplo es 0010. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-degrade-azul.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4.imagen_girando
              img.px-lg-3.mb-0(src="@/assets/curso/banner2.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-2 Implementación de sistemas digitales
                  p.text-small.mb-0 En el siguiente video se expone el proceso completo de aplicación, iniciando desde el álgebra de boole hasta llegar al mapa de Karnaugh.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.youtube.com/watch?v=f46DZ0WHDmk" target="_blank")
                    span Video
                    i.fas.fa-play-circle




</template>

<script>
export default {
  name: 'Tema2',
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
