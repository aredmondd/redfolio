<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  description: String,
  time: String,
  hover: String,
  invert: Boolean,
})

const imageLocation = computed(() => `/headers/${props.name}.png`)
</script>

<template>
  <RouterLink :to="'/project/' + props.name" class="project">
    <div class="flex flex-col h-full">
      <div class="flex items-center justify-center h-full rounded-lg">
        <img :src="imageLocation" />
      </div>
    </div>
  </RouterLink>
</template>
