<template>
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 z-50 sm:p-6 lg:bottom-12">
        <div class="flex w-full flex-col items-center space-y-4">
            <transition enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 " enter-to-class="translate-y-0 opacity-100 "
                leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                leave-to-class="opacity-0">

                <div v-if="toast.open"
                    @click="toast.options?.callback ? toast.options.callback() : () => {}"
                    class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-amber-100 shadow-lg ring-2 ring-amber-400 cursor-pointer">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <Icon v-if="toast.options.type === 'error'" name="material-symbols:warning-rounded" class="h-6 w-6 bg-red-500"/>
                                <Icon v-else-if="toast.options.type === 'warning'" name="material-symbols:warning-rounded" class="h-6 w-6 bg-amber-500"/>
                                <Icon v-else name="material-symbols:check-circle-rounded" class="h-6 w-6 bg-green-500"/>
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium " v-if="toast.options?.title">{{ toast.options.title }}
                                </p>
                                <p class="mt-1 text-sm underline underline-offset-4" v-if="toast.options?.subtitle">{{
                                    toast.options.subtitle }}</p>

                            </div>
                            <div class="ml-4 flex flex-shrink-0">
                                <button type="button" @click.stop="popupStore.close('toast')" class="inline-flex rounded-md text-gray-500 transition-base 
                                    hover:text-gray-900 
                                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                    <span class="sr-only">Закрыть</span>
                                    <Icon name="hugeicons:cancel-01" class="h-6 w-6" aria-hidden="true" />
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