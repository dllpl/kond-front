<template>
    <section>
        <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
    </section>
    <main class="wrapper-container pt-3 pb-16">
        <h1 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">
            Заказать съедобную печать
        </h1>

        <p class="lg:col-span-2 mb-4">
            Как оформить заказ:
        </p>

        <ul class="space-y-2">
            <li>
                <p class="lg:col-span-2">
                    &mdash;&nbsp;Добавьте нужный тип печати (в зависимости от названия товара) в корзину и оформите
                    заказ, выбрав
                    самовывоз или доставку курьером.
                </p>
            </li>
            <li>
                <p class="lg:col-span-2">
                    &mdash;&nbsp;Подготовьте макет для печати в формате JPEG.
                </p>
            </li>
            <li>
                <p class="lg:col-span-2">
                    &mdash;&nbsp;Отправьте макет на электронную почту магазина <NuxtLink class="underline"
                        :to="`mailto:${contacts.email}`" target="_blank">{{ contacts.email }}
                    </NuxtLink>. В теме письма обязательно укажите номер заказа, например, "К заказу №123456".
                    Менеджер может запросить уточнение по типу и количеству печати в процессе обработки вашего
                    заказа.
                </p>
            </li>
        </ul>

        <form @submit.prevent="submitForm" class="mt-8">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-6">

                    <p class="text-gray-600 mb-10">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur consequuntur ipsam
                        nulla nam, totam numquam delectus natus aspernatur id. Cupiditate temporibus architecto
                        voluptates itaque consequuntur nulla inventore fugiat aut autem.
                    </p>

                    <div class="grid grid-cols-6 gap-x-6 gap-y-6 sm:grid-cols-1">
                        <!-- имя -->
                        <div class="col-span-2 sm:col-auto">
                            <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                            <input v-model="food.form.name" v-maska="maskaOptions.cyrillic_and_upper_case" name="name"
                                id="name" required
                                class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                :class="inputColor" placeholder="Имя" />
                        </div>

                        <!-- Телефон -->
                        <div class="col-span-2 sm:col-auto">
                            <label for="phone" class="block text-sm font-medium text-gray-900 mb-2">Телефон</label>
                            <input v-model="food.form.phone" v-maska="maskaOptions.phone.mask" name="phone" id="phone"
                                required
                                class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                :class="inputColor" placeholder="+7 (___) ___-__-__" />
                        </div>

                        <!-- тип бумаги -->
                        <div class="col-span-2 sm:col-auto">
                            <label for="paper" class="block text-sm font-medium text-gray-900 mb-2">Тип
                                бумаги</label>
                            <div class="grid grid-cols-1">
                                <select v-model="food.form.type_id" id="paper" name="paper" autocomplete="paper-name"
                                    required
                                    class="col-start-1 row-start-1 w-full rounded-md py-1.5 pl-3 pr-8 text-gray-900 border-0 shadow-sm ring-1 ring-inset ring-gray-300 appearance-none hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all">
                                    <option v-for="type in paper" :key="i" :value="type.id">
                                        {{ type.name }}
                                    </option>

                                </select>
                                <ChevronDownIcon
                                    class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 z-10"
                                    aria-hidden="true" />
                            </div>
                        </div>

                        <!-- Комментарий -->
                        <div class="col-span-full">
                            <label for="desc" class="block text-sm/6 font-medium text-gray-900 mb-2">Комментарий</label>
                            <textarea v-model="food.form.comment" name="desc" id="desc" rows="3"
                                class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                placeholder="Укажите ваш комментарий" />
                        </div>

                        <!-- картинка -->
                        <div class="col-span-full">
                            <span for="cover-photo" class="block text-sm font-medium text-gray-900 mb-2">
                                Изображение
                            </span>
                            <label for="file-upload"
                                class="w-full flex justify-center items-center cursor-pointer rounded-md border-0 px-2.5 py-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-white hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all ">

                                <div v-if="!food.form.imageName" class="">
                                    <div class="flex items-center gap-x-2 justify-center mb-2">
                                        <Icon name="hugeicons:image-download" class="shrink-0 w-6 h-6" />
                                        <span>Загрузить файл</span>
                                    </div>
                                    <p class="text-xs text-center text-gray-600">
                                        Пожалуйста, загрузите файл в формате JPG размером не более 3 MB
                                    </p>
                                </div>
                                <div v-else class="flex items-center gap-x-2 ">
                                    <Icon name="material-symbols:check-circle-rounded" class="h-6 w-6 bg-green-500" />
                                    <p>Добавлено: {{ food.form.imageName }}</p>
                                </div>

                                <input id="file-upload" name="file-upload" type="file" @change="handleFileUpload"
                                    accept="image/webp,image/png,image/jpeg,image/jpg,image/heic" required
                                    class="sr-only" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit"
                class="mt-6 flex text-sm font-medium px-2.5 py-1.5 rounded-md ring-2 ring-amber-400 bg-amber-400  hover:bg-amber-300 transition-base">Отправить
            </button>
        </form>
    </main>

</template>


<script setup>
import HttpClient from "~/server/utils/httpClient.js";
const maskaOptions = useMaskaOptions();
const { contacts } = useContactsStore();
const { data: paper } = await HttpClient('edible-seals/types');

const popupStore = usePopupStore();
const { modal } = storeToRefs(popupStore);

const breadcrumbs = [
    {
        name: 'Съедобная печать', slug: '/foodSeal'
    },
]

useHead({
    title: 'Съедобная печать',
    meta: [
        {
            name: 'description',
            content: 'Заказать съедобную печать в интернет магазине Всё для кондитера.'
        }
    ],
})

const food = reactive({
    form: {
        name: null,
        phone: null,
        type_id: null,
        comment: null,
        image: null,
        imageName: null,
    },
    errors: null,
});

const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
        console.log(file);
        food.form.image = file; // сохраняем файл в form.image
        food.form.imageName = file.name; // сохраняем имя файла в form.imageName
    }
};


const submitForm = async () => {
    const { public: config } = useRuntimeConfig();
    const { phoneClear } = useHelper();
    const form = food.form;
    form.phone = phoneClear(form.phone)

    console.log(form)

    const formData = new FormData();
    for (const key in form) {
        formData.append(key, form[key]);
    }
    console.log(formData)

    await $fetch(`${config.backOptions.api}/edible-seals`, {
        method: 'POST',
        body: formData,
        headers: { "Content-type": "multipart/form-data" },
    }).then((data) => {
        popupStore.close('modal');
        popupStore.toggle('toast', { title: data.message, timeout: 2000 });
        form.phone = null;
        form.name = null;
    }).catch(({ response }) => {
        popupStore.toggle('toast', { title: response?._data?.message ?? 'Ошибка сервера', timeout: 6000, type: 'error' })
    })
}
// const submitForm = async () => {
//     const { public: config } = useRuntimeConfig();
//     const formData = new FormData();
//     for (const key in form.value) {
//         formData.append(key, form.value[key]);
//     }

//     try {
//         const response = await $fetch(`${config.backOptions.api}/edible-seals`, {
//             method: 'POST',
//             body: formData,
//             headers: {},
//         });

//         if (response.ok) {
//             alert('Форма успешно отправлена!');
//         } else {
//             alert('Ошибка при отправке формы.');
//         }
//     } catch (error) {
//         console.error('Ошибка:', error);
//     }
// };


</script>