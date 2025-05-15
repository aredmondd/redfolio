<script setup>
import PhotographyGrid from '@/components/PhotographyGrid.vue'
</script>

<template>
  <Transition appear>
    <div class="flex flex-col flex-1">
      <h2 class="mt-12 text-center text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">PHOTOGRAPHY</h2>
      <h3 class="mb-12 text-center text-xs sm:text-base text-black/50">
        when i'm not working or running - i'm taking photos. <br />
        here are my favorites, but can you check out more
        <RouterLink to="/photography/all-projects" class="link">here</RouterLink>
      </h3>
      <PhotographyGrid />
    </div>
  </Transition>
</template>
