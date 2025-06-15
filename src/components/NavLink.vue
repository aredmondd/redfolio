<template>
  <RouterLink
    activeClass="bg-green text-white transition duration-200"
    class="px-1"
    :to="'/' + route"
    >{{ route }}</RouterLink
  >
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['route'])
</script>
