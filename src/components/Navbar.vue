<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-center items-center gap-8 sm:gap-20">
    <div class="flex gap-8 sm:gap-12 text-3xl">
      <RouterLink to="/resume">📜</RouterLink>
      <RouterLink to="/projects">🚧</RouterLink>
    </div>
    <RouterLink to="/">
      <img src="/logo_regular.png" alt="" class="w-24" />
    </RouterLink>
    <div class="flex gap-8 sm:gap-12 text-3xl">
      <RouterLink to="/photography">📸</RouterLink>
      <RouterLink to="/notes">✍🏼</RouterLink>
    </div>
  </nav>
</template>
