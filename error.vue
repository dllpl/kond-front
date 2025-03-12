<template>
    <NuxtLayout>
        <Header />
        <ElementsMobileCatalogPopover />

        <!-- <NuxtPage /> -->

        <div class="">

            <main class="wrapper-container pt-3 pb-16">

                <div class="relative min-h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-20 items-center
                md:py-10 md:px-8 md:min-h-80 
                sm:min-h-72 
                xs:min-h-80 xs:py-4 xs:px-4 xs:mb-10">
                    <Icon name="noto:crying-cat" class="h-20 w-20 " />
                    <!-- <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl">{{ error?.statusCode ?? 500 }}</h1> -->
                    <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl">Страница не найдена</h1>

                    <p class="text-lg text-center max-w-4xl  ">
                        К сожалению, такой страницы не существует
                    </p>
                    <div class="flex gap-6 mt-8 xs:flex-col-reverse xs:mt-0 xs:gap-2">
                        <NuxtLink :to="'/'"
                            class="group flex items-center gap-x-1 w-auto  justify-center rounded-lg bg-amber-400 px-5 py-2 hover:bg-amber-300 transition-base lg:inline-flex lg:px-10">
                            <Icon name="hugeicons:home-05" class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            На главную
                        </NuxtLink>

                        <!-- <NuxtLink :to="'/lk'"
                            class="group flex items-center gap-x-1 w-auto  justify-center rounded-lg bg-amber-400 px-5 py-2 hover:bg-amber-300 transition-base lg:inline-flex lg:px-10 ">
                            <Icon name="hugeicons:shopping-basket-done-01" class="h-5 w-5 flex-shrink-0"
                                aria-hidden="true" />
                            Личный кабинет
                        </NuxtLink> -->
                    </div>
                </div>
            </main>
        </div>



        <Footer />
        <ElementsNotifications />
        <ElementsModal />
    </NuxtLayout>
</template>


<script setup>
const { public: config } = useRuntimeConfig();
const { data: contacts } = await useFetch(config.backOptions.api + '/contacts');

const contactsStore = useContactsStore();
contactsStore.setContacts(contacts.value.data);

const error = useError();

useHead({
    title: 'Страница не найдена',
    statusCode: error?.statusCode ?? 500,
    meta: [
        {
            name: 'description',
            content: 'Страница не найдена | Всё для кондитера'
        }
    ],
})
</script>