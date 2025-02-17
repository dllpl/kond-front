<template>

    <Popover class="relative isolate z-10 pt-4 w-full hidden xs:block">

        <PopoverButton type="button"
            class="w-full group flex items-center justify-center gap-2 font-medium rounded-md bg-red-600 text-white py-2 transition-all hover:bg-red-500 focus:bg-red-500">
            <Icon name="hugeicons:dashboard-square-01" class=" w-6 h-6 group-hover:text-white group-focus:bg-white"
                aria-hidden="true" />
            Каталог
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">

            <PopoverPanel v-slot="{ close }" class="absolute z-10 w-full overflow-y-auto inset-x-0 top-[60px] bg-white shadow-lg ring-1
						ring-gray-900/5 pt-6 pb-4 px-2">

                <div class="wrapper-container grid grid-cols-2 gap-4 overflow-y-auto custom-scroll mb-4 xs:px-2">

                    <div v-for="item in categories.data" :key="item.name"
                        class="group relative flex items-center gap-2 rounded-lg text-sm leading-6 hover:bg-gray-50 sm:flex-col text-center">

                        <div
                            class="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                            <img :src="storage + item.img" :alt="item.title">
                        </div>
                        <div>
                            <NuxtLink @click="close()" :to="`/catalog/${item.slug}`"
                                class="font-medium text-center text-sm">
                                {{ item.title }}
                                <span class="absolute inset-0" />
                            </NuxtLink>
                        </div>

                    </div>
                </div>

                <div class="wrapper-container">
                    <ElementsCallsToAction @click="close()" />
                </div>

            </PopoverPanel>
        </transition>
    </Popover>

</template>


<script setup>
const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories');

</script>