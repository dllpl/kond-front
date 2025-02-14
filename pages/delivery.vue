<template>
    <div class="">
        <section class="flex items-center wrapper-container">
            <ElementsMobileCatalogPopover />
        </section>

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">

            <div class="text-white relative min-h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-20
                md:py-10 md:px-8 md:min-h-80 
                sm:min-h-72 
                xs:min-h-80 xs:py-4 xs:px-4 xs:mb-10">
                <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl xs:drop-shadow-md">Доставка и оплата</h1>

                <p class="text-lg max-w-4xl xs:drop-shadow-md ">
                    Мы стараемся сделать процесс покупок в нашем интернет-магазине <b>"Все для кондитеров"</b>
                    максимально
                    удобным
                    и прозрачным. Ознакомьтесь с основными условиями доставки и оплаты, чтобы выбрать наиболее удобный
                    для
                    вас способ.
                </p>
                <picture class="absolute inset-0 -z-20">
                    <source srcset="/assets/img/delivery-576.webp" media="(max-width: 576px)">
                    <source srcset="/assets/img/delivery-1440.webp" media="(max-width: 1440px)">
                    <img class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl xs:object-center"
                        src="/assets/img/delivery-1920.webp" alt="Доставка и оплата">
                </picture>

                <span class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-2xl"></span>
            </div>

            <div class="mb-20 flex gap-6 md:flex-col xs:mb-10">
                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 shrink-0">
                    <Icon name="hugeicons:delivery-truck-02" class="w-10 h-10 text-white" />
                </div>

                <div class="">
                    <h2 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">
                        Доставка
                    </h2>
                    <p class="mb-6">
                        Мы предлагаем несколько удобных способов доставки, чтобы вы могли получить свои товары вовремя и
                        в
                        удобном
                        для вас месте.
                    </p>
                    <ul role="list" class=" marker:text-red-500 list-disc list-inside space-y-6">
                        <li>
                            <h3 class="inline font-main text-lg font-semibold">Доставка по России</h3>
                            <p class="mt-2">
                                Мы сотрудничаем с крупнейшими логистическими транспортными компаниями (СДЭК, Почта
                                России и
                                другие)
                                для доставки
                                по всей России. Доставка осуществляется до вашего города или на ближайший
                                пункт выдачи. После отгрузки заказа мы высылаем Вам ТРЕК-номер, по которому можно
                                отслеживать
                                заказ.
                            </p>
                            <p class="mt-2">
                                Стоимость доставки: Стоимость доставки рассчитывается отдельно оператором на основе веса
                                и
                                размеров
                                товара, а также выбранной службы доставки. Доставка до транспортной компании
                                осуществляется
                                за
                                наш
                                счёт.
                            </p>
                            <p class="mt-2">Сроки доставки: Зависит от вашего региона, но в среднем доставка занимает от
                                5
                                до 14
                                рабочих дней.
                            </p>
                        </li>

                        <li>
                            <h3 class=" inline font-main text-lg font-semibold">Самовывоз</h3>
                            <p class="mt-2">
                                Самовывоз из магазина: Для жителей Набережных Челнов мы
                                предлагаем удобный способ забрать
                                свой заказ
                                самостоятельно из нашего магазина "Все для кондитера". Укажите самовывоз при оформлении
                                заказа.
                            </p>
                            <p class="mt-2">
                                Часы работы: Пн-Пт с 9:00 до 20:00, Сб-Вс с 9:00 до 19:00.
                            </p>
                            <p class="mt-2">
                                Адрес магазина: Набережные Челны проспект Мира 31а.
                            </p>
                        </li>
                        <li>
                            <h3 class="inline font-main text-lg font-semibold">Курьерская доставка по городу</h3>
                            <p class="mt-2">Мы доставляем заказы Яндекс Доставкой по Набережным Челнам. Стоимость
                                доставки
                                зависит
                                от удаленности
                                адреса и объема заказа.
                            </p>
                            <p class="mt-2">
                                Срок доставки: Доставка осуществляется в течении дня.
                            </p>
                            <p class="mt-2">
                                Время доставки: Мы предоставляем возможность выбрать удобное время доставки в рамках
                                рабочего
                                дня (с
                                9:00 до 20:00).
                            </p>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="mb-20 flex gap-6 md:flex-col xs:mb-10">
                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 shrink-0">
                    <Icon name="hugeicons:credit-card-accept" class="w-10 h-10 text-white" />
                </div>
                <div class="">
                    <h2 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">
                        Оплата
                    </h2>
                    <p class="mb-6">
                        Мы предлагаем несколько удобных способов оплаты, чтобы каждый клиент мог выбрать для себя
                        наиболее
                        подходящий вариант.
                    </p>

                    <ul role="list" class=" marker:text-red-500 list-disc list-inside space-y-6">
                        <li>
                            <h3 class="inline font-main text-lg font-semibold">Онлайн</h3>
                            <p class="mt-2">Банковские карты: Мы принимаем платежи по картам Visa, MasterCard, МИР, а
                                так же
                                по
                                СБП.</p>
                        </li>
                        <li>
                            <h3 class="inline font-main text-lg font-semibold">Оплата по счету для юридических лиц</h3>
                            <p class="mt-2">
                                Мы предоставляем возможность оплаты по счету для организаций и индивидуальных
                                предпринимателей.
                                Для
                                этого необходимо согласовать заказ с нашим менеджером.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mb-20 flex gap-6 md:flex-col xs:mb-10">
                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 shrink-0">
                    <Icon name="hugeicons:delivery-return-01" class="w-10 h-10 text-white" />
                </div>
                <div class="">
                    <h2 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">
                        Возврат и обмен
                    </h2>

                    <p class="mb-4">
                        Мы ценим каждого клиента и всегда готовы решить возникшие вопросы по возврату или обмену товара.
                        Пожалуйста,
                        ознакомьтесь с нашей политикой возврата:
                    </p>

                    <ul role="list" class="marker:text-red-500 list-disc list-inside space-y-2 mb-8">
                        <li>
                            Возврат или обмен товара возможен в течение 14 дней с момента получения заказа.
                        </li>
                        <li>
                            Товар должен быть в ненарушенной упаковке и не использован.
                        </li>
                        <li>
                            Все вопросы по возврату и обмену можно решить, связавшись с нашей службой поддержки.
                        </li>
                    </ul>

                    <p class="mb-4">
                        Если у вас возникнут вопросы по доставке или оплате, не стесняйтесь обращаться к нашим
                        консультантам. Мы
                        всегда
                        готовы помочь!
                    </p>

                    <dl class="space-y-2 mb-4">
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Телефон</span>
                                <Icon name="mdi-light:phone" class="w-6 h-6 text-red-600" aria-hidden="true" />
                            </dt>
                            <dd>
                                <NuxtLink :to="`tel:${contacts.phone}`" target="_blank"
                                    class="hover:text-red-600  focus:text-red-600 transition-all">
                                    {{ contacts.phone }}
                                </NuxtLink>
                            </dd>
                        </div>

                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Почта</span>
                                <Icon name="mdi-light:email" class="w-6 h-6 text-red-600" aria-hidden="true" />
                            </dt>
                            <dd>
                                <NuxtLink :to="`mailto:${contacts.email}`" target="_blank"
                                    class="hover:text-red-600  focus:text-red-600 transition-all">
                                    {{ contacts.email }}
                                </NuxtLink>
                            </dd>
                        </div>
                    </dl>

                </div>
            </div>

            <p class="text-xl text-center md:text-lg">
                Мы уверены, что покупка в нашем магазине станет для вас удобным и приятным процессом!
            </p>
        </main>
    </div>
</template>

<script setup>
const { contacts } = useContactsStore();

const breadcrumbs = [
    {
        name: 'Доставка и оплата',
        href: '/delivery',
    },
]

</script>
