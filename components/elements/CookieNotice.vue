<script setup lang="ts">

const COOKIE_NAME = 'cookie_accepted'
const visible = ref(false)

let autoHideTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
    if (!document.cookie.includes(`${COOKIE_NAME}=1`)) {
        visible.value = true

        // ⏱ Автоскрытие через 5 секунд
        autoHideTimer = setTimeout(() => {
            visible.value = false
        }, 5000)
    }
})

function accept() {
    document.cookie = `${COOKIE_NAME}=1; path=/; max-age=31536000; SameSite=Lax`
    visible.value = false

    if (autoHideTimer) {
        clearTimeout(autoHideTimer)
        autoHideTimer = null
    }
}

onBeforeUnmount(() => {
    if (autoHideTimer) {
        clearTimeout(autoHideTimer)
    }
})
</script>
<template>
    <transition name="fade">
        <div
            v-if="visible"
            class="fixed right-20 xl:right-0 bottom-5 xl:bottom-20 z-50 bg-gray-900/80 rounded-lg text-white px-2 py-2 mx-2 md:py-3"
        >
            <div class="max-w-7xl mx-auto flex md:flex-col flex-row gap-3 md:gap-1 items-center justify-between">
                <p class="text-xs leading-relaxed">
                    Мы используем cookies для улучшения работы сайта. <NuxtLink to="/cookie-policy" class="text-red-500 underline" title="куки подробнее">Подробнее</NuxtLink>
                </p>

                <button
                    @click="accept"
                    class="shrink-0 rounded-lg bg-red-600 px-5 py-1 text-sm font-medium"
                >
                    Понятно
                </button>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
