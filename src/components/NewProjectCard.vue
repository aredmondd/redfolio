<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  bg: String,
  img: String,
  border: String,
  link: {
    type: String,
    required: true,
  },
  text: String,
})

const allowedBorders = {
  grey: 'border-[#A1A1A1]',
  red: 'border-[#BD002C]',
  blue: 'border-[#92AFD9]',
}

const allowedBackgrounds = {
  blue: 'bg-[#091826]',
  peach: 'bg-[#F1CD9D]',
  white: 'bg-[#FFFFFF]',
  black: 'bg-[#1A1A1A]',
  green: 'bg-[#3C4B35]',
  grey: 'bg-[#5E5F5B]',
  electricblue: 'bg-[#4150f8]',
  offwhite: 'bg-[#EDEDED]',
}

const borderClass = computed(() => {
  return allowedBorders[props.border] || 'border-none'
})

const backgroundClass = computed(() => {
  return allowedBackgrounds[props.bg] || 'bg-[#091826]'
})

const isExternal = computed(() => {
  return (
    props.link.startsWith('http://') ||
    props.link.startsWith('https://') ||
    props.link.startsWith('mailto:')
  )
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <a
      v-if="isExternal"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      :class="['p-12 py-18', backgroundClass]"
    >
      <img
        :src="img"
        alt=""
        :class="[
          'rotate-x-50 -rotate-z-33 hover:rotate-x-0 hover:rotate-z-0 duration-500 opacity-0 ease-in-out rounded-lg border-2',
          borderClass,
        ]"
        @load="$event.target.classList.add('opacity-100')"
      />
    </a>

    <RouterLink v-else :to="link" :class="['p-12 py-18', backgroundClass]">
      <img
        :src="img"
        alt=""
        :class="[
          'rotate-x-50 -rotate-z-33 hover:rotate-x-0 hover:rotate-z-0 duration-500 opacity-0 ease-in-out rounded-lg border-2',
          borderClass,
        ]"
        @load="$event.target.classList.add('opacity-100')"
      />
    </RouterLink>

    <p v-if="text" class="text-black/50 text-sm text-center">{{ text }}</p>
  </div>
</template>
