<template>
    <div class="">
        <h2 class="mb-8 font-bold text-4xl 2xl:text-3xl">Спецпредложения</h2>
        <div class="relative">
            <ElementsCarousel class="" :options="{
                autoResize: true, duration: 750, circular: true,
            }" :pagination="{ type: 'bullet' }">
                <SectionProductCard v-for="product in data" :key="product.id" :product="product"
                    class="w-1/6 mr-5 2xl:w-1/4 border border-gray-200 rounded-2xl">

                </SectionProductCard>
                <template #pagination>
                    <div class="flicking-pagination"></div>
                </template>
            </ElementsCarousel>
        </div>
    </div>
</template>

<script setup>

const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Array
});

console.log(props)

</script>