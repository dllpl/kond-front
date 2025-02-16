export default defineNuxtRouteMiddleware(async (to) => {

    const profileStore = useProfileStore()

    if (profileStore.isAuth()) {
        if(to.name === 'login' || to.name === 'register') {
            return navigateTo('/lk', {redirectCode: 302})
        } else {
            //TODO либо переделать на хранения в куках инфы о пользователе чтобы избежать лишних запросов
            if(!profileStore.profile_is_set) {
                console.log('profile not set')
                await profileStore.getProfile()
            } else {
                console.log('profile set')
            }
        }

    } else {
        if(to.name === 'lk') {
            return navigateTo('/login', {redirectCode: 401})
        }
    }
})