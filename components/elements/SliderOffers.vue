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
                autoResize: true, duration: 750, circular: true, align: 'prev', panelsPerView: 3,
            }" :plugins="arrow">

                <!-- panelsPerView: 5, -->
                <!-- lg: panelsPerView: 4, -->
                <!-- md: panelsPerView: 3, -->
                <!-- xs: panelsPerView: 2, -->
                <div class="mr-4" v-for="product in data" :key="product.id">
                    <SectionProductCard :product="product" class="border border-gray-200 rounded-lg">
                    </SectionProductCard>
                </div>

            </ElementsCarousel>
        </div>
    </div>
</template>

<script setup>

const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Array
});

console.log(props.data)
// const panelsPerView = computed(() => {
//     if (process.server) {
//         return 5
//     }
//     const vw = window.innerWidth
//     if (vw < 1441) {
//         return 4
//     } else {
//         return 5
//     }
// })


// const screenWidth = ref(window.innerWidth);


// // Функция для обновления размеров экрана
// const updateScreenSize = () => {
//     screenWidth.value = window.innerWidth;
// };

// // Добавляем обработчик события resize при монтировании компонента
// onMounted(() => {
//     window.addEventListener('resize', updateScreenSize);
// });

// // Убираем обработчик события resize при размонтировании компонента
// onBeforeUnmount(() => {
//     window.removeEventListener('resize', updateScreenSize);
// });



// console.log(panelsPerView)

</script>