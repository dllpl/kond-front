export default defineNuxtRouteMiddleware( async () => {

    const profileStore = useProfileStore()
    const { public: config } = useRuntimeConfig();

    if (!profileStore.isAuth()) {
        return navigateTo('/login', {redirectCode: 401})
    }

    try {
        const {data: profile} = await useFetch(`${config.backOptions.api}/user/profile`, {headers: {'Authorization': `Bearer ${profileStore.credentials.token}`}})

        profileStore.setProfile(profile.value)

    } catch (error) {
        if (error.status === 401) {
            return navigateTo('/login', {redirectCode: 401})
        }

        throw createError({
            statusCode: error.status,
            statusMessage: error.message
        })
    }
});
