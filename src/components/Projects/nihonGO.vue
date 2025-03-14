<script setup>
import { ref } from 'vue'
import GenericCarousel from '../GenericCarousel.vue'

const slides = ref([
  {
    image: '/src/assets/images/nihongo/nihongo-home.png',
  },
  {
    image: '/src/assets/images/nihongo/nihongo-about.png',
  },
  {
    image: '/src/assets/images/nihongo/nihongo-register.png',
  },
  {
    image: '/src/assets/images/nihongo/nihongo-messaging.png',
  },
  {
    image: '/src/assets/images/nihongo/nihongo-forum.png',
  },
  {
    image: '/src/assets/images/nihongo/nihongo-study.png',
  },
])
</script>

<template>
  <GenericCarousel :slides="slides" />
</template>
