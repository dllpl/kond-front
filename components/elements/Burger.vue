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
                        class="flex flex-col fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white pt-4 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10 sm:max-w-xs">
                        <div class="flex items-center justify-between px-6 ">
                            <NuxtLink to="/" class="-m-1.5 p-1.5">
                                <span class="sr-only">Все для кондитера</span>
                                <img loading="lazy" width="250" height="66" class="h-8 w-auto"
                                    src="/assets/img/logo.webp" alt="Все для кондитера" />
                            </NuxtLink>

                            <button type="button" @click="popupStore.close('burger')"
                                class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
                                <span class="sr-only">Закрыть меню</span>
                                <Icon name="hugeicons:cancel-01" class="w-6 h-6 group-hover:stroke-red-600"
                                    aria-hidden="true"></Icon>
                            </button>
                        </div>

                        <div class="mt-6 px-6  flow-root">
                            <div class=" divide-y divide-gray-500/10">
                                <div class="">
                                    <NuxtLink to="/login" @click="popupStore.close('burger')"
                                        class="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7  hover:text-red-600 focus:text-red-600">
                                        <template v-if="!profileStore.isAuth()">
                                            Вход | Регистрация
                                        </template>
                                        <template v-else>
                                            <span class="flex items-center gap-2">
                                                Профиль
                                                <Icon name="hugeicons:user-circle" class="w-6 h-6" />
                                            </span>
                                        </template>
                                    </NuxtLink>
                                </div>
                                <div class="hidden py-4 lg:block">
                                    <NuxtLink :to="item.slug" v-for="item in data" :key="item.name"
                                        @click="popupStore.close('burger')"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-sm  hover:text-red-600 focus:text-red-600">
                                        {{ item.name }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto">
                            <ElementsCallsToAction @click="popupStore.close('burger')" />
                            <div class="my-5">
                                <ul class="text-xs leading-5 text-gray-400 mt-0 text-center">
                                    <li>ИП&nbsp;&mdash; ЕВГЕНЬЕВА ДИАНА ЕВГЕНЬЕВНА</li>
                                    <li>ИНН&nbsp;&mdash; 165033847201</li>
                                    <li>ОГРН&nbsp;&mdash; 308165020600060</li>

                                </ul>
                                <p class="text-xs leading-5 text-gray-400 mt-0 text-center">&copy; {{ new Date().getFullYear() }} Всё для кондитера</p>
                            </div>
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
const profileStore = useProfileStore();

const props = defineProps({
    data: Array,
})
</script>