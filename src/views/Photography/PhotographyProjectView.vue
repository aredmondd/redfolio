<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref } from 'vue'

const props = defineProps({
  slug: String,
})

const loading = ref(true)

const slides = ref([])
const text = ref(null)
const title = ref(null)
const date = ref(null)
const inspirations = ref(null)

async function getImages() {
  const { data, error } = await supabase
    .from('photography')
    .select('*')
    .eq('slug', props.slug)
    .single()

  if (error) {
    console.error('Error fetching photography:', error.message)
  } else {
    slides.value = typeof data.images === 'string' ? JSON.parse(data.images) : data.images
    text.value = data.text
    title.value = data.title
    date.value = data.date
    inspirations.value = data.inspirations
    loading.value = false
  }
}

onMounted(getImages)
</script>

<template>
  <Transition appear>
    <div v-if="!loading" class="flex flex-col flex-1 justify-center items-center">
      <div class="flex flex-col sm:mx-80">
        <div class="flex justify-between items-end my-6">
          <h1 class="font-bold text-lg sm:text-2xl">{{ title }}</h1>
          <p class="text-black/50 text-xs sm:text-md">{{ date }}</p>
        </div>
        <div v-html="text"></div>
        <p v-if="inspirations != null" class="mt-3 italic text-black/50">
          Inspirations include: {{ inspirations }}
        </p>
      </div>
      <vueper-slides
        class="hidden sm:block no-shadow my-6"
        :touchable="false"
        :bullets="false"
        fade
        fixed-height="666.5px"
        style="width: 1000px"
        arrows-outside
      >
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
      </vueper-slides>

      <vueper-slides
        class="block sm:hidden no-shadow my-6"
        :bullets="false"
        :arrows="false"
        fade
        fixed-height="183.29px"
        style="width: 275px"
      >
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
      </vueper-slides>
      <p class="block sm:hidden text-black/50">(swipe to scroll through the images)</p>
    </div>
  </Transition>
</template>
