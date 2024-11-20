<template>
    <main class="wrapper-container p-16">
        <div class="grid grid-cols-custom gap-8 lg:grid-cols-1 lg:gap-0">

            <div class="col-span-1 lg:hidden">
                <ElementsMenuDropDown :data="categories.data" />
            </div>

            <div class="col-span-1 mb-20">
                <div class="mb-20">
                    <ElementsSliderBanner :data="banners.data" />
                </div>
                <SectionAdvantages />
            </div>

            <ElementsSliderOffers class="col-span-2 lg:grid-cols-1 mb-20" :data="specialOffers" />
            <SectionProductTop class="col-span-2 lg:grid-cols-1 mb-20" />
            <SectionPromoPrice class="col-span-2 lg:grid-cols-1 mb-20" />
            <ElementsSliderNew class="col-span-2 lg:grid-cols-1 mb-20" :data="productNews" />
            <SectionFollowSocial class="col-span-2 lg:grid-cols-1 mb-20" />
            <SectionPromoCook class="col-span-2 lg:grid-cols-1 " />
        </div>



    </main>
</template>

<script setup>

const { public: config } = useRuntimeConfig();
const { data: banners } = await useFetch(config.backOptions.api + '/banners');
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories');


const data = {
    "sidebar": [
        {
            "name": "Упаковка",
            "slug": "upakovka",
            "icon": "https://dljakonditera.ru/a/tort/files//userfiles/images/%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BA%D0%B02.svg",
            "children": [
                {
                    "name": "Ароматизаторы пищевые",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Шоколадная глазурь",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Пищевые красители",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Сублимированные ягоды",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Мастика и марципан",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Сыры и сливки",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Гели, глазури, ганаш",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Мука и Смеси для выпечки",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Ореховые лепестки ",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Загустители (агар, пектин, желатин)",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Фризер",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Специи и пряности",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Начинки (ореховые пасты, пралине)",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Фруктовое пюре",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Айсинг и сухой белок",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Шоколад",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Полезное питание и суперфуды",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Готовые полуфабрикаты",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Какао продукты",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Силиконовые молды для шоколада, изомальта и мастики",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
                {
                    "name": "Силиконовые молды для шоколада, изомальта и мастики",
                    "slug": "level-2",
                    "icon": "fas fa-home"
                },
            ]
        },
        {
            "name": "test",
            "slug": "test",
            "icon": "https://dljakonditera.ru/a/tort/files//userfiles/images/%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BA%D0%B02.svg",
        },
    ],
    // "banners": [
    //     {

    //     }
    // ],
    // "specialOffers": [
    //     {

    //     }
    // ]
}

const productNews = [
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        price: '149 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
        inCart: true
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        price: '1150 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',
        price: '15 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        price: '785 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 5,
        name: 'Organize Basic Set (Walnut)',
        price: '963 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 6,
        name: 'Organize Pen Holder',
        price: '2100 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 7,
        name: 'Organize Sticky Note Holder',
        price: '15 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 8,
        name: 'Organize Phone Holder',
        price: '785 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 9,
        name: 'Organize Basic Set (Walnut)',
        price: '963 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 10,
        name: 'Organize Pen Holder',
        price: '2100 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
]
const specialOffers = [
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        price: '149 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
        inCart: true
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        price: '1150 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',
        price: '15 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        price: '785 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 5,
        name: 'Organize Basic Set (Walnut)',
        price: '963 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 6,
        name: 'Organize Pen Holder',
        price: '2100 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 7,
        name: 'Organize Basic Set (Walnut)',
        price: '963 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 8,
        name: 'Organize Pen Holder',
        price: '2100 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 9,
        name: 'Organize Basic Set (Walnut)',
        price: '963 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 10,
        name: 'Organize Pen Holder',
        price: '2100 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
]

</script>