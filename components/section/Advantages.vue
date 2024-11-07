<template>


    <div class="rounded-2xl bg-gray-50 px-6 py-16 ring-1 sm:p-16">
        <!--<div class="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16"> -->

        <div class="mx-auto lg:max-w-xl max-w-none">
            <!--<div class="mx-auto max-w-xl lg:max-w-none"> -->

            <div class="text-center">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-8">Наши преимущества</h2>
            </div>

            <div class="grid max-w-none gap-x-8 gap-y-10 grid-cols-4 xl:grid-cols-2">
                <!--<div class="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-4"> -->

                <div v-for="incentive in incentives" :key="incentive.name"
                    class="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <!-- class="text-center sm:flex sm:text-left lg:block lg:text-center"> -->

                    <div class="sm:flex-shrink-0">
                        <!-- <div class="sm:flex-shrink-0"> -->
                        <div class="flow-root">
                            <icon :name="incentive.imageSrc" class="mx-auto h-16 w-16 -scale-x-100 scale-y-100 " />

                            <!-- <img class="mx-auto h-16 w-16" :src="incentive.imageSrc" alt="" /> -->
                        </div>
                    </div>
                    <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <!-- <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6"> -->
                        <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
                        <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
                    </div>
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
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: 'Специальные условия для оптовиков',
        imageSrc: 'noto:handshake-light-skin-tone-medium-light-skin-tone',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Удобное оформление заказа',
        imageSrc: 'noto:package',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
    {
        name: 'Быстрая доставка',
        imageSrc: 'noto:delivery-truck',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]
</script>