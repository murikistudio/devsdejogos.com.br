// Definições de jogos
const Data = [
    {
        name: 'Birds Adventure',
        directory: 'games/birdsadventure',
        tags: ['action', 'adventure', 'casual'],
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
        directory: 'games/christmassmash',
        tags: ['action', 'arcade', 'rpg'],
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
        directory: 'games/defendants',
        tags: ['casual', 'arcade'],
        author_name: 'Snakegbr',
        author_url: 'https://www.instagram.com/snakegbr',
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
        directory: 'games/molemaniacs',
        tags: ['casual', 'arcade'],
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
        directory: 'games/thecriminalcodebrasil',
        tags: ['action', 'arcade', 'adventure', 'rpg'],
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
        directory: 'games/zombiesandbullets',
        tags: ['action', 'adventure'],
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
const Tags = [
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
        label: 'Mais Recentes',
        value: 'date_added',
        order: 'desc',
    },
    {
        label: 'Nome (A-Z)',
        value: 'name',
        order: 'asc',
    },
    {
        label: 'Autor (A-Z)',
        value: 'author_name',
        order: 'asc',
    },
];

// Filtros de jogos
const Filters = [
    {
        label: 'Gênero',
        field: 'tags',
        options: 'tags',
    },
    {
        label: 'Autor',
        field: 'author_name',
        options: 'authors',
    },
]

// Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            selectedItem: null,
            itemModal: null,
            sortBy: Sorts[0].value,
            sortOrder: Sorts[0].order,
            filterBy: '',
            filterByValue: '',
        };
    },

    computed: {
        items() {
            let items = [...Data];

            if (this.filterBy && this.filterByValue) {
                items = items.filter((item) => {
                    const item_field = item[this.filterBy];

                    if (Array.isArray(item_field)) {
                        return item_field.some(tag => tag === this.filterByValue);
                    }

                    return item[this.filterBy] === this.filterByValue;
                });
            }

            if (this.sortBy) {
                items = items.sort((a, b) => {
                    const valA = a[this.sortBy];
                    const valB = b[this.sortBy];

                    if (this.sortOrder === 'desc') {
                        return valA < valB ? 1 : valA > valB ? -1 : 0;
                    } else {
                        return valA > valB ? 1 : valA < valB ? -1 : 0;
                    }
                });
            }

            return items;
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

            for (const item of Data) {
                if (!authors.some(author => author.value === item.author_name)) {
                    authors.push({
                        label: item.author_name,
                        value: item.author_name,
                    });
                }
            }

            authors.sort((a, b) => a.label >= b.label ? 1 : -1);

            return authors;
        },

        tags() {
            const tags = [];

            for (const item of Data) {
                for (const tagKey of item.tags) {
                    if (!tags.some(tag => tag.value === tagKey)) {
                        for (const tag of Tags) {
                            if (tag.value === tagKey) {
                                tags.push(tag);
                                break;
                            }
                        }
                        break;
                    }
                }
            }

            return tags;
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

        showModal(item) {
            this.selectedItem = item;

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

                this.itemModal.show();
            }, 100);
        },
    },

    mounted() {
        // Modal
        this.itemModal = new bootstrap.Modal(document.getElementById('itemModal'));

        this.$refs.itemModal.addEventListener('hidden.bs.modal', event => {
            this.selectedItem = null;
        });
    },
}).mount("#app");
