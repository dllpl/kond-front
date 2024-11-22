<template>
    <nav class="flex items-center" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-1">
            <li>
                <div>
                    <NuxtLink :to="`/`" class="flex items-center text-gray-400 hover:text-gray-500 transition-all">
                        <Icon name="material-symbols-light:home-rounded" class="h-5 w-5 flex-shrink-0"
                            aria-hidden="true" />
                        <span class="sr-only">Главная</span>
                    </NuxtLink>
                </div>
            </li>
            <li v-for="(page, i) in data" :key="i">
                <div class="flex items-center">
                    <Icon name="ic:round-keyboard-arrow-right" class="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true" />
                    <span v-if="data.length - 1 === i" class="ml-1 text-sm font-medium text-gray-400 ">
                        {{ page.name }}
                    </span>
                    <NuxtLink v-else :to="`/${page.href}`"
                        class="ml-1 text-sm font-medium text-gray-400 hover:text-gray-500 transition-all">
                        {{ page.name }}
                    </NuxtLink>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script setup>

defineProps({
    data: Array
})
</script>