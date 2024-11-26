<template>
    <div class="">
        <div class="flex items-center justify-between gap-4 mb-8">
            <h2 class="font-bold text-4xl 2xl:text-3xl">Спецпредложения</h2>
            <div class="flex items-center gap-4 relative">
                <button
                    class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base">
                    <Icon name="ic:round-arrow-back-ios" class="w-5 h-5"></Icon>
                </button>
                <button
                    class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base">
                    <Icon name="ic:round-arrow-forward-ios" class="w-5 h-5"></Icon>
                </button>
            </div>
        </div>
        <div class="relative">
            <ElementsCarousel class="" :options="{
                autoResize: true, duration: 750, circular: true, align: 'prev'
            }" :plugins="arrow">
                <SectionProductCard v-for="product in data" :key="product.id" :product="product"
                    class="w-1/6 mr-5 2xl:w-1/4 border border-gray-200 rounded-2xl ">
                </SectionProductCard>
            </ElementsCarousel>
        </div>
    </div>
</template>

<script setup>

const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Array
});

// console.log(props)

</script>