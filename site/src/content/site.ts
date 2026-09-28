/**
 * Conteúdo do site. Tudo que a Kamilly pode querer trocar fica aqui.
 * Campos marcados como PENDENTE precisam ser preenchidos antes de publicar.
 */

export const ministry = {
  name: 'Conexão Entre os Povos',
  acronym: 'CEP',
  tagline: 'Ministério de missão transcultural e plantação de igreja',
  motto: ['Treinar', 'Plantar', 'Servir'],
  founder: 'Kamilly Guimarães Patrocínio',
  city: 'Vitória, ES',
  foundedYear: 2027,
  /** PENDENTE: número com DDI, só dígitos. */
  whatsapp: '5527000000000',
  /** PENDENTE: chave Pix e titular. */
  pix: { key: 'chave-pix-pendente', holder: 'Kamilly Guimarães Patrocínio' },
  url: 'https://conexaoentreospovos.com.br',
} as const

export const navLinks = [
  { href: '#porque', label: 'O CEP' },
  { href: '#povos', label: 'Povos' },
  { href: '#frentes', label: 'Como atuamos' },
  { href: '#agora', label: 'Fase atual' },
  { href: '#fundadora', label: 'Fundadora' },
  { href: '#contato', label: 'Contato' },
] as const

export const hero = {
  title: 'O evangelho para os povos menos alcançados do Brasil',
  lead: 'Indígenas, sertanejos e ribeirinhos. O CEP forma missionários, planta igrejas e serve comunidades, com fidelidade bíblica e respeito a cada cultura.',
  verse: {
    text: 'Olhei, e eis aqui uma grande multidão, a qual ninguém podia contar, de todas as nações, e tribos, e povos, e línguas, que estavam diante do trono e perante o Cordeiro.',
    ref: 'Apocalipse 7.9',
  },
} as const

/** PENDENTE: dado real sobre povos não alcançados no Brasil (número + fonte), vindo da Kamilly. */
export const why = {
  title: 'No Brasil, ainda há povos com pouca ou nenhuma presença do evangelho',
  lead: 'O Conexão Entre os Povos nasce do chamado de levar o evangelho aos povos e contextos menos alcançados do país. Em muitas regiões, a distância não é só de quilômetros.',
  barriersLabel: 'O que mantém essas regiões longe do evangelho',
  barriers: [
    {
      title: 'Isolamento geográfico',
      text: 'Comunidades distantes dos centros urbanos e das igrejas estabelecidas.',
    },
    {
      title: 'Dificuldade de acesso',
      text: 'Chegar e permanecer exige tempo, estrutura e compromisso de longo prazo.',
    },
    {
      title: 'Culturas distintas',
      text: 'Modos de viver diferentes da realidade urbana pedem uma forma própria de chegar.',
    },
  ],
  stanceLabel: 'Como o CEP enxerga esses povos',
  stance:
    'Não apenas como destinatários de uma mensagem, mas como pessoas e comunidades que precisam ser conhecidas, ouvidas, respeitadas e servidas.',
} as const

export const identity = {
  statements: [
    {
      title: 'Propósito',
      text: 'Contribuir para a expansão do evangelho entre povos menos evangelizados do Brasil, formando pessoas, estabelecendo comunidades cristãs e servindo de maneira fiel e contextualizada.',
    },
    {
      title: 'Missão',
      text: 'Treinar vocacionados, plantar igrejas bíblicas e contextualizadas e promover justiça social entre povos menos evangelizados, com base no discipulado e na comunhão.',
    },
    {
      title: 'Visão',
      text: 'Ser um ministério ativo entre os segmentos menos evangelizados do Brasil, servindo com amor, respeito, integridade, humildade e excelência.',
    },
  ],
  values: [
    'Caráter, integridade e comprometimento',
    'Intimidade com Deus e obediência à Sua Palavra',
    'Amar e servir a Deus e ao próximo',
  ],
} as const

export type Front = {
  id: string
  verb: string
  title: string
  text: string
}

export const fronts: readonly Front[] = [
  {
    id: 'treinar',
    verb: 'Treinar',
    title: 'Vocacionados para os campos menos alcançados',
    text: 'Formação que integra conhecimento bíblico e missiológico, espiritualidade, caráter, compreensão cultural e prática ministerial. Não é só preparar pra entrar no campo: é formar obreiros que aprendem sempre, servem com humildade e trabalham em equipe.',
  },
  {
    id: 'plantar',
    verb: 'Plantar',
    title: 'Igrejas bíblicas e contextualizadas',
    text: 'Plantação de igreja é processo, não evento. O alvo são comunidades vivas, compreensíveis dentro da própria cultura, espiritualmente maduras e capazes de conduzir a própria vida, liderança e missão.',
  },
  {
    id: 'servir',
    verb: 'Servir',
    title: 'Comunidades, promovendo justiça, paz e alegria',
    text: 'Proclamação e serviço caminham juntos. Ações construídas a partir da realidade de cada comunidade, reconhecendo seus saberes, lideranças e recursos, como expressão coerente do amor ao próximo.',
  },
]

export type PeopleAccent = 'mata' | 'terra' | 'rio'

export type People = {
  id: string
  name: string
  region: string
  description: string
  image: string
  imageAlt: string
  sublogo: string
  accent: PeopleAccent
}

export const peoples: readonly People[] = [
  {
    id: 'indigenas',
    name: 'Povos indígenas',
    region: 'Aldeias e territórios indígenas',
    description:
      'Atuação com respeito à identidade, história, cultura, liderança e realidade específica de cada povo.',
    image: '/img/indigena-retrato.jpg',
    imageAlt: 'Retrato de uma mulher indígena com pintura corporal tradicional',
    sublogo: '/img/sublogo-indigenas.png',
    accent: 'mata',
  },
  {
    id: 'sertanejos',
    name: 'Comunidades sertanejas',
    region: 'Interior do semiárido',
    description:
      'Aproximação com contextos rurais e interioranos do semiárido, considerando vínculos comunitários, religiosidade e realidade social.',
    image: '/img/sertao-chapeu.jpg',
    imageAlt: 'Chapéu de couro pendurado em uma cerca de madeira no sertão',
    sublogo: '/img/sublogo-sertanejos.png',
    accent: 'terra',
  },
  {
    id: 'ribeirinhos',
    name: 'Comunidades ribeirinhas',
    region: 'Às margens dos rios',
    description:
      'Atenção às particularidades geográficas, econômicas, culturais e de mobilidade das comunidades ligadas aos rios.',
    image: '/img/comunidade-ribeirinha.jpg',
    imageAlt: 'Casas de madeira à beira do rio com canoas atracadas',
    sublogo: '/img/sublogo-ribeirinhos.png',
    accent: 'rio',
  },
]

/** PENDENTE: história do chamado em 3 ou 4 frases e a igreja que envia a Kamilly. */
export const founder = {
  name: 'Kamilly Guimarães Patrocínio',
  role: 'Idealizadora e fundadora',
  calling:
    'Sou vocacionada para treinar pessoas, plantar igrejas e promover transformação entre os povos através da Palavra de Deus.',
  bio: [
    'Tenho 24 anos, sou de Vitória, ES, e membro da Igreja Batista Filadélfia. Cursei a Escola do Sobrenatural pela PDM na igreja local e me formei em missiologia pelo Centro de Treinamento Integral da MAIS, pelo MIRC Brasil e pela ENIIGRE, a Escola Nordestina de Implantação de Igrejas da Missão Ceifa.',
    'Servi como obreira no MIRC Brasil por dois anos, fui voluntária na Esperança Sem Limites no cuidado integral de crianças e adolescentes e participei de uma plantação de igreja no Ceará.',
  ],
  credentials: [
    'Missiologia, CTI da MAIS',
    'MIRC Brasil',
    'ENIIGRE, Missão Ceifa',
    'Escola do Sobrenatural, PDM',
  ],
} as const

export type MethodStep = {
  name: string
  text: string
}

export type MethodPhase = {
  id: string
  title: string
  summary: string
  steps: readonly MethodStep[]
}

export const methodPhases: readonly MethodPhase[] = [
  {
    id: 'conhecer',
    title: 'Conhecer',
    summary: 'Antes de falar, ouvir e aprender.',
    steps: [
      { name: 'Aproximar', text: 'Contato com pessoas, comunidades, igrejas e lideranças por portas legítimas de relacionamento.' },
      { name: 'Pesquisar', text: 'Conhecer história, cultura, organização social, realidade espiritual e desafios do contexto.' },
      { name: 'Imergir', text: 'Viver o contexto com humildade, aprendendo linguagens, práticas e formas de convivência.' },
      { name: 'Relacionar', text: 'Construir vínculos genuínos, com confiança, respeito e presença consistente.' },
    ],
  },
  {
    id: 'proclamar',
    title: 'Proclamar',
    summary: 'Anunciar o evangelho e caminhar junto.',
    steps: [
      { name: 'Anunciar', text: 'Comunicar o evangelho de forma bíblica, clara e contextualizada.' },
      { name: 'Discipular', text: 'Acompanhar novos discípulos nas Escrituras, na comunhão e na prática cristã.' },
    ],
  },
  {
    id: 'enraizar',
    title: 'Enraizar',
    summary: 'Uma igreja local que conduz a própria vida e missão.',
    steps: [
      { name: 'Plantar', text: 'Contribuir para uma igreja local bíblica, contextualizada e missionária.' },
      { name: 'Desenvolver', text: 'Formar liderança local, buscando continuidade e maturidade da comunidade.' },
      { name: 'Servir', text: 'Ações de serviço coerentes com o contexto e com os valores do Reino.' },
    ],
  },
]

export type MilestoneStatus = 'current' | 'next' | 'future'

export type Milestone = {
  period: string
  title: string
  status: MilestoneStatus
  items: readonly string[]
}

/** Atualizar o status conforme o ministério avança: só um marco fica como 'current'. */
export const stage: { intro: string; callout: string; milestones: readonly Milestone[] } = {
  intro:
    'O CEP está em estruturação e começa oficialmente em 2027. Cada etapa depende de quem ora, contribui e envia.',
  callout: 'Quem chega agora participa da fundação.',
  milestones: [
    {
      period: 'Hoje',
      title: 'Estruturação',
      status: 'current',
      // PENDENTE: confirmar com a Kamilly o que já está acontecendo nesta fase.
      items: ['Formação das redes de oração, contribuição, serviço e envio'],
    },
    {
      period: '2027',
      title: 'Aproximação e preparação',
      status: 'next',
      items: [
        'Visitas exploratórias e pesquisas de contexto',
        'Períodos de imersão cultural',
        'Relacionamento com povos, igrejas, parceiros e mantenedores',
        'Estruturação das frentes de treinamento, plantação e serviço',
      ],
    },
    {
      period: '2028+',
      title: 'Expansão',
      status: 'future',
      items: [
        'Ampliar treinamento e mobilização',
        'Projetos missionários nos campos identificados',
        'Participar de processos de plantação de igrejas',
        'Formar e enviar novos vocacionados',
      ],
    },
  ],
}

export type ParticipationKind = 'pix' | 'whatsapp'

export type Participation = {
  id: string
  title: string
  text: string
  ctaLabel: string
  kind: ParticipationKind
  whatsappMessage?: string
}

export type ParticipationGroup = {
  id: string
  title: string
  text: string
  items: readonly Participation[]
}

export const participationGroups: readonly ParticipationGroup[] = [
  {
    id: 'pessoa',
    title: 'Para você',
    text: 'Qualquer pessoa pode sustentar a missão, de onde estiver.',
    items: [
      {
        id: 'orar',
        title: 'Orar',
        text: 'Interceder pelos povos, comunidades, vocacionados e processos de plantação.',
        ctaLabel: 'Entrar na rede de oração',
        kind: 'whatsapp',
        whatsappMessage: 'Olá, Kamilly! Quero entrar na rede de oração do Conexão Entre os Povos.',
      },
      {
        id: 'contribuir',
        title: 'Contribuir',
        text: 'Apoiar financeiramente a missão. Em 2027, as ofertas sustentam visitas, pesquisas de campo e imersão cultural.',
        ctaLabel: 'Ofertar via Pix',
        kind: 'pix',
      },
      {
        id: 'servir',
        title: 'Servir',
        text: 'Disponibilizar dons, conhecimentos, tempo e habilidades em apoio aos campos.',
        ctaLabel: 'Quero servir',
        kind: 'whatsapp',
        whatsappMessage: 'Olá, Kamilly! Quero servir no Conexão Entre os Povos com o que eu sei fazer.',
      },
    ],
  },
  {
    id: 'igreja',
    title: 'Para sua igreja ou organização',
    text: 'Ninguém vai sozinho. Igrejas e parceiros tornam o envio possível.',
    items: [
      {
        id: 'enviar',
        title: 'Enviar',
        text: 'Igrejas que reconhecem, preparam e apoiam pessoas vocacionadas para a missão.',
        ctaLabel: 'Falar sobre envio',
        kind: 'whatsapp',
        whatsappMessage: 'Olá, Kamilly! Represento uma igreja e quero conversar sobre envio com o CEP.',
      },
      {
        id: 'conectar',
        title: 'Conectar',
        text: 'Fazer pontes entre o CEP e igrejas, comunidades, organizações e parceiros.',
        ctaLabel: 'Propor uma parceria',
        kind: 'whatsapp',
        whatsappMessage: 'Olá, Kamilly! Quero conectar o CEP a uma igreja ou organização.',
      },
    ],
  },
]

export const verses = [
  { ref: 'Mateus 28.19-20', text: 'Portanto ide, fazei discípulos de todas as nações.' },
  { ref: 'Romanos 10.14', text: 'Como ouvirão se não houver quem pregue?' },
  { ref: 'Atos 1.8', text: 'Ser-me-eis testemunhas até aos confins da terra.' },
  { ref: '1 Coríntios 3.6-7', text: 'Eu plantei, Apolo regou; mas Deus deu o crescimento.' },
] as const

export const quote = {
  text: 'Não há forma mais duradoura de se estabelecer o evangelho em um bairro, cidade, clã ou tribo do que plantando uma igreja local que seja bíblica, viva, contextualizada e missionária.',
  author: 'Ronaldo Lidório',
} as const
