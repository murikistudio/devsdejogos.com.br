// Definições de jogos
const Games = [
    {
        name: 'Birds Adventure',
        directory: 'birdsadventure',
        genres: ['action', 'adventure', 'casual'],
        author_name: 'Vinicius Oliveira',
        author_url: 'https://www.facebook.com/profile.php?id=100006857140925',
        date_added: '2023-04-05 20:00',
        description: 'Embarque em uma jornada emocionante com <strong>Flynn</strong>, um pássaro corajoso cuja vida pacífica é interrompida quando seu filho é capturado. Determinado a recuperá-lo, <strong>Flynn</strong> mergulha em uma busca perigosa através de terras deslumbrantes e repletas de perigos.',
        images: [
            'screenshot-1.webp',
            'screenshot-2.webp',
            'screenshot-3.webp',
            'screenshot-4.webp',
            'screenshot-5.webp',
            'screenshot-6.webp',
            'screenshot-7.webp',
        ],
        links: [
            'https://store.steampowered.com/app/2956760/Birds_Adventure/',
            'https://www.facebook.com/profile.php?id=100006857140925',
        ],
    },
    {
        name: 'Christmas Smash',
        directory: 'christmassmash',
        genres: ['action', 'arcade', 'rpg'],
        author_name: 'ArcadeNightmare',
        author_url: 'https://store.steampowered.com/app/2308050/Christmas_Smash/',
        date_added: '2023-04-05 17:00',
        description: '<strong>Papai Noel</strong> embarca em uma missão: derrote Krampus e seu exercito de elfos renegados. Uma aventura explosiva e cheia de ação! em um jogo de tiro com vista de cima.',
        images: [
            'screenshot-1.webp',
            'screenshot-2.webp',
            'screenshot-3.webp',
            'screenshot-4.webp',
            'screenshot-5.webp',
            'screenshot-6.webp',
            'screenshot-7.webp',
        ],
        links: [
            'https://store.steampowered.com/app/2308050/Christmas_Smash/',
        ],
    },
    {
        name: 'DefendAnts',
        directory: 'defendants',
        genres: ['casual', 'arcade'],
        author_name: 'Snakegbr',
        author_url: 'https://murikistudio.com.br/',
        date_added: '2023-04-05 19:00',
        description: 'A jogabilidade lembra o clássico jogo Snake: conforme você coleta folhas, sua formiga cresce mais, tornando cada vez mais desafiador navegar pelo espaço sem colidir consigo mesma ou com as bordas.',
        images: [
            'screenshot-1.webp',
            'screenshot-2.webp',
            'screenshot-3.webp',
        ],
        links: [
            'https://play.google.com/store/apps/details?id=com.snakegbr.defendants',
            'https://www.youtube.com/@snakegbr',
            'https://www.instagram.com/snakegbr',
        ],
    },
    {
        name: 'Mole Maniacs',
        directory: 'molemaniacs',
        genres: ['casual', 'arcade'],
        author_name: 'Muriki Studio',
        author_url: 'https://murikistudio.com.br/',
        date_added: '2023-04-03 20:00',
        description: '<strong>Mole Maniacs</strong> é um jogo estilo Whack-A-Mole! Complete missões em diferentes níveis, acerte as toupeiras, colete moedas para comprar novos martelos, não deixe sua barra de energia chegar a zero!',
        images: [
            'screenshot-1.webp',
            'screenshot-2.webp',
            'screenshot-9.webp',
            'screenshot-10.webp',
            'screenshot-11.webp',
        ],
        links: [
            'https://play.google.com/store/apps/details?id=com.muriki.molemaniacs',
            'https://www.youtube.com/@murikistudio',
            'https://discord.gg/f35uuhCvQn',
            'https://www.instagram.com/murikistudio',
        ],
    },
    {
        name: 'The Criminal Code Brasil',
        directory: 'thecriminalcodebrasil',
        genres: ['action', 'arcade', 'adventure', 'rpg'],
        author_name: 'Yuri Heinz Games',
        author_url: 'https://linktr.ee/yuriheinz',
        date_added: '2023-04-04 15:00',
        description: 'The Criminal Code: Brasil é um jogo de ação em mundo aberto onde você sobrevive no coração da criminalidade urbana, enfrentando polícia, rivais e o próprio destino nas ruas do Brasil.',
        images: [
            'screenshot-1.jpg',
            'screenshot-2.jpg',
            'screenshot-3.jpg',
        ],
        links: [
            'https://linktr.ee/yuriheinz',
            'https://www.youtube.com/@yuriheinz4297',
            'https://www.facebook.com/yuriheinzgames/',
            'https://www.instagram.com/yuriheinzgames',
        ],
    },
    {
        name: 'Zombies & Bullets',
        directory: 'zombiesandbullets',
        genres: ['action', 'adventure'],
        author_name: 'Muriki Studio',
        author_url: 'https://murikistudio.com.br/',
        date_added: '2023-04-03 19:00',
        description: '<strong>Zombies & Bullets</strong> é um jogo de tiro de ação top-down 3D onde você deve ajudar o soldado Jacob a enfrentar exércitos de zumbis em ambientes variados e desafiadores.',
        images: [
            'screenshot-1.webp',
            'screenshot-2.webp',
            'screenshot-3.webp',
            'screenshot-4.webp',
            'screenshot-5.webp',
            'screenshot-6.webp',
        ],
        links: [
            'https://store.steampowered.com/app/2802870/Zombies__Bullets/',
            'https://www.youtube.com/@murikistudio',
            'https://discord.gg/f35uuhCvQn',
            'https://www.instagram.com/murikistudio',
        ],
    },
];

// Gêneros de jogos
const Genres = [
    {
        label: 'Ação',
        value: 'action',
    },
    {
        label: 'Arcade',
        value: 'arcade',
    },
    {
        label: 'Aventura',
        value: 'adventure',
    },
    {
        label: 'Casual',
        value: 'casual',
    },
    {
        label: 'Corrida',
        value: 'racing',
    },
    {
        label: 'Esporte',
        value: 'sports',
    },
    {
        label: 'Estratégia',
        value: 'strategy',
    },
    {
        label: 'RPG',
        value: 'rpg',
    },
    {
        label: 'Simulação',
        value: 'simulation',
    },
]

// Ordenações de jogos
const Sorts = [
    {
        label: 'Adicionado em',
        value: 'date_added',
        order: 'desc',
    },
    {
        label: 'Nome do Jogo',
        value: 'name',
        order: 'asc',
    },
    {
        label: 'Desenvolvedor',
        value: 'author_name',
        order: 'asc',
    },
];

// Filtros de jogos
const Filters = [
    {
        label: 'Gênero',
        field: 'genres',
        options: 'genres',
    },
    {
        label: 'Desenvolvedor',
        field: 'author_name',
        options: 'authors',
    },
]

// Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            selectedGame: null,
            gameModal: null,
            sortBy: Sorts[0].value,
            sortOrder: Sorts[0].order,
            filterBy: '',
            filterByValue: '',
        };
    },

    computed: {
        games() {
            let games = [...Games];

            if (this.filterBy && this.filterByValue) {
                games = games.filter((game) => {
                    const game_field = game[this.filterBy];

                    if (Array.isArray(game_field)) {
                        return game_field.some(genre => genre === this.filterByValue);
                    }

                    return game[this.filterBy] === this.filterByValue;
                });
            }

            if (this.sortBy) {
                games = games.sort((a, b) => {
                    const valA = a[this.sortBy];
                    const valB = b[this.sortBy];

                    if (this.sortOrder === 'desc') {
                        return valA < valB ? 1 : valA > valB ? -1 : 0;
                    } else {
                        return valA > valB ? 1 : valA < valB ? -1 : 0;
                    }
                });
            }

            return games;
        },

        sorts() {
            return Sorts;
        },

        filters() {
            const filters = [];

            for (const filter of Filters) {
                filters.push({
                    label: filter.label,
                    field: filter.field,
                    options: this[filter.options],
                })
            }

            return filters;
        },

        authors() {
            const authors = [];

            for (const game of Games) {
                if (!authors.some(author => author.value === game.author_name)) {
                    authors.push({
                        label: game.author_name,
                        value: game.author_name,
                    });
                }
            }

            authors.sort((a, b) => a.label >= b.label ? 1 : -1);

            return authors;
        },

        genres() {
            const genres = [];

            for (const game of Games) {
                for (const genreKey of game.genres) {
                    if (!genres.some(genre => genre.value === genreKey)) {
                        for (const genre of Genres) {
                            if (genre.value === genreKey) {
                                genres.push(genre);
                                break;
                            }
                        }
                        break;
                    }
                }
            }

            return genres;
        },
    },

    methods: {
        getIconByUrl,

        setSort(sort) {
            setTimeout(() => {
                const current = this.sortBy;
                this.sortBy = current !== sort.value ? sort.value : '';
                this.sortOrder = this.sortBy ? sort.order : '';
                console.log('sort', sort.label, ':', current, '=>', sort.value, sort.order)
            }, 100);
        },

        setFilter(filter, value) {
            setTimeout(() => {
                const current = this.filterByValue;
                this.filterByValue = current !== value ? value : '';
                this.filterBy = this.filterByValue ? filter.field : '';
                console.log('filter', filter.field, ':', current, '=>', this.filterByValue)
            }, 100);
        },

        clearFilters() {
            this.sortBy = '';
            this.sortOrder = '';
            this.filterBy = '';
            this.filterByValue = '';
        },

        showModal(game) {
            this.selectedGame = game;

            setTimeout(() => {
                // Swiper
                const swiper = new Swiper('.swiper', {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
                    loop: true,
                    spaceBetween: 0,
                });

                this.gameModal.show();
            }, 100);
        },
    },

    mounted() {
        // Modal
        this.gameModal = new bootstrap.Modal(document.getElementById('gameModal'));

        this.$refs.gameModal.addEventListener('hidden.bs.modal', event => {
            this.selectedGame = null;
        });
    },
}).mount("#app");
