// Definições de influenciadores
document.ListingData = [
    {
        name: 'Foxgear GameDev',
        id: 'foxgeargamedev',
        directory: 'influenciadores/foxgeargamedev',
        tags: ['youtube'],
        author_name: 'Foxgear GameDev',
        author_url: 'https://www.youtube.com/@foxgeargamedev5885',
        date_added: '2025-04-08 10:00',
        short_description: 'Sou Glauco Netto, conhecido como Fox pelos amigos gamers. Sou apaixonado por jogos e essa paixão me levou a começar a desenvolver jogos de forma independente. Faço vídeos de meus jogos, projetos e trabalhos em parcerias, conforme eles forem concluídos e/ou permitidos.',
        images: [
            'screenshot-1.webp',
        ],
        links: [
            'https://www.youtube.com/@foxgeargamedev5885',
            'https://www.instagram.com/foxgear_games/',
        ],
    },
    {
        name: 'Yatsura Games',
        id: 'yatsuragames',
        directory: 'influenciadores/yatsuragames',
        tags: ['youtube'],
        author_name: 'Yatsura Games',
        author_url: 'https://www.youtube.com/@yatsuragames',
        date_added: '2025-04-06 17:00',
        short_description: '<strong>Yatsura Games</strong> é um canal voltado para jogos de todas as plataformas, onde você irá encontrar dicas de jogos, detonados e gameplays do mundo dos games de forma geral,  o canal contará com vídeos casuais de jogos de gerações passadas e atuais.',
        images: [
            'screenshot-1.webp',
        ],
        links: [
            'https://www.youtube.com/@yatsuragames',
            'https://discord.com/invite/nPSAHTKqSR',
        ],
    },
];

// Tags de influenciadores
document.ListingTags = [
    {
        label: 'Instagram',
        value: 'instagram',
    },
    {
        label: 'Twitch',
        value: 'twitch',
    },
    {
        label: 'X',
        value: 'x',
    },
    {
        label: 'YouTube',
        value: 'youtube',
    },
];

// Ordenações de influenciadores
document.ListingSorts = [
    {
        label: 'Mais Recentes',
        value: 'date_added',
        order: 'desc',
    },
    {
        label: 'Nome (A-Z)',
        value: 'name',
        order: 'asc',
    },
];

// Filtros de influenciadores
document.ListingFilters = [
    {
        label: 'Plataforma',
        field: 'tags',
        options: 'tags',
    },
];
