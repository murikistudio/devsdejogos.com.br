// Definições de influenciadores
document.ListingData = [
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
