<script setup>
import { ref } from 'vue'
import GenericCarousel from '../GenericCarousel.vue'

const slides = ref([
  {
    image: '/src/assets/images/byte/title.png',
  },
  {
    image: '/src/assets/images/byte/title_1.png',
  },
  {
    image: '/src/assets/images/byte/title_2.png',
  },
  {
    image: '/src/assets/images/byte/title_3.png',
  },
  {
    image: '/src/assets/images/byte/lvl1.png',
  },
  {
    image: '/src/assets/images/byte/cut1.png',
  },
  {
    image: '/src/assets/images/byte/cut2.png',
  },
  {
    image: '/src/assets/images/byte/lvl4.png',
  },
  {
    image: '/src/assets/images/byte/death.png',
  },
  {
    image: '/src/assets/images/byte/cut3.png',
  },
  {
    image: '/src/assets/images/byte/cut4.png',
  },
  {
    image: '/src/assets/images/byte/lvl8.png',
  },
  {
    image: '/src/assets/images/byte/finale.png',
  },
])
</script>

<template>
  <div class="flex flex-col justify-center sm:mx-96 mt-6">
    <img src="@/assets/images/headers/byte-header.png" alt="" />
    <div class="flex justify-between text-black/50">
      <p>Game Design</p>
      <p>Spring 2024</p>
    </div>
  </div>
  <div class="flex flex-col gap-3 sm:mx-96 mt-12">
    <p>
      For this project, I designed and developed a game from the ground up, focusing on both
      creative & technical aspects. The project was structured around multiple milestones, allowing
      for iterative development and refinement over the course of a semester.
    </p>

    <p>
      In addition to building the game, I delivered several presentations including a project pitch,
      midterm update, final presentation. After the class concluded, all students had to present
      their game at Qualcon 2024, where I demoed my game to attendees and voting board, where I had
      to communicate my design choices, development process, and overall vision.
    </p>

    <p>
      BYTE went on to win <span class="font-bold">People's Choice</span> and
      <span class="font-bold"> Game of the Year — Runner Up </span>
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>
      BYTE is a precision-based puzzle-platformer where you try to escape a realm controlled by an
      artificial intelligent being. Every asset in BYTE was hand-drawn by me, with 8 distinct
      levels, a succint story with overarching themes of relfection, perservearance, and embracing
      challenges.
    </p>

    <p>While BYTE isn't public, you can get a glimpse of the game through the images below.</p>
  </div>

  <GenericCarousel :slides="slides" />
</template>
