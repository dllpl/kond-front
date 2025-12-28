<template>
    <nav
        class="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 shadow lg:block hidden"
    >
        <div class="flex justify-around items-center h-16 text-sm text-gray-600">
            <NuxtLink
                to="/"
                :class="linkClass('/')"
            >
                <Icon name="hugeicons:home-01" class="w-5 h-5 mb-1"/>
                <span class="text-xs">Главная</span>
            </NuxtLink>

            <NuxtLink
                to="/discount"
                :class="linkClass('/discount')"
                class="flex flex-col items-center justify-center hover:text-red-500">
                <span
                    class="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs z-10 text-white bg-red-500 rounded-full">%</span>
                <Icon name="hugeicons:discount-tag-02" class="w-5 h-5 mb-1"/>
                <span class="text-xs">Скидки</span>
            </NuxtLink>

            <button aria-label="Поиск" type="button" @click="popupStore.toggle('search')"
                    :class="linkClass('/search')"
                    class="flex flex-col items-center justify-center hover:text-red-500"
            >
                <Icon name="hugeicons:search-01" class="w-5 h-5 mb-1"/>
                <span class="text-xs">Поиск</span>
            </button>

            <NuxtLink
                to="/cart"
                :class="linkClass('/cart')"
            >
                			<span v-if="cartStore.totalCountProducts"
                                  class="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
								{{ cartStore.totalCountProducts }}</span>
                <Icon name="hugeicons:shopping-cart-02" class="w-5 h-5 mb-1"/>
                <span class="text-xs">Корзина</span>
            </NuxtLink>

            <NuxtLink
                to="/lk"
                :class="linkClass('/lk#orders')"
            >
                <Icon name="hugeicons:user" class="w-5 h-5 mb-1"/>
                <span class="text-xs">Кабинет</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup>
const route = useRoute()

const popupStore = usePopupStore()

const cartStore = useCartStore()

const linkClass = (path, includeHash = false) => {
    const isActive = includeHash
        ? route.path === path || route.fullPath === path + '#favorites'
        : route.path === path

    return [
        'flex flex-col items-center justify-center hover:text-red-500 relative',
        isActive ? 'text-red-500 font-medium' : ''
    ]
}
</script>
