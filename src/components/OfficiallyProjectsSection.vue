<script setup>
import OfficiallyProjectItem from './OfficiallyProjectItem.vue'
</script>

<template>
  <!-- PROJECTS SECTION -->
  <h2 class="text-center text-5xl font-bold">PROJECTS</h2>
  <p class="text-black/50 text-sm text-center mt-3 mb-12">(click on one to learn more)</p>
  <div class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-12 sm:grid-cols-3 sm:gap-12">
    <OfficiallyProjectItem name="reservoir" hover="#0A1826" />
    <OfficiallyProjectItem name="nihongo" hover="#f1cd9d" />
    <OfficiallyProjectItem name="jasiah" hover="#ffffff" invert />
  </div>
  <div class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-24 sm:grid-cols-3 sm:gap-12">
    <OfficiallyProjectItem name="running-sphere" hover="#eeeeee" />
    <OfficiallyProjectItem name="byte" hover="#000000" />
    <OfficiallyProjectItem name="nike-dragonfly" hover="#caf840" />
  </div>
</template>
