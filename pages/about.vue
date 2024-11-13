<template>
    <div class="wrapper-container px-12 xl:px-6 xs:px-4">

        <div class="relative h-96 flex flex-col justify-center gap-6 py-12 px-12 mb-14">
            <h1 class="text-4xl font-semibold text-white">О компании</h1>
            <p class="text-lg max-w-4xl text-gray-200">
                Мы – один из ведущих поставщиков товаров для кондитерской отрасли, предлагающий широкий выбор
                качественных товаров для профессионалов и любителей. За <b>20</b> лет работы мы зарекомендовали себя как
                надежный партнер, ценящий качество и профессионализм.
            </p>
            <picture class="absolute inset-0 -z-10">
                <source srcset="/assets/img/delivery-1440.jpg" media="(max-width: 1440px)">
                <img class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl"
                    src="/assets/img/delivery-1920.jpg" alt="">
            </picture>
        </div>


        <div class="mb-16 flex gap-6">
            <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 shrink-0">
                <Icon name="hugeicons:location-star-02" class="w-10 h-10 text-red-600" />
            </div>
            <div class="">
                <h2 class="text-3xl font-bold mb-4">Наша миссия</h2>
                <p class="">
                    Предоставить вам качественные ингредиенты для кондитерского искусства.
                    Мы стремимся обеспечить кондитеров, пекарей и всех любителей сладкого мира необходимыми
                    инструментами и ингредиентами для творчества. Мы помогаем воплотить самые смелые идеи в жизнь,
                    предлагая товары, которые способствуют достижению высочайших результатов — от кондитерских украшений
                    до профессиональных ингредиентов и оборудования.
                </p>
            </div>
        </div>

        <div class="grid grid-cols-3 items-center gap-14 mb-40 lg:grid-cols-1 lg:mb-20 xs:mb-10">
            <div class=" col-span-2 lg:col-span-1">
                <h2 class="text-3xl font-bold tracking-tight mb-8"> В нашем интернет-магазине вы найдете
                </h2>
                <ul class="space-y-6 xs:space-y-4">
                    <li v-for="item in withUs" :key="withUs.id" class="flex gap-x-3">
                        <Icon name="weui:done2-filled" class="w-6 h-6 text-red-500 shrink-0" />
                        <div class="">
                            <h3 class="inline font-main font-bold mb-4 ">{{ item.name }}</h3>
                            {{ ' ' }}
                            <p class="inline text-gray-500">{{ item.content }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="overflow-hidden rounded-lg h-full lg:h-80 xs:h-auto">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/incentives-07-hero.jpg" alt=""
                    class="object-cover object-center h-full w-full" />
            </div>
        </div>

        <div class="mb-40 lg:mb-20 xs:mb-10">
            <h2 class="text-3xl font-bold tracking-tight text-center mb-14">Наши ценности</h2>
            <div class="grid grid-cols-4 items-center gap-8 lg:grid-cols-2 xs:grid-cols-1">
                <div v-for="incentive in incentives" :key="incentive.name"
                    class="text-center lg:text-left lg:flex gap-5 md:flex-col md:text-center ">
                    <div class="flex-shrink-0  mb-4 lg:mb-0 ">
                        <div
                            class="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 shrink-0">
                            <Icon :name="incentive.icon" class="w-10 h-10 text-red-600" />
                        </div>
                    </div>
                    <div class=" ">
                        <h3 class="mb-4 font-bold lg:mb-2">{{ incentive.name }}</h3>
                        <p class=" text-gray-500">{{ incentive.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-lg relative isolate overflow-hidden bg-gray-900 px-6 py-20 text-center shadow-2xl mb-10">

            <h2 class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white">
                Почему выбирают нас?
            </h2>

            <p class="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">Мы любим свою работу и понимаем, что
                кондитерское искусство — это не только ремесло, но и творчество. Наша
                цель — предоставить вам все необходимые инструменты для реализации самых смелых идей. Мы гордимся
                тем, что
                уже более 20 лет помогаем профессионалам и любителям создавать шедевры из теста и сахара.</p>

            <p class="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">Спасибо, что выбираете нас! Мы
                уверены, что с нашими товарами ваши кондитерские творения будут не
                только
                вкусными, но и красивыми.</p>

            <div class="absolute -top-24 right-0 -z-10 transform-gpu blur-2xl " aria-hidden="true">
                <div class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#fff06c] to-[#f30a0a] opacity-25"
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
            </div>
        </div>

    </div>

</template>

<script setup>

const withUs = [
    {
        id: 1,
        name: "Ингредиенты для выпечки и декорирования.",
        content: "От качественных сахаров и муки до уникальных декоров для тортов и сладких изделий.",
    },
    {
        id: 2,
        name: "Профессиональное оборудование и инструменты.",
        content: "Формы для выпечки, миксеры, кондитерские мешки и насадки, ножи и многое другое.",
    },
    {
        id: 3,
        name: "Товары для упаковки и презентации.",
        content: "Коробки, подложки, ленты, упаковка для подарков.",
    },
    {
        id: 4,
        name: "Товары для сладких мастеров.",
        content: "Шоколад, глазури, красители, мастика, сахарная пудра и многие другие ингредиенты для вашего творчества.",
    },
    {
        id: 5,
        name: "Мы работаем как с розничными, так и с крупными оптовыми заказчиками.",
        content: "Предлагаем гибкие условия сотрудничества, доставку по всей территории страны и помощь в подборе товаров для специфических нужд.",
    },
]

const incentives = [
    {
        name: 'Качество',
        icon: 'solar:medal-ribbons-star-broken',
        description: "Широкий ассортимент, который обновляется с учетом последних тенденций в мире кондитерского искусства",
    },
    {
        name: 'Доступность',
        icon: 'solar:hand-stars-broken',
        description: "Мы стараемся предложить конкурентные цены и гибкую систему скидок, чтобы каждый клиент мог найти что-то подходящее для себя.",
    },
    {
        name: 'Надежность',
        icon: 'solar:shield-star-broken',
        description:
            "Мы ценим долгосрочные отношения с клиентами и всегда готовы поддержать вас в решении любых вопросов.",
    },
    {
        name: 'Актуальность',
        icon: 'solar:restart-square-broken',
        description: "Мы постоянно пополняем ассортимент, отслеживая новинки и предлагая самые актуальные товары для кондитеров.",
    },
]
</script>