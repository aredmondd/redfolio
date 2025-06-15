<script setup>
import { ref } from 'vue'
import GenericCarousel from '../GenericCarousel.vue'

const slides = ref([
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153378/reservoir-friends_k6iil7.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153378/reservoir-home_ayshfy.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153378/reservoir-my-reservoir_kngodr.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153379/reservoir-profile_zqvfdd.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153379/reservoir-search_kq8jw7.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153379/reservoir-sign-up_xn5ia5.png',
  },
])
</script>

<template>
  <Transition appear>
    <div>
      <div class="flex flex-col justify-center sm:mx-96 mt-6">
        <img
          src="/headers/reservoir-header.png"
          alt=""
          class="duration-200 opacity-0 ease-in-out"
          @load="$event.target.classList.add('opacity-100')"
        />
        <div class="flex justify-between text-black/50 mx-2">
          <p>Senior Project</p>
          <p>Fall 2024</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 sm:mx-96 mt-12">
        <p>
          Reservoir is a web application designed to help users organize and track their media,
          connect with friends, share recommendations, and receive personalized AI-driven
          suggestions. Unlike existing platforms such as MyAnimeList, IMDb, and Letterboxd,
          Reservoir provides a more comprehensive, user-friendly experience tailored to individual
          preferences.
        </p>
        <p>
          Developed as part of my Senior Project (CSC4999) at Florida Southern College, Reservoir
          was built over several hundred hours alongside teammates Brandon Wilson and Axel Beaver.
          Throughout development, I took on the role of team leader, guiding the project from
          concept to completion while ensuring a seamless user experience and effective
          implementation of key features.
        </p>
        <hr class="border-b-1 border-black/25 my-3" />
        <p>
          - <span class="font-semibold text-black/90">Led</span> weekly sprint meetings to drive
          <span class="font-semibold text-black/90">agile development</span>, ensuring
          <span class="font-semibold text-black/90">timely feature implementation</span> and meeting
          <span class="font-semibold text-black/90">project milestones</span> <br />
          - <span class="font-semibold text-black/90">Designed and implemented the UI/UX</span>,
          delivering <span class="font-semibold text-black/90">clean, readable code</span> for
          teammates and a
          <span class="font-semibold text-black/90">
            visually engaging, intuitive user experience </span
          >.
          <br />
          - <span class="font-semibold text-black/90">Developed</span> frontend features for
          <span class="font-semibold text-black/90">
            content management, user interactions, and personalized content organization, enhancing
            platform engagement.
          </span>
        </p>
        <hr class="border-b-1 border-black/25 my-3" />
        <p>
          While Reservoir isn't public (yet?), you can check out the UI through the images below.
        </p>
      </div>
      <GenericCarousel :slides="slides" />
    </div>
  </Transition>
</template>
