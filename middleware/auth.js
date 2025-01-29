import {useProfileStore} from "~/stores/profileStore.js";

export default defineNuxtRouteMiddleware(async () => {

    const profileStore = useProfileStore()

    const auth = await profileStore.init()

    if (!auth.isAuth) {
        return navigateTo('/login')
    }

    try {

        // const {data: refers} = await useFetch('/api/proxy/v3/refers', {headers: {'Authorization': `Bearer ${auth.token}`}})
        // const {data: profile} = await useFetch('/api/proxy/v3/profile', {headers: {'Authorization': `Bearer ${auth.token}`}})

        // if (!refers.value) {
        //     return navigateTo('/', {redirectCode: 401});
        // }
        //
        // store.refers = refers.value.data
        // store.profile = profile.value.data

    } catch (error) {
        return navigateTo('/login', {redirectCode: 500})
    }
});
