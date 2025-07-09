<template>
    <div class="flex items-center" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-1 overflow-x-scroll no-scrollbar">
            <li>
                <NuxtLink to="/" class="flex items-center text-gray-400 hover:text-gray-500 transition-all">
                    <Icon name="hugeicons:home-05" class="h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                    <span class="sr-only">Главная</span>
                </NuxtLink>
            </li>
            <li class="flex items-center whitespace-nowrap" v-for="(page, i) in data" :key="i">
                <Icon name="hugeicons:arrow-right-01" class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                <span v-if="data.length - 1 === i" class="ml-1 text-sm font-medium text-gray-400 ">
                    {{ page.name }}
                </span>
                <NuxtLink v-else :to="`/${page.uri}`"
                          :title="page.name"
                          class="ml-1 text-sm font-medium text-gray-400 hover:text-gray-500 transition-all">
                    {{ page.name }}
                </NuxtLink>
            </li>
        </ol>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Array
})

useSchemaOrg([
    defineBreadcrumb({
        itemListElement: () => {
            return [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Главная",
                    item: {
                        "@type": "Thing",
                        "@id": "https://dljakonditera.ru",
                        name: "Главная"
                    }
                },
                ...props.data.map((item, i) => {
                    return {
                        "@type": "ListItem",
                        position: i + 2,
                        item: {
                            "@type": "Thing",
                            "@id": `https://dljakonditera.ru/${item.uri}`,
                            name: item.name
                        }
                    }
                })
            ]
        },
    })
])
</script>