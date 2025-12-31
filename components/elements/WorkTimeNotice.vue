<script setup lang="ts">
const COOKIE_NAME = 'work_time_notice'
const visible = ref(false)

// Дата, после которой уведомление больше не показывается
const HIDE_AFTER_DATE = new Date('2026-01-05T00:00:00')

onMounted(() => {
    const now = new Date()

    // Если дата уже наступила — ничего не показываем
    if (now >= HIDE_AFTER_DATE) {
        return
    }

    // Если пользователь уже закрыл уведомление
    if (!document.cookie.includes(`${COOKIE_NAME}=1`)) {
        visible.value = true
    }
})

function accept() {
    document.cookie = `${COOKIE_NAME}=1; path=/; max-age=31536000; SameSite=Lax`
    visible.value = false
}
</script>
<template>
    <transition name="fade">
        <div
            v-if="visible"
            class="fixed right-20 xl:right-0 top-5 xl:top-20 z-50 bg-gray-900/80 rounded-lg text-white px-2 py-2 mx-2 md:py-3"
        >
            <div class="max-w-7xl mx-auto flex md:flex-col flex-row gap-3 md:gap-1 items-center justify-between">
                <p class="text-xs leading-relaxed text-center">
                    Наш магазин работает с 5 января. Сайт принимает заказы, но отправка и самовывоз доступны только с 5 января.
                </p>

<!--                <button-->
<!--                    @click="accept"-->
<!--                    class="shrink-0 rounded-lg bg-red-600 px-5 py-1 text-sm font-medium"-->
<!--                >-->
<!--                    Понятно-->
<!--                </button>-->
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
