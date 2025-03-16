<script setup>
import flipbook from 'flipbook-vue'
</script>

<template>
  <div class="flex flex-col justify-center sm:mx-96 mt-6">
    <img src="/headers/running-sphere.png" alt="" />
    <div class="flex justify-between text-black/50 mt-3">
      <p>Typography & Layout</p>
      <p>Spring 2024</p>
    </div>
  </div>
  <div class="flex flex-col gap-3 sm:mx-96 mt-12">
    <p>
      This project focused on designing a 16-page magazine, emphasizing layout, typography, and
      imagery. Each student was tasked with:
    </p>

    <div>
      <span class="font-mono font-light">1.</span> Creating a unique magazine concept and name
      <br />
      <span class="font-mono font-light">2.</span> Designing 3 distinct covers and presenting them,
      eventually picking the best one <br />
      <span class="font-mono font-light">3.</span> Creating a table of contents (1 spread) with the
      main articles <br />
      <span class="font-mono font-light">4.</span> Laying out multi-page spreads for the main
      articles
      <br />
      <span class="font-mono font-light">5.</span> Designing an ad for the back of the magazine
    </div>

    <p>
      The goal was to develop a strong design hierarchy, utilize a grid system for layout
      consistency, and ensure clear legibility with effective typography. The final designs were
      printed on paper and presented to the class.
    </p>

    <hr class="border-b-1 border-black/25 my-3" />

    <p>
      With the recent release of the Nike Alphafly 3, I saw this assignment as the perfect
      opportunity to create a magazine centered on the world of running. My goal was to create a
      sleek, fast, and visually striking experience that would capture the energy and innovation of
      modern racing shoes.
    </p>
    <p>
      To achieve this, I used a bold, vibrant orange as my primary color—directly pulled from the
      Alphafly 3—to evoke speed, intensity, and excitement. I also incorporated a futuristic,
      space-themed aesthetic, drawing parallels between cutting-edge shoe technology and pushing
      human performance beyond limits. Every design choice from typography to the layout was made to
      reflect the forward-thinking of elite running, and specifically, the Nike Alphafly 3.
    </p>
  </div>

  <div class="hidden sm:flex justify-center items-center my-12">
    <flipbook
      class="flipbook"
      :pages="[
        null,
        '/running-sphere/pg1.jpg',
        '/running-sphere/pg2.png',
        '/running-sphere/pg3.png',
        '/running-sphere/pg4.jpg',
        '/running-sphere/pg5.jpg',
        '/running-sphere/pg6.png',
        '/running-sphere/pg7.png',
        '/running-sphere/pg8.jpg',
        '/running-sphere/pg9.jpg',
        '/running-sphere/pg10.png',
        '/running-sphere/pg11.png',
        '/running-sphere/pg12.png',
        '/running-sphere/pg13.png',
        '/running-sphere/pg14.png',
        '/running-sphere/pg15.png',
        '/running-sphere/pg16.jpg',
      ]"
    ></flipbook>
  </div>

  <div class="block sm:hidden my-6 text-black/50">
    please check out the desktop version to flip through the magazine :)
  </div>
</template>

<style>
.flipbook {
  width: 90vw;
  height: 90vh;
}
</style>
