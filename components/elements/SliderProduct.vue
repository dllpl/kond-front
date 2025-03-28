<template>
    <div class="">
        <div class="flex items-center justify-between gap-4 mb-8 xs:mb-4">
            <h2 class="font-bold text-4xl 2xl:text-3xl xs:text-2xl">{{ title }}</h2>
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
            length: data.length,
        }" :arrow="{
            parentEl: null,
            prevElSelector: '.arrow--prev',
            nextElSelector: '.arrow--next'
        }">

            <template #arrow>
                <div
                    class="flex items-center gap-4 absolute top-0 right-0 xs:w-full xs:justify-between xs:inset-y-2/4 xs:z-10">
                    <button aria-label="Предыдущий слайд"
                        class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base arrow--prev">
                        <Icon name="hugeicons:arrow-left-01" class="w-5 h-5"></Icon>
                    </button>
                    <button aria-label="Следующий слайд"
                        class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base arrow--next">
                        <Icon name="hugeicons:arrow-right-01" class="w-5 h-5"></Icon>
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