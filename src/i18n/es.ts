import type { Dictionary } from "@/i18n/en";

/* Spanish UI dictionary. Catalog content is localized in
   src/i18n/catalog-es.ts. */

export const es: Dictionary = {
  meta: {
    titleDefault:
      "Malone Road Belt — Bandas Transportadoras OEM, Envío Rápido",
    titleTemplate: "%s · Malone Road Belt",
    description:
      "Bandas transportadoras con especificación OEM/OEA para equipos móviles de procesamiento de materiales. No vendemos bandas — vendemos disponibilidad. Envío el mismo día para bandas en stock.",
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
    "Envío el mismo día para bandas en stock",
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
    downBody:
      "Llámanos. Las bandas en stock salen el mismo día, y la ZIP CLIP® se instala en tan solo una hora.",
  },
  home: {
    heroBadge: "Bandas transportadoras OEM · envío rápido",
    heroTitle: "Moviendo tu negocio",
    heroTitleAccent: "hacia adelante.",
    heroLead:
      "Bandas transportadoras con especificación OEM/OEA para trituración, cribado y reciclaje móviles — con referencia cruzada a tu máquina y envío el mismo día.",
    howEyebrow: "Cómo funciona",
    howTitle: "Tres pasos para volver a operar.",
    stepLabel: "PASO",
    steps: [
      {
        title: "Identifica",
        body: "Dinos el modelo de tu máquina o el número de parte OEM. Nuestra referencia cruzada lo asocia a la especificación MB exacta.",
      },
      {
        title: "Confirma la medida",
        body: "Recibes las dimensiones exactas, el tipo de empalme y el grado de cubierta — todo confirmado contra la especificación OEM antes de enviar nada.",
      },
      {
        title: "Envío el mismo día",
        body: "Las bandas en stock salen el mismo día. Las bandas ZIP CLIP® se instalan en aproximadamente una hora, sin herramientas especiales.",
      },
    ],
    formatsEyebrow: "Elige tu formato",
    formatsTitle: "Una banda, cuatro formas de comprarla.",
    formatsLead:
      "Toda banda MB puede suministrarse en el formato que se ajuste a tu forma de empalmar — o sin empalme alguno.",
    aboutEyebrow: "Sobre Malone Road Belt",
    aboutTitle: "No vendemos bandas. Vendemos disponibilidad.",
    aboutLead:
      "Cada hora que una trituradora está parada cuesta más que la banda que la detuvo. Por eso fabricamos bandas de repuesto con especificación OEM para equipos móviles de procesamiento — con referencia cruzada por máquina, según DIN 22102, y enviadas el día del pedido.",
    stats: [
      { value: "DIN 22102", label: "En cada banda, siempre" },
      { value: "< 1 h", label: "Tiempo de instalación de ZIP CLIP®" },
      { value: "4x", label: "Vida útil de Ironcleat® vs. EP estándar" },
    ],
  },
  productsPage: {
    metaTitle: "Productos",
    metaDescription:
      "Bandas transportadoras OEM organizadas como tú compras: bandas multilona estándar, construcciones reforzadas y especiales, la línea con nervios Incline Cleatpro X™ — y fabricación a medida según tu especificación.",
    eyebrow: "Productos",
    title: "Bandas fabricadas a la especificación de tu máquina.",
    lead: "Cada banda tiene referencia cruzada con tu máquina o número de parte OEM y se fabrica según DIN 22102. Sin juegos de precios — envíanos la especificación y la cotizamos directo.",
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
      "Bandas multilona estándar, construcciones reforzadas y la línea con nervios Incline — cada una construida en torno a una aplicación. Abre una línea para ver la historia completa y luego entra a la banda que necesitas. ¿Necesitas algo especial? Esa tarjeta te lleva directo a nosotros.",
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
      "Solicita una cotización de banda con referencia cruzada, o llámanos si tu máquina está parada — las bandas en stock salen el mismo día.",
    eyebrow: "Contacto",
    title: "Recibe una cotización directa.",
    lead: "Envíanos el modelo de tu máquina o el número de parte OEM. Recibirás la especificación con referencia cruzada, el estado de stock y el precio — sin rodeos.",
    downBody:
      "Sáltate el formulario. Llámanos y hacemos la referencia cruzada de tu banda por teléfono — las bandas en stock salen hoy.",
  },
  quoteForm: {
    urgencyLabel: "¿Qué tan urgente es?",
    downNowTitle: "Máquina parada ahora",
    downNowSub: "Priorizamos y enviamos el mismo día",
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
      "Te responderemos en menos de una hora hábil con la especificación de referencia cruzada y el precio directo. Si tu máquina está parada, llámanos — las bandas en stock salen hoy.",
    errName: "Ingresa tu nombre",
    errEmail: "Ingresa un correo electrónico válido",
    errMessage: "El mensaje es demasiado largo",
  },
  about: {
    metaTitle: "Nosotros",
    metaDescription:
      "Malone Road Belt fabrica bandas transportadoras de repuesto con especificación OEM para trituración, cribado y reciclaje móviles — referencia cruzada por máquina, DIN 22102, envío el mismo día.",
    eyebrow: "Sobre Malone Road Belt",
    title: "No vendemos bandas. Vendemos disponibilidad.",
    lead: "Cada hora que una trituradora está parada cuesta más que la banda que la detuvo. Por eso fabricamos bandas de repuesto con especificación OEM para equipos móviles de procesamiento — con referencia cruzada por máquina, según DIN 22102, y enviadas el día del pedido.",
    storyTitle: "Gente de bandas.",
    storyParagraphs: [
      "Malone Road Belt existe para un único momento de compra: el día en que tu trituradora, cribadora o recicladora necesita una banda nueva. El equipo móvil no espera — así que, en lugar de vender caucho genérico por metro, mantenemos bandas con especificación OEM para las máquinas que realmente trabajan en canteras, plantas de reciclaje y obras viales, listas para enviar.",
      "Detrás de la línea hay un motor de referencia cruzada: modelos de máquina y números de parte OEM mapeados a especificaciones MB exactas — ancho, largo, lonas, empalme y grado de cubierta. Envíanos cualquiera de los dos y recibirás la medida confirmada, no un catálogo por descifrar.",
      "Atendemos a operadores y distribuidores en Irlanda, el Reino Unido y más allá — y cada vez que llamas, una persona contesta el teléfono.",
    ],
    stats: [
      { value: "DIN 22102", label: "En cada banda, siempre" },
      { value: "Mismo día", label: "Despacho de bandas en stock" },
      { value: "< 1 h", label: "Tiempo de instalación de ZIP CLIP®" },
      { value: "4x", label: "Vida útil de Ironcleat® vs. EP estándar" },
    ],
    howEyebrow: "Cómo trabajamos",
    howTitle: "Tres promesas en cada pedido.",
    values: [
      {
        title: "Referencia cruzada, no suposiciones",
        body: "Cada pedido parte del modelo de tu máquina o del número de parte OEM. Nuestra mesa de referencia cruzada confirma dimensiones, empalme y grado de cubierta contra la especificación OEM antes de cualquier envío.",
      },
      {
        title: "Especificación OEM, certificada",
        body: "Las bandas se fabrican según DIN 22102 en un proceso certificado ISO 9001, y cada número de parte MB queda registrado para que tu próxima recompra sea un correo de una línea.",
      },
      {
        title: "Construido en torno a tu parada",
        body: "Las bandas en stock salen el mismo día. Cuando la máquina ya está parada, la ZIP CLIP® te pone a rodar de nuevo en una hora — sin cuadrilla de empalme, sin tiempo de curado.",
      },
    ],
    manufacturedTo: "Fabricadas según:",
    oemEyebrow: "Fabricantes",
    oemTitle: "Las marcas OEM que cubrimos.",
    oemLead:
      "Toda banda empieza en una máquina. Estos son los fabricantes cuyas trituradoras, cribadoras, lavadoras y recicladoras atiende nuestra mesa de referencia cruzada todos los días.",
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
