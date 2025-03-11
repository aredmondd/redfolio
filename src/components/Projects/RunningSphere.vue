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
  <div class="flex flex-col justify-center mx-96 mt-6">
    <img src="@/assets/headers/running-sphere-header.png" alt="" />
    <div class="flex justify-between text-black/50 mt-3">
      <p>Typography & Layout</p>
      <p>Spring 2024</p>
    </div>
  </div>
  <div class="flex flex-col gap-3 mx-96 mt-12">
    <p>
      This project focused on designing a 16-page magazine, emphasizing layout, typography, and
      imagery. Each student was tasked with:
    </p>

    <div>
      <span class="font-mono font-light">1.</span> Creating a unique magazine concept and name
      <br />
      <span class="font-mono font-light">2.</span> Designing 3 distinct covers and presenting them,
      eventually picking the best one <br />
      <span class="font-mono font-light">3.</span> Creating a table of contents (1 spread) with the
      main articles <br />
      <span class="font-mono font-light">4.</span> Laying out multi-page spreads for the main
      articles
      <br />
      <span class="font-mono font-light">5.</span> Designing an ad for the back of the magazine
    </div>

    <p>
      The goal was to develop a strong design hierarchy, utilize a grid system for layout
      consistency, and ensure clear legibility with effective typography. The final designs were
      printed on paper and presented to the class.
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>
      With the recent release of the Nike Alphafly 3, I saw this assignment as the perfect
      opportunity to create a magazine centered on the world of running. My goal was to create a
      sleek, fast, and visually striking experience that would capture the energy and innovation of
      modern racing shoes.
    </p>
    <p>
      To achieve this, I used a bold, vibrant orange as my primary color—directly pulled from the
      Alphafly 3—to evoke speed, intensity, and excitement. I also incorporated a futuristic,
      space-themed aesthetic, drawing parallels between cutting-edge shoe technology and pushing
      human performance beyond limits. Every design choice from typography to the layout was made to
      reflect the forward-thinking of elite running, and specifically, the Nike Alphafly 3.
    </p>
  </div>

  <div class="grid grid-cols-3 gap-6 my-6">
    <!-- <img src="@/assets/nike-dragonfly-1.png" alt="" @click="openModal($event.target.src)" /> -->
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
