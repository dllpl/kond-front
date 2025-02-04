export default defineNuxtRouteMiddleware(async () => {

    const profileStore = useProfileStore()

    if (profileStore.isAuth()) {
        return navigateTo('/lk', {redirectCode: 302})
    }
})