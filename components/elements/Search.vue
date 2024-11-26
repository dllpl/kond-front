<template>
    <TransitionRoot as="template" :show="show" @after-leave="query = ''" appear>
        <Dialog class="relative z-30" @close="closeModal">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <DialogPanel
                        class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                        <Combobox @update:modelValue="onSelect">
                            <div class="relative">
                                <Icon name="mdi-light:magnify"
                                    class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true" />

                                <ComboboxInput
                                    class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Введите название..." @change="query = $event.target.value"
                                    @blur="query = ''" />
                            </div>

                            <ComboboxOptions v-if="filteredPeople.length > 0" static
                                class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                                <ComboboxOption v-for="person in filteredPeople" :key="person.id" :value="person"
                                    as="template" v-slot="{ active }">
                                    <li
                                        :class="['cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                                        {{ person.name }}
                                    </li>
                                </ComboboxOption>
                            </ComboboxOptions>

                            <p v-if="query !== '' && filteredPeople.length === 0" class="p-4 text-sm text-gray-500">No
                                people found.</p>
                        </Combobox>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script setup>
const props = defineProps({
    show: {
        type: Boolean,
    }
})
const query = ref('')

const emit = defineEmits(['close'])
const closeModal = () => {
    emit('close');
}

const filteredPeople = computed(() =>
    query.value === ''
        ? []
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
        }),
)

function onSelect(person) {
    if (person) {
        window.location = person.url
    }
}

const people = [
    { id: 1, name: 'Роман', url: '#' },
    { id: 2, name: 'Дмитрий', url: '#' },
    { id: 3, name: 'Никита', url: '#' },
    { id: 4, name: 'Test', url: '#' },
]
</script>