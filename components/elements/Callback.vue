<template>

    <div :class="wrapper">
        <div v-if="props.title.length">
            <div class="text-center text-lg font-semibold mb-1">{{ title }}</div>
            <div class="text-center text-sm text-gray-500 mb-4">{{ subtitle }}</div>
        </div>
        <div v-else>
            <h3 class="text-sm font-semibold leading-6" :class="textColor">Остались вопросы?</h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">
                Заполните форму, и мы ответим вам в кратчайшие сроки
            </p>
        </div>


        <form @submit.prevent="submitCallback()" class="relative flex gap-4 sm:flex-col sm:gap-2 sm:w-full"
            :class="formDirection">
            <div>
                <label for="name" class="sr-only">Имя</label>
                <input v-model="callback.form.name" v-maska="maskaOptions.cyrillic_and_upper_case" name="name" id="name"
                    required class="w-full leading-6 px-3 py-1.5  ring-inset rounded-md shadow-sm placeholder:text-gray-500 transition-base
                    lg:text-base 
                    focus:ring-red-500 hover:ring-red-500" :class="inputColor" placeholder="Имя" />
            </div>
            <div>
                <label for="phone" class="sr-only">Телефон</label>
                <input v-model="callback.form.phone" v-maska="maskaOptions.phone.mask" name="phone" id="phone" required
                    class="w-full leading-6 px-3 py-1.5  ring-inset rounded-md shadow-sm placeholder:text-gray-500 transition-base
                    lg:text-base 
                    focus:ring-red-500 hover:ring-red-500" :class="inputColor" placeholder="+7 (___) ___-__-__" />
            </div>
            <div :class="textPolicy">
                <span class="text-xs text-gray-500">Отправляя форму, вы соглашаетесь
                    c <NuxtLink @click="popupStore.close('modal')" :to="`/policy`">политикой конфиденциальности
                    </NuxtLink>
                </span>
            </div>
            <div class="flex-shrink-0 ">
                <button type="submit" class="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-base  hover:bg-red-500 
                            focus-visible:bg-red-500">
                    Отправить
                </button>
            </div>

        </form>
    </div>

</template>

<script setup>
const maskaOptions = useMaskaOptions();
const popupStore = usePopupStore();
const { modal } = storeToRefs(popupStore);

const callback = reactive({
    form: {
        name: null,
        phone: null,
    },
    errors: null,
})

const submitCallback = async () => {
    const form = callback.form;
    const { public: config } = useRuntimeConfig();
    const { phoneClear } = useHelper();

    form.phone = phoneClear(form.phone)

    await $fetch(`${config.backOptions.api}/feedback`, {
        method: 'POST',
        body: form
    }).then((data) => {
        popupStore.close('modal');
        popupStore.toggle('toast', { title: data.message, timeout: 2000 });
        form.phone = null;
        form.name = null;
    }).catch(({ response }) => {
        popupStore.toggle('toast', { title: response?._data?.message ?? 'Ошибка сервера', timeout: 6000, type: 'error' })
    })
}


const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    subtitle: {
        type: String,
        default: '',
    },
    theme: {
        type: String,
        default: 'light',
    },
    type: {
        type: String,
        default: '',
    },
})
const wrapper = computed(() => {
    return props.type === 'modal' ? ' ' : 'border-t border-white/10 flex gap-4 items-end justify-between lg:flex-col lg:items-start lg:justify-start lg:space-x-0 py-8';
});
const formDirection = computed(() => {
    return props.type === 'modal' ? 'flex-col' : 'flex-row';
});
const textPolicy = computed(() => {
    return props.type === 'modal' ? '-my-2 sm:my-0' : '-my-2 absolute -bottom-4 left-0 xs:static xs:my-0';
});
const textColor = computed(() => {
    return props.theme === 'dark' ? 'text-white' : 'text-indigo-950';
});
const inputColor = computed(() => {
    return props.theme === 'dark' ? 'ring-white/10 text-white bg-white/5 ring-2' : 'ring-1 ring-gray-300 text-indigo-950 bg-white hover:ring-2';
});
</script>