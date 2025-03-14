<script setup>
import { ref } from 'vue'
import GenericCarousel from '../GenericCarousel.vue'

const slides = ref([
  {
    image: '/src/assets/images/reservoir/reservoir-friends.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-home.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-my-reservoir.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-profile.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-search.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-sign-up.png',
  },
])
</script>

<template>
  <GenericCarousel :slides="slides" />
</template>
