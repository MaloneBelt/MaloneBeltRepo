/* Portuguese overlay for the catalog content (categories & products).
   Anything not listed here falls back to the English source in
   src/data/categories.ts / src/data/products.ts. Values (mono data) stay
   untranslated; spec LABELS and application chips translate via the maps
   at the bottom. */

interface CategoryOverlay {
  name?: string;
  subtitle?: string;
  family?: string;
  tagline?: string;
  description?: string[];
  features?: string[];
}

interface ProductOverlay {
  name?: string;
  tagline?: string;
  description?: string[];
  features?: string[];
}

export const categoryPt: Record<string, CategoryOverlay> = {
  standard: {
    name: "Padrão",
    subtitle: "Correias Multilonas",
    family: "Linha essencial",
    tagline: "A EP de estoque que carrega o trabalho — escolha as lonas.",
    description: [
      "A linha padrão da Malone Road Belt: correias EP multilonas fabricadas conforme DIN 22102 e mantidas em estoque nas construções de 2, 3 e 4 lonas. O urdume de poliéster e a trama de poliamida dão à carcaça alta resistência à tração com alongamento mínimo e excelente acomodação em calha.",
      "Combine o número de lonas com a classe de tensão e os diâmetros de polia da sua máquina, e leve a correia sem-fim, em corte, preparada ou pronta para ZIP CLIP®. Toda correia tem referência cruzada com a sua máquina ou número de peça OEM.",
    ],
    features: [
      "Fabricadas conforme DIN 22102, testadas rotineiramente em laboratório próprio",
      "Carcaças EP de 2, 3 e 4 lonas conforme a classe de tensão",
      "Formatos de fornecimento: sem-fim, preparada, corte ou ZIP CLIP®",
      "Emendas vulcanizadas a quente na fábrica — quase 2x a resistência da emenda a frio",
      "Números de peça MB com referência cruzada para recompra rápida",
    ],
  },
  "heavy-duty-specialized": {
    name: "Reforçadas & Especiais",
    subtitle: "Correias de Alto Desempenho",
    family: "Linha de desempenho",
    tagline: "Feitas para os impactos mais duros.",
    description: [
      "Quando a multilonas padrão não basta: correias Ironcleat® de trama reforçada que duram até quatro vezes mais, e correias Ripstop com malha de aço que barram sucata e vergalhão que rasgariam uma correia comum. As construções Fabric Breaker, com lona amortecedora extra, absorvem o impacto de blocos grandes em britagem e peneiramento.",
      "Para aplicações excepcionais, a linha se estende a coberturas resistentes a calor, frio intenso, chama e óleos e gorduras — especificadas caso a caso conforme o levantamento da sua aplicação.",
    ],
    features: [
      "Ironcleat®: dura até 4x mais que a EP multilonas padrão",
      "Ripstop: malha de aço reforçada barra rasgos e perfurações",
      "Fabric Breaker: lona amortecedora extra protege a carcaça",
      "Coberturas resistentes a calor, frio, chama e óleo",
      "Emenda vulcanizada a quente ou preparação ZIP CLIP®",
    ],
  },
  incline: {
    name: "Incline",
    subtitle: "Correias com Taliscas para Agregados",
    family: "Linha com taliscas Cleatpro X™",
    tagline: "Rocha sem retorno.",
    description: [
      "Uma linha de correias com taliscas Cleatpro X™ construída para o trabalho com agregados: rocha britada, material peneirado e tudo o que uma pedreira aguenta jogar. Os perfis de talisca são moldados a quente integralmente na cobertura superior da correia — nada de cola ou parafuso — agarrando a correia com a mesma firmeza com que a correia agarra a carga, prolongando a vida útil e mantendo o material subindo em inclinações fortes.",
      "Combine o padrão de taliscas com uma correia base reforçada como a Ironcleat® para resistência a corte, impacto e desgaste com excelente acomodação em calha. Nossa equipe ajusta perfil, altura e passo das taliscas ao ângulo de inclinação, ao material e à velocidade da correia.",
    ],
    features: [
      "Taliscas moldadas a quente na cobertura superior, com adesão superior",
      "Perfis ajustados ao ângulo de inclinação, material e velocidade",
      "Alturas populares de 15, 25 e 32 mm, com opção de junta em V",
      "Correias base Ironcleat®, Fabric Breaker e Ripstop",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  "custom-special": {
    name: "Sob Medida / Especiais",
    subtitle: "Projetadas por Encomenda",
    family: "Sob encomenda",
    tagline: "Não está no catálogo? Fabricamos na sua especificação.",
    description: [
      "Perfis especiais, abas laterais, larguras fora de padrão, compostos excepcionais — se roda sobre uma correia, podemos fabricar. Envie a sua aplicação e nossa equipe retorna com um desenho e uma cotação direta.",
    ],
  },
};

export const productPt: Record<string, ProductOverlay> = {
  "2-ply": {
    name: "Correia Transportadora de 2 Lonas",
    tagline: "A especificação leve para polias pequenas e vãos curtos.",
    description: [
      "Uma carcaça EP de duas lonas para o lado mais leve do trabalho em equipamentos móveis: transportadores de transferência, vãos curtos e máquinas com polias de diâmetro pequeno, onde uma correia mais pesada brigaria com o acionamento em vez de ajudar.",
      "Fabricada conforme DIN 22102 com coberturas resistentes à abrasão, e fornecida sem-fim, em corte, preparada ou pronta para ZIP CLIP® — com referência cruzada para a sua máquina ou número de peça OEM.",
    ],
    features: [
      "Carcaça EP de 2 lonas — flexível em polias de diâmetro pequeno",
      "Alta resistência com baixo alongamento e excelente acomodação em calha",
      "Classes de cobertura resistentes à abrasão conforme o seu material",
      "Disponível sem-fim, preparada, em corte ou pronta para ZIP CLIP®",
      "Números de peça MB com referência cruzada para recompra rápida",
    ],
  },
  "3-ply": {
    name: "Correia Transportadora de 3 Lonas",
    tagline: "A especificação completa para britagem e peneiramento móveis.",
    description: [
      "A força de trabalho da linha padrão: uma carcaça EP de três lonas que cobre os transportadores principais e laterais da maioria dos britadores, peneiras e recicladoras móveis. Forte o bastante para trabalho pesado e abrasivo, flexível o bastante para acomodar em calha nos roletes padrão.",
      "Fabricada conforme DIN 22102 com classes de cobertura para o seu material, e fornecida sem-fim, em corte, preparada ou pronta para ZIP CLIP®.",
    ],
    features: [
      "O número de lonas mais especificado em equipamentos móveis",
      "Carcaça EP de 3 lonas — alta resistência, baixo alongamento",
      "Classes de cobertura para abrasão, impacto e corte",
      "Disponível sem-fim, preparada, em corte ou pronta para ZIP CLIP®",
      "Números de peça MB com referência cruzada para recompra rápida",
    ],
  },
  "4-ply": {
    name: "Correia Transportadora de 4 Lonas",
    tagline: "Carcaça de alta tensão para vãos longos e cargas pesadas.",
    description: [
      "Uma carcaça EP de quatro lonas para os acionamentos mais exigidos da linha padrão: empilhadores de vão longo, descarga de britador primário e correias largas movendo tonelagem de verdade. A lona extra carrega a tensão que esticaria uma correia mais leve até tirá-la de serviço.",
      "Fabricada conforme DIN 22102 com coberturas resistentes a impacto, e fornecida sem-fim, em corte, preparada ou pronta para ZIP CLIP®.",
    ],
    features: [
      "Carcaça EP de 4 lonas para acionamentos de alta tensão e vão longo",
      "Absorve o impacto de blocos grandes em condições extremas",
      "Classes de cobertura para abrasão, impacto e corte",
      "Disponível sem-fim, preparada, em corte ou pronta para ZIP CLIP®",
      "Números de peça MB com referência cruzada para recompra rápida",
    ],
  },
  ironcleat: {
    tagline: "Dura até 4x mais que a EP multilonas padrão.",
    description: [
      "A Ironcleat® usa uma trama especial de urdume reto com duas lonas reforçadas mais um urdume de amarração adicional. O resultado é uma carcaça que resiste a perfurações e dura até quatro vezes mais que uma correia EP multilonas padrão na mesma aplicação, sob coberturas resistentes a corte, impacto e desgaste.",
      "Quando as trocas de correia estão consumindo as suas janelas de manutenção, a Ironcleat® é o upgrade que se paga em disponibilidade.",
    ],
    features: [
      "Dura até 4x mais que correias EP multilonas padrão",
      "Trama especial: 2 lonas de urdume reto + urdume de amarração",
      "Coberturas superiores resistentes a corte, impacto e desgaste",
      "Menos trocas de correia — mais tempo produtivo programado",
      "Disponível sem-fim, em corte ou preparada para ZIP CLIP®",
    ],
  },
  c15p385: {
    name: "Padrão Chevron C15P385",
    tagline: "O chevron de 15 mm mais versátil, para correias de 400–800 mm.",
    description: [
      "O padrão mais versátil da linha Incline: um chevron de 15 mm moldado a quente integralmente na cobertura superior, cobrindo larguras de correia de 400 a 800 mm. Mantém agregado peneirado, areia e produtos agrícolas subindo sem retorno nas inclinações que os equipamentos móveis realmente usam.",
      "Disponível sobre correia base EP315/3 em toda a faixa de largura, ou reforçada para EP500/3 em 650 e 800 mm para acionamentos mais exigidos. Também especificada para colheita e armazenagem.",
    ],
    features: [
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 15 mm com passo curto de 250 mm",
      "Larguras de correia de 400 a 800 mm",
      "Correia base EP315/3 ou EP500/3 reforçada",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c15v450: {
    name: "Padrão Chevron C15V450",
    tagline: "Chevron de 15 mm com junta em V para correias de 900 mm.",
    description: [
      "Um chevron de 15 mm com a opção de junta em V, moldado para correias de 900 mm sobre carcaça EP500/3. A junta em V fecha o padrão no centro da correia para que os finos não encontrem um caminho reto de volta rampa abaixo.",
      "Como todo padrão Cleatpro X™, as taliscas são moldadas a quente na cobertura superior, com adesão que dura mais que perfis colados ou aparafusados.",
    ],
    features: [
      "Junta em V fecha o padrão contra o retorno de finos",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 15 mm com passo de 300 mm",
      "Correia base EP500/3 5+1.5",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c32p460: {
    name: "Padrão Chevron C32P460",
    tagline: "Mordida de 32 mm para agregado grosso e rampas fortes.",
    description: [
      "Quando a rampa fica íngreme e o material fica grosso, as taliscas de 32 mm do C32P460 dão à rocha britada um apoio de verdade. O passo de 330 mm mantém os blocos assentados entre as taliscas em vez de quicando por cima delas.",
      "Moldado sobre EP250/2 em 500 mm ou EP400/3 em 650 mm de largura, com a mesma união moldada a quente do restante da linha Incline.",
    ],
    features: [
      "Talisca de 32 mm para rampas fortes e material grosso",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Passo de 330 mm assenta blocos grandes entre as taliscas",
      "Correias base EP250/2 ou EP400/3",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  s25p750: {
    name: "Padrão de Taliscas S25P750",
    tagline: "Taliscas de 25 mm em perfil S para correias de 1050 mm.",
    description: [
      "Um padrão de perfil S com taliscas de 25 mm cobrindo 750 mm em correias de 1050 mm. A geometria aberta solta o material peneirado pegajoso sem deixar de carregá-lo rampa acima — um favorito em transportadores laterais e de descarga.",
      "Moldado sobre carcaça EP315/3 com as taliscas integralmente unidas à cobertura superior por toda a vida da correia.",
    ],
    features: [
      "Geometria em perfil S solta material pegajoso",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 25 mm com passo de 340 mm",
      "Correia base EP315/3 3+1.5",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c25p1000: {
    name: "Padrão Chevron C25P1000",
    tagline: "Chevron de 25 mm para correias largas de alto volume.",
    description: [
      "O padrão de alto volume da linha: um chevron de 25 mm com talisca de 1000 mm de largura, moldado para correias de 1200 a 1600 mm. Feito para os empilhadores e transportadores principais que movem a tonelagem de verdade.",
      "Roda sobre carcaças EP500/3 com coberturas 4+2 ou 5+1.5, e também é a opção de correia larga para armazenagem de grãos e raízes.",
    ],
    features: [
      "Talisca de 1000 mm de largura para correias largas de alto volume",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 25 mm com passo de 400 mm",
      "Correia base EP500/3 com coberturas 4+2 ou 5+1.5",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c15p540: {
    name: "Padrão Chevron C15P540",
    tagline: "Passo curto de 182 mm mantém os finos subindo.",
    description: [
      "Um chevron de 15 mm com o passo mais curto da linha — 182 mm — para que material fino e de fluxo livre encontre uma talisca antes de escorregar de volta. Especificado para correias de 1050 mm sobre carcaça EP400/3.",
      "O padrão Incline preferido para transportadores de finos e material peneirado secundário.",
    ],
    features: [
      "Passo curto de 182 mm para material fino de fluxo livre",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 15 mm em largura de talisca de 540 mm",
      "Correia base EP400/3 3+1.5",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  y26v400: {
    name: "Padrão de Taliscas Y26V400",
    tagline: "Taliscas de 26 mm em perfil Y com junta em V.",
    description: [
      "Um padrão de perfil Y com taliscas de 26 mm e opção de junta em V, moldado para correias de 500 mm. A geometria ramificada em Y estabiliza agregado de granulometria mista que um chevron reto deixaria migrar para a borda da correia.",
      "Fornecido sobre carcaça EP315/3 com taliscas moldadas a quente integralmente.",
    ],
    features: [
      "Perfil Y estabiliza material de granulometria mista",
      "Junta em V fecha o padrão contra o retorno",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 26 mm com passo de 200 mm",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c15p800: {
    name: "Padrão Chevron C15P800",
    tagline: "Chevron de 15 mm em correias de 1200 mm.",
    description: [
      "Um chevron de 15 mm em formato largo, com talisca de 800 mm, moldado para correias de 1200 mm sobre carcaça pesada EP400/3 com coberturas 5+1.5. Mantém alto volume de material peneirado em movimento em transportadores largos inclinados.",
      "As taliscas são moldadas a quente integralmente na cobertura superior — a união dura tanto quanto a correia.",
    ],
    features: [
      "Talisca de 800 mm de largura para correias largas",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 15 mm com passo de 300 mm",
      "Correia base EP400/3 5+1.5",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  y26v330: {
    name: "Padrão de Taliscas Y26V330",
    tagline: "Perfil Y compacto para correias de 500 mm.",
    description: [
      "O irmão compacto do Y26V400: taliscas de 26 mm em perfil Y com 330 mm de largura, moldadas para correias de 500 mm sobre carcaça mais pesada EP400/3 com coberturas 4+2.",
      "Especificado onde transportadores estreitos de transferência sobem forte e a mistura de material é imprevisível.",
    ],
    features: [
      "Perfil Y compacto para transportadores estreitos e íngremes",
      "Junta em V fecha o padrão contra o retorno",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 26 mm com passo de 310 mm",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c15p500: {
    name: "Padrão Chevron C15P500",
    tagline: "Chevron de 15 mm para correias intermediárias de 650 mm.",
    description: [
      "Um chevron de 15 mm com talisca de 500 mm e passo longo de 335 mm, moldado para correias de 650 mm sobre carcaça EP500/3 com coberturas 5+1.5.",
      "A força de trabalho de largura intermediária para agregado peneirado em transportadores laterais de equipamentos móveis.",
    ],
    features: [
      "Padrão intermediário para correias de 650 mm",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 15 mm com passo de 335 mm",
      "Correia base EP500/3 5+1.5",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
};

/* Spec labels (left column of every spec sheet) */
export const specLabelPt: Record<string, string> = {
  Standard: "Norma",
  Carcass: "Carcaça",
  Coverage: "Cobertura",
  "Tensile rating": "Classe de tração",
  "Belt width": "Largura da correia",
  "Belt widths": "Larguras de correia",
  "Temperature range": "Faixa de temperatura",
  "Service life": "Vida útil",
  Resistance: "Resistência",
  Profile: "Perfil",
  "Cleat height": "Altura da talisca",
  "Cleat width": "Largura da talisca",
  "Base belts": "Correias base",
};

/* Spec values that are prose rather than data */
export const specValuePt: Record<string, string> = {
  "EP fabric, 2 plies": "Tecido EP, 2 lonas",
  "EP fabric, 3 plies": "Tecido EP, 3 lonas",
  "EP fabric, 4 plies": "Tecido EP, 4 lonas",
  "2 Straight warp": "2 lonas de urdume reto",
  "Cut / impact / wear resistant": "Resistente a corte / impacto / desgaste",
  "Up to 4x standard EP": "Até 4x a EP padrão",
  "Puncture / rip": "Perfuração / rasgo",
};

/* Application chips */
export const applicationPt: Record<string, string> = {
  Crushing: "Britagem",
  Screening: "Peneiramento",
  Recycling: "Reciclagem",
  Aggregates: "Agregados",
  Quarrying: "Pedreiras",
  Mining: "Mineração",
  "Demolition waste": "Resíduos de demolição",
  "C&D waste": "Resíduos de construção e demolição",
  Stockpiling: "Armazenagem em pilhas",
  "Crop harvesting": "Colheita",
  "Grain handling": "Manuseio de grãos",
  "Foundry & clinker": "Fundição e clínquer",
  "Biomass & sawdust": "Biomassa e serragem",
  "Grain & food": "Grãos e alimentos",
  Underground: "Subterrâneo",
  "Fines conveying": "Transporte de finos",
  "Sand & gravel": "Areia e brita",
  "Side conveyors": "Transportadores laterais",
  "Transfer conveyors": "Transportadores de transferência",
};

/* Availability chips */
export const availabilityPt: Record<string, string> = {
  "Ships today": "Sai hoje",
  "Made to order": "Sob encomenda",
};

/* Belt formats (home "Choose your format") */
export const beltFormatPt: Record<string, { name: string; description: string }> = {
  endless: {
    name: "Sem-Fim — Pronta para Instalar",
    description:
      "Vulcanizada a quente na fábrica em um anel contínuo. Instale e rode — sem emenda em campo.",
  },
  stripped: {
    name: "Preparada — Pronta para Emendar",
    description:
      "Comprimento medido com pontas escalonadas sobrepostas, preparado para emenda a quente ou a frio em campo.",
  },
  "cut-length": {
    name: "Comprimento de Corte",
    description:
      "Comprimento com pontas retas e folga de emenda opcional. A opção flexível para estoque.",
  },
  "zip-clip": {
    name: "ZIP CLIP® — Pronta para o Pino",
    description:
      "Extremidades preparadas mecanicamente, unidas por pino de encaixe ou rosqueado. Instalada em cerca de uma hora.",
  },
};

/* Specialized belts teaser */
export const specializedPt: Record<string, { name: string; description: string }> = {
  heat: {
    name: "Resistente ao Calor",
    description:
      "Materiais quentes e abrasivos: clínquer, coque, areia de fundição, minério, escória.",
  },
  cold: {
    name: "Resistente ao Frio",
    description:
      "Coberturas projetadas para proteger a carcaça em operação sob frio extremo.",
  },
  flame: {
    name: "Antichama",
    description:
      "Para materiais combustíveis — serviço subterrâneo, serragem, armazéns de biomassa.",
  },
  oil: {
    name: "Resistente a Óleos e Gorduras",
    description:
      "Resiste à penetração de óleos e gorduras: grãos, fertilizantes, madeira, alimentos, reciclagem.",
  },
};
