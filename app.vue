<script setup>


provideHeadlessUseId(() => useId())
</script>

<template>
    <div>
        <NuxtLayout>
            <Header />
            <NuxtPage />
            <Footer />
        </NuxtLayout>
    </div>
</template>
