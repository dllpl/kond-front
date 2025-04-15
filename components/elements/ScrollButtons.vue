<template>
    <div class="fixed bottom-4 left-4 flex flex-col space-y-4 z-10 lg:hidden">
        <button
            @click="scrollToTop"
            class="bg-amber-400 hover:bg-amber-300 text-white p-3 rounded-full shadow-lg transition-all flex items-center justify-center"
            aria-label="Scroll to top"
        >
            <Icon name="hugeicons:circle-arrow-up-02" class="w-7 h-7"/>
        </button>
    </div>

    <div class="fixed bottom-4 right-4 z-50 lg:hidden">
        <NuxtLink
            external
            :to="contacts.whatsapp_link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full shadow-lg transition-all flex items-center justify-center"
            aria-label="Contact via WhatsApp"
        >
            <Icon name="fa-brands:whatsapp" class="w-7 h-7"/>
        </NuxtLink>
    </div>
</template>

<script setup>
const {contacts} = useContactsStore();
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
</script>
