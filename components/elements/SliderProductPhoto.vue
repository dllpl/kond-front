<script setup>
const {storage} = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Array,
    productTitle: {
        type: String,
        default: 'Фото товара'
    }
});
</script>

<template>
    <div class="relative">
        <ElementsCarousel :options="{
            circular: true,
            autoResize: true,
            moveType: 'strict',
            duration: 750,
            isAdaptive: false
        }" :pagination="{ type: 'scroll' }" :autoplay="{ duration: 5000, stopOnHover: true }">
            <div v-for="(item, i) in data" :key="i" class="w-full mr-5">
                <div class=" text-white relative h-[535px] py-12 px-12 flex flex-col justify-center gap-5
                md:h-80 md:py-10 md:px-8
                sm:h-72
                xs:h-80 xs:py-4 xs:px-4
                ">
                    <img
                        v-if="data && data.length"
                        :loading="i === 0 ? 'eager' : 'lazy'"
                        width="600" height="535"
                        class="absolute inset-0 object-cover object-right h-full w-full rounded-lg -z-10"
                        :src="storage + item"
                        :alt="`Фото #${i + 1} товара ${productTitle}`"
                    >
                </div>

            </div>
            <template #pagination>
                <div class="flicking-pagination"></div>
            </template>
        </ElementsCarousel>
    </div>
</template>

<style scoped>

</style>