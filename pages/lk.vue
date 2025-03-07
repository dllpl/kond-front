<template>
    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-2 pb-16 min-h-[40vh]">
            <p class="text-2xl font-semibold mb-4">Здравствуйте, {{ first_name }}</p>
            <TabGroup :selectedIndex="selectedTab" @change="changeTab" as="div" class="overflow-hidden" >
                <div class="border-b border-gray-200 sm:snap-x">
                    <TabList class="-mb-px flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-1 ">
                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="hugeicons:shopping-basket-done-01" class="w-6 h-6 mr-2"
                                    aria-hidden="true" />
                                Заказы
                            </button>
                        </Tab>

                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="hugeicons:heart-check" class="w-6 h-6 mr-2" aria-hidden="true" />
                                Избранное
                            </button>
                        </Tab>

                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="hugeicons:user-circle-02" class="w-6 h-6 mr-2" aria-hidden="true" />
                                Профиль
                            </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                            <button
                                :class="[selected ? 'border-amber-300' : 'border-transparent sm:border-b-2 sm:border-gray-200 text-gray-500 hover:border-red-600 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 text-sm font-medium rounded-t-md px-3 py-3 transition-all']">

                                <Icon name="hugeicons:star" class="w-6 h-6 mr-2" aria-hidden="true" />
                                Бонусы
                            </button>
                        </Tab>
                    </TabList>
                </div>

                <TabPanels as="template">

                    <TabPanel>
                        <h2 class="sr-only">Заказы</h2>
                        <LazySectionLkOrders :orders="orders" />
                    </TabPanel>

                    <TabPanel>
                        <h2 class="sr-only">Избранное</h2>
                        <LazySectionLkFavorites :favorites="favorites" />
                    </TabPanel>

                    <TabPanel>
                        <h2 class="sr-only">Профиль</h2>
                        <LazySectionLkProfile />
                    </TabPanel>
                    <TabPanel>
                        <h2 class="sr-only">Бонусы</h2>
                        <LazySectionLkLoyalty />
                    </TabPanel>
                    <TabPanel>
                        Загрузка...
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    </div>
</template>

<script setup>
const selectedTab = ref(4)
const { profile, orders, favorites } = useProfileStore();
const first_name = profile.first_name
const changeTab = (index) => {
    selectedTab.value = index
    window.location.hash = tabs[index].href
}

const tabs = [
    { name: 'Заказы', href: 'orders'},
    { name: 'Избранное', href: 'favorites' },
    { name: 'Профиль', href: 'profile'},
    { name: 'Бонусы', href: 'bonuses'},
]

const breadcrumbs = [
    { name: 'Личный кабинет', uri: 'lk' },
]

useHead({
    title: 'Личный кабинет',
    meta: [
        {
            name: 'description',
            content: 'Личный кабинет Всё для кондитера. Заказы, избранные товары, профиль, и бонусы'
        }
    ],
})

const route = useRoute();

onMounted(() => {
    if (route.hash) {
        const index = tabs.findIndex((tab) => tab.href === route.hash.slice(1))
        if (index !== -1) {
            selectedTab.value = index
        }
    }
})


</script>