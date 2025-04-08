// Definições de artistas
document.ListingData = [
    {
        name: 'Brendon Cruz',
        id: 'brendoncruz',
        directory: 'artistas/brendoncruz',
        tags: ['artist', 'designer'],
        author_name: 'Brendon Cruz',
        author_url: 'https://www.instagram.com/brendon.pdx',
        date_added: '2025-04-08 17:00',
        short_description: 'Brendon Cruz é artista e designer, atuando com arte digital, design de interfaces (UI) e criação para mídias sociais.',
        images: [
            'screenshot-1.webp',
        ],
        links: [
            'https://www.instagram.com/brendon.pdx',
            'https://www.behance.net/brendoncruz',
            'https://www.linkedin.com/in/brendoncruz97/',
        ],
    },
];

// Tags de artistas
document.ListingTags = [
    {
        label: 'Artista',
        value: 'artist',
    },
    {
        label: 'Designer',
        value: 'designer',
    },
];

// Ordenações de artistas
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

// Filtros de artistas
document.ListingFilters = [
    {
        label: 'Habilidade',
        field: 'tags',
        options: 'tags',
    },
];
