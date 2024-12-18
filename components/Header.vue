<template>

	<header class="sticky top-0 shadow-xs z-20 w-full " ref="header">
		<!-- HEADER TOP -->
		<div class="bg-gray-100">
			<div class="wrapper-container relative">
				<div class="flex items-center justify-between py-4 lg:gap-6 md:flex-row md:gap-x-4"
					aria-label="Верхнее меню">

					<div class="flex items-center gap-5 lg:w-full lg:justify-between xs:w-auto">
						<div class="flex items-center gap-x-2.5 sm:hidden">
							<Combobox as="div" v-model="selectedCity" @update:modelValue="query = ''"
								class="flex items-center gap-2">
								<ComboboxLabel class="block text-sm text-gray-900 flex items-center gap-1">
									<Icon name="mdi-light:map-marker" class="w-6 h-6" />
									<span>Ваш город</span>
								</ComboboxLabel>
								<div class="relative 2xl:w-52">
									<ComboboxInput
										class="input-accent w-full bg-transparent transition-base bg-gray-50 hover: ring-red-500 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 "
										@change="query = $event.target.value" @blur="query = ''"
										:display-value="(city) => city?.name" />
									<ComboboxButton
										class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
										<Icon name="tabler:chevron-down"></Icon>
									</ComboboxButton>

									<ComboboxOptions v-if="filteredCityes.length > 0"
										class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
										<ComboboxOption v-for="city in filteredCityes" :key="city.id" :value="city"
											as="template" v-slot="{ active, selected }">
											<li
												:class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-red-500 text-white' : 'text-gray-900']">
												<span :class="['block truncate', selected && 'font-semibold']">
													{{ city.name }}
												</span>

												<span v-if="selected"
													:class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-red-500']">
													<CheckIcon class="h-5 w-5" aria-hidden="true" />
												</span>
											</li>
										</ComboboxOption>
									</ComboboxOptions>
								</div>
							</Combobox>
						</div>

						<NuxtLink :to="`tel:${contacts.phone}`" target="_blank"
							class="flex items-center gap-2 transition-base rounded-md hover:text-red-600 group focus:bg-red-500 focus:rounded-md focus:text-white
                        xs:p-1 xs:ring-2 xs:ring-gray-300/20 xs:hover:ring-red-500 xs:focus:ring-red-500 xs:focus:text-red-600 xs:focus:bg-transparent">
							<Icon name="mdi-light:phone" class="w-6 h-6 group-hover:stroke-red-600 " />
							<span class="block text-base xs:hidden">{{ contacts.phone }}</span>
						</NuxtLink>

					</div>
					<!-- MOBILE VISIBLE XS-->
					<div class="hidden xs:flex xs:gap-4 ">

						<!-- Search -->
						<button type="button" @click="openSearch"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="mdi-light:magnify" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>
						<!-- <ElementsSearch :show="search" @close="closeSearch" /> -->

						<!-- Like -->
						<a href="http://"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

							<Icon name="mdi-light:heart" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</a>

						<!-- Basket -->
						<button @click="openDrawer"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="mdi-light:cart" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>
						<!-- <ElementsDrawer :show="drawer" @close="closeDrawer"></ElementsDrawer> -->
					</div>

					<div class="flex items-center gap-x-12 2xl:gap-x-4 md:w-auto xs:order-first xs:mr-auto">
						<div class="flex items-center gap-x-12 2xl:gap-x-4 lg:hidden">
							<NuxtLink :to="item.slug" v-for="item in navTop" :key="item.name"
								class="text-sm transition-base hover:text-red-600 focus:text-red-600">{{
									item.name
								}}
							</NuxtLink>
							<NuxtLink :to="`/`" class="text-sm transition-base hover:text-red-600 focus:text-red-600">
								Вход
								| Регистрация
							</NuxtLink>
						</div>

						<!-- BURGER -->
						<div class="hidden lg:flex">

							<button type="button"
								class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600"
								@click="openBurger">
								<span class="sr-only">Открыть меню</span>
								<Icon name="material-symbols:menu" class="w-6 h-6" aria-hidden="true" />
							</button>


						</div>

					</div>
				</div>
			</div>
		</div>

		<!-- HEADER BOTTOM -->
		<Popover class="relative isolate z-10 shadow bg-gray-50">
			<div class="wrapper-container ">

				<div class="relative flex items-center justify-between py-4">
					<NuxtLink :to="'/'" class="-m-1.5 p-1.5 ">
						<span class="sr-only">Все для кондитера</span>
						<img class="h-12 w-auto" src="https://dljakonditera.ru/a/tort/files/125837/124927/logos.png"
							alt="Все для кондитера" />
					</NuxtLink>

					<nav class="flex items-center justify-between  gap-x-12" aria-label="Основное меню">

						<PopoverButton type="button"
							class="group flex items-center gap-2 text-base font-semibold text-gray-900 transition-all hover:text-red-600 focus:text-red-600">
							<Icon name="ph:squares-four-thin" class="w-6 h-6 group-hover:text-red-600"
								aria-hidden="true" />
							Каталог
							<Icon name="material-symbols:keyboard-arrow-down-rounded"
								class="w-6 h-6  group-hover:text-red-600 " aria-hidden="true" />
						</PopoverButton>

						<NuxtLink :to="item.slug" v-for="item in nav" :key="item.name"
							class="text-base font-semibold text-gray-900 transition-base hover:text-red-600 focus:text-red-600 lg:hidden">
							{{
								item.name }}
						</NuxtLink>
					</nav>

					<div class=" flex gap-5 xs:hidden">
						<!-- Search -->
						<button type="button" @click="openSearch"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="material-symbols:search" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>

						<!-- Like -->
						<a href="http://"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

							<Icon name="material-symbols:favorite-outline-rounded"
								class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</a>

						<!-- Basket -->
						<button @click="openDrawer"
							class="relative flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="material-symbols:shopping-cart-outline"
								class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
							<span v-if="cartStore.totalCountProducts"
								class="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
								{{ cartStore.totalCountProducts }}</span>
						</button>


					</div>
				</div>

				<transition enter-active-class="transition ease-out duration-200"
					enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0"
					leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
					leave-to-class="opacity-0 -translate-y-1">

					<PopoverPanel
						class="absolute z-10 w-full overflow-y-auto inset-x-0 top-20 bg-white shadow-lg ring-1 ring-gray-900/5 py-6 px-2">

						<div
							class="wrapper-container grid grid-cols-3 gap-2 overflow-y-auto h-60 custom-scroll px-6 mb-6">

							<div v-for="item in categories.data" :key="item.name"
								class="group relative flex items-center gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
									<img :src="storage + item.img" :alt="item.title">
								</div>
								<div>
									<NuxtLink :to="`/catalog/${item.slug}`" class="font-semibold text-gray-900">
										{{ item.title }}
										<span class="absolute inset-0" />
									</NuxtLink>
								</div>
							</div>

						</div>


						<div class="wrapper-container">
							<div
								class="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
								<NuxtLink :to="item.href" v-for="item in callsToAction" :key="item.name"
									class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
									<component :is="item.icon" class="h-5 w-5 flex-none text-gray-400"
										aria-hidden="true" />
									{{ item.name }}
								</NuxtLink>
							</div>
						</div>


					</PopoverPanel>
				</transition>

			</div>
		</Popover>

		<ElementsSearch :show="search" @close="closeSearch" />
		<ElementsDrawer :show="drawer" @close="closeDrawer" />
		<ElementsBurger :show="burger" :data="navBurger" :calls="callsToAction" @close="closeBurger" />

	</header>

</template>



<script setup>

const cartStore = useCartStore();
const { contacts } = useContactsStore();

// -----SEARCH-----
const search = ref(false);
const openSearch = () => {
	search.value = !search.value;
};

const closeSearch = () => {
	search.value = false;
};

// -----DRAWER-----
const drawer = ref(false);
const openDrawer = () => {
	drawer.value = !drawer.value;
};

const closeDrawer = () => {
	drawer.value = false;
};

// -----BURGER-----
const burger = ref(false)

const openBurger = () => {
	burger.value = !burger.value;
};

const closeBurger = () => {
	burger.value = false;
};


const navTop = [
	{ name: 'О магазине', slug: '/about' },
	{ name: 'Доставка и оплата', slug: '/delivery' },
]

const nav = [
	{ name: 'Съедобная печать?', slug: '#' },
	{ name: 'Блог', slug: '/blog' },
	{ name: 'Контакты', slug: '/contacts' },
]

const navBurger = [
	{ name: 'Каталог', slug: 'catalog' },
	{ name: 'Съедобная печать?', slug: '#' },
	{ name: 'Блог', slug: 'blog' },
	{ name: 'О магазине', slug: 'about' },
	{ name: 'Доставка и оплата', slug: 'delivery' },
	{ name: 'Контакты', slug: 'contacts' },
]

const city = [
	{ id: 1, name: 'Набережные Челны' },
	{ id: 2, name: 'Москва' },
	{ id: 3, name: 'Казань' },
	{ id: 4, name: 'Екатеринбург' },
	{ id: 5, name: 'Нижний Новгород' },
	{ id: 6, name: 'Санкт-Петербург' },
]

const query = ref('')
const selectedCity = ref(null)

const filteredCityes = computed(() =>
	query.value === ''
		? city
		: city.filter((city) => {
			return city.name.toLowerCase().includes(query.value.toLowerCase())
		}),
)

const callsToAction = [
	{ name: 'Позвонить нам', href: '#', },
	{ name: 'Остались вопросы?', href: '#', },
]



const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories');

</script>