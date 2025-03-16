<script setup>
import OfficiallyProjectItem from './OfficiallyProjectItem.vue'
</script>

<template>
  <!-- PROJECTS SECTION -->
  <h2 class="text-center text-5xl font-bold">PROJECTS</h2>
  <p class="text-black/50 text-sm text-center mt-3 mb-12">(click on one to learn more)</p>
  <div class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-12 sm:grid-cols-3 sm:gap-24">
    <OfficiallyProjectItem
      name="reservoir"
      description="A social platform for media tracking"
      time="Senior Project - Fall 2024"
      hover="#0A1826"
    />

    <OfficiallyProjectItem
      name="nihongo"
      image="reservoir.png"
      description="A language-learning app focused on Japanese"
      time="Software Engineering - Fall 2024"
      hover="#f1cd9d"
    />

    <OfficiallyProjectItem
      name="jasiah"
      image="reservoir.png"
      description="An automated inventory management script"
      time="Alter Ego Running - Summer 2024"
      hover="#ffffff"
      invert
    />
  </div>
  <div class="grid grid-cols-1 place-items-center gap-12 sm:mx-24 mb-24 sm:grid-cols-3 sm:gap-24">
    <OfficiallyProjectItem
      name="running-sphere"
      description="A magazine I designed & printed"
      time="Typography & Layout - Spring 2024"
      hover="#eeeeee"
    />

    <OfficiallyProjectItem
      name="byte"
      description="An award-winning game"
      time="Game Design - Spring 2024"
      hover="#000000"
    />

    <OfficiallyProjectItem
      name="nike-dragonfly"
      description="A shoe ad for old shoes"
      time="Typography & Layout - Spring 2024"
      hover="#caf840"
    />
  </div>
</template>
