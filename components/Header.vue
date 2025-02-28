<template>

	<header class="sticky top-0 shadow-xs z-20 w-full " ref="header">
		<!-- HEADER TOP -->
		<div class="bg-gray-100">
			<div class="wrapper-container relative">
				<div class="flex items-center justify-between py-4 lg:gap-6 md:flex-row md:gap-x-4 xs:gap-3"
					aria-label="Верхнее меню">

					<div class="flex items-center gap-5 lg:w-full lg:justify-between xs:w-auto">
						<!-- <div class="flex items-center gap-x-2.5 sm:hidden">
							<Combobox as="div" v-model="selectedCity" @update:modelValue="query = ''"
								class="flex items-center gap-2">
								<ComboboxLabel class="text-sm text-gray-900 flex items-center gap-1">
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
											</li>
										</ComboboxOption>
									</ComboboxOptions>
								</div>
							</Combobox>
						</div> -->

						<NuxtLink :to="`tel:${contacts.phone}`" target="_blank"
							class="flex items-center gap-2 transition-base rounded-md  hover:text-red-600 group focus:bg-red-500 focus:rounded-md focus:text-white
                        xs:p-1 xs:ring-2 xs:ring-gray-300/20 xs:hover:ring-red-500 xs:focus:ring-red-500 xs:focus:text-red-600 xs:focus:bg-transparent">
							<Icon name="hugeicons:call" class="w-6 h-6 group-hover:stroke-red-600 " />
							<span class="block text-base xs:hidden">{{ contacts.phone }}</span>
						</NuxtLink>

					</div>
					<!-- MOBILE VISIBLE XS-->
					<NuxtLink :to="'/'" class="hidden xs:block xs:-m-1.5 xs:p-1.5 xs:mr-auto xs:order-first">
						<span class="sr-only">Все для кондитера</span>
						<img class="max-h-8 w-auto" src="/assets/img/logo.png" alt="Все для кондитера" />
					</NuxtLink>

					<div class="hidden xs:flex xs:gap-3 ">
						<!-- Search -->
						<button type="button" @click="popupStore.toggle('search')"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="hugeicons:search-01" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>

						<!-- Like -->
						<!-- <a href="http://"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

							<Icon name="hugeicons:heart-check" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</a> -->

						<!-- Basket -->
						<button @click="popupStore.toggle('drawer')"
							class=" relative flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="hugeicons:shopping-cart-02" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
							<span v-if="cartStore.totalCountProducts"
								class="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
								{{ cartStore.totalCountProducts }}</span>
						</button>
					</div>

					<div class="flex items-center gap-x-12 2xl:gap-x-4 md:w-auto xs:order-last">
						<div class="flex items-center gap-x-12 2xl:gap-x-4 lg:hidden">
							<NuxtLink :to="item.slug" v-for="item in navTop" :key="item.name"
								class="text-sm transition-base hover:text-red-600 focus:text-red-600">
                                {{ item.name }}
							</NuxtLink>
							<NuxtLink  :to="`/login`"
								class="text-sm transition-base hover:text-red-600 focus:text-red-600">
                                <template v-if="!profileStore.isAuth()">
                                    Вход | Регистрация
                                </template>
                                <template v-else>
                                    <span class="flex items-center gap-2">
                                        Профиль
                                        <Icon name="hugeicons:user-circle" class="w-6 h-6"/>
                                    </span>
                                </template>
							</NuxtLink>

						</div>

						<!-- BURGER -->
						<div class="hidden lg:flex">
							<button type="button" @click="popupStore.toggle('burger')"
								class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
								<span class="sr-only">Открыть меню</span>
								<Icon name="hugeicons:menu-01" class="w-6 h-6" aria-hidden="true" />
							</button>
						</div>

					</div>
				</div>
			</div>
		</div>

		<!-- HEADER BOTTOM -->
		<Popover class="relative isolate z-10 shadow bg-gray-50 xs:hidden">
			<div class="wrapper-container ">

				<div class="relative flex items-center justify-between py-4">
					<NuxtLink :to="'/'" class="-m-1.5 p-1.5 ">
						<span class="sr-only">Все для кондитера</span>
						<img class="h-12 w-auto" src="/assets/img/logo.png" alt="Все для кондитера" />
					</NuxtLink>

					<nav class="flex items-center justify-between  gap-x-12" aria-label="Основное меню">

						<PopoverButton type="button"
							class="group flex items-center gap-2 text-base font-semibold lg:justify-center   transition-all hover:text-red-600 focus:text-red-600">
							<Icon name="hugeicons:dashboard-square-01" class=" w-6 h-6 group-hover:text-red-600"
								aria-hidden="true" />
							Каталог
						</PopoverButton>

						<NuxtLink :to="item.slug" v-for="item in nav" :key="item.name"
							class="text-base font-semibold text-gray-900 transition-base hover:text-red-600 focus:text-red-600 lg:hidden">
							{{item.name }}
						</NuxtLink>
					</nav>

					<div class=" flex gap-5 xs:hidden">
						<!-- Search -->
						<button type="button" @click="popupStore.toggle('search')"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="hugeicons:search-01" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>

						<!-- Like -->
						<a href="http://"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

							<Icon name="hugeicons:heart-check" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</a>

						<!-- Basket -->
						<button @click="popupStore.toggle('drawer')"
							class="relative flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="hugeicons:shopping-cart-02" class="w-6 h-6 group-hover:stroke-red-600">
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

					<PopoverPanel v-slot="{ close }" class="absolute z-10 w-full overflow-y-auto inset-x-0 top-20 bg-white shadow-lg ring-1
						ring-gray-900/5 py-6 px-2">
						<div
							class="wrapper-container grid grid-cols-3 gap-4 overflow-y-auto custom-scroll px-6 mb-6">
							<div v-for="item in categories.data" :key="item.name"
								class="group relative flex items-center gap-2 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-2 sm:text-center">
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
									<img :src="storage + item.img" :alt="item.title">
								</div>
								<div>
									<NuxtLink @click="close()" :to="`/catalog/${item.slug}`" class="font-medium">
										{{ item.title }}
										<span class="absolute inset-0" />
									</NuxtLink>
								</div>
							</div>
						</div>

						<div class="wrapper-container">
							<ElementsCallsToAction @click="close()" />
						</div>

					</PopoverPanel>
				</transition>
			</div>
		</Popover>

		<ElementsSearch />
		<ElementsDrawer />
		<ElementsBurger :data="navBurger" />
		<NuxtLoadingIndicator color="#fbbf24" :height="4" :throttle="500"/>
	</header>
</template>



<script setup>

const cartStore = useCartStore();
const { contacts } = useContactsStore();
const popupStore = usePopupStore();
const profileStore = useProfileStore();
const first_name = profileStore.profile?.first_name ?? 'Кабинет'

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
	{ name: 'Каталог', slug: '/catalog' },
	{ name: 'Съедобная печать?', slug: '#' },
	{ name: 'Блог', slug: '/blog' },
	{ name: 'О магазине', slug: '/about' },
	{ name: 'Доставка и оплата', slug: '/delivery' },
	{ name: 'Контакты', slug: '/contacts' },
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

const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories');

</script>