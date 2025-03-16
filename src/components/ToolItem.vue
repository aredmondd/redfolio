<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  image: String,
  text: String,
  link: String,
  noimage: Boolean,
})

const imageSource = computed(() => {
  return props.image ? `/tools/${props.image}` : `/tools/${props.text}.png`
})

const isHovered = ref(false)
</script>

<template>
  <a class="flex items-center" :href="props.link" target="_blank">
    <img v-if="!noimage" :src="imageSource" alt="" class="h-6 mr-1" />
    <p @mouseover="isHovered = true" @mouseleave="isHovered = false">{{ props.text }}</p>
    <p class="ml-1 transition-opacity duration-200 opacity-0" :class="{ 'opacity-100': isHovered }">
      ↗
    </p></a
  >
</template>
