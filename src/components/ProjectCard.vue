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
  let classes = ['project-item']
  if (props.invert) {
    classes.push('hover:invert')
  }
  return classes.join(' ')
})

const imageLocation = computed(() => `/headers/${props.name}.png`)
</script>

<template>
  <RouterLink :to="'/project/' + props.name" class="project">
    <div class="flex flex-col h-full">
      <div
        class="flex items-center justify-center h-full rounded-lg transition-all duration-500 ease-in-out hover:bg-[var(--hover-color)]"
        :class="hoverClass"
        :style="{ '--hover-color': props.hover }"
      >
        <img :src="imageLocation" />
      </div>
    </div>
  </RouterLink>
</template>
