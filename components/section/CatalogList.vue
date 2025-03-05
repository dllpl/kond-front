<template>
  <div class="relative box-content overflow-visible ">
    <h1 class="mb-8 font-bold text-4xl 2xl:text-3xl">{{ current_title }}</h1>

    <div class="relative grid grid-cols-6 gap-8 space-x-0 xl:grid-cols-4 lg:grid-cols-3 lg:gap-6 xs:grid-cols-2">
      <NuxtLink v-for="(category, i) in children" :key="i" :to="`/catalog/${category.slug_path}`" class="relative flex flex-col w-auto h-60 overflow-hidden rounded-lg p-6 transition-all hover:opacity-75 
        lg:h-50 
        md:h-45 md:p-4
        xs:h-40
        ">
        <span aria-hidden="true" class="absolute inset-0">
          <img :loading="i > 1 ? 'lazy' : 'eager'" width="228" height="240" :src="storage + category.img" :alt="category.title" class="h-full w-full object-cover object-center" />
        </span>

        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
        <span class="relative mt-auto text-center text-xl font-bold text-white lg:text-lg sm:text-base">
          {{ category.title }}
        </span>
      </NuxtLink>
    </div>
  </div>

</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
  data: {
    type: Array,
  },
})

let children = []
let current_title = 'Каталог'

if (props.data.length > 1) {
  children = props.data
} else {
  children = props.data[0].children
  current_title = props.data[0].title
}
</script>
<!-- mb-20" :class="{ 'mb-0': children.length === 0 }" -->