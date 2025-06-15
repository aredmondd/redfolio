<script setup>
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <Transition appear>
    <div class="space-y-48 sm:mt-12 sm:mx-12">
      <div class="flex flex-col gap-12">
        <div class="mt-12 flex gap-12 justify-between">
          <h2 class="text-left text-6xl font-bold">FREELANCE WORK</h2>
          <h3 class="text-right text-xs sm:text-base text-black/50">
            recently, i've been working as a freelance web developer. <br />
            click on a project to learn more.
          </h3>
        </div>
        <div class="flex gap-12">
          <ProjectCard name="gp" />
          <ProjectCard name="ar" />
          <ProjectCard name="eclipse" />
        </div>
      </div>

      <div class="flex flex-col gap-12">
        <div class="flex justify-between">
          <h2 class="text-left text-6xl font-bold">CAPSTONES</h2>
          <h3 class="text-xs text-right sm:text-base text-black/50">
            over the last few years, i've worked on three major development projects. <br />
            click on one to learn more.
          </h3>
        </div>
        <div class="flex gap-12">
          <ProjectCard name="reservoir" hover="#0A1826" />
          <ProjectCard name="nihongo" hover="#f1cd9d" />
          <ProjectCard name="jasiah" hover="#ffffff" invert />
        </div>
      </div>

      <div class="flex flex-col gap-12 mb-24">
        <div class="flex justify-between">
          <h2 class="text-left text-6xl font-bold">GRAPHIC DESIGN</h2>
          <h3 class="text-xs text-right sm:text-base text-black/50">
            during my time at florida southern, i worked on three major design projects. <br />
            click on one to learn more.
          </h3>
        </div>
        <div class="flex gap-12">
          <ProjectCard name="nike-dragonfly" hover="#caf840" />
          <ProjectCard name="byte" hover="#000000" />
          <ProjectCard name="running-sphere" hover="#eeeeee" />
        </div>
      </div>
    </div>
  </Transition>
</template>
