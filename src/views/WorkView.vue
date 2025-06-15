<script setup>
import NewProjectCard from '../components/NewProjectCard.vue'
</script>

<template>
  <Transition appear>
    <div class="space-y-48 sm:mt-12 sm:mx-4">
      <!-- freelance -->
      <div class="flex flex-col gap-12">
        <div class="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-between">
          <h2 class="text-left text-5xl sm:text-6xl font-bold">WEB PROJECTS</h2>
          <h3 class="text-right text-xs sm:text-base text-black/50">
            here's some of my recent web development projects. <br />
            click on a project to see more.
          </h3>
        </div>
        <div class="flex flex-col sm:flex-row gap-8">
          <NewProjectCard
            bg="grey"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1750012052/Screenshot_2025-06-15_at_10.41.41_AM_lbwyhi.png"
            border="blue"
            link="https://www.garveyperryinc.com/"
            text="Garvey Perry Inc. hired me for a complete website refresh, updating its look, functionality, and user experience"
          />
          <NewProjectCard
            bg="black"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1750012052/Screenshot_2025-06-15_at_10.41.50_AM_yv6zdx.png"
            border="red"
            link="https://eclipse-endurance.com/"
            text="I co-founded Eclipse Endurance and was responsible for its website's design and development."
          />
          <NewProjectCard
            bg="green"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1750012052/Screenshot_2025-06-15_at_10.48.56_AM_uemlob.png"
            border="white"
            link="/work"
            text="what you're looking at :)"
          />
        </div>
      </div>

      <!-- capstones -->
      <div class="flex flex-col gap-12">
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-between">
          <h2 class="text-left text-5xl sm:text-6xl font-bold">CAPSTONES</h2>
          <h3 class="text-xs text-right sm:text-base text-black/50">
            over the last few years, i've worked on three major development projects. <br />
            click on one to learn more.
          </h3>
        </div>
        <div class="flex flex-col sm:flex-row gap-8">
          <NewProjectCard
            bg="blue"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1742153378/reservoir-home_ayshfy.png"
            border="grey"
            link="/project/reservoir"
          />
          <NewProjectCard
            bg="peach"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1742153256/nihongo-home_fgw9um.png"
            border="red"
            link="/project/nihongo"
          />
          <NewProjectCard
            bg="white"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1750012052/jasiah_wx7itd.png"
            border="grey"
            link="/project/jasiah"
          />
        </div>
      </div>

      <!-- design work -->
      <div class="flex flex-col gap-12 mb-24">
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-between">
          <h2 class="text-left text-5xl sm:text-6xl font-bold">GRAPHIC DESIGN</h2>
          <h3 class="text-xs text-right sm:text-base text-black/50">
            during my time at florida southern, i worked on three major design projects. <br />
            click on one to learn more.
          </h3>
        </div>
        <div class="flex flex-col sm:flex-row gap-8">
          <NewProjectCard
            bg="electricblue"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1750015384/test-2_r6jdad.png"
            border="white"
            link="/project/nike-dragonfly"
          />
          <NewProjectCard
            bg="offwhite"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1750015384/test_b9venf.png"
            border="white"
            link="/project/running-sphere"
          />
          <NewProjectCard
            bg="black"
            img="https://res.cloudinary.com/dkznczrj0/image/upload/v1742152122/lvl8_pfcqvn.png"
            border="red"
            link="/project/byte"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>
