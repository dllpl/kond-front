<template>
  <div class="bg-white p-5 rounded-lg">

    <h2 class="sr-only">Товары</h2>
    <div
        class=" grid grid-cols-6 border-l border-gray-200 mx-0 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">

      <SectionProductCard v-for="product in data" :key="product.id" :product="product"
                          class="border-b border-r border-t border-gray-200"/>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
  }
})
</script>