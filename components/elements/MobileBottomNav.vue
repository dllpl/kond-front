<template>
    <nav
        class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow lg:block hidden"
    >
        <div class="flex justify-around items-center h-14 text-sm text-gray-600">
            <NuxtLink
                to="/"
                :class="linkClass('/')"
            >
                <Icon name="heroicons:home" class="w-5 h-5 mb-1" />
                <span class="text-xs">Главная</span>
            </NuxtLink>

            <NuxtLink
                to="/set/pasha"
                class="flex flex-col items-center justify-center hover:text-red-500"            >
                <Icon name="hugeicons:eggs" class="w-5 h-5 mb-1" />
                <span class="text-xs">Пасха</span>
            </NuxtLink>

            <button
                @click="popupStore.toggle('search')"
                class="flex flex-col items-center justify-center hover:text-red-500"
            >
                <Icon name="hugeicons:search-01" class="w-5 h-5 mb-1" />
                <span class="text-xs">Поиск</span>
            </button>

            <NuxtLink
                to="/lk#favorites"
                :class="linkClass('/lk', true)"
            >
                <Icon name="hugeicons:favourite" class="w-5 h-5 mb-1" />
                <span class="text-xs">Любимое</span>
            </NuxtLink>

            <NuxtLink
                to="/lk"
                :class="linkClass('/lk')"
            >
                <Icon name="heroicons:user" class="w-5 h-5 mb-1" />
                <span class="text-xs">Кабинет</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup>
const route = useRoute()

const popupStore = usePopupStore()

const linkClass = (path, includeHash = false) => {
    const isActive = includeHash
        ? route.path === path || route.fullPath === path + '#favorites'
        : route.path === path

    return [
        'flex flex-col items-center justify-center hover:text-red-500',
        isActive ? 'text-red-500 font-medium' : ''
    ]
}
</script>
