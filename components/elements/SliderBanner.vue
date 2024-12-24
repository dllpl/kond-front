<template>
    <div class="relative">
        <ElementsCarousel class="rounded-2xl " :options="{
            circular: true,
            autoResize: true,
            moveType: 'strict',
            duration: 750,
            isAdaptive: false,
        }" :pagination="{ type: 'scroll' }" :autoplay="{ duration: 5000, stopOnHover: true }">
            <div class="w-full mr-5" v-for="item in data" :key="item.id">
                <div class="relative h-96 py-12 px-12 flex flex-col justify-center gap-5 ">
                    <h2 class="text-4xl font-semibold" :class="item.text_color ? `text-[${item.text_color}]` : ''">
                        {{ item.title }}
                    </h2>
                    <p class="text-lg" :class="item.text_color ? `text-[${item.text_color}]` : ''">
                        {{ item.subtitle }}
                    </p>

                    <NuxtLink v-if="item.link" :to="item.link" target="_blank"
                        class="text-sm font-semibold rounded-lg  px-10 py-3 bg-amber-300 hover:bg-amber-400 transition-base mr-auto cursor-pointer">
                        Перейти
                    </NuxtLink>

                    <picture class="absolute inset-0 -z-10">
                        <source :src="storage + item.image_small" media="(max-width: 1440px)">
                        <img class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl"
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