<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const props = defineProps(['slides'])
</script>

<template>
  <div class="flex flex-1 justify-center items-center">
    <vueper-slides
      class="no-shadow"
      :slide-ratio="1 / 3"
      :touchable="false"
      :bullets="false"
      fade
      fixed-height="666.5px"
      style="width: 1000px"
      arrows-outside
    >
      <vueper-slide v-for="(slide, i) in props.slides" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>
</template>
