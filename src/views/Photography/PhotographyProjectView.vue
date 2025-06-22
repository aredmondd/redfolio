<script setup>
import 'vueperslides/dist/vueperslides.css'
import { VueperSlides, VueperSlide } from 'vueperslides'
import { onMounted, ref } from 'vue'
import photographyProjects from '../../photography-projects.json'

const props = defineProps({
  slug: String,
})

const loading = ref(true)
const project = ref({})

function getData(slug) {
  const data = photographyProjects[slug]

  if (!data) {
    console.error('No project found for slug:', slug)
    return
  }

  project.value = {
    text: data.text,
    slides: data.images,
    date: data.date,
    inspirations: data.inspirations,
    title: data.title,
  }

  loading.value = false
}

onMounted(() => {
  console.log(props.slug)
  getData(props.slug)
})
</script>

<template>
  <Transition appear>
    <div v-if="!loading" class="flex flex-col flex-1 justify-center items-center">
      <div class="flex flex-col sm:mx-80">
        <div class="flex justify-between items-end my-6">
          <h1 class="font-bold text-lg sm:text-2xl">{{ project.title }}</h1>
          <p class="text-black/50 text-xs sm:text-md">{{ project.date }}</p>
        </div>
        <div v-html="project.text"></div>
        <p v-if="project.inspirations != null" class="mt-3 italic text-black/50">
          Inspirations include: {{ project.inspirations }}
        </p>
      </div>
      <VueperSlides
        class="hidden sm:block no-shadow my-6"
        :touchable="false"
        :bullets="false"
        fade
        fixed-height="666.5px"
        style="width: 1000px"
        arrows-outside
      >
        <vueper-slide v-for="(slide, i) in project.slides" :key="i" :image="slide.image" />
      </VueperSlides>

      <VueperSlides
        class="block sm:hidden no-shadow my-6"
        :bullets="false"
        :arrows="false"
        fade
        fixed-height="183.29px"
        style="width: 275px"
      >
        <VueperSlide v-for="(slide, i) in project.slides" :key="i" :image="slide.image" />
      </VueperSlides>
      <p class="block sm:hidden text-black/50">(swipe to scroll through the images)</p>
    </div>
  </Transition>
</template>
