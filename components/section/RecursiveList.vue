<!-- components/RecursiveList.vue -->
<template>
    <ul class="space-y-2">
        <li v-for="(item, index) in items" :key="index">
            <NuxtLink :to="item.link">
                <h3
                    :class="[
            level === 0 ? 'font-bold text-lg' : level === 1 ? 'text-sm' : 'text-xs',
            'hover:text-blue-600'
          ]"
                >
                    {{ item.title }}
                </h3>
            </NuxtLink>

            <RecursiveList
                v-if="item.children?.length"
                :items="item.children"
                :level="level + 1"
                class="ml-4"
            />
        </li>
    </ul>
</template>

<script setup>
defineProps({
    items: Array,
    level: {
        type: Number,
        default: 0
    }
})
</script>
