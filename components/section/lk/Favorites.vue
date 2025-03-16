<template>
    <div class="mt-6 flow-root">
        <h2 class="text-base font-semibold leading-7 mb-6">Избранные товары</h2>
        <div class="bg-white p-5 rounded-lg">
            <div v-if="favorites.length > 0"
                class=" grid grid-cols-6 border-l border-gray-200 mx-0 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                <LazySectionProductCard v-for="favorite in favorites" :key="favorite.id" :product="favorite"
                    class="border-b border-r border-t border-gray-200" />
            </div>
            <p v-else class="text-gray-600 text-sm">
                Нет избранных товаров
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    favorites: {
        type: Array,
        default: [],
    }
})

</script>