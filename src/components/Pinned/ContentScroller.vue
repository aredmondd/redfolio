<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../../lib/supabaseClient'

const content = ref([])

async function getContent() {
  const { data, error } = await supabase.from('consuming').select('*')

  if (error) {
    console.error('Error fetching content:', error.message)
  } else {
    content.value = data
  }
}

onMounted(() => {
  getContent()
})
</script>

<template>
  <div class="flex-grow flex items-center">
    <div
      class="w-full inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,white,black,transparent_100%)] group"
    >
      <ul class="flex animate-loop-fast-scroll">
        <div
          v-for="(image, index) in content"
          class="w-32 sm:w-64 mr-4 sm:mr-8 h-full"
          :key="index"
        >
          <a v-bind:href="image.more_link" target="_blank">
            <img
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="border border-transparent rounded-lg w-full h-full object-cover"
            />
          </a>
        </div>
      </ul>
      <ul class="flex animate-loop-fast-scroll" aria-hidden="true">
        <div
          v-for="(image, index) in content"
          class="w-32 sm:w-64 mr-4 sm:mr-8 h-full"
          :key="index"
        >
          <a v-bind:href="image.more_link" target="_blank">
            <img
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="border border-transparent rounded-lg w-full h-full object-cover"
            />
          </a>
        </div>
      </ul>
    </div>
  </div>
</template>
