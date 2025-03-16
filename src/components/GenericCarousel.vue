<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const props = defineProps(['slides'])
</script>

<template>
  <div class="flex flex-col flex-1 justify-center items-center">
    <vueper-slides
      class="no-shadow my-6"
      :touchable="false"
      bullets-outside
      fade
      fixed-height="552px"
      style="width: 1008px"
      arrows-outside
    >
      <vueper-slide v-for="(slide, i) in props.slides" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>
</template>
