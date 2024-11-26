<template>
    <p>The value is: {{ isActive ? 'Active' : 'Inactive' }}</p>
    <TransitionRoot as="template" :show="isActive">
        <Dialog class="relative z-40" @close="open = false">

            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500" leave-from="translate-x-0"
                            leave-to="translate-x-full">

                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">

                                    <div class="px-6 sm:px-4">
                                        <div class="flex items-center justify-between">

                                            <DialogTitle class="text-xl font-semibold leading-6">Корзина</DialogTitle>
                                            <button type="button"
                                                class="
																	flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-500/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-gray-500 focus:text-gray-500"
                                                @click="isActive = false">
                                                <span class="sr-only">Закрыть козину</span>
                                                <Icon name="material-symbols:close-rounded" class="h-6 w-6"
                                                    aria-hidden="true" />
                                            </button>

                                        </div>
                                    </div>

                                    <div class="relative mt-6 flex-1 px-6 sm:px-4">
                                        <!-- Your content -->
                                    </div>
                                </div>
                            </DialogPanel>

                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
    }
})

</script>