<script setup>
import PhotographyGrid from '@/components/PhotographyGrid.vue'
import AllProjectsView from './Photography/AllProjectsView.vue'
</script>

<template>
  <Transition appear>
    <div class="flex flex-col flex-1">
      <h2 class="mt-12 text-center text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">PHOTOGRAPHY</h2>
      <h3 class="mb-12 text-center text-xs sm:text-base text-black/50">
        last semester, i fell in love with cameras.<br />
        i've been obsessed with form, light, and motion ever since.
      </h3>
      <PhotographyGrid />

      <div class="flex flex-col sm:flex-row">
        <div>
          <h2 class="mt-12 text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">PROJECTS</h2>
          <h3 class="text-xs sm:text-base text-black/50">
            here is where my 'official' projects live <br />
            click on one to learn more :)
          </h3>
        </div>
        <AllProjectsView class="mb-24" />
      </div>
    </div>
  </Transition>
</template>
