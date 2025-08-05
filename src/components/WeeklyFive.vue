<template>
  <p class="text-black/50 text-center my-12">
    the goal is to... well... take 5 photos a week <br />(click on one to make it bigger)
  </p>
  <div class="flex gap-12 mb-12 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide">
    <div v-for="(images, week) in photos" :key="week">
      <h2 class="text-4xl sm:text-5xl font-bold text-right whitespace-nowrap">{{ week }}</h2>
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
  'WEEK 5': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02661_l5rl2f.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02732_gitp47.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02719_pyvvhp.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02676_i8xck1.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02685_e0qsrk.jpg',
  ],
  'WEEK 6': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711013/DSC02851_stsrui.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711012/DSC02786_c4xwfe.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711013/DSC02834_a3hizz.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711012/DSC02829_oewlie.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711013/DSC02822_dvz2ca.jpg',
  ],
  'WEEK 7': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC03034_qto7zs.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC03004_qlzsoa.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC02963_euflwn.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311629/DSC02916_auo0kf.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC02898_ivhwov.jpg',
  ],
  'WEEK 8': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03130_p02sjy.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03113_k8efyw.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03055_usdqmp.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03123_mye5sc.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03174_a0ms0j.jpg',
  ],
  'WEEK 9': [
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03265_wueukv.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03316_ctaaqe.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03301_etstde.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03325_t1snnz.jpg',
    'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03278_vt4nxq.jpg',
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
