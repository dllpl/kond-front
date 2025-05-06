<script setup>

if (process.client) {
  useCartStore().loadFromLocalStorage();
}

useSchemaOrg([
    defineLocalBusiness({
        "@type": "Store",
        name: 'Всё для кондитера',
        logo: '/logo.webp',
        url: 'https://dljakonditera.ru',
        sameAs: [
            'https://wa.me/79586281044',
            'https://instagram.com/konditershop_chelny',
            'https://vk.com/konditershop_chelny',
            'https://t.me/KondeterSHOP_bot/?start=utm_source=site',
        ],
        currenciesAccepted: 'RUB',
        priceRange: '$',
        paymentAccepted: 'Cash, Credit Card',
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
            addressCountry: 'RU',
        },
        telephone: '+7 958 628-10-44',
        email: 'zakazkonditer.nch@gmail.com',
        description: 'Всё для кондитера - товары для кондитеров с доставкой по г. Набережные Челны и России.',
    }),
])

useSeoMeta({
    ogType: 'website',
    ogImage: 'https://dljakonditera.ru/cooking-1.1.webp',
    ogImageType: 'image/webp',
    ogImageHeight: 600,
    ogImageWidth: 1200,
    ogLocale: 'ru_RU',
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>