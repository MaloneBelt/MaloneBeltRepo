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
  "conveyor-belts": {
    name: "Correias Transportadoras",
    subtitle: "A Linha Essencial",
    family: "Linha essencial",
    tagline: "A especificação exata da sua máquina, pronta para envio.",
    description: [
      "A linha essencial da Malone Road Belt: correias EP multilonas fabricadas conforme DIN 22102 e fornecidas no formato que combina com o seu jeito de trabalhar — sem-fim prontas para instalar, em comprimento de corte ou com fixação mecânica ZIP CLIP®. Toda correia tem referência cruzada com a sua máquina ou número de peça OEM.",
      "As carcaças de poliéster-poliamida (EP) entregam alta resistência com alongamento mínimo e excelente acomodação em calha, enquanto taliscas, abas laterais e perfis chevron moldados a quente transformam qualquer correia base em uma solução de transporte sob medida.",
    ],
    features: [
      "Fabricadas conforme DIN 22102, testadas rotineiramente em laboratório próprio",
      "Formatos de fornecimento: sem-fim, preparada, corte ou ZIP CLIP®",
      "Carcaça EP de 2 a 5 lonas conforme a classe de tensão da máquina",
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
  "stonecleat-pro": {
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
  roadcleat: {
    subtitle: "Correias para Construção Viária",
    family: "Linha com taliscas Cleatpro X™",
    tagline: "Pegue a estrada no ritmo certo.",
    description: [
      "A construção viária castiga correias transportadoras: velocidades altas, asfalto quente e abrasivo, partidas e paradas constantes. As correias ROADCLEAT™ respondem com perfis de talisca moldados integralmente na cobertura superior, que permanecem colados em velocidades que arrancam taliscas coladas.",
      "Instaladas em fresadoras, pavimentadoras e equipamentos viários móveis, estas correias são especificadas para durar entre janelas de manutenção planejadas — não para falhar no meio de uma aplicação.",
    ],
    features: [
      "Taliscas moldadas integralmente permanecem fixas em alta velocidade",
      "Suporta asfalto fresado quente e abrasivo, dia após dia",
      "Alturas de talisca de 25 e 32 mm em perfis C e Y",
      "Correias base até EP630/3 e Ironcleat® para acionamentos de alta tensão",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
};

export const productPt: Record<string, ProductOverlay> = {
  "endless-belt": {
    name: "Correia Sem-Fim Pronta para Instalar",
    tagline: "Anel vulcanizado a quente na fábrica. Instale e rode.",
    description: [
      "Um comprimento acabado de correia com emenda vulcanizada a quente formando um anel contínuo, fabricado na especificação OEM exata da sua máquina. Chega pronta para instalar — sem emenda em campo, sem tempo de cura, sem equipe especializada.",
      "Emendas vulcanizadas a quente são quase duas vezes mais resistentes que emendas a frio, então a correia sem-fim é a forma mais duradoura de colocar a sua máquina de volta ao trabalho. Toda correia segue a DIN 22102 e tem referência cruzada com o seu número de peça OEM.",
    ],
    features: [
      "Emenda vulcanizada a quente na fábrica — quase 2x a resistência da emenda a frio",
      "Fabricada nas dimensões OEM exatas da sua máquina",
      "Dispensa equipe de emenda e tempo de cura em campo",
      "Números de peça MB com referência cruzada para recompra rápida",
      "Fabricação certificada ISO 9001",
    ],
  },
  "zip-clip": {
    name: "Correia com Fixação Mecânica ZIP CLIP®",
    tagline: "Máquina parada? Instalada em apenas uma hora.",
    description: [
      "Uma correia de reposição com extremidades preparadas mecanicamente, unida na máquina por um pino de encaixe ou rosqueado. Sem ferramentas especiais, sem equipe de vulcanização, sem tempo de cura — a correia roda assim que o pino entra.",
      "Escolha a variante rosqueada com vedação de poliuretano, ou a de encaixe com dois anéis de retenção em aço zincado que impedem o pino de se soltar em operação. As instruções de instalação acompanham cada correia.",
    ],
    features: [
      "Instalada em cerca de uma hora — pronta para rodar na sequência",
      "Sem ferramentas especiais nem equipe de emenda",
      "Variante rosqueada: pino com vedação de poliuretano",
      "Variante de encaixe: pino travado por 2 anéis de retenção zincados",
      "Clipes rebaixados protegem a emenda de raspadores e vedações",
      "Instruções de instalação acompanham cada correia",
    ],
  },
  "ep-multi-ply": {
    name: "Correia EP Multilonas",
    tagline: "A força de trabalho para blocos grandes e materiais abrasivos.",
    description: [
      "As correias EP multilonas são o padrão da indústria para trabalho pesado e abrasivo. O urdume de poliéster e a trama de poliamida dão à carcaça alta resistência à tração com baixo alongamento, absorvendo o impacto de blocos grandes em condições extremas.",
      "Fabricadas conforme DIN 22102, ISO 10247 e BS 490, com classes de cobertura para o seu material e 2 a 5 lonas conforme a classe de tensão.",
    ],
    features: [
      "Recomendada para blocos grandes e materiais abrasivos",
      "Carcaça poliéster/poliamida (EP) — alta resistência, baixo alongamento",
      "2 a 5 lonas conforme a classe de tensão da sua máquina",
      "Classes de cobertura para abrasão, impacto e corte",
      "Disponível sem-fim, em corte ou preparada para ZIP CLIP®",
    ],
  },
  "cleated-chevron": {
    name: "Correias com Taliscas & Chevron",
    tagline: "Taliscas moldadas a quente para rampas íngremes.",
    description: [
      "Correias sob medida com taliscas transversais, padrões chevron e abas laterais moldados a quente, fabricadas internamente conforme DIN 22102. As taliscas são moldadas — não coladas — e permanecem na correia nos ângulos e velocidades que arrancam perfis aparafusados.",
      "Precisa de algo fora do padrão? Além dos padrões Cleatpro X™ de estoque, desenhamos leiautes de taliscas e abas laterais para a sua largura de correia, largura de talisca e passo.",
    ],
    features: [
      "Taliscas transversais e chevrons moldados a quente — nunca colados",
      "Abas laterais moldadas a quente opcionais para rampas fortes",
      "Leiautes de talisca sob medida para a sua largura e passo",
      "Alturas de aba e espessuras de talisca de estoque disponíveis",
      "Fabricação interna conforme DIN 22102",
    ],
  },
  ironcleat: {
    tagline: "Dura até 4x mais que a EP multilonas padrão.",
    description: [
      "A Ironcleat® usa uma trama especial de duas lonas reforçadas mais um urdume de amarração adicional. O resultado é uma carcaça que resiste a perfurações e dura até quatro vezes mais que uma correia EP multilonas padrão na mesma aplicação.",
      "Quando as trocas de correia estão consumindo as suas janelas de manutenção, a Ironcleat® é o upgrade que se paga em disponibilidade.",
    ],
    features: [
      "Dura até 4x mais que correias EP multilonas padrão",
      "Trama especial: 2 lonas reforçadas + urdume de amarração",
      "Resistência superior à perfuração",
      "Menos trocas de correia — mais tempo produtivo programado",
      "Disponível sem-fim, em corte ou preparada para ZIP CLIP®",
    ],
  },
  ripstop: {
    tagline: "Reforço de malha de aço. Feita para RCD e britadores.",
    description: [
      "A construção Ripstop adiciona uma trama de malha de aço reforçada entre a cobertura superior e a carcaça de lonas sintéticas. Sucata afiada e vergalhão que cortariam uma correia comum são barrados antes de chegar às lonas.",
      "A correia preferida para resíduos de construção e demolição e aplicações de britagem, onde rasgos e perfurações são a causa número um de paradas não planejadas.",
    ],
    features: [
      "Trama de malha de aço reforçada barra rasgos e perfurações",
      "Carcaça de lonas sintéticas mantém a correia flexível e acomodável",
      "Excelente resistência a impactos de sucata e vergalhão",
      "Projetada para RCD e trabalho em britadores",
    ],
  },
  c15p385: {
    name: "Padrão Chevron C15P385",
    tagline: "O chevron de 15 mm mais versátil, para correias de 400–800 mm.",
    description: [
      "O padrão mais versátil da linha Stonecleat Pro™: um chevron de 15 mm moldado a quente integralmente na cobertura superior, cobrindo larguras de correia de 400 a 800 mm. Mantém agregado peneirado, areia e produtos agrícolas subindo sem retorno nas inclinações que os equipamentos móveis realmente usam.",
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
      "Moldado sobre EP250/2 em 500 mm ou EP400/3 em 650 mm de largura, com a mesma união moldada a quente do restante da linha Stonecleat Pro™.",
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
      "O padrão Stonecleat Pro™ preferido para transportadores de finos e material peneirado secundário.",
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
  y32p600: {
    name: "Padrão de Taliscas Y32P600",
    tagline: "Perfil Y de 32 mm feito para a velocidade da fresagem.",
    description: [
      "O padrão ROADCLEAT™ para fresadoras a frio: taliscas de 32 mm em perfil Y que seguram o material fresado quente e abrasivo nos transportadores de descarga rápidos e íngremes dos equipamentos viários. A união moldada a quente permanece no lugar em velocidades que arrancam taliscas coladas.",
      "Disponível sobre carcaças EP400/3 e EP630/3 pesada em 850 mm, ou sobre base Ironcleat® EPP630/2 com coberturas 9+3 em 1000 mm para as máquinas mais exigidas.",
    ],
    features: [
      "Segura material fresado quente e abrasivo em alta velocidade",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 32 mm com passo de 360 mm",
      "Correias base EP400/3, EP630/3 ou Ironcleat® EPP630/2",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
  c25p660: {
    name: "Padrão Chevron C25P660",
    tagline: "Chevron de 25 mm para correias de pavimentadora de 914 mm.",
    description: [
      "Um chevron de 25 mm moldado para as correias de 914 mm comuns em pavimentadoras e veículos de transferência de material. O passo de 305 mm mantém uma alimentação constante e uniforme de asfalto até a mesa — sem golfadas, sem falta de material.",
      "Fornecido sobre carcaça EP500/3 com coberturas 6+1.5 dimensionadas para o trabalho com asfalto quente.",
    ],
    features: [
      "Alimentação uniforme para pavimentadoras e veículos de transferência",
      "Moldado a quente integralmente na cobertura superior — nunca colado",
      "Talisca de 25 mm com passo de 305 mm",
      "Correia base EP500/3 6+1.5 com cobertura espessa para serviço quente",
      "Fornecida em rolo, corte, sem-fim ou preparada para ZIP CLIP®",
    ],
  },
};

/* Spec labels (left column of every spec sheet) */
export const specLabelPt: Record<string, string> = {
  Standard: "Norma",
  Standards: "Normas",
  "Belt width": "Largura da correia",
  "Belt widths": "Larguras de correia",
  Carcass: "Carcaça",
  "Temperature range": "Faixa de temperatura",
  Splice: "Emenda",
  Splices: "Emendas",
  Variants: "Variantes",
  "Fitting time": "Tempo de instalação",
  "Tools required": "Ferramentas necessárias",
  "Cover grades": "Classes de cobertura",
  "Service life": "Vida útil",
  Resistance: "Resistência",
  Reinforcement: "Reforço",
  Cleats: "Taliscas",
  Options: "Opções",
  "Base belts": "Correias base",
  "Base belt": "Correia base",
  Profile: "Perfil",
  Profiles: "Perfis",
  "Cleat width": "Largura da talisca",
  "Cleat pitch": "Passo da talisca",
  "Cleat heights": "Alturas de talisca",
  "Cleat bond": "União da talisca",
  "Cover options": "Opções de cobertura",
  "Tensile ratings": "Classes de tração",
  Constructions: "Construções",
  "Extreme range": "Faixa extrema",
};

/* Spec values that are prose rather than data */
export const specValuePt: Record<string, string> = {
  "EP fabric, 2–5 plies": "Tecido EP, 2–5 lonas",
  "Hot vulcanized (factory)": "Vulcanizada a quente (fábrica)",
  "Mechanical, pin-joined": "Mecânica, com pino",
  "Screw-In / Push-In": "Rosqueado / Encaixe",
  "~1 hour": "~1 hora",
  "None (standard hand tools)": "Nenhuma (ferramentas comuns)",
  "Abrasion / impact resistant": "Resistente à abrasão / impacto",
  "2 reinforced plies + binder warp": "2 lonas reforçadas + urdume de amarração",
  "Up to 4x standard EP": "Até 4x a EP padrão",
  "Puncture / rip": "Perfuração / rasgo",
  "Steel wire mesh (weft)": "Malha de aço (trama)",
  "Synthetic fabric plies": "Lonas de tecido sintético",
  "Rip / puncture": "Rasgo / perfuração",
  "Hot-molded chevron / cross-cleat": "Chevron / talisca moldada a quente",
  "Siderails, custom pitch": "Abas laterais, passo sob medida",
  "EP / Ironcleat® / Ripstop": "EP / Ironcleat® / Ripstop",
  "Hot vulcanized / ZIP CLIP®": "Vulcanizada a quente / ZIP CLIP®",
  "Ironcleat® / Ripstop / Fabric Breaker": "Ironcleat® / Ripstop / Fabric Breaker",
  "Binder warp / steel mesh / breaker ply":
    "Urdume de amarração / malha de aço / lona amortecedora",
  "-60°C to +600°C (specialized)": "-60°C a +600°C (especiais)",
  "Heat / cold / flame / oil": "Calor / frio / chama / óleo",
  "Integrally hot-molded": "Moldada a quente integral",
  "Chevron, 15 mm cleat": "Chevron, talisca de 15 mm",
  "Chevron, 25 mm cleat": "Chevron, talisca de 25 mm",
  "Chevron, 32 mm cleat": "Chevron, talisca de 32 mm",
  "Chevron V-joint, 15 mm cleat": "Chevron junta em V, talisca de 15 mm",
  "S-profile, 25 mm cleat": "Perfil S, talisca de 25 mm",
  "Y-profile V-joint, 26 mm cleat": "Perfil Y junta em V, talisca de 26 mm",
  "Y-profile, 32 mm cleat": "Perfil Y, talisca de 32 mm",
};

/* Application chips */
export const applicationPt: Record<string, string> = {
  Crushing: "Britagem",
  Screening: "Peneiramento",
  Recycling: "Reciclagem",
  Aggregates: "Agregados",
  Quarrying: "Pedreiras",
  Mining: "Mineração",
  "Emergency replacement": "Reposição de emergência",
  "Demolition waste": "Resíduos de demolição",
  "C&D waste": "Resíduos de construção e demolição",
  "Scrap handling": "Manuseio de sucata",
  "Steep-incline conveying": "Transporte em rampas fortes",
  Biomass: "Biomassa",
  Stockpiling: "Armazenagem em pilhas",
  "Crop harvesting": "Colheita",
  "Grain handling": "Manuseio de grãos",
  "Road milling": "Fresagem de pavimento",
  Paving: "Pavimentação",
  "Asphalt plants": "Usinas de asfalto",
  "Mobile road plant": "Equipamentos viários móveis",
  "Construction & Demolition": "Construção e Demolição",
  "Road construction": "Construção viária",
  Agriculture: "Agricultura",
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
