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
  <div class="grid grid-cols-4 gap-4 mb-12">
    <div class="grid gap-4 photo-col">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8206_tv3qin.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363767/DSC00374_esme4j.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
    </div>
    <div class="grid gap-4 photo-col">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363314/_MG_9430_lcteaz.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9121_rlj0zf.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
    </div>
    <div class="grid gap-4 photo-col">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_8718_au610y.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363821/DSC01004_l2iotu.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
    </div>
    <div class="grid gap-4 photo-col">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1735177793/DSC01568_ud8fer.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733780751/_MG_0884_cropped_fb9zep.jpg"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="isModalOpen"
    id="imageModal"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
    @click="closeModal"
  >
    <div class="relative">
      <img id="modalImage" :src="modalImage" class="max-w-full max-h-screen my-12" />
    </div>
  </div>
</template>
