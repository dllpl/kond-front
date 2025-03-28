<template>

	<header class="sticky top-0 shadow-xs z-20 w-full " ref="header">
		<!-- HEADER TOP -->
		<div class="bg-gray-100">
			<div class="wrapper-container relative">
				<div class="flex items-center justify-between py-4 lg:gap-6 md:flex-row md:gap-x-4 xs:gap-3"
					aria-label="Верхнее меню">

					<div class="flex items-center gap-5 lg:w-full lg:justify-between xs:w-auto">
						<NuxtLink :to="`tel:${contacts.phone}`" target="_blank"
							class="flex items-center gap-2 transition-base rounded-md  hover:text-red-600 group focus:bg-red-500 focus:rounded-md focus:text-white
                        xs:p-1 xs:ring-2 xs:ring-gray-300/20 xs:hover:ring-red-500 xs:focus:ring-red-500 xs:focus:text-red-600 xs:focus:bg-transparent">
							<Icon name="hugeicons:call" class="w-6 h-6 group-hover:stroke-red-600 " />
							<span class="block text-base xs:hidden">{{ contacts.phone }}</span>
						</NuxtLink>

					</div>
					<!-- MOBILE VISIBLE XS-->
					<NuxtLink to="/" class="hidden xs:block xs:-m-1.5 xs:p-1.5 xs:mr-auto xs:order-first">
						<span class="sr-only">Все для кондитера</span>
						<img loading="lazy" width="250" height="66" class="max-h-8 w-auto" src="/assets/img/logo.webp"
							alt="Меню | Все для кондитера" />
					</NuxtLink>

					<div class="hidden xs:flex xs:gap-3 ">
						<!-- Search -->
						<button aria-label="Поиск" type="button" @click="popupStore.toggle('search')"
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
						<button aria-label="Корзина" @click="popupStore.toggle('drawer')"
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
							<NuxtLink to="/login" class="text-sm transition-base hover:text-red-600 focus:text-red-600">
								<template v-if="!profileStore.isAuth()">
									Вход | Регистрация
								</template>
								<template v-else>
									<span class="flex items-center gap-2">
										Профиль
										<Icon name="hugeicons:user-circle" class="w-6 h-6" />
									</span>
								</template>
							</NuxtLink>

						</div>

						<!-- BURGER -->
						<div class="hidden lg:flex">
							<button aria-label="Меню" type="button" @click="popupStore.toggle('burger')"
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
					<NuxtLink to="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Все для кондитера</span>
						<img width="250" height="66" class="h-12 w-auto" src="/assets/img/logo.webp"
							alt="Лого | Все для кондитера" />
					</NuxtLink>

					<nav class="flex items-center justify-between  gap-x-12" aria-label="Основное меню">

						<PopoverButton type="button"
							class="group flex items-center gap-2 text-base font-semibold lg:justify-center   transition-all hover:text-red-600 focus:text-red-600">
							<Icon name="hugeicons:dashboard-square-01" class=" w-6 h-6 group-hover:text-red-600"
								aria-hidden="true" />
							Каталог
						</PopoverButton>

						<NuxtLink :to="item.slug" v-for="(item, i) in nav" :key="i"
							class="text-base font-semibold text-gray-900 transition-base hover:text-red-600 focus:text-red-600 lg:hidden">
							{{ item.name }}
						</NuxtLink>
					</nav>

					<div class=" flex gap-5 xs:hidden">
						<!-- Search -->
						<button aria-label="Поиск" type="button" @click="popupStore.toggle('search')"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="hugeicons:search-01" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>

						<!-- Like -->
						<button aria-label="Избранное" @click="handleFavorite()"
							class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
							<Icon name="hugeicons:heart-check" class="w-6 h-6 group-hover:stroke-red-600">
							</Icon>
						</button>

						<!-- Basket -->
						<button aria-label="Корзина" @click="popupStore.toggle('drawer')"
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
						<div class="wrapper-container grid grid-cols-3 gap-4 overflow-y-auto custom-scroll px-6 mb-6">
							<div v-for="(item, i) in categories.data" :key="i"
								class="group relative flex items-center gap-2 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-2 sm:text-center">
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
									<img loading="lazy" width="44" height="44" :src="storage + item.img"
										:alt="item.title">
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
		<NuxtLoadingIndicator color="#fbbf24" :height="4" :throttle="500" />
	</header>
</template>



<script setup>
import HttpClient from "~/server/utils/httpClient.js";

const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: categories } = await HttpClient('products-categories');

const { contacts } = useContactsStore();
const cartStore = useCartStore();
const popupStore = usePopupStore();
const profileStore = useProfileStore();

// проверка на авторизацию при клики на избранное в шапке
const router = useRouter();
function handleFavorite() {
	profileStore.isAuth()
		? router.push('/lk#favorites')
		: popupStore.toggle('modal', { title: 'Авторизация', subtitle: 'Авторизуйтесь, что бы перейти в избранное', timeout: 1000, type: 'login' })
}

const navTop = [
	{ name: 'О магазине', slug: '/about' },
	{ name: 'Доставка и оплата', slug: '/delivery' },
]

const nav = [
	{ name: 'Скидки', slug: '/discount' },
	{ name: 'Съедобная печать', slug: '/foodSeal' },
	{ name: 'Блог', slug: '/blog' },
	{ name: 'Контакты', slug: '/contacts' },
]

const navBurger = [
	{ name: 'Каталог', slug: '/catalog' },
	{ name: 'Скидки', slug: '/discount' },
	{ name: 'Съедобная печать', slug: '/foodSeal' },
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
</script>