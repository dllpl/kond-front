<template>
    <div class="mt-6 flow-root">
        <h2 class="text-base font-semibold leading-7 mb-6">Избранные товары</h2>
        <div class="bg-white p-5 rounded-lg">
            <div
                class=" grid grid-cols-6 border-l border-gray-200 mx-0 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                <SectionProductCard v-for="favorite in favorites" :key="favorite.id" :product="favorite.product"
                    class="border-b border-r border-t border-gray-200" />
            </div>
        </div>
    </div>
</template>

<script setup>
const profileStore = useProfileStore();

defineProps({
    favorites: {
        type: Array,
        default: [],
    }
})
console.log(profileStore.favorites);
</script>