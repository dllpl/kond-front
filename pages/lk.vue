<template>
    <div class="">
        <main class="wrapper-container pt-10 pb-16">
            <p class="text-2xl font-semibold mb-8">Здравствуйте, Абдурахмангаджи</p>
            <!-- <div class="hidden sm:block"> -->
            <!-- <label for="tabs" class="sr-only">Выберите вкладку</label>
                <select id="tabs" name="tabs" class="block w-full rounded-md bg-amber-300 p-3 ">
                    <option v-for="tab in tabs" :key="tab.name" :selected="tab.current"
                        class="bg-amber-100  hover:bg-amber-300">{{ tab.name
                        }}</option>
                </select> -->
            <!-- <div class="w-72">
                    <Listbox v-model="selectedPerson">
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ selectedPerson.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="person in people"
                                        :key="person.name" :value="person" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ person.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div> -->

            <!-- <div>
                <div class="border-b border-gray-200">
                    <div class="-mb-px flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-1" aria-label="Tabs">
                        <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                            :class="[tab.current ? 'bg-amber-300 border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']"
                            :aria-current="tab.current ? 'page' : undefined">
                            <Icon :name="tab.icon" class="w-6 h-6 mr-2" aria-hidden="true" />
                            {{ tab.name }}
                        </a>
                    </div>
                </div>
            </div> -->



            <TabGroup as="div" class="overflow-hidden">
                <div class="border-b border-gray-200 sm:snap-x">
                    <TabList class="-mb-px flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-1 ">
                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="material-symbols:shopping-bag-outline" class="w-6 h-6 mr-2"
                                    aria-hidden="true" />
                                Заказы
                            </button>
                        </Tab>

                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="material-symbols:favorite-outline-rounded" class="w-6 h-6 mr-2"
                                    aria-hidden="true" />
                                Избранное
                            </button>
                        </Tab>

                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="material-symbols:account-circle-outline" class="w-6 h-6 mr-2"
                                    aria-hidden="true" />
                                Профиль
                            </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="material-symbols:kid-star-outline" class="w-6 h-6 mr-2"
                                    aria-hidden="true" />
                                Бонусы
                            </button>
                        </Tab>
                    </TabList>
                </div>

                <TabPanels as="template">

                    <TabPanel>
                        <h2 class="sr-only">Заказы</h2>
                        <SectionLkOrders />
                    </TabPanel>

                    <TabPanel>
                        <h2 class="sr-only">Избранное</h2>
                        <SectionLkFavorites />
                    </TabPanel>

                    <TabPanel>
                        <h2 class="sr-only">Профиль</h2>
                        <SectionLkProfile />
                    </TabPanel>
                    <TabPanel>
                        <h2 class="sr-only">Бонусы</h2>
                        <SectionLkLoyalty />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    </div>
</template>

<script setup>


const tabs = [
    { name: 'Заказы', href: '#', current: true, icon: 'material-symbols:shopping-bag-outline', },
    { name: 'Избранное', href: '#', current: false, icon: 'material-symbols:favorite-outline-rounded', },
    { name: 'Профиль', href: '#', current: true, icon: 'material-symbols:account-circle-outline', },
]


</script>