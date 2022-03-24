export default {
  global: {
    componenteFormativo: 'Aplicación de los sistemas digitales',
    descripcionCurso:
      'En este componente formativo se tratan temas relacionados con la implementación de sistemas electrónicos digitales, teniendo en cuenta los requerimientos, lectura de diagramas, cálculos digitales y la aplicación en un sistema de simulación de circuitos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diagramas esquemáticos de circuitos electrónicos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Simbología para electrónica digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Hojas de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Software</em> para diagramación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cálculos de circuitos electrónicos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Leyes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Teoremas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Mapas de Karnaugh',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<em>Software</em> de simulación de circuitos electrónicos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos y aplicación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Generación de archivos de trabajo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ensamble de circuitos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Prototipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Conexionado',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tarjetas integradas',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: '<em>Software</em> de aplicación',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'DatasheetBand (s.f.) SN74LS00 View Datasheet (pdf). ',
      link:
        'http://www.datasheetbank.com/datasheet-download/108505/1/ON-Semiconductor/SN74LS00',
    },
    {
      referencia: 'Microbit (s.f.). BBC micro:bit. [Fotografía].',
      link: 'https://microbit.org/es-es/',
    },

    {
      referencia:
        'Mouser elecetrónics (s.f.) Basys 3 FPGA board with callouts. [Imagen].',
      link:
        'https://co.mouser.com/images/marketingid/2020/microsites/0/Digilent_410-183_brd-callout.png',
    },

    {
      referencia:
        'Real Academia Española (2020). Diccionario de la lengua española.',
      link: 'https://dle.rae.es/discreto',
    },
    {
      referencia:
        'Tocci, R., Widmer, N., Moss, G., Romero, E., Alfonso, V., Acuña, R. (2007). Sistemas Digitales, principios y Aplicaciones. (10a. ed). Pearson Educación.',
    },
  ],
  glosario: [
    {
      termino: 'Bit',
      significado:
        'Unidad de medida de cantidad de información, equivalente a la elección entre dos posibilidades igualmente probables. (Real Academia Española, 2020)',
    },
    {
      termino: 'Código binario',
      significado:
        'Es un sistema implementado a través del sistema binario y consiste en combinaciones de bit específicas para representar imágenes, símbolos, textos etc, Ejemplo: Código Reflejado, Código ASCII. ',
    },
    {
      termino: 'Código reflejado',
      significado:
        'El código Gray, nombrado así en honor del investigador Frank Gray (Alpine, Indiana, 13 de septiembre de 1887 - 23 de mayo de 1969), también conocido como Código Reflejado, es un sistema binario en el que dos números sucesivos cambian solamente en un dígito.',
    },
    {
      termino: 'Discreto',
      significado:
        'Mat. Dicho de una magnitud o de un conjunto que toma o está formado por valores separados. (Real Academia Española, 2020)',
    },
    {
      termino: 'FPGA',
      significado:
        'Sigla de <em>Field Programmable Gate Arrays</em>. Es un dispositivo que contiene componentes lógicos programables que pueden interconectarse entre ellos para armar una red lógica.',
    },
    {
      termino: 'PAL',
      significado:
        'Sigla de Arreglos Lógicos Programables. Son matrices de componentes en forma de fusibles y que pueden “quemarse” para dejar un estado lógico de 0 o 1 según la necesidad. ',
    },
    {
      termino: 'Sistema  Binario',
      significado:
        'Sistema numérico implementado que usa sólo dos símbolos, generalmente 0 y 1. Con la combinación de estos, se puede obtener infinidad de valores.',
    },
    {
      termino: 'Sistema Hexadecimal',
      significado:
        'Sistema numérico que utiliza 16 símbolos y complementa al sistema binario para facilitar su uso.',
    },
    {
      termino: 'USB',
      significado:
        'Sigla de <em>Universal Serial Bus</em> o bus serial universal. Es un estándar de comunicación entre dispositivos, que además de comunicaciones suministra electricidad. Ha evolucionado y se ha convertido en el estándar más utilizado para comunicaciones entre dispositivos.',
    },
  ],
  complementario: [
    {
      texto:
        'Arboledas Brihuega, D. (2011). Electrónica básica. Ediciones de la U. ',
      tipo: 'Capítulo de libro',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=7120&pg=&ed=',
    },
    {
      texto: 'Alldatasheet. (s.f.). Electronic Components Datasheet Search.',
      tipo: 'Página web de consulta',
      link: 'https://alldatasheet.com',
    },
    {
      texto:
        'Bitwise Ar. (2017). Arduino desde cero en Español. [Archivo de video]. Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=eBVvD85Ml2c&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2',
    },
    {
      texto: 'Micro:bit Educational Foundation (s.f.) ',
      tipo: 'Página web',
      link: 'https://microbit.org/',
    },
    {
      texto: 'Arduino. (s.f.) ',
      tipo: 'Página web',
      link: 'https://www.arduino.cc/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gewin Alfonso Fernández Cáceres',
        cargo: 'Instructor',
        centro: 'Centro Nacional Colombo Alemán Regional Atlántico',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro de diseño y metrología Regional distrito capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez Diaz',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
