export default {
  global: {
    Name: 'Formulación de ideas de negocio e innovación empresarial',
    Description:
      'El componente formativo desarrolla la capacidad de formular propuestas de innovación y mejoramiento de los procesos productivos. Aborda el análisis de alternativas de solución, la toma de decisiones, las herramientas de mejora continua y la estructura de la propuesta, con el fin de presentar ideas de negocio sustentadas ante la organización y sus aliados.',
    imagenBannerPrincipal: '@/assets/curso/portada/ilustracion.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-3.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Innovación y política de fomento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de innovación en la empresa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de innovación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Innovación incremental y disruptiva',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Política pública de innovación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alternativas de solución y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Generación de alternativas empresariales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Matriz de ponderación de alternativas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios cuantitativos y cualitativos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sesgos que distorsionan la decisión',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Conclusión fundamentada',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mejoramiento de procesos productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proceso productivo y sus componentes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Problemas tecnológicos en las mipymes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de mejora continua',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Indicadores de desempeño del proceso',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Propuesta de innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estructura de la propuesta de innovación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Lienzo del modelo de negocio',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Propuesta de valor diferenciada',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Instrumentos de apoyo y financiación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Presentación del proyecto ante audiencias',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Casos de formulación en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Innovación de proceso en Moniquirá',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Mejoramiento digital en Neiva',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Innovación social en Guapi',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Innovación tecnológica en Manizales',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/01230000_CF02_CFA_DU.pdf',
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
  glosario: [
    {
      termino: 'Alternativa de solución',
      significado:
        'cada una de las opciones que una organización identifica para responder a un problema o aprovechar una oportunidad. Las opciones deben excluirse entre sí y cubrir en conjunto las salidas razonables del problema.',
    },
    {
      termino: 'Innovación disruptiva',
      significado:
        'innovación que crea un mercado nuevo o transforma uno existente, al entrar por segmentos poco atendidos con una oferta más simple o económica termina desplazando a los competidores establecidos.',
    },
    {
      termino: 'Innovación empresarial',
      significado:
        'introducción efectiva de productos, servicios, métodos o formas de organización nuevos o significativamente mejorados, que generan valor para la empresa, sus clientes y el territorio en el que opera.',
    },
    {
      termino: 'Innovación incremental',
      significado:
        'mejora gradual y sostenida de productos, procesos o servicios existentes, que eleva el desempeño sin alterar el modelo de negocio ni la estructura del mercado en el que la empresa compite.',
    },
    {
      termino: 'Kaizen',
      significado:
        'término japonés que designa la mejora continua. Nombra el enfoque de gestión que sostiene el cambio en el tiempo mediante ajustes pequeños y frecuentes, propuestos por el propio equipo de operación.',
    },
    {
      termino: '<em>Lean manufacturing</em>',
      significado:
        'enfoque de gestión que clasifica y suprime el desperdicio del proceso, entendido como cualquier actividad que consume recursos sin agregar valor para quien compra el producto.',
    },
    {
      termino: 'Lienzo del modelo de negocio',
      significado:
        'herramienta de nueve bloques que representa en una sola página cómo una organización crea, entrega y captura valor, y permite verificar la coherencia entre segmentos, canales, ingresos y costos.',
    },
    {
      termino: 'Matriz de ponderación',
      significado:
        'herramienta de análisis que asigna pesos a los criterios de evaluación y calificaciones a cada alternativa, con el fin de obtener un puntaje comparable que deje constancia de las razones de la elección.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'conjunto ordenado de tareas que convierte recursos en un bien o en un servicio destinado a un cliente. Se compone de entradas, transformación, salidas y retroalimentación.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'enunciado que precisa por qué el cliente debe preferir una solución frente a las existentes. Para resultar efectiva debe ser específica, cuantificada, creíble y diferenciada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Christensen, C. M. (1997). <em>The innovator’s dilemma: when new technologies cause great firms to fail</em>. Harvard Business School Press.',
    },
    {
      referencia:
        'Confecámaras. (2023). <em>Dinámica de creación de empresas en Colombia 2023</em>. Confederación Colombiana de Cámaras de Comercio.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009). <em>Ley 1286 de 2009, por la cual se modifica la Ley 29 de 1990, se transforma a Colciencias en departamento administrativo y se fortalece el Sistema Nacional de Ciencia, Tecnología e Innovación</em>. Diario Oficial n.º 47.241.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2019). <em>Ley 1951 de 2019, por la cual se crea el Ministerio de Ciencia, Tecnología e Innovación y se fortalece el Sistema Nacional de Ciencia, Tecnología e Innovación</em>. Diario Oficial n.º 50.846.',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2023). <em>Encuesta de micronegocios (EMICRON)</em>. DANE.',
    },
    {
      referencia:
        'iNNpulsa Colombia. (2023). <em>Ecosistemas regionales de emprendimiento: guía de navegación para emprendedores</em>. Ministerio de Comercio, Industria y Turismo.',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos y Oficina Estadística de la Unión Europea. (2018). <em>Manual de Oslo: guía para la recogida, comunicación y utilización de datos sobre innovación</em> (4.ª ed.). OCDE.',
    },
    {
      referencia:
        'Osterwalder, A. y Pigneur, Y. (2010). <em>Business model generation: a handbook for visionaries, game changers, and challengers</em>. John Wiley &amp; Sons.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2022). <em>Guía del Fondo Emprender: requisitos, convocatorias y proceso de financiación</em>. SENA.',
    },
    {
      referencia:
        'Womack, J. P. y Jones, D. T. (2003). <em>Lean thinking: banish waste and create wealth in your corporation</em> (2.ª ed.). Free Press.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
