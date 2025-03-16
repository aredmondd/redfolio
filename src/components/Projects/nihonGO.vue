<script setup>
import { ref } from 'vue'
import GenericCarousel from '../GenericCarousel.vue'

const slides = ref([
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153256/nihongo-home_fgw9um.png',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153256/nihongo-about_yw9e5w.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153256/nihongo-register_sgxrje.png',
  },
  {
    image:
      'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153256/nihongo-messaging_lc3xnt.png',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153256/nihongo-forum_jhixmg.png',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1742153257/nihongo-study_phryfh.png',
  },
])
</script>

<template>
  <div class="flex flex-col justify-center sm:mx-96 mt-6">
    <img src="/headers/nihongo.png" alt="" />
    <div class="flex justify-between text-black/50 mx-2">
      <p>Software Engineering</p>
      <p>Fall 2024</p>
    </div>
  </div>

  <div class="flex flex-col gap-3 sm:mx-96 mt-12">
    <p>
      nihonGO is a Django and Python-based web application designed to facilitate communication
      between English and Japanese speakers. It provides a seamless language-learning experience by
      integrating a messaging system, a public forum for cultural exchange, and a flashcard tool for
      personalized vocabulary practice. The platform fosters meaningful cross-cultural interactions,
      making language learning more engaging and effective.
    </p>

    <p>
      Developed as a collaborative Software Engineering project, nihonGO was built with the goal of
      fostering real-time language exchange and cultural understanding. Unlike traditional
      language-learning apps, nihonGO encourages direct communication and personalized learning
      through interactive tools and community engagement.
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>
      - <span class="font-semibold text-black/90">Created and implemented UI/UX designs</span>,
      ensuring <span class="font-semibold text-black/90">clean, maintainable code</span> and a
      <span class="font-semibold text-black/90">visually appealing, user-friendly experience</span>
      for seamless interaction. <br />
      - <span class="font-semibold text-black/90">Led a team of four</span>, coordinating
      <span class="font-semibold text-black/90">weekly sprint meetings</span> and applying
      <span class="font-semibold text-black/90">agile methodologies</span> to ensure efficient
      development and collaboration. <br />
      - <span class="font-semibold text-black/90">Integrated</span> key features such as
      <span class="font-semibold text-black/90"
        >messaging, customizable flashcards, and a forum</span
      >
      for language-related discussions and learning.
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>While nihonGO isn't public (yet?), you can check out the UI through the images below.</p>
  </div>
  <GenericCarousel :slides="slides" />
</template>
