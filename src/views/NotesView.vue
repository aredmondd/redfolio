<script setup>
import BlogList from '@/components/BlogList.vue'
</script>

<template>
  <Transition appear>
    <div class="flex flex-col sm:mx-24 mt-12 sm:mt-24">
      <div class="flex justify-between">
        <h2 class="text-xs sm:text-base mr-12 sm:mr-0 text-black/50">
          this is a collection of stuff i'm working on, i love, or want to do. <br />
          below is a list of tags if you are looking for something specific.
        </h2>
        <h2 class="text-right text-4xl sm:text-5xl font-bold">NOTES</h2>
      </div>
      <BlogList class="mt-24" />
    </div>
  </Transition>
</template>
