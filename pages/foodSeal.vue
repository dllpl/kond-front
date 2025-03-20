<template>
    <div class="">

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <h1 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">
                Заказать съедобную печать
            </h1>

            <p class="text-lg leading-8 lg:col-span-2 mb-4 md:text-base">
                Как оформить заказ:
            </p>
            <ul class="space-y-2">
                <li>
                    <p class="text-lg leading-8 lg:col-span-2  md:text-base">
                        &mdash;&nbsp;Добавьте нужный тип печати (в зависимости от названия товара) в корзину и оформите
                        заказ, выбрав
                        самовывоз или доставку курьером.
                    </p>
                </li>
                <li>
                    <p class="text-lg leading-8 lg:col-span-2  md:text-base">
                        &mdash;&nbsp;Подготовьте макет для печати в формате JPEG.
                    </p>
                </li>
                <li>
                    <p class="text-lg leading-8 lg:col-span-2  md:text-base">
                        &mdash;&nbsp;Отправьте макет на электронную почту магазина <NuxtLink class="underline"
                            :to="`mailto:${contacts.email}`" target="_blank">{{ contacts.email }}
                        </NuxtLink>. В теме письма обязательно укажите номер заказа, например, "К заказу №123456".
                        Менеджер может запросить уточнение по типу и количеству печати в процессе обработки вашего
                        заказа.
                    </p>
                </li>
                <li>
                    <p class="text-lg leading-8 lg:col-span-2  md:text-base">
                        &mdash;&nbsp;Если вы посетили розничный магазин, для печати на пищевых продуктах можно принести
                        файл на
                        флешке или отправить его по почте.
                    </p>
                </li>
            </ul>

            <p
                class="text-center border-2 border-red-400 rounded-lg text-lg leading-8 p-4 mt-6 lg:col-span-2 md:text-base">
                <strong>Важно</strong><br> Этот процесс является временным. В ближайшее время будет внедрён удобный
                функционал для загрузки и редактирования изображений непосредственно на сайте, что упростит оформление
                заказа.
            </p>
        </main>
    </div>
</template>


<script setup>

const breadcrumbs = [
    {
        name: 'Съедобная печать', slug: '/foodSeal'
    },
]
const { contacts } = useContactsStore();

useHead({
    title: 'Съедобная печать',
    meta: [
        {
            name: 'description',
            content: 'Заказать съедобную печать в интернет магазине Всё для кондитера.'
        }
    ],
})
</script>