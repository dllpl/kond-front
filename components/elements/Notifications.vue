<template>
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 z-10  sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <transition enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 " enter-to-class="translate-y-0 opacity-100 "
                leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                leave-to-class="opacity-0">

                <div v-if="toast.open" @click="toast.options?.callback ? toast.options.callback() : () => console.log('click')"
                    class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-amber-100 shadow-lg ring-2 ring-amber-400 cursor-pointer">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <Icon :name="toast.options.type === 'error' ? 'material-symbols:warning-rounded' : 'material-symbols:check-circle-rounded'" class="h-6 w-6" :class="toast.options.type === 'error' ? 'bg-red-500' : 'bg-green-500'"></Icon>
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium " v-if="toast.options?.title">{{ toast.options.title }}</p>
                                <p class="mt-1 text-sm underline underline-offset-4" v-if="toast.options?.subtitle">{{ toast.options.subtitle }}</p>

                            </div>
                            <div class="ml-4 flex flex-shrink-0">
                                <button type="button" @click.stop="popupStore.close('toast')"
                                    class="inline-flex rounded-md text-gray-500 transition-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                    <span class="sr-only">Закрыть</span>
                                    <Icon name="material-symbols:close-rounded" class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </transition>
        </div>
    </div>
</template>

<script setup>
const popupStore = usePopupStore();
const { toast } = storeToRefs(popupStore);
</script>