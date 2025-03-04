<template>
    <div class="relative">
        <ElementsCarousel class="rounded-2xl " :options="{
            circular: true,
            autoResize: true,
            moveType: 'strict',
            duration: 750,
            isAdaptive: false,
        }" :pagination="{ type: 'scroll' }" :autoplay="{ duration: 5000, stopOnHover: true }">

            <div class="w-full mr-5" v-for="(item, i) in data" :key="item.id">
                <div class=" text-white relative h-96 py-12 px-12 flex flex-col justify-center gap-5 
                md:h-80 md:py-10 md:px-8 
                sm:h-72
                xs:h-80 xs:py-4 xs:px-4
                ">
                    <h2 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl xs:drop-shadow-md">
                        {{ item.title }}
                    </h2>

                    <p class="text-lg xs:drop-shadow-md">
                        {{ item.subtitle }}
                    </p>

                    <NuxtLink v-if="item.link" :to="item.link" target="_blank"
                        class="text-sm font-semibold rounded-lg text-indigo-950 px-10 py-3 bg-amber-400 hover:bg-amber-300 transition-base mr-auto cursor-pointer">
                        Перейти
                    </NuxtLink>
                    <span class="hidden rounded-2xl absolute inset-0 -z-10 bg-gray-900 opacity-15 sm:block"></span>

                    <picture class="absolute inset-0 -z-20">
                        <source :src="storage + item.image_small" media="(max-width: 1440px)">
                        <img :loading="i === 0 ? 'eager' : 'lazy'" width="1200" height="380" class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl"
                            :src="storage + item.image_large" :alt="item.title">
                    </picture>
                </div>
            </div>
            <template #pagination>
                <div class="flicking-pagination"></div>
            </template>
        </ElementsCarousel>
    </div>
</template>

<script setup>

const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Object
});
</script>