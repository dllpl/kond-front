<template>
    <div class="">
        <h2 v-if="title.length" class="mb-8 font-bold text-4xl 2xl:text-3xl xs:text-2xl">{{ title }}</h2>
        <div class="grid gap-6 
            grid-cols-3 grid-flow-row-dense auto-rows-[minmax(0,_200px)]
            xl:grid-cols-2 xl:auto-rows-[minmax(0,_150px)] 
            xs:grid-cols-1 xs:auto-rows-auto">

            <div v-for="item in data" :key="item.id" :class="item.is_big ? 'row-span-2 xs:row-span-auto' : ''"
                class="relative group overflow-hidden rounded-2xl transition-all xs:h-40">
                <img :src="storage + item.image" :alt="item.title"
                    class="object-cover object-center group-hover:opacity-75 transition-all h-full w-full" />
                <div aria-hidden="true"
                    class="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0" />
                <div class="flex items-end p-6 absolute inset-0">
                    <div class="text-white">
                        <h3 class="font-semibold text-lg ">
                            <NuxtLink :to="'/set/' + item.slug">
                                <span class="absolute inset-0" />
                                {{ item.title }}
                            </NuxtLink>
                        </h3>
                        <div class="mt-1 flex items-center space-x-1">
                            <span aria-hidden="true">Подробнее</span>
                            <Icon name="hugeicons:circle-arrow-right-01"
                                class="w-5 h-5 group-hover:translate-x-1 transition-base shrink-0 "
                                aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="relative group overflow-hidden rounded-2xl aspect-none h-full xs:h-40 sm:aspect-w-2 sm:aspect-h-1 ">-->

            <!-- маленькая ссылка -->
            <!-- <div class="relative group overflow-hidden rounded-2xl xs:h-40">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-01.jpg" alt="" class="object-cover object-center  group-hover:opacity-75 transition-all absolute inset-0 h-full w-full 
                xl:static" />

                <div aria-hidden="true"
                    class="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0 " />
                <div class="flex items-end p-6 absolute inset-0 ">
                    <div>
                        <h3 class="font-semibold text-white">
                            <a href="#">
                                <span class="absolute inset-0" />
                                Accessories2
                            </a>
                        </h3>
                        <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                    </div>
                </div>
            </div> -->

        </div>

    </div>


</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;
defineProps({
    data: {
        type: Array,
    },
    title: {
        type: String,
        default: ''
    }
})
</script>