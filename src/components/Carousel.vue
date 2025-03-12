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
      <div class="flex flex-col mx-80">
        <div class="flex justify-between items-end my-6">
          <h1 class="font-bold text-3xl">{{ title }}</h1>
          <p class="text-black/50">{{ date }}</p>
        </div>
        <div v-html="text"></div>
        <p v-if="inspirations != null" class="mt-3 italic text-black/50">
          Inspirations include: {{ inspirations }}
        </p>
      </div>
      <vueper-slides
        class="no-shadow my-6"
        :touchable="false"
        :bullets="false"
        fade
        fixed-height="666.5px"
        style="width: 1000px"
        arrows-outside
      >
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
      </vueper-slides>
    </div>
  </Transition>
</template>
