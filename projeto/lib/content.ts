// Textos gerais do site
// Os textos de apresentação e passos do processo ficam aqui.
// Depende do lib/config.ts para alguns detalhes genéricos, 
// mas centraliza toda a copy.

export const CONTENT = {
  hero: {
    title: 'VERTEBRA',
    subtitle: 'Estúdio de tatuagem autoral em Maringá. Blackwork, realismo dark e iconografia.',
  },
  about: {
    artistName: 'Caio Vasques',
    bio: [
      'Tatuador há 11 anos, dedicado exclusivamente ao blackwork e ao realismo dark.',
      'Trabalha em sessões longas, marcadas com antecedência. Estuda gravura, anatomia comparada e iconografia medieval — referências que voltam à pele como linguagem.'
    ],
    tags: ['Blackwork', 'Realismo Dark', 'Dotwork', 'Iconografia', 'Linework Pesado']
  },
  statement: 'TATUAGEM NÃO É IMAGEM. É DOCUMENTO.',
  marquee: ['BLACKWORK', 'REALISMO DARK', 'ICONOGRAFIA', 'DOTWORK', 'LINEWORK', 'MARINGÁ', '2026'],
  process: {
    title: 'O Processo',
    steps: [
      {
        id: '01',
        title: 'ENVIE SUA REFERÊNCIA',
        description: 'Texto, imagem ou ideia bruta, pelo WhatsApp.'
      },
      {
        id: '02',
        title: 'CONVERSAMOS',
        description: 'Alinhamos estilo, tamanho, posicionamento e orçamento.'
      },
      {
        id: '03',
        title: 'RESERVAMOS A DATA',
        description: 'Sinal de 30% confirma sessão.'
      },
      {
        id: '04',
        title: 'SESSÃO NO ESTÚDIO',
        description: 'Café, conversa, agulha. Sem pressa.'
      }
    ]
  },
  contact: {
    title: 'AGENDAR SESSÃO',
    ctaText: 'INICIAR CONVERSA',
  }
};
