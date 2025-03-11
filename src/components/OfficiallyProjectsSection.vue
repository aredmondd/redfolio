<template>
  <!-- PROJECTS SECTION -->
  <h2 class="text-center text-5xl font-bold">PROJECTS</h2>
  <p class="text-black/50 text-sm text-center mt-3 mb-12">(click on one to learn more)</p>
  <div class="grid grid-cols-1 place-items-center gap-12 mx-24 mb-12 sm:grid-cols-3 sm:gap-24">
    <RouterLink to="/project/Reservoir" class="project">
      <div class="flex flex-col h-full">
        <div
          class="flex items-center justify-center h-full rounded-lg hover:bg-[#0A1826] transition-all duration-500 ease-in-out"
        >
          <img src="@/assets/images/reservoir-png.png" />
        </div>
        <p class="text-lg text-center mt-6">A social platform for media tracking</p>
        <p class="text-md text-black/50 text-sm text-center mt-1">Senior Project - Fall 2024</p>
      </div>
    </RouterLink>
    <RouterLink to="/project/nihonGO" class="project">
      <div class="flex flex-col h-full">
        <div
          class="flex items-center justify-center h-full rounded-lg hover:bg-[#f1cd9d] transition-all duration-500 ease-in-out"
        >
          <img src="@/assets/images/nihongo-png.png" />
        </div>
        <p class="text-center mt-6">A language-learning app focused on Japanese</p>
        <p class="text-black/50 text-sm text-center mt-1">Software Engineering - Fall 2024</p>
      </div>
    </RouterLink>
    <RouterLink to="/project/JASIAH" class="project">
      <div class="flex flex-col h-full">
        <div
          class="flex items-center justify-center h-full rounded-lg hover:bg-[#ffffff] transition-all duration-500 ease-in-out hover:invert"
        >
          <img src="@/assets/images/jasiah-png.png" />
        </div>
        <p class="text-center mt-6">An automated inventory management script</p>
        <p class="text-black/50 text-sm text-center mt-1">Alter Ego Running - Summer 2024</p>
      </div>
    </RouterLink>
  </div>
  <div class="grid grid-cols-1 place-items-center gap-12 mx-24 mb-24 sm:grid-cols-3 sm:gap-24">
    <RouterLink to="/project/running-sphere" class="project">
      <div class="flex flex-col h-full">
        <div
          class="flex items-center justify-center h-full rounded-lg hover:bg-[#eeeeee] transition-all duration-500 ease-in-out"
        >
          <img src="@/assets/images/running-sphere.png" />
        </div>
        <p class="text-center mt-6">A magazine designed & printed</p>
        <p class="text-black/50 text-sm text-center mt-1">Typography & Layout - Spring 2024</p>
      </div>
    </RouterLink>
    <RouterLink to="/project/byte" class="project">
      <div class="flex flex-col h-full">
        <div
          class="flex items-center justify-center h-full rounded-lg hover:bg-[#000000] transition-all duration-500 ease-in-out"
        >
          <img src="@/assets/images/byte.png" />
        </div>
        <p class="text-lg text-center mt-6">An award-winning game</p>
        <p class="text-md text-black/50 text-sm text-center mt-1">Game Design - Spring 2024</p>
      </div>
    </RouterLink>
    <RouterLink to="/project/nike-dragonfly" class="project">
      <div class="flex flex-col h-full">
        <div
          class="flex items-center justify-center h-full rounded-lg hover:bg-[#caf840] transition-all duration-500 ease-in-out"
        >
          <img src="@/assets/images/dragonfly.png" />
        </div>
        <p class="text-center mt-6">A shoe ad for old shoes</p>
        <p class="text-black/50 text-sm text-center mt-1">Typography & Layout - Spring 2024</p>
      </div>
    </RouterLink>
  </div>
</template>
