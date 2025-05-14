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
</script>

<template>
  <Transition appear>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
      <div class="grid gap-4 photo-col">
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8206_tv3qin.jpg"
            alt="anthony climbing an abandoned house"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1747233443/marsh_fzmpod.jpg"
            alt="ponte vedra marsh at sunrise"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
      </div>
      <div class="grid gap-4 photo-col">
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363314/_MG_9430_lcteaz.jpg"
            alt="broken CD"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9121_rlj0zf.jpg"
            alt="rachel in the garden"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
      </div>
      <div class="grid gap-4 photo-col">
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704773/_MG_8530_ibfvbq.jpg"
            alt="lake mirror sculpture"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1747233440/chris_ubi7of.jpg"
            alt="chris at blue heat"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
      </div>
      <div class="grid gap-4 photo-col">
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1747233445/kaws_r0i8v9.jpg"
            alt="kaws"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
        <div>
          <img
            loading="lazy"
            class="h-auto max-w-full rounded-lg transition-opacity duration-500 opacity-0"
            src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733780751/_MG_0884_cropped_fb9zep.jpg"
            alt="elijah at the fire"
            @click="openModal($event.target.src)"
            @load="$event.target.classList.add('opacity-100')"
          />
        </div>
      </div>
    </div>
  </Transition>
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
