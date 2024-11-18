<template>
    <h2 class="mb-4 font-bold text-4xl 2xl:text-3xl">Спецпредложения</h2>
    <div class="relative">
        <ElementsCarousel class=" rounded-2xl " :options="{
            autoResize: true, duration: 750,
        }" :pagination="{ type: 'bullet' }">
            <SectionProductCard v-for="product in data" :key="product.id" :product="product" class="w-1/4 mr-5">

            </SectionProductCard>
            <template #pagination>
                <div class="flicking-pagination"></div>
            </template>
        </ElementsCarousel>
    </div>
</template>

<script setup>

// const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Array
});

console.log(props)

</script>