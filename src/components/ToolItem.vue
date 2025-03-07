<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  image: String,
  text: String,
  link: String,
  noimage: Boolean,
})

const image_src = computed(() =>
  props.image ? `/src/assets/tools/${props.image}` : `/src/assets/tools/${props.text}.png`,
)

const is_hovered = ref(false)
</script>

<template>
  <a class="flex items-center" :href="props.link" target="_blank">
    <img v-if="!noimage" :src="image_src" alt="" class="h-6 mr-1" />
    <p @mouseover="is_hovered = true" @mouseleave="is_hovered = false">{{ props.text }}</p>
    <p
      class="ml-1 transition-opacity duration-200 opacity-0"
      :class="{ 'opacity-100': is_hovered }"
    >
      ↗
    </p></a
  >
</template>
