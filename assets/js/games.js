// Definições de jogos
const Games = [
    {
        name: 'Birds Adventure',
        genres: ['action', 'adventure', 'casual'],
        author_name: 'Vinicius Oliveira',
        author_url: 'https://www.facebook.com/profile.php?id=100006857140925',
        description: 'Embarque em uma jornada emocionante com <strong>Flynn</strong>, um pássaro corajoso cuja vida pacífica é interrompida quando seu filho é capturado. Determinado a recuperá-lo, <strong>Flynn</strong> mergulha em uma busca perigosa através de terras deslumbrantes e repletas de perigos.',
        images: [
            '/assets/img/games/birdsadventure/screenshot-1.webp',
            '/assets/img/games/birdsadventure/screenshot-2.webp',
            '/assets/img/games/birdsadventure/screenshot-3.webp',
            '/assets/img/games/birdsadventure/screenshot-4.webp',
            '/assets/img/games/birdsadventure/screenshot-5.webp',
            '/assets/img/games/birdsadventure/screenshot-6.webp',
            '/assets/img/games/birdsadventure/screenshot-7.webp',
        ],
        links: [
            {
                icon: 'steam.svg',
                class: 'bg-primary-subtle',
                url: 'https://store.steampowered.com/app/2956760/Birds_Adventure/',
            },
            {
                icon: 'facebook.svg',
                class: 'bg-primary',
                url: 'https://www.facebook.com/profile.php?id=100006857140925',
            },
        ],
    },
    {
        name: 'Christmas Smash',
        genres: ['action', 'arcade', 'rpg'],
        author_name: 'ArcadeNightmare',
        author_url: 'https://store.steampowered.com/app/2308050/Christmas_Smash/',
        description: '<strong>Papai Noel</strong> embarca em uma missão: derrote Krampus e seu exercito de elfos renegados. Uma aventura explosiva e cheia de ação! em um jogo de tiro com vista de cima.',
        images: [
            '/assets/img/games/christmassmash/screenshot-1.webp',
            '/assets/img/games/christmassmash/screenshot-2.webp',
            '/assets/img/games/christmassmash/screenshot-3.webp',
            '/assets/img/games/christmassmash/screenshot-4.webp',
            '/assets/img/games/christmassmash/screenshot-5.webp',
            '/assets/img/games/christmassmash/screenshot-6.webp',
            '/assets/img/games/christmassmash/screenshot-7.webp',
        ],
        links: [
            {
                icon: 'steam.svg',
                class: 'bg-primary-subtle',
                url: 'https://store.steampowered.com/app/2308050/Christmas_Smash/',
            },
        ],
    },
    {
        name: 'DefendAnts',
        genres: ['casual', 'arcade'],
        author_name: 'Snakegbr',
        author_url: 'https://murikistudio.com.br/',
        description: 'A jogabilidade lembra o clássico jogo Snake: conforme você coleta folhas, sua formiga cresce mais, tornando cada vez mais desafiador navegar pelo espaço sem colidir consigo mesma ou com as bordas.',
        images: [
            '/assets/img/games/defendants/screenshot-1.webp',
            '/assets/img/games/defendants/screenshot-2.webp',
            '/assets/img/games/defendants/screenshot-3.webp',
        ],
        links: [
            {
                icon: 'googleplay.svg',
                class: 'bg-white',
                url: 'https://play.google.com/store/apps/details?id=com.snakegbr.defendants',
            },
            {
                icon: 'youtube.svg',
                class: 'bg-danger',
                url: 'https://www.youtube.com/@snakegbr',
            },
            {
                icon: 'instagram.svg',
                class: 'bg-danger',
                url: 'https://www.instagram.com/snakegbr',
            },
        ],
    },
    {
        name: 'Mole Maniacs',
        genres: ['casual', 'arcade'],
        author_name: 'Muriki Studio',
        author_url: 'https://murikistudio.com.br/',
        description: '<strong>Mole Maniacs</strong> é um jogo estilo Whack-A-Mole! Complete missões em diferentes níveis, acerte as toupeiras, colete moedas para comprar novos martelos, não deixe sua barra de energia chegar a zero!',
        images: [
            '/assets/img/games/molemaniacs/screenshot-1.webp',
            '/assets/img/games/molemaniacs/screenshot-2.webp',
            '/assets/img/games/molemaniacs/screenshot-9.webp',
            '/assets/img/games/molemaniacs/screenshot-10.webp',
            '/assets/img/games/molemaniacs/screenshot-11.webp',
        ],
        links: [
            {
                icon: 'googleplay.svg',
                class: 'bg-white',
                url: 'https://play.google.com/store/apps/details?id=com.muriki.molemaniacs',
            },
            {
                icon: 'youtube.svg',
                class: 'bg-danger',
                url: 'https://www.youtube.com/@murikistudio',
            },
            {
                icon: 'discord.svg',
                class: 'bg-primary',
                url: 'https://discord.gg/f35uuhCvQn',
            },
            {
                icon: 'instagram.svg',
                class: 'bg-danger',
                url: 'https://www.instagram.com/murikistudio',
            },
        ],
    },
    {
        name: 'The Criminal Code Brasil',
        genres: ['action', 'arcade', 'adventure', 'rpg'],
        author_name: 'Yuri Heinz Games',
        author_url: 'https://linktr.ee/yuriheinz',
        description: 'The Criminal Code: Brasil é um jogo de ação em mundo aberto onde você sobrevive no coração da criminalidade urbana, enfrentando polícia, rivais e o próprio destino nas ruas do Brasil.',
        images: [
            '/assets/img/games/thecriminalcodebrasil/screenshot-1.jpg',
            '/assets/img/games/thecriminalcodebrasil/screenshot-2.jpg',
            '/assets/img/games/thecriminalcodebrasil/screenshot-3.jpg',
        ],
        links: [
            {
                icon: 'email.svg',
                class: 'bg-primary',
                url: 'https://linktr.ee/yuriheinz',
            },
            {
                icon: 'youtube.svg',
                class: 'bg-danger',
                url: 'https://www.youtube.com/@yuriheinz4297',
            },
            {
                icon: 'facebook.svg',
                class: 'bg-primary',
                url: 'https://www.facebook.com/yuriheinzgames/',
            },
            {
                icon: 'instagram.svg',
                class: 'bg-danger',
                url: 'https://www.instagram.com/yuriheinzgames',
            },
        ],
    },
    {
        name: 'Zombies & Bullets',
        genres: ['action', 'adventure'],
        author_name: 'Muriki Studio',
        author_url: 'https://murikistudio.com.br/',
        description: '<strong>Zombies & Bullets</strong> é um jogo de tiro de ação top-down 3D onde você deve ajudar o soldado Jacob a enfrentar exércitos de zumbis em ambientes variados e desafiadores.',
        images: [
            'https://murikistudio.com.br/assets/img/zombies-and-bullets/screenshot-0.webp',
            'https://murikistudio.com.br/assets/img/zombies-and-bullets/screenshot-1.webp',
            'https://murikistudio.com.br/assets/img/zombies-and-bullets/screenshot-2.webp',
            'https://murikistudio.com.br/assets/img/zombies-and-bullets/screenshot-3.webp',
        ],
        links: [
            {
                icon: 'steam.svg',
                class: 'bg-primary-subtle',
                url: 'https://store.steampowered.com/app/2802870/Zombies__Bullets/',
            },
            {
                icon: 'youtube.svg',
                class: 'bg-danger',
                url: 'https://www.youtube.com/@murikistudio',
            },
            {
                icon: 'discord.svg',
                class: 'bg-primary',
                url: 'https://discord.gg/f35uuhCvQn',
            },
            {
                icon: 'instagram.svg',
                class: 'bg-danger',
                url: 'https://www.instagram.com/murikistudio',
            },
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
        label: 'Ordenar',
        options: [
            {
                label: 'Nome',
                value: 'name',
            },
            {
                label: 'Autor',
                value: 'author_name',
            },
        ],
    },
]

// Filtros de jogos
const Filters = [
    {
        label: 'Gênero',
        field: 'genres',
        options: 'genres',
    },
    {
        label: 'Autores',
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
            sortBy: '',
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
                games = games.sort((a, b) => a[this.sortBy] >= b[this.sortBy] ? 1 : -1);
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
        setSort(sort, value) {
            setTimeout(() => {
                const current = this.sortBy;
                this.sortBy = current !== value ? value : '';
                console.log('sort', ':', current, '=>', value)
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
