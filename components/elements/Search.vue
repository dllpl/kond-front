<template>
  <TransitionRoot as="template" :show="search.open" @after-leave="query = ''" appear>
    <Dialog class="relative z-30" @close="popupStore.close('search')">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"/>
      </TransitionChild>

      <div class="fixed inset-0 z-40 w-screen overflow-y-auto p-4">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                         enter-to="opacity-100 scale-100" leave="ease-in duration-200"
                         leave-from="opacity-100 scale-100"
                         leave-to="opacity-0 scale-95">

          <DialogPanel
              class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="relative">
                <Icon name="mdi-light:magnify"
                      class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"/>
                <ComboboxInput
                    v-model="searchInput"
                    autofocus
                    class="h-12 w-full border-0 bg-transparent pl-11 pr-4 placeholder:text-gray-400 focus:ring-0"
                    placeholder="Введите название..." @change="goToSearch($event.target.value)"
                    @blur="query = ''"/>
                <NuxtLink class="absolute right-4 top-3.5" :to="'/search?find=' + searchInput">
                  <Icon name="mdi-light:tab-plus" class="pointer-events-none text-gray-600 h-5 w-5" aria-hidden="true">
                  </Icon>
                </NuxtLink>
              </div>

              <ComboboxOptions v-if="searchResult.length > 0" static
                               class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">

                <ComboboxOption as="template">
                  <li class="cursor-default select-none font-medium hover:bg-amber-300 underline">
                    <NuxtLink class="block px-4 py-2" @click="popupStore.close('search')"
                              :to="'/search?find=' + searchInput">
                      Все результаты по запросу: {{ searchInput }}...
                    </NuxtLink>
                  </li>
                </ComboboxOption>

                <ComboboxOption v-for="(product, i) in searchResult" :key="i" as="template">
                  <li class="cursor-default select-none font-medium hover:bg-amber-300">
                    <NuxtLink class="block px-4 py-2" @click="popupStore.close('search')"
                              :to="'/catalog/' + product.slug_path">
                      {{ product.title }}
                    </NuxtLink>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

              <p v-if="query !== '' && searchResult.length === 0" class="p-4 text-sm text-gray-500">
                Товар не найден</p>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
const {public: config} = useRuntimeConfig();
const popupStore = usePopupStore();
const {search} = storeToRefs(popupStore);

const query = ref('');
const searchResult = ref([]);
const searchInput = ref('');

async function goToSearch(i) {
  searchInput.value = i
  if (i.length >= 2) {
    const result = await $fetch(config.backOptions.api + '/products/search', {
      method: 'POST', body: {
        "query": i,
        "limit": 15
      }
    });
    searchResult.value = result.data
  }
}

function onSelect(person) {
  if (person) {
    window.location = person.url
  }
}
</script>