<template>
    <div class="container">
        <HeaderNav />
        <ProfileSection @open-modal="modalOpen = true" />
        <ServiceSection />
        <ProjectsSection />
    </div>
    <ContactModal :isOpen="modalOpen" @close="modalOpen = false" />
</template>

<script setup>
import { ref } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import ProfileSection from './components/ProfileSection.vue'
import ServiceSection from './components/ServiceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactModal from './components/ContactModal.vue'

const modalOpen = ref(false)
</script>