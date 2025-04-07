/**
 * Requer a inclusão de dados nas seguintes constantes:
 *
 * @global
 * @constant {Array} Data - Lista de itens a serem mostrados
 * @constant {Array} Tags - Tags de itens usadas para filtragem
 * @constant {Array} Sorts - Ordenações de itens
 * @constant {Array} Filters - Filtros de itens
*/

// Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            selectedItem: null,
            itemModal: null,
            sortBy: '',
            sortOrder: '',
            filterBy: '',
            filterByValue: '',
        };
    },

    computed: {
        items() {
            let items = [...(document.ListingData ?? [])];

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
            return document.ListingSorts ?? [];
        },

        filters() {
            const filters = [];

            for (const filter of (document.ListingFilters ?? [])) {
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

            for (const item of (document.ListingData ?? [])) {
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

            for (const item of (document.ListingData ?? [])) {
                for (const tagValue of item.tags) {
                    if (!tags.some(tag => tag.value === tagValue)) {
                        for (const tag of (document.ListingTags || [])) {
                            if (tag.value === tagValue) {
                                tags.push(tag);
                                break;
                            }
                        }
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
            window.location.hash = item.id || '';

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

        getSortLabel(sortValue) {
            for (const sort of (this.sorts || [])) {
                if (sort.value === sortValue) {
                    return sort.label;
                }
            }

            return 'Ordenação';
        },

        getFilterLabel(filter) {
            if (!this.filterBy) {
                return filter.label;
            }

            for (const option of filter.options) {
                if (option.value === this.filterByValue) {
                    return option.label;
                }
            }

            return filter.label;
        },

        isDateLessThanDaysAgo(dateStr, days) {
            const date = new Date(dateStr);
            const now = new Date();
            const diffMs = now - date;
            const diffDays = diffMs / (1000 * 60 * 60 * 24);
            return diffDays < days;
        },

        formatDate(dateStr) {
            let date = new Date(dateStr);
            return date.toLocaleDateString();
        },
    },

    mounted() {
        this.sortBy = this.sorts?.length > 0 ? this.sorts[0]?.value : '';
        this.sortOrder = this.sorts?.length > 0 ? this.sorts[0]?.order : '';

        // Modal
        this.itemModal = new bootstrap.Modal(document.getElementById('itemModal'));

        this.$refs.itemModal.addEventListener('hidden.bs.modal', event => {
            this.selectedItem = null;
            history.pushState(null, null, window.location.href.split('#')[0]);
        });

        const hash = window.location.hash?.trim();

        if (hash && hash.length > 1) {
            const itemId = hash.substring(1).trim();

            for (const item of this.items) {
                if (item.id === itemId) {
                    this.showModal(item);
                    break;
                }
            }
        }
    },
}).mount("#app");
