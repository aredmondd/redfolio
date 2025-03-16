<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  description: String,
  time: String,
  hover: String,
  invert: Boolean,
})

const hoverClass = computed(() => {
  let classes = [`hover:bg-[${props.hover}]`]
  if (props.invert) {
    classes.push('hover:invert')
  }
  return classes.join(' ')
})
</script>

<template>
  <RouterLink :to="'/project/' + props.name" class="project">
    <div class="flex flex-col h-full">
      <div
        class="flex items-center justify-center h-full rounded-lg transition-all duration-500 ease-in-out"
        :class="hoverClass"
      >
        <img :src="'/src/assets/images/projects/' + props.name + '.png'" />
      </div>
      <p class="text-sm sm:text-md text-center mt-6">{{ props.description }}</p>
      <p class="text-black/50 text-xs sm:text-sm text-center mt-1">{{ props.time }}</p>
    </div>
  </RouterLink>
</template>
