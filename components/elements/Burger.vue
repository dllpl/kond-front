<template>

    <div class="">
        <TransitionRoot as="template" :show="burger.open">
            <Dialog class="" @close="popupStore.close('burger')">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                    leave-to="opacity-0">
                    <div class="fixed inset-0 z-30 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <TransitionChild as="template" enter="transform transition ease-in-out duration-500"
                    enter-from="translate-x-full" enter-to="translate-x-0"
                    leave="transform transition ease-in-out duration-500" leave-from="translate-x-0"
                    leave-to="translate-x-full">

                    <DialogPanel
                        class="flex flex-col fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white pt-4 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10 sm:max-w-full">
                        <div class="flex items-center justify-between px-6 ">
                            <NuxtLink :to="'/'" class="-m-1.5 p-1.5">
                                <span class="sr-only">Все для кондитера</span>
                                <img class="h-8 w-auto"
                                    src="https://dljakonditera.ru/a/tort/files/125837/124927/logos.png"
                                    alt="Все для кондитера" />
                            </NuxtLink>

                            <button type="button" @click="popupStore.close('burger')"
                                class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
                                <span class="sr-only">Закрыть меню</span>
                                <Icon name="material-symbols:close-rounded" class="w-6 h-6 group-hover:stroke-red-600"
                                    aria-hidden="true"></Icon>
                            </button>
                        </div>

                        <div class="mt-6 px-6  flow-root">
                            <div class=" divide-y divide-gray-500/10">
                                <div class="">
                                    <NuxtLink :to="'/login'" @click="popupStore.close('burger')"
                                        class="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7  hover:text-red-600 focus:text-red-600">
                                        Вход | Регистрация
                                    </NuxtLink>
                                </div>
                                <div class="hidden py-4 lg:block">
                                    <NuxtLink :to="item.slug" v-for="item in nav" :key="item.name"
                                        @click="popupStore.close('burger')"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-sm  hover:text-red-600 focus:text-red-600">
                                        {{ item.name }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto ">
                            <!-- <NuxtLink :to="item.href" v-for="item in calls" :key="item.name"
                                class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6  bg-gray-100 sm:justify-center sm:px-0">
                                <component :is="item.icon" class="h-5 w-5 flex-none " aria-hidden="true" />
                                {{ item.name }}
                            </NuxtLink> -->
                            <ElementsCallsToAction />
                        </div>
                    </DialogPanel>

                </TransitionChild>

            </Dialog>
        </TransitionRoot>
    </div>
</template>


<script setup>
const popupStore = usePopupStore();
const { burger } = storeToRefs(popupStore);

const props = defineProps({
    show: Boolean,
    data: Array,
    calls: Array,
})

let nav = props.data

</script>