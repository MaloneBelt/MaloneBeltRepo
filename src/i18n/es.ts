import type { Dictionary } from "@/i18n/en";

/* Spanish UI dictionary. Catalog content is localized in
   src/i18n/catalog-es.ts. */

export const es: Dictionary = {
  meta: {
    titleDefault:
      "Malone Road Belt — Bandas Transportadoras OEM, Envío al Día Siguiente",
    titleTemplate: "%s · Malone Road Belt",
    description:
      "Bandas transportadoras con especificación OEM/OEA para equipos móviles de procesamiento de materiales.",
  },
  common: {
    skipToContent: "Ir al contenido",
    machineDownRightNow: "¿Máquina parada ahora mismo?",
    requestQuote: "Solicitar cotización",
    contactUs: "Contáctanos",
    talkToUs: "Habla con nosotros",
    viewProduct: "Ver producto",
    viewRange: "Ver línea",
    belt: "banda",
    belts: "bandas",
    tagline: "Moviendo tu negocio hacia adelante.",
    motto: "No vendemos bandas. Vendemos disponibilidad.",
    home: "Inicio",
    products: "Productos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
  },
  nav: {
    products: "Productos",
    about: "Nosotros",
    contact: "Contacto",
    comingSoon: "Próximamente",
  },
  footer: {
    productsHeading: "Productos",
    contactHeading: "Contacto",
    rights: "Todos los derechos reservados.",
  },
  trustRow: [
    "Especificación OEM, con referencia cruzada",
    "Fabricadas según DIN 22102",
    "Envío al día siguiente para bandas en stock",
  ],
  beltMatch: {
    byMachine: "Por máquina",
    byPart: "Por nº de parte OEM",
    placeholderMachine:
      "ej.: Powerscreen Chieftain 1400 — transportador principal",
    placeholderPart: "ej.: MB-8830-IC o nº de parte OEM",
    ariaMachine: "Buscar por máquina",
    ariaPart: "Buscar por número de parte OEM",
    searchMode: "Modo de búsqueda",
    submit: "Encontrar mi banda →",
    popular: "Populares:",
  },
  ctaBand: {
    planTitle: "¿Planeando tu próximo cambio de banda?",
    planBody:
      "Envíanos el modelo de tu máquina o el número de parte OEM y recibe una cotización con referencia cruzada — con el estado de stock por delante.",
  },
  home: {
    heroTitle: "Moviendo tu negocio",
    heroTitleAccent: "hacia adelante.",
    heroLead:
      "Bandas transportadoras con especificación original para todos los equipos móviles/portátiles de procesamiento de materiales y reciclaje — con referencia cruzada a tu máquina y envío al día siguiente.",
    howEyebrow: "Cómo funciona",
    howTitle: "Tres pasos para volver a operar.",
    stepLabel: "PASO",
    steps: [
      {
        title: "Identifica",
        body: "Dinos la marca y el modelo o los números de parte OEM. Nuestra referencia cruzada lo asocia a la especificación exacta de banda MRB.",
      },
      {
        title: "Confirma el empalme",
        body: "Elige tu empalme: grapas mecánicas o vulcanizado sin fin.",
      },
      {
        title: "Envío con varias opciones",
        body: "",
      },
    ],
  },
  productsPage: {
    metaTitle: "Productos",
    metaDescription:
      "Bandas transportadoras OEM organizadas como tú compras: bandas multilona estándar, construcciones reforzadas y especiales, la línea con nervios MRB CleatMax™ — y fabricación a medida según tu especificación.",
    eyebrow: "Productos",
    title: "Bandas fabricadas a la especificación de tu máquina.",
    lead: "Bandas transportadoras con especificación original para todos los equipos móviles/portátiles de procesamiento de materiales y reciclaje — con referencia cruzada a tu máquina y envío al día siguiente.",
    noMatchFor: "Sin resultado exacto para",
    matchFor: "resultado para",
    matchesFor: "resultados para",
    clearSearch: "Limpiar búsqueda",
    matchingRanges: "Líneas coincidentes",
    matchingBelts: "Bandas coincidentes",
    noMatchBody:
      "Nuestra mesa de referencia cruzada confirma cada medida a mano — si tu máquina o número de parte aún no aparece aquí, envíanoslo y volveremos con la especificación exacta, normalmente en menos de una hora.",
    categoriesEyebrow: "Categorías",
    categoriesTitle: "Navega por línea.",
    categoriesLead:
      "Bandas multilona estándar, construcciones reforzadas y la línea con nervios MRB CleatMax — cada una construida en torno a una aplicación. Abre una línea para ver la historia completa y luego entra a la banda que necesitas. ¿Necesitas algo especial? Esa tarjeta te lleva directo a nosotros.",
    byCategoryEyebrow: "Productos por categoría",
    byCategoryTitle: "Cada banda, en su línea.",
    specializedEyebrow: "Bandas especiales",
    specializedTitle: "Aplicaciones excepcionales, cubiertas.",
    specializedLead:
      "Calor, frío extremo, llama o aceite — los compuestos de cubierta especiales se cotizan caso por caso según el estudio de tu aplicación.",
  },
  categoryPage: {
    allProducts: "Todos los productos",
    applications: "Aplicaciones",
    inRangeEyebrow: "En esta línea",
    inRangeTitleSuffix: "listas para especificar.",
    by: "por",
    filterLegend: "Filtrar por patrón",
    filterAll: "Todos los patrones",
  },
  productPage: {
    aboutThisBelt: "Sobre esta banda",
    whyItWins: "Por qué gana",
    applications: "Aplicaciones",
    relatedEyebrow: "Relacionados",
    relatedTitle: "También vale la pena verlos.",
  },
  contact: {
    metaTitle: "Contacto y Cotización",
    metaDescription:
      "Solicita una cotización de banda con referencia cruzada, o llámanos si tu máquina está parada — las bandas en stock salen al día siguiente.",
    eyebrow: "Contacto",
    title: "Recibe una cotización directa.",
    lead: "Envíanos el modelo de tu máquina o el número de parte OEM. Recibirás la especificación con referencia cruzada, el estado de stock y el precio — sin rodeos.",
    downBody:
      "Sáltate el formulario. Llámanos y hacemos la referencia cruzada de tu banda por teléfono — las bandas en stock salen al día siguiente.",
  },
  quoteForm: {
    urgencyLabel: "¿Qué tan urgente es?",
    downNowTitle: "Máquina parada ahora",
    downNowSub: "Priorizamos y enviamos al día siguiente",
    plannedTitle: "Compra planificada",
    plannedSub: "Cotización para un próximo cambio de banda",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    company: "Empresa",
    companyPlaceholder: "Empresa (opcional)",
    email: "Correo electrónico",
    emailPlaceholder: "tu@empresa.com",
    phone: "Teléfono",
    phonePlaceholder: "Teléfono (opcional)",
    product: "Producto",
    productPlaceholder: "No estoy seguro — ayúdame a identificarla",
    beltWidth: "Ancho de banda",
    beltWidthPlaceholder: "ej.: 1000 mm",
    beltLength: "Largo de banda",
    beltLengthPlaceholder: "ej.: 7150 mm",
    message: "Mensaje",
    messagePlaceholder:
      "Modelo de máquina, número de parte OEM o cualquier dato que ayude a identificar la banda",
    submit: "Solicitar mi cotización",
    successTitle: "Solicitud de cotización recibida.",
    successBody:
      "Te responderemos en menos de una hora hábil con la especificación de referencia cruzada y el precio directo. Si tu máquina está parada, llámanos — las bandas en stock salen al día siguiente.",
    errName: "Ingresa tu nombre",
    errEmail: "Ingresa un correo electrónico válido",
    errMessage: "El mensaje es demasiado largo",
    errSubmit:
      "Algo salió mal al enviar tu solicitud. Inténtalo de nuevo — o llámanos y la tomamos por teléfono.",
  },
  about: {
    metaTitle: "Nosotros",
    metaDescription:
      "Malone Road Belt es una empresa especializada en bandas transportadoras y repuestos — distribuidor OEM autorizado de Smiley Monroe que atiende Estados Unidos, el Caribe y Latinoamérica.",
    eyebrow: "Sobre Malone Road Belt",
    title: "Moviendo tu negocio hacia adelante.",
    lead: "Malone Road Belt es una empresa especializada en bandas transportadoras y repuestos, construida alrededor de una idea sencilla: hacer que comprar la banda correcta sea más fácil, más rápido y más confiable. Atendemos procesamiento de materiales, agregados, reciclaje, construcción vial, fresado, madera, residuos, agro e industria en todo Estados Unidos — con soporte adicional para el Caribe y Latinoamérica.",
    storyTitle: "Conocemos los equipos.",
    storyParagraphs: [
      "Venimos del lado de los equipos de esta industria — y eso importa. En lugar de esperar que nos digas exactamente qué banda necesitas, recorremos la cadena nosotros mismos: fabricante → máquina → modelo → aplicación → banda → número de parte → repuesto correcto.",
      "Desarrollamos continuamente una extensa base de datos de equipos y bandas que cubre máquinas de Wirtgen, McCloskey, Powerscreen, Terex Finlay, Sandvik, Extec, Rubble Master, Anaconda, Roadtec, Vermeer, Doppstadt, Komptech y muchos más en trituración, cribado, molienda, reciclaje y fresado.",
      "Como distribuidor OEM autorizado de bandas Smiley Monroe, MRB combina ese conocimiento de máquinas con una amplia gama de bandas transportadoras — y con personas a las que de verdad les importa que tu máquina vuelva a trabajar.",
    ],
    storyPunch: "Dinos la máquina. Nosotros encontramos la banda.",
    stats: [
      {
        value: "DIN 22102",
        arcTop: "Calidad",
        arcBottom: "Garantizada",
        label: "Todas las bandas se fabrican y ensayan según DIN 22102",
      },
      {
        value: "Día siguiente",
        arcTop: "En stock",
        arcBottom: "Envío",
        label: "Las bandas en stock se despachan al día hábil siguiente",
      },
      {
        value: "< 1 hora",
        arcTop: "Zip Clip®",
        arcBottom: "Montaje",
        label: "Una banda preparada con ZIP CLIP® se instala en menos de una hora",
      },
      {
        value: "4x más",
        arcTop: "Ironcleat®",
        arcBottom: "Vida útil",
        label: "Ironcleat® dura hasta 4 veces más que una banda EP estándar",
      },
    ],
    howEyebrow: "Cómo trabajamos",
    howTitle: "Construidos alrededor del cliente.",
    values: [
      {
        title: "Personas primero, sin guiones",
        body: "Personas reales que entienden tu equipo: respuestas rápidas, comunicación directa, referencia cruzada precisa y responsabilidad hasta que la máquina vuelva a moverse. No queremos que el precio sea la razón para elegir a MRB — queremos hacerte el trabajo más fácil.",
      },
      {
        title: "Mentalidad de mismo día",
        body: "Cuando una banda falla, la máquina está parada ahora mismo, y la parada cuesta dinero. Nuestro inventario, red de proveedores y logística están construidos alrededor de la velocidad — donde lo permiten, ofrecemos soluciones el mismo día y expeditas. A veces la banda más valiosa no es la más barata; es la que realmente puedes conseguir.",
      },
      {
        title: "Especialistas en fresado vial",
        body: "El fresado es una de nuestras especialidades centrales. Damos soporte a bandas de repuesto para equipos de fresado con una referencia cruzada creciente de máquinas, dimensiones, especificaciones y números de parte OEM. Dinos la máquina y el modelo — nosotros hacemos la tarea.",
      },
      {
        title: "Los datos son parte del producto",
        body: "Nuestra mayor inversión no está en un estante de bodega — es información. Bases de referencia cruzada organizadas por fabricante, modelo, posición del transportador, dimensiones y números OEM nos permiten resolver problemas más rápido. Conocer la máquina. Conocer la banda. Poner al cliente en marcha.",
      },
    ],
    manufacturedTo: "Fabricadas según:",
    supplyEyebrow: "Qué suministramos",
    supplyTitle: "De la máquina móvil a la línea estacionaria.",
    supplyLead:
      "Bandas transportadoras y productos relacionados para equipos móviles y estacionarios — desde canteras, plantas de agregados y asfalto hasta concreto, reciclaje, chatarra, residuos, madera, agro, minería y gestión de agua. Nuestro trabajo no es vender un pedazo de caucho; es ayudar a que la máquina del cliente siga moviéndose.",
    supplyItems: [
      "Bandas para fresadoras viales",
      "Bandas para trituradoras",
      "Bandas para cribadoras",
      "Bandas para apiladores y radiales",
      "Bandas para astilladoras",
      "Bandas para equipos de reciclaje",
      "Bandas para agregados y cantera",
      "Bandas para plantas de asfalto y concreto",
      "Bandas para procesamiento de residuos",
      "Bandas agrícolas",
      "Bandas de elevador",
      "Bandas con nervios y especiales",
      "Correas en V y de transmisión",
      "Componentes y repuestos",
      "Soluciones a medida",
    ],
    standardEyebrow: "Nuestro estándar",
    standardTitle: "Hacer negocios con MRB debe sentirse simple.",
    standardItems: [
      "Escuchar primero",
      "Entender la aplicación",
      "Encontrar el producto correcto",
      "Comunicar con claridad",
      "Movernos rápido",
      "Respaldar lo que vendemos",
    ],
    standardPunch:
      "Y cuando algo sale mal, no nos escondemos detrás de correos, políticas ni departamentos — trabajamos el problema.",
    visionQuote:
      "Queremos construir el Amazon de las bandas — sin perder el servicio personal de una empresa pequeña.",
    visionBody:
      "No buscamos ser la empresa más grande por serlo. Queremos ser la empresa en la que los clientes confían para hacerlo bien — capaz de resolver una sola banda de repuesto hoy mientras construimos los sistemas, el inventario y el conocimiento para dar soporte a miles de máquinas mañana.",
    marketsLabel: "A quiénes servimos:",
    markets: [
      "Propietarios y operadores de equipos",
      "Contratistas de trituración y cribado",
      "Contratistas de fresado vial",
      "Productores de asfalto",
      "Productores de agregados",
      "Canteras y minas",
      "Productores de concreto",
      "Empresas de reciclaje",
      "Procesadores de chatarra",
      "Gestión de residuos",
      "Molienda de madera y biomasa",
      "Negocios agrícolas",
      "Distribuidores de equipos",
      "Fabricantes OEM",
      "Municipal y gobierno",
      "Instalaciones industriales",
      "Exportación al Caribe y Latinoamérica",
    ],
    oemEyebrow: "Fabricantes",
    oemTitle: "Las marcas OEM que cubrimos.",
    oemLead:
      "Toda banda empieza en una máquina. Estos son los fabricantes cuyas trituradoras, cribadoras, molinos y recicladoras atiende nuestra mesa de referencia cruzada todos los días.",
  },
  comingSoon: {
    metaTitle: "Próximamente",
    metaDescription:
      "El sistema completo de Malone Road Belt está casi listo. Mientras tanto, nuestra mesa de bandas está a una llamada de distancia.",
    badge: "Próximamente",
    title:
      "Nuestro sitio está en construcción. No dudes en contactarnos en cualquier momento",
  },
  notFound: {
    badge: "404 · SIN COINCIDENCIAS",
    title: "Esta línea dejó de moverse.",
    body: "La página que buscas no existe — pero tu banda probablemente sí. Prueba el catálogo de productos o pregúntanos directamente.",
    browseProducts: "Ver productos",
  },
};
