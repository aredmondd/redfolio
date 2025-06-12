<template>
  <p class="text-black/50 text-center my-12">
    the goal is to... well... take 5 photos a week <br />(click on one to make it bigger)
  </p>
  <div class="flex gap-12 mb-12">
    <div v-for="(images, week) in photos" :key="week">
      <h2 class="text-4xl sm:text-5xl font-bold">{{ week }}</h2>
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

  <!-- Modal -->
  <div
    v-if="isModalOpen"
    id="imageModal"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div class="relative">
      <img id="modalImage" :src="modalImage" class="max-w-full max-h-screen my-12" />
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
  document.body.style.overflow = 'hidden' // Disable scrolling
}
function closeModal(event) {
  if (event.target === event.currentTarget) {
    isModalOpen.value = false
    document.body.style.overflow = '' // Restore scrolling
  }
}

const photos = {
  'WEEK 1': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1749687161/DSC02373_rnj7ux.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1749687161/DSC02423_k8vf9r.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1749687161/DSC02385_uqgxnu.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1749687161/DSC02446_lgushy.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1749687160/DSC02353_ayifly.jpg',
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
