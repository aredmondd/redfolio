<script setup>
import { RouterLink } from 'vue-router'
import NavLink from './NavLink.vue'
import { ref, watch } from 'vue'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

watch(showMobileMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <nav class="flex justify-between items-center sm:gap-20">
    <RouterLink to="/" @click="closeMobileMenu">
      <img src="/logo_regular.png" alt="Your Logo" class="w-24" />
    </RouterLink>
    <div class="hidden sm:flex gap-6">
      <NavLink route="about" />
      <NavLink route="work" />
      <NavLink route="now" />
      <NavLink route="photography" />
    </div>

    <!-- Hamburger Icon for Mobile - Shown only on small screens, hidden on sm and up -->
    <button
      @click="toggleMobileMenu"
      class="sm:hidden p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md transition-colors duration-200"
      aria-label="Toggle mobile menu"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          :class="{ hidden: showMobileMenu, block: !showMobileMenu }"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          :class="{ hidden: !showMobileMenu, block: showMobileMenu }"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Full-screen Mobile Menu Modal -->
    <transition name="fade">
      <div
        v-if="showMobileMenu"
        class="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4"
      >
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 p-2 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
          aria-label="Close mobile menu"
        >
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="flex flex-col gap-8 text-2xl font-semibold text-white">
          <NavLink route="about" @click="closeMobileMenu" />
          <NavLink route="work" @click="closeMobileMenu" />
          <NavLink route="now" @click="closeMobileMenu" />
          <NavLink route="photography" @click="closeMobileMenu" />
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
