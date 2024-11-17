<template>
    <main class="wrapper-container py-16">
        <div class="grid  grid-cols-[300px_1fr] gap-8">

            <div class="col-span-1 ">
                <ElementsMenuDropDown :data="data.sidebar" />
            </div>

            <div class="">
                <div class="h-96 ">
                    <ElementsSliderBanner :data="banners.data" />
                </div>
                <SectionProductTop />
                <SectionFollowSocial />
                <SectionPromoCook />
                <SectionPromoPrice />
                <SectionAdvantages />
            </div>
        </div>
    </main>
</template>

<script setup>
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
    "banners": [
        {

        }
    ],
    "specialOffers": [
        {

        }
    ]
}
const { public: config } = useRuntimeConfig();
const { data: banners } = await useFetch(config.backOptions.api + '/banners');
console.log(banners.value.data)

</script>
