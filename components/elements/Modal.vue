<template>
    <TransitionRoot as="template" :show="modal.open">
        <Dialog class="relative z-30" @close="popupStore.close('modal')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-40 w-screen overflow-y-auto p-4">
                <div class="flex flex-col items-center min-h-full justify-center text-center sm:items-center sm:px-0 lg:px-8 ">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="flex w-full max-w-3xl transform text-left text-base transition sm:my-8">
                            <div
                                class="relative bg-white w-full mx-auto shadow rounded-lg py-8 px-8 sm:px-4 sm:py-6" :class="modal.options?.width ? modal.options.width : 'max-w-lg'">
                                <button @click="popupStore.close('modal')" type="button"
                                    class=" absolute top-2.5 right-2.5 flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20 transition-base text-gray-400 hover:text-indigo-950 hover:ring-indigo-950 group">
                                    <span class="sr-only">Закрыть</span>
                                    <Icon name="hugeicons:cancel-01" class="h-5 w-5" aria-hidden="true" />
                                </button>
                                <ElementsLogin v-if="modal.options.type === 'login'" :title="modal.options.title" :subtitle="modal.options.subtitle" />
                                <ElementsOrderProducts v-if="modal.options.type === 'order'" :products="modal.options.products" :title="modal.options.title"/>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
const popupStore = usePopupStore();
const { modal } = storeToRefs(popupStore);
</script>
