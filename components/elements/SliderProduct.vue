<template>
    <div class="">
        <div class="flex items-center justify-between gap-4 mb-8">
            <h2 class="font-bold text-4xl 2xl:text-3xl">{{ title }}</h2>
        </div>

        <ElementsCarousel class="" :options="{
            circular: true,
            autoResize: true,
            moveType: 'strict',
            bounce: '10%',
            duration: 450,
            align: 'prev',
            useResizeObserver: true,
            panelsPerView: 5,
            isAdaptive: true,
        }" :arrow="{ parentEl: null, prevElSelector: '.arrow--prev', nextElSelector: '.arrow--next' }"
            :autoplay="{ duration: 3000 }">

            <template #arrow>
                <div class="flex items-center gap-4 absolute top-0 right-0">
                    <button
                        class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base arrow--prev">
                        <Icon name="ic:round-arrow-back-ios" class="w-5 h-5"></Icon>
                    </button>
                    <button
                        class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base arrow--next">
                        <Icon name="ic:round-arrow-forward-ios" class="w-5 h-5"></Icon>
                    </button>
                </div>
            </template>

            <div class="mr-4" v-for="product in data" :key="product.id">
                <SectionProductCard :product="product" class="border border-gray-200 rounded-lg" />
            </div>

        </ElementsCarousel>

    </div>
</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Array,
    title: String
});

</script>

<style>
.flicking-viewport {
    position: static;
}
</style>