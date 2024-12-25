<template>
    <div>
        <h2 class="hidden lg:block font-bold text-4xl mb-8 2xl:text-3xl xs:text-2xl">
            Наши преимущества
        </h2>
        <div class="grid gap-x-8 gap-y-10 grid-cols-4 xl:grid-cols-2 sm:grid-cols-1 sm:gap-6">
            <div v-for="incentive in incentives" :key="incentive.name" class="text-center 
                xl:flex xl:text-left
                lg:block lg:text-center 
                sm:flex sm:text-left sm:items-center 
                xs:items-start">
                <div class="sm:flex-shrink-0">
                    <div class="flow-root">
                        <icon :name="incentive.imageSrc" class="mx-auto h-16 w-16  xl:h-12 xl:w-12 xs:h-10 xs:w-10" />
                    </div>
                </div>
                <div class="mt-3  xl:mt-0  xl:ml-4 lg:ml-0 lg:mt-6 sm:ml-6 sm:mt-0">
                    <h3 class="font-medium text-gray-900">{{ incentive.name }}</h3>
                    <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const incentives = [
    {
        name: 'Скидки и акции',
        imageSrc: 'noto:wrapped-gift',
        description: "Лучшие предложения для выгодных покупок. Следите за новыми распродажами!",
    },
    {
        name: 'Условия для оптовиков',
        imageSrc: 'noto:briefcase',
        description: "Выгодные цены и индивидуальные предложения для бизнеса.",
    },
    {
        name: 'Удобное оформление заказа',
        imageSrc: 'noto:package',
        description: "Быстрый и простой процесс покупки с минимальными усилиями.",
    },
    {
        name: 'Быстрая доставка',
        imageSrc: 'noto:delivery-truck',
        description: "Получайте заказы в кратчайшие сроки с гарантией надежности и скорости.",
    },
]
</script>