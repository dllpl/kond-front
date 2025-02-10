<template>
    <div class="flex flex-col w-full p-4 rounded-lg bg-white shadow-lg">
      <NuxtLink to="/catalog">
        <h2 class="pb-2 mb-2 font-bold text-4xl border-b border-gray-500/10 2xl:text-3xl">
          Каталог
        </h2>
      </NuxtLink>
        <ul>
            <li v-for="item in data" class="group dropdown relative transition-base">

                <NuxtLink :to="`/catalog/${item.slug}`" class=" inline-flex justify-between items-center w-full py-4">
                    <div class="flex items-center gap-2 transition-all group-hover:translate-x-1">
                        <img :src="storage + item.img" :alt="item.title" class="w-8 h-auto">
                        <span class="leading-normal">{{ item.title }}</span>
                    </div>
                    <Icon name="hugeicons:arrow-down-01" class="w-6 h-6 transition-base group-hover:-rotate-90 shrink-0"
                        aria-hidden="true" />
                </NuxtLink>

                <ul v-if="item?.children && item.children.length"
                    class="dropdown-menu absolute hidden left-full top-0 rounded-lg text-sm py-2 bg-white w-full shadow-xl z-10">
                    <li v-for="child in item.children">
                        <NuxtLink :to="`/catalog/${item.slug}/${child.slug}`"
                            class="py-2 px-4 block  hover:bg-amber-200 hover:text-indigo-950 transition-all">
                            {{ child.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;
defineProps({
    data: {
        type: Array,
    }
})
</script>