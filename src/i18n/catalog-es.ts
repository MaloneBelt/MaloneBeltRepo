/* Spanish overlay for the catalog content (categories & products).
   Anything not listed here falls back to the English source in
   src/data/categories.ts / src/data/products.ts. Values (mono data) stay
   untranslated; spec LABELS and application chips translate via the maps
   at the bottom. */

import type { CategoryOverlay, ProductOverlay } from "@/i18n/catalog-pt";

export const categoryEs: Record<string, CategoryOverlay> = {
  standard: {
    name: "Estándar",
    subtitle: "Bandas Multilona",
    family: "Línea esencial",
    tagline: "La EP de stock que carga con el trabajo — elige las lonas.",
    description: [
      "La línea estándar de Malone Road Belt: bandas EP multilona fabricadas según DIN 22102 y mantenidas en stock en construcciones de 2, 3 y 4 lonas. La urdimbre de poliéster y la trama de poliamida dan a la carcasa alta resistencia a la tracción con elongación mínima y excelente acanalamiento.",
      "Combina el número de lonas con el grado de tensión y los diámetros de polea de tu máquina, y llévala sin fin, en corte a medida, preparada o lista para ZIP CLIP®. Toda banda tiene referencia cruzada con tu máquina o número de parte OEM.",
    ],
    features: [
      "Fabricadas según DIN 22102, con ensayos de rutina en laboratorio propio",
      "Carcasas EP de 2, 3 y 4 lonas según el grado de tensión",
      "Formatos de suministro: sin fin, preparada, corte a medida o ZIP CLIP®",
      "Empalmes vulcanizados en caliente en fábrica — casi 2x la resistencia del empalme en frío",
      "Números de parte MB con referencia cruzada para recompra rápida",
    ],
  },
  "heavy-duty-specialized": {
    name: "Reforzadas & Especiales",
    subtitle: "Bandas de Alto Desempeño",
    family: "Línea de desempeño",
    tagline: "Hechas para los impactos más duros.",
    description: [
      "Cuando la multilona estándar no alcanza: bandas Ironcleat® de tejido reforzado que duran hasta cuatro veces más, y bandas Ripstop con malla de acero que frenan la chatarra y las varillas que rasgarían una banda común. Las construcciones Fabric Breaker, con una lona amortiguadora extra, absorben el impacto de bloques grandes en trituración y cribado.",
      "Para aplicaciones excepcionales, la línea se extiende a cubiertas resistentes al calor, al frío intenso, a la llama y a aceites y grasas — especificadas caso por caso según el estudio de tu aplicación.",
    ],
    features: [
      "Ironcleat®: dura hasta 4x más que la EP multilona estándar",
      "Ripstop: malla de acero reforzada frena rasgaduras y perforaciones",
      "Fabric Breaker: lona amortiguadora extra protege la carcasa",
      "Cubiertas resistentes al calor, al frío, a la llama y al aceite",
      "Empalme vulcanizado en caliente o preparación ZIP CLIP®",
    ],
  },
  incline: {
    name: "Incline",
    subtitle: "Bandas con Nervios para Agregados",
    family: "Línea con nervios Cleatpro X™",
    tagline: "Roca sin retroceso.",
    description: [
      "Una línea de bandas con nervios Cleatpro X™ construida para el trabajo con agregados: roca triturada, material cribado y todo lo que una cantera pueda arrojarle. Los perfiles de nervio se moldean en caliente integralmente en la cubierta superior de la banda — nada de pegamento ni tornillos — agarrándose a la banda con la misma firmeza con que la banda agarra la carga, alargando la vida útil y manteniendo el material subiendo en inclinaciones fuertes.",
      "Combina el patrón de nervios con una banda base reforzada como la Ironcleat® para resistencia al corte, al impacto y al desgaste con excelente acanalamiento. Nuestro equipo ajusta el perfil, la altura y el paso de los nervios al ángulo de inclinación, al material y a la velocidad de la banda.",
    ],
    features: [
      "Nervios moldeados en caliente en la cubierta superior, con adhesión superior",
      "Perfiles ajustados al ángulo de inclinación, al material y a la velocidad",
      "Alturas populares de 15, 25 y 32 mm, con opción de junta en V",
      "Bandas base Ironcleat®, Fabric Breaker y Ripstop",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  "custom-special": {
    name: "A Medida / Especiales",
    subtitle: "Diseñadas por Encargo",
    family: "Bajo pedido",
    tagline: "¿No está en el catálogo? La fabricamos a tu especificación.",
    description: [
      "Perfiles especiales, bordes laterales, anchos fuera de estándar, compuestos excepcionales — si rueda sobre una banda, podemos fabricarla. Envíanos tu aplicación y nuestro equipo volverá con un plano y una cotización directa.",
    ],
  },
};

export const productEs: Record<string, ProductOverlay> = {
  "2-ply": {
    name: "Banda Transportadora de 2 Lonas",
    tagline: "La especificación ligera para poleas pequeñas y tramos cortos.",
    description: [
      "Una carcasa EP de dos lonas para el lado más ligero del trabajo en equipos móviles: transportadores de transferencia, tramos cortos y máquinas con poleas de diámetro pequeño, donde una banda más pesada pelearía contra el accionamiento en lugar de ayudarlo.",
      "Fabricada según DIN 22102 con cubiertas resistentes a la abrasión, y suministrada sin fin, en corte a medida, preparada o lista para ZIP CLIP® — con referencia cruzada a tu máquina o número de parte OEM.",
    ],
    features: [
      "Carcasa EP de 2 lonas — flexible en poleas de diámetro pequeño",
      "Alta resistencia con baja elongación y excelente acanalamiento",
      "Grados de cubierta resistentes a la abrasión según tu material",
      "Disponible sin fin, preparada, en corte a medida o lista para ZIP CLIP®",
      "Números de parte MB con referencia cruzada para recompra rápida",
    ],
  },
  "3-ply": {
    name: "Banda Transportadora de 3 Lonas",
    tagline: "La especificación todoterreno para trituración y cribado móviles.",
    description: [
      "El caballo de batalla de la línea estándar: una carcasa EP de tres lonas que cubre los transportadores principales y laterales de la mayoría de trituradoras, cribadoras y recicladoras móviles. Suficientemente fuerte para trabajo pesado y abrasivo, suficientemente flexible para acanalar limpiamente sobre rodillos estándar.",
      "Fabricada según DIN 22102 con grados de cubierta según tu material, y suministrada sin fin, en corte a medida, preparada o lista para ZIP CLIP®.",
    ],
    features: [
      "El número de lonas más especificado en equipos móviles",
      "Carcasa EP de 3 lonas — alta resistencia, baja elongación",
      "Grados de cubierta para abrasión, impacto y corte",
      "Disponible sin fin, preparada, en corte a medida o lista para ZIP CLIP®",
      "Números de parte MB con referencia cruzada para recompra rápida",
    ],
  },
  "4-ply": {
    name: "Banda Transportadora de 4 Lonas",
    tagline: "Carcasa de alta tensión para tramos largos y cargas pesadas.",
    description: [
      "Una carcasa EP de cuatro lonas para los accionamientos más exigidos de la línea estándar: apiladores de tramo largo, descarga de trituradora primaria y bandas anchas moviendo tonelaje de verdad. La lona extra soporta la tensión que estiraría una banda más ligera hasta sacarla de servicio.",
      "Fabricada según DIN 22102 con cubiertas resistentes al impacto, y suministrada sin fin, en corte a medida, preparada o lista para ZIP CLIP®.",
    ],
    features: [
      "Carcasa EP de 4 lonas para accionamientos de alta tensión y tramo largo",
      "Absorbe el impacto de bloques grandes en condiciones extremas",
      "Grados de cubierta para abrasión, impacto y corte",
      "Disponible sin fin, preparada, en corte a medida o lista para ZIP CLIP®",
      "Números de parte MB con referencia cruzada para recompra rápida",
    ],
  },
  ironcleat: {
    tagline: "Dura hasta 4x más que la EP multilona estándar.",
    description: [
      "La Ironcleat® usa un tejido especial de urdimbre recta con dos lonas reforzadas más una urdimbre de amarre adicional. El resultado es una carcasa que resiste perforaciones y dura hasta cuatro veces más que una banda EP multilona estándar en la misma aplicación, bajo cubiertas resistentes al corte, al impacto y al desgaste.",
      "Cuando los cambios de banda se están comiendo tus ventanas de mantenimiento, la Ironcleat® es la mejora que se paga sola en disponibilidad.",
    ],
    features: [
      "Dura hasta 4x más que las bandas EP multilona estándar",
      "Tejido especial: 2 lonas de urdimbre recta + urdimbre de amarre",
      "Cubiertas superiores resistentes al corte, al impacto y al desgaste",
      "Menos cambios de banda — más tiempo productivo programado",
      "Disponible sin fin, en corte a medida o preparada para ZIP CLIP®",
    ],
  },
  c15p385: {
    name: "Patrón Chevron C15P385",
    tagline: "El chevron de 15 mm más versátil, para bandas de 400–800 mm.",
    description: [
      "El patrón más versátil de la línea Incline: un chevron de 15 mm moldeado en caliente integralmente en la cubierta superior, cubriendo anchos de banda de 400 a 800 mm. Mantiene el agregado cribado, la arena y los productos agrícolas subiendo sin retroceso en las inclinaciones que los equipos móviles realmente usan.",
      "Disponible sobre banda base EP315/3 en todo el rango de anchos, o reforzada a EP500/3 en 650 y 800 mm para accionamientos más exigidos. También se especifica para cosecha y acopio.",
    ],
    features: [
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 15 mm con un paso corto de 250 mm",
      "Anchos de banda de 400 a 800 mm",
      "Banda base EP315/3 o EP500/3 reforzada",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  c15v450: {
    name: "Patrón Chevron C15V450",
    tagline: "Chevron de 15 mm con junta en V para bandas de 900 mm.",
    description: [
      "Un chevron de 15 mm con la opción de junta en V, moldeado para bandas de 900 mm sobre carcasa EP500/3. La junta en V cierra el patrón en el centro de la banda para que los finos no encuentren un camino recto de vuelta rampa abajo.",
      "Como todo patrón Cleatpro X™, los nervios se moldean en caliente en la cubierta superior, con una adhesión que dura más que los perfiles pegados o atornillados.",
    ],
    features: [
      "La junta en V cierra el patrón contra el retroceso de finos",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 15 mm con paso de 300 mm",
      "Banda base EP500/3 5+1.5",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  c32p460: {
    name: "Patrón Chevron C32P460",
    tagline: "Mordida de 32 mm para agregado grueso y rampas fuertes.",
    description: [
      "Cuando la rampa se empina y el material se vuelve grueso, los nervios de 32 mm del C32P460 le dan a la roca triturada un verdadero apoyo. El paso de 330 mm mantiene los bloques asentados entre nervios en lugar de rebotando por encima de ellos.",
      "Moldeado sobre EP250/2 en 500 mm o EP400/3 en 650 mm de ancho, con la misma unión moldeada en caliente del resto de la línea Incline.",
    ],
    features: [
      "Nervio de 32 mm para rampas fuertes y material grueso",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "El paso de 330 mm asienta los bloques grandes entre nervios",
      "Bandas base EP250/2 o EP400/3",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  s25p750: {
    name: "Patrón de Nervios S25P750",
    tagline: "Nervios de 25 mm en perfil S para bandas de 1050 mm.",
    description: [
      "Un patrón de perfil S con nervios de 25 mm que abarcan 750 mm en bandas de 1050 mm. La geometría abierta suelta el material cribado pegajoso sin dejar de subirlo por la rampa — un favorito en transportadores laterales y de descarga.",
      "Moldeado sobre carcasa EP315/3 con los nervios integralmente unidos a la cubierta superior durante toda la vida de la banda.",
    ],
    features: [
      "La geometría en perfil S suelta el material pegajoso",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 25 mm con paso de 340 mm",
      "Banda base EP315/3 3+1.5",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  c25p1000: {
    name: "Patrón Chevron C25P1000",
    tagline: "Chevron de 25 mm para bandas anchas de alto volumen.",
    description: [
      "El patrón de alto volumen de la línea: un chevron de 25 mm con nervio de 1000 mm de ancho, moldeado para bandas de 1200 a 1600 mm. Hecho para los apiladores y transportadores principales que mueven el tonelaje de verdad.",
      "Corre sobre carcasas EP500/3 con cubiertas 4+2 o 5+1.5, y es además la opción de banda ancha para acopio de granos y tubérculos.",
    ],
    features: [
      "Nervio de 1000 mm de ancho para bandas anchas de alto volumen",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 25 mm con paso de 400 mm",
      "Banda base EP500/3 con cubiertas 4+2 o 5+1.5",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  c15p540: {
    name: "Patrón Chevron C15P540",
    tagline: "El paso corto de 182 mm mantiene los finos subiendo.",
    description: [
      "Un chevron de 15 mm con el paso más corto de la línea — 182 mm — para que el material fino y de flujo libre encuentre un nervio antes de deslizarse de vuelta. Especificado para bandas de 1050 mm sobre carcasa EP400/3.",
      "El patrón Incline preferido para transportadores de finos y material cribado secundario.",
    ],
    features: [
      "Paso corto de 182 mm para material fino de flujo libre",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 15 mm sobre un ancho de nervio de 540 mm",
      "Banda base EP400/3 3+1.5",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  y26v400: {
    name: "Patrón de Nervios Y26V400",
    tagline: "Nervios de 26 mm en perfil Y con junta en V.",
    description: [
      "Un patrón de perfil Y con nervios de 26 mm y opción de junta en V, moldeado para bandas de 500 mm. La geometría ramificada en Y estabiliza el agregado de granulometría mixta que un chevron recto dejaría migrar hacia el borde de la banda.",
      "Suministrado sobre carcasa EP315/3 con nervios moldeados en caliente integralmente.",
    ],
    features: [
      "El perfil Y estabiliza el material de granulometría mixta",
      "La junta en V cierra el patrón contra el retroceso",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 26 mm con paso de 200 mm",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  c15p800: {
    name: "Patrón Chevron C15P800",
    tagline: "Chevron de 15 mm en bandas de 1200 mm.",
    description: [
      "Un chevron de 15 mm en formato ancho, con nervio de 800 mm, moldeado para bandas de 1200 mm sobre carcasa pesada EP400/3 con cubiertas 5+1.5. Mantiene en movimiento un alto volumen de material cribado en transportadores anchos inclinados.",
      "Los nervios se moldean en caliente integralmente en la cubierta superior — la unión dura tanto como la banda.",
    ],
    features: [
      "Nervio de 800 mm de ancho para bandas anchas",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 15 mm con paso de 300 mm",
      "Banda base EP400/3 5+1.5",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  y26v330: {
    name: "Patrón de Nervios Y26V330",
    tagline: "Perfil Y compacto para bandas de 500 mm.",
    description: [
      "El hermano compacto del Y26V400: nervios de 26 mm en perfil Y con 330 mm de ancho, moldeados para bandas de 500 mm sobre una carcasa más pesada EP400/3 con cubiertas 4+2.",
      "Especificado donde los transportadores estrechos de transferencia suben fuerte y la mezcla de material es impredecible.",
    ],
    features: [
      "Perfil Y compacto para transportadores estrechos y empinados",
      "La junta en V cierra el patrón contra el retroceso",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 26 mm con paso de 310 mm",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
  c15p500: {
    name: "Patrón Chevron C15P500",
    tagline: "Chevron de 15 mm para bandas intermedias de 650 mm.",
    description: [
      "Un chevron de 15 mm con nervio de 500 mm y paso largo de 335 mm, moldeado para bandas de 650 mm sobre carcasa EP500/3 con cubiertas 5+1.5.",
      "El caballo de batalla de ancho intermedio para agregado cribado en transportadores laterales de equipos móviles.",
    ],
    features: [
      "Patrón intermedio para bandas de 650 mm",
      "Moldeado en caliente integralmente en la cubierta superior — nunca pegado",
      "Nervio de 15 mm con paso de 335 mm",
      "Banda base EP500/3 5+1.5",
      "Suministrada en rollo, corte, sin fin o preparada para ZIP CLIP®",
    ],
  },
};

/* Spec labels (left column of every spec sheet) */
export const specLabelEs: Record<string, string> = {
  Standard: "Norma",
  Carcass: "Carcasa",
  Coverage: "Cubierta",
  "Tensile rating": "Grado de tracción",
  "Belt width": "Ancho de banda",
  "Belt widths": "Anchos de banda",
  "Temperature range": "Rango de temperatura",
  "Service life": "Vida útil",
  Resistance: "Resistencia",
  Profile: "Perfil",
  "Cleat height": "Altura de nervio",
  "Cleat width": "Ancho de nervio",
  "Base belts": "Bandas base",
};

/* Spec values that are prose rather than data */
export const specValueEs: Record<string, string> = {
  "EP fabric, 2 plies": "Tejido EP, 2 lonas",
  "EP fabric, 3 plies": "Tejido EP, 3 lonas",
  "EP fabric, 4 plies": "Tejido EP, 4 lonas",
  "2 Straight warp": "2 lonas de urdimbre recta",
  "Cut / impact / wear resistant": "Resistente a corte / impacto / desgaste",
  "Up to 4x standard EP": "Hasta 4x la EP estándar",
  "Puncture / rip": "Perforación / rasgadura",
};

/* Application chips */
export const applicationEs: Record<string, string> = {
  Crushing: "Trituración",
  Screening: "Cribado",
  Recycling: "Reciclaje",
  Aggregates: "Agregados",
  Quarrying: "Canteras",
  Mining: "Minería",
  "Demolition waste": "Residuos de demolición",
  "C&D waste": "Residuos de construcción y demolición",
  Stockpiling: "Acopio en pilas",
  "Crop harvesting": "Cosecha",
  "Grain handling": "Manejo de granos",
  "Foundry & clinker": "Fundición y clínker",
  "Biomass & sawdust": "Biomasa y aserrín",
  "Grain & food": "Granos y alimentos",
  Underground: "Subterráneo",
  "Fines conveying": "Transporte de finos",
  "Sand & gravel": "Arena y grava",
  "Side conveyors": "Transportadores laterales",
  "Transfer conveyors": "Transportadores de transferencia",
};

/* Availability chips */
export const availabilityEs: Record<string, string> = {
  "Ships today": "Sale hoy",
  "Made to order": "Bajo pedido",
};

/* Belt formats (home "Choose your format") */
export const beltFormatEs: Record<string, { name: string; description: string }> = {
  endless: {
    name: "Sin Fin — Lista para Instalar",
    description:
      "Vulcanizada en caliente en fábrica en un bucle continuo. Instálala y opera — sin empalme en sitio.",
  },
  stripped: {
    name: "Preparada — Lista para Empalmar",
    description:
      "Largo medido con extremos escalonados superpuestos, preparada para empalme en caliente o en frío en sitio.",
  },
  "cut-length": {
    name: "Corte a Medida",
    description:
      "Largo con extremos rectos y margen de empalme opcional. La opción flexible para stock.",
  },
  "zip-clip": {
    name: "ZIP CLIP® — Lista para el Pasador",
    description:
      "Extremos preparados mecánicamente, unidos con un pasador a presión o roscado. Se instala en aproximadamente una hora.",
  },
};

/* Specialized belts teaser */
export const specializedEs: Record<string, { name: string; description: string }> = {
  heat: {
    name: "Resistente al Calor",
    description:
      "Materiales calientes y abrasivos: clínker, coque, arena de fundición, mineral, escoria.",
  },
  cold: {
    name: "Resistente al Frío",
    description:
      "Cubiertas diseñadas para proteger la carcasa en operación bajo frío extremo.",
  },
  flame: {
    name: "Ignífuga",
    description:
      "Para materiales combustibles — servicio subterráneo, aserrín, almacenes de biomasa.",
  },
  oil: {
    name: "Resistente a Aceites y Grasas",
    description:
      "Resiste la penetración de aceites y grasas: granos, fertilizantes, madera, alimentos, reciclaje.",
  },
};
