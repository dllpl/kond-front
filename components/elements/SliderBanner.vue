<template>
    <div>
        <ClientOnly>
            <ElementsCarousel :options="{
                Navigation: false,
                Dots: true,
                slidesPerPage: 'auto',
                infinite: false,
            }">

                <div class="f-carousel__slide" v-for="item in data" :key="item.id">
                    <div class="relative h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-8">
                        <h2 class="text-4xl font-semibold ">{{ item.title }}</h2>
                        <p class="text-lg">{{ item.subtitle }}</p>
                        <NuxtLink :to="item.link"
                            class="text-sm font-semibold rounded-lg  px-4 py-3 bg-amber-300 hover:bg-amber-400 transition-base mr-auto cursor-pointer">
                            Перейти
                        </NuxtLink>

                        <img class="absolute inset-0 object-cover object-right h-full w-full rounded-2xl -z-10"
                            :src="storage + item.image_large" :alt="item.title">
                    </div>
                </div>
            </ElementsCarousel>
        </ClientOnly>


        <!-- <Splide :options="{ perPage: 1, perMove: 1, type: 'loop' }" aria-labelledby="My Favorite Images">
            <SplideSlide>
                <div v-for="item in data" :key="item.id">
                    <div class="relative h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-8">
                        <h2 class="text-4xl font-semibold ">{{ item.title }}</h2>
                        <p class="text-lg">{{ item.subtitle }}</p>
                        <NuxtLink :to="item.link"
                            class="text-sm font-semibold rounded-lg  px-4 py-3 bg-amber-300 hover:bg-amber-400 transition-base mr-auto cursor-pointer">
                            Перейти
                        </NuxtLink>

                        <img class="absolute inset-0 object-cover object-right h-full w-full rounded-2xl -z-10"
                            :src="storage + item.image_large" :alt="item.title">
                    </div>
                </div>
            </SplideSlide>
        </Splide> -->

    </div>
</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    data: Object
});

console.log(props)

</script>