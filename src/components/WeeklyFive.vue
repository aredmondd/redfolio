<template>
  <p class="text-black/50 text-center my-12">
    the goal is to... well... take 5 photos a week <br />(click on one to make it bigger)
  </p>
  <div class="flex justify-end gap-12 mb-12">
    <div v-for="(images, week) in photos" :key="week">
      <h2 class="text-4xl sm:text-5xl font-bold text-right">{{ week }}</h2>
      <div class="space-y-4 mt-6">
        <img
          v-for="(img, idx) in images"
          :key="idx"
          :src="img"
          alt="Photo"
          class="rounded-lg w-64 transition-opacity duration-500 opacity-0"
          loading="lazy"
          @click="openModal($event.target.src)"
          @load="$event.target.classList.add('opacity-100')"
        />
      </div>
    </div>
  </div>

  <div
    v-if="isModalOpen"
    id="imageModal"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
    @click="closeModal"
  >
    <div class="relative">
      <button
        class="absolute top-4 right-4 text-pink bg-black/60 hover:bg-black px-2 py-1 rounded-lg z-10"
        @click.stop="isModalOpen = false"
      >
        ✕
      </button>
      <img id="modalImage" :src="modalImage" class="max-w-full max-h-screen" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const modalImage = ref('')

function openModal(imageSrc) {
  modalImage.value = imageSrc
  isModalOpen.value = true
}
function closeModal(event) {
  if (event.target === event.currentTarget) {
    isModalOpen.value = false
  }
}

const photos = {
  'WEEK 1': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856543/DSC02373_kz8e4t.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856542/DSC02423_yksw6a.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856543/DSC02385_he2ppg.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856542/DSC02446_gmbils.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856543/DSC02353_ykiw3k.jpg',
  ],
  'WEEK 2': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856652/DSC02487_xzhs3x.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856653/DSC02481_ogjejg.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856653/DSC02476_lbwy0q.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856654/DSC02455_rb6bue.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856652/DSC02499_t0ug3k.jpg',
  ],
  'WEEK 3': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02589_pdlk3r.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02514_k06dbc.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02531_sgmzhv.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02574_nopyuh.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02577_eywzfp.jpg',
  ],
  'WEEK 4': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02638_o6klg3.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02610_ucsrjd.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02627_tu71ya.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02630_i3jpvg.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02619_odosq4.jpg',
  ],
}
</script>

<style scoped>
.v-enter-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  transition-delay: var(--delay, 0ms);
}

.v-enter-from {
  opacity: 0;
  transform: translateY(48px);
}
</style>
