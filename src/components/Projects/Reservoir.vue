<script setup>
import { ref } from 'vue'
import GenericCarousel from '../GenericCarousel.vue'

const slides = ref([
  {
    image: '/src/assets/images/reservoir/reservoir-friends.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-home.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-my-reservoir.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-profile.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-search.png',
  },
  {
    image: '/src/assets/images/reservoir/reservoir-sign-up.png',
  },
])
</script>

<template>
  <div class="flex flex-col justify-center sm:mx-96 mt-6">
    <img src="@/assets/images/headers/reservoir-header.png" alt="" />
    <div class="flex justify-between text-black/50 mx-2">
      <p>Senior Project</p>
      <p>Fall 2024</p>
    </div>
  </div>

  <div class="flex flex-col gap-3 sm:mx-96 mt-12">
    <p>
      Reservoir is a web application designed to help users organize and track their media, connect
      with friends, share recommendations, and receive personalized AI-driven suggestions. Unlike
      existing platforms such as MyAnimeList, IMDb, and Letterboxd, Reservoir provides a more
      comprehensive, user-friendly experience tailored to individual preferences.
    </p>

    <p>
      Developed as part of my Senior Project (CSC4999) at Florida Southern College, Reservoir was
      built over several hundred hours alongside teammates Brandon Wilson and Axel Beaver.
      Throughout development, I took on the role of team leader, guiding the project from concept to
      completion while ensuring a seamless user experience and effective implementation of key
      features.
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>
      - <span class="font-semibold text-black/90">Led</span> weekly sprint meetings to drive
      <span class="font-semibold text-black/90">agile development</span>, ensuring
      <span class="font-semibold text-black/90">timely feature implementation</span> and meeting
      <span class="font-semibold text-black/90">project milestones</span> <br />
      - <span class="font-semibold text-black/90">Designed and implemented the UI/UX</span>,
      delivering <span class="font-semibold text-black/90">clean, readable code</span> for teammates
      and a
      <span class="font-semibold text-black/90"> visually engaging, intuitive user experience </span
      >.
      <br />
      - <span class="font-semibold text-black/90">Developed</span> frontend features for
      <span class="font-semibold text-black/90">
        content management, user interactions, and personalized content organization, enhancing
        platform engagement.
      </span>
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>While Reservoir isn't public (yet?), you can check out the UI through the images below.</p>
  </div>
  <GenericCarousel :slides="slides" />
</template>
