<template>
  <Transition appear v-if="loaded">
    <div>
      <div class="columns-2 md:columns-3 lg:columns-4 gap-3 mt-4">
        <img
          v-for="(image, index) in photos"
          :key="index"
          :src="image.image"
          @click="openModal(image.image)"
          class="mb-3"
        />
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
    </div>
  </Transition>
  <p v-else class="text-center text-xl text-black/50 italic mt-12">loading...</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const loaded = ref(false)
const isModalOpen = ref(false)
const modalImage = ref('')
const imagesToLoad = ref(0)
const imagesLoadedCount = ref(0)

function openModal(imageSrc) {
  modalImage.value = imageSrc
  isModalOpen.value = true
}
function closeModal(event) {
  if (event.target === event.currentTarget) {
    isModalOpen.value = false
  }
}

const photos = [
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606171/DSC01267_khu9u9.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606146/DSC01794_kd7ihj.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606179/chris-8_x4ilnp.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606174/DSC00693_yooaw1.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606150/DSC01694_jexbst.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606174/DSC00637_qjadnj.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606173/DSC01216_nlvccp.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606149/DSC01707_flz38a.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01556_vyijwu.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606148/DSC01746_bhcquj.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01532_zlfm1a.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606167/DSC01359_fkfv3d.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606173/DSC01004_wbfabr.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606176/DSC00317_i6fe7i.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606182/chris-11_zdb55o.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606176/DSC00422_btl117.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606167/DSC01371_xqyyti.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606146/DSC01789_jagdcu.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606169/DSC01330_n8wdw0.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606165/DSC01389_oqgpiq.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606179/chris-6_gecuir.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606327/dawg_rk7wdw.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606169/DSC01338_srvbzj.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606147/DSC01772_flxrp8.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606150/DSC01692_jq0kqt.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606148/DSC01747_o7ozih.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606145/DSC01837_yxliwu.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606175/DSC00433_hfbr8e.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606164/DSC01401_kqslb1.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606170/DSC01283_zarncd.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606178/chris-9_k9b7ar.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606168/DSC01341_xvncar.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606171/DSC01268_hrxeqv.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606149/DSC01698_agpnph.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606176/DSC00374_jlsjhm.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606165/DSC01388_wa5vdk.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606147/DSC01761_k3zr6w.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606146/DSC01776_rl1tmv.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01568_hqckt7.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606160/DSC01574_hvanu5.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606168/DSC01345_fbbczj.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606150/DSC01691_lkvypl.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606172/DSC01229_q22rjl.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606164/DSC01411_hgkqik.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606152/DSC01632_l2pymr.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606178/DSC00303_psdkyx.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606180/chris-3_dq3qde.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606151/DSC01656_kwwqhv.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01559_nq4xj9.jpg' },
  { image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606164/DSC01529_jkgjse.jpg' },
]

onMounted(() => {
  imagesToLoad.value = photos.length

  photos.forEach((photo) => {
    const img = new Image()
    img.src = photo.image
    img.onload = () => {
      imagesLoadedCount.value++
      if (imagesLoadedCount.value === imagesToLoad.value) {
        loaded.value = true
      }
    }
    img.onerror = () => {
      imagesLoadedCount.value++
      if (imagesLoadedCount.value === imagesToLoad.value) {
        loaded.value = true
      }
    }
  })
})
</script>
