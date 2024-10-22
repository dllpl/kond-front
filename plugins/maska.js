import {Mask} from "maska";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("maska", Mask)
})
