<template>
    <div
        class="border-t border-white/10 py-8 flex items-end gap-4 justify-between lg:flex-col lg:items-start lg:justify-start ">
        <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Остались вопросы?</h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">
                Заполните форму, и мы ответим вам в кратчайшие сроки
            </p>
        </div>

        <form class="flex  mt-0 shrink-0 sm:flex-col sm:space-x-0 sm:space-y-2 sm:w-full" :class="flexDirection">
            <div>
                <label for="name" class="sr-only">Имя</label>
                <input v-maska="maskaOptions.cyrillic_and_upper_case" name="name" id="name" required
                    class="min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-2 ring-inset transition-base  ring-white/10 placeholder:text-gray-500 hover:ring-red-500  focus:ring-red-500 w-56 text-sm leading-6 lg:w-full lg:text-base"
                    placeholder="Имя" />
            </div>
            <div>
                <label for="phone" class="sr-only">Телефон</label>
                <input v-maska="maskaOptions.phone.mask" name="phone" id="phone" required
                    class="min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-2 ring-inset transition-base  ring-white/10 placeholder:text-gray-500 hover:ring-red-500  focus:ring-red-500 w-56 text-sm leading-6 lg:w-full lg:text-base"
                    placeholder="+7 (___) ___-__-__" />
            </div>
            <div class="flex-shrink-0 ">
                <button type="submit" class="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-base  hover:bg-red-500 
                            focus-visible:bg-red-500">Отправить</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const maskaOptions = useMaskaOptions();

const props = defineProps({
    flexDirection: {
        type: String,
        default: '',
    },
})

</script>