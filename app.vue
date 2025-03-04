<script setup>
const contactsStore = useContactsStore(); // Получаем доступ к store
const cartStore = useCartStore();

const { public: config } = useRuntimeConfig();
const { data: contacts } = await useFetch(config.backOptions.api + '/contacts');

// Функция для загрузки контактов с API
contactsStore.setContacts(contacts.value.data); // Записываем полученные данные в store

if (process.client) {
    cartStore.loadFromLocalStorage();
}

useSchemaOrg([
    defineLocalBusiness({
        "@type": "Store",
        name: 'Всё для кондитера',
        logo: '/logo-card.png',
        url: 'https://dljakonditera.ru',
        sameAs: [
            'https://wa.me/79586281044',
            'https://instagram.com/konditershop_chelny',
            'https://vk.com/konditershop_chelny',
        ],
        openingHoursSpecification: [
            {
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '20:00',
            },
            {
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '09:00',
                closes: '19:00',
            }
        ],
        geo: {
            "@type": "GeoCoordinates",
            latitude: '55.732463',
            longitude: '52.397121',
        },
        address: {
            streetAddress: 'проспект Мира, 31А',
            addressLocality: 'Набережные Челны',
            addressRegion: 'Республика Татарстан',
            postalCode: '423812',
            addressCountry: 'Россия',
        },
        telephone: '+7(958)6281044',
        email: 'zakazkonditer.nch@gmail.com',
        description: 'Всё для кондитера - товары для кондитеров с доставкой по г. Набережные Челны и России.',
    }),
    defineWebSite({
        name: 'Всё для кондитера',
        description: 'Всё для кондитера - товары для кондитеров с доставкой по г. Набережные Челны и России.',
        inLanguage: ['ru-RU'],
    })
])

useSeoMeta({
    ogType: 'website',
    ogImage: '/logo-card.png',
    ogImageType: 'image/png',
    ogImageHeight: 600,
    ogImageWidth: 1200,
    ogLocale: 'ru_RU',
})
</script>
<template>
    <NuxtLayout>
      <Header />
      <ElementsMobileCatalogPopover />
      <NuxtPage />
      <Footer />
      <ElementsNotifications />
      <ElementsModal />
    </NuxtLayout>
</template>