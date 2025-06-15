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
    <div>
      <div class="flex flex-col justify-center sm:mx-96">
        <img
          src="/headers/nike-dragonfly-header.png"
          alt=""
          class="duration-200 opacity-0 ease-in-out"
          @load="$event.target.classList.add('opacity-100')"
        />
        <div class="flex justify-between sm:mx-4 text-black/50 sm:mt-[-25px]">
          <p>Typography & Layout</p>
          <p>Spring 2024</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 sm:mx-96 mt-12">
        <p>
          This project focused on expressing ideas through typography by creating a series of 3
          advertisements for an old pair of shoes. Each student was tasked with designing:
        </p>
        <div>
          <p>1. A poster featuring a photograph of the shoe</p>
          <p>2. A poster featuring a person wearing the shoe</p>
          <p>3. A typography-only poster with no images</p>
        </div>
        <p>
          The goal was to develop a strong design hierarchy, effectively manipulating type, and
          communicating a clear concept through design. The final designs were printed on tabloid
          paper and critiqued based on composition, color use, typography, and overall execution.
        </p>
        <hr class="border-b-1 border-black/25 my-3" />
        <p>
          As a Cross Country & Track athlete, racing spikes were the natural choice for this
          project. These shoes get destroyed daily in the mud, grass, and gravel, making them a
          perfect subject for a bold ad. My goal was to reinterpret Nike's marking using a strong
          serif font and a striking three-color palette, anchored by a vibrant green pulled directly
          from the shoe.
        </p>
        <p>
          In my designs, I focused heavily on the dragonfly—the inspiration behind both the name and
          engineering of the shoe. Dragonflies are known for their speed, agility, and efficiency in
          flight, qualities that align perfectly with the shoe's construction and performance. To
          reinforce this, I incorporated the world records for all events set in the shoe (poster
          #3) emphasizing its elite status in the sport. The angular logo printed on the shoe and
          throughout the designs mirrors the sleek, aerodynamic shape of a dragonfly in motion,
          while the "Made to Fly" text further drives home the idea of speed and propulsion.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
        <img
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742151963/dragonfly-1_zdd7bq.png"
          alt=""
          @click="openModal($event.target.src)"
        />
        <img
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742151963/dragonfly-2_rkszrt.png"
          alt=""
          @click="openModal($event.target.src)"
        />
        <img
          src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742151964/dragonfly-3_lwzwhv.png"
          alt=""
          @click="openModal($event.target.src)"
        />
      </div>
      <!-- Modal -->
      <div
        v-if="isModalOpen"
        id="imageModal"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        @click="closeModal"
      >
        <div class="relative">
          <img id="modalImage" :src="modalImage" class="max-w-full max-h-screen my-12" />
        </div>
      </div>
    </div>
  </Transition>
</template>
