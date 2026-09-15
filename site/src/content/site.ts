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
  /** PENDENTE: confirmar com a Kamilly. */
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@conexaoentreospovos',
  /** PENDENTE: número com DDI, só dígitos. */
  whatsapp: '5527000000000',
  /** PENDENTE */
  email: 'contato@conexaoentreospovos.com.br',
  /** PENDENTE: chave Pix e titular. */
  pix: { key: 'chave-pix-pendente', holder: 'Kamilly Guimarães Patrocínio' },
  url: 'https://conexaoentreospovos.com.br',
} as const

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#frentes', label: 'Frentes' },
  { href: '#povos', label: 'Povos' },
  { href: '#fundadora', label: 'Fundadora' },
  { href: '#caminho', label: 'Caminho' },
  { href: '#participe', label: 'Participe' },
  { href: '#contato', label: 'Contato' },
] as const

export const hero = {
  verse: {
    text: 'Olhei, e eis aqui uma grande multidão, a qual ninguém podia contar, de todas as nações, e tribos, e povos, e línguas, que estavam diante do trono e perante o Cordeiro.',
    ref: 'Apocalipse 7.9',
  },
  lead: 'Levamos o evangelho de Cristo aos povos indígenas, sertanejos e ribeirinhos do Brasil, formando pessoas, plantando igrejas e servindo comunidades com fidelidade bíblica e respeito a cada cultura.',
} as const

export const about = {
  title: 'Conectar pessoas, culturas e comunidades',
  paragraphs: [
    'O Conexão Entre os Povos nasce do chamado de levar o evangelho aos povos e contextos menos alcançados do Brasil. Em regiões marcadas pelo isolamento geográfico, pela dificuldade de acesso e por culturas distintas da realidade urbana, ainda há segmentos com pouca ou nenhuma presença evangélica.',
    'A missão exige fidelidade às Escrituras e sensibilidade ao contexto. Por isso, o CEP não enxerga os povos apenas como destinatários de uma mensagem, mas como pessoas e comunidades que precisam ser conhecidas, ouvidas, respeitadas e servidas.',
  ],
  pillars: [
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
    description:
      'Atenção às particularidades geográficas, econômicas, culturais e de mobilidade das comunidades ligadas aos rios.',
    image: '/img/comunidade-ribeirinha.jpg',
    imageAlt: 'Casas de madeira à beira do rio com canoas atracadas',
    sublogo: '/img/sublogo-ribeirinhos.png',
    accent: 'rio',
  },
]

export const founder = {
  name: 'Kamilly Guimarães Patrocínio',
  role: 'Idealizadora e fundadora',
  bio: [
    'Tenho 24 anos, sou de Vitória, ES, e membro da Igreja Batista Filadélfia. Cursei a Escola do Sobrenatural pela PDM na igreja local e me formei em missiologia pelo Centro de Treinamento Integral da MAIS, pelo MIRC Brasil e pela ENIIGRE, a Escola Nordestina de Implantação de Igrejas da Missão Ceifa.',
    'Servi como obreira no MIRC Brasil por dois anos, fui voluntária na Esperança Sem Limites no cuidado integral de crianças e adolescentes e participei de uma plantação de igreja no Ceará. Sou vocacionada para treinar pessoas, plantar igrejas e promover transformação entre os povos através da Palavra de Deus.',
  ],
  credentials: [
    'Missiologia, CTI da MAIS',
    'MIRC Brasil',
    'ENIIGRE, Missão Ceifa',
    'Escola do Sobrenatural, PDM',
  ],
} as const

export const method = {
  steps: [
    { name: 'Aproximar', text: 'Contato com pessoas, comunidades, igrejas e lideranças por portas legítimas de relacionamento.' },
    { name: 'Pesquisar', text: 'Conhecer história, cultura, organização social, realidade espiritual e desafios do contexto.' },
    { name: 'Imergir', text: 'Viver o contexto com humildade, aprendendo linguagens, práticas e formas de convivência.' },
    { name: 'Relacionar', text: 'Construir vínculos genuínos, com confiança, respeito e presença consistente.' },
    { name: 'Anunciar', text: 'Comunicar o evangelho de forma bíblica, clara e contextualizada.' },
    { name: 'Discipular', text: 'Acompanhar novos discípulos nas Escrituras, na comunhão e na prática cristã.' },
    { name: 'Plantar', text: 'Contribuir para uma igreja local bíblica, contextualizada e missionária.' },
    { name: 'Desenvolver', text: 'Formar liderança local, buscando continuidade e maturidade da comunidade.' },
    { name: 'Servir', text: 'Ações de serviço coerentes com o contexto e com os valores do Reino.' },
  ],
  plan: [
    {
      period: '2027',
      title: 'Aproximação e preparação',
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
      items: [
        'Ampliar treinamento e mobilização',
        'Projetos missionários nos campos identificados',
        'Participar de processos de plantação de igrejas',
        'Formar e enviar novos vocacionados',
      ],
    },
  ],
} as const

export type ParticipationKind = 'pix' | 'whatsapp' | 'instagram'

export type Participation = {
  id: string
  title: string
  text: string
  ctaLabel: string
  kind: ParticipationKind
  whatsappMessage?: string
}

export const participation: readonly Participation[] = [
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
    text: 'Apoiar financeiramente projetos, treinamentos e pessoas envolvidas na missão.',
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
  {
    id: 'enviar',
    title: 'Enviar',
    text: 'Igrejas que reconhecem, preparam e apoiam pessoas vocacionadas para a missão.',
    ctaLabel: 'Falar sobre parceria',
    kind: 'whatsapp',
    whatsappMessage: 'Olá, Kamilly! Represento uma igreja e quero conversar sobre parceria com o CEP.',
  },
  {
    id: 'conectar',
    title: 'Conectar',
    text: 'Fazer pontes entre o CEP e igrejas, comunidades, organizações e parceiros.',
    ctaLabel: 'Acompanhar no Instagram',
    kind: 'instagram',
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
