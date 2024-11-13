<script setup>


provideHeadlessUseId(() => useId())
</script>

<template>
    <div>
        <NuxtLayout>
            <HeaderCopy />
            <NuxtPage />
            <Footer />
        </NuxtLayout>
    </div>
</template>
