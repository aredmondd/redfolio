<script setup>
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <Transition appear>
    <div>
      <!-- PROJECTS SECTION -->
      <h2 class="mt-12 text-center text-6xl font-bold">PROJECTS</h2>
      <p class="text-black/50 text-sm text-center mt-1 mb-20">(click on one to learn more)</p>
      <div
        class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-14 sm:grid-cols-3 sm:gap-12"
      >
        <ProjectCard name="reservoir" hover="#0A1826" />
        <ProjectCard name="nihongo" hover="#f1cd9d" />
        <ProjectCard name="jasiah" hover="#ffffff" invert />
      </div>
      <div
        class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-14 sm:grid-cols-3 sm:gap-12"
      >
        <a href="https://github.com/aredmondd/stridespace" target="_blank">
          <div class="flex flex-col h-full">
            <div
              class="flex items-center justify-center h-full rounded-lg hover:bg-[#000000] transition-all duration-500 ease-in-out invert hover:invert-0"
            >
              <img
                src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742152308/STRIDESPACE_ywzt06.png"
              />
            </div>
          </div>
        </a>
        <a href="https://github.com/aredmondd/redfolio-v2" target="_blank">
          <div class="flex flex-col h-full">
            <div
              class="flex items-center justify-center h-full rounded-lg hover:bg-green transition-all duration-500 ease-in-out"
            >
              <img
                src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742152307/PORTFOLIO_aevsxs.png"
              />
            </div>
          </div>
        </a>
        <a href="https://github.com/aredmondd/perfect-kana" target="_blank">
          <div class="flex flex-col h-full">
            <div
              class="flex items-center justify-center h-full rounded-lg hover:bg-[#e3f2fd] transition-all duration-500 ease-in-out"
            >
              <img
                src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742152307/PERFECT-KANA_mh11o5.png"
              />
            </div>
          </div>
        </a>
      </div>
      <div
        class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-14 sm:grid-cols-3 sm:gap-12"
      >
        <ProjectCard name="running-sphere" hover="#eeeeee" />
        <ProjectCard name="byte" hover="#000000" />
        <ProjectCard name="nike-dragonfly" hover="#caf840" />
      </div>
    </div>
  </Transition>
</template>
