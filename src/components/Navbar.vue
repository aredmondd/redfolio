<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-center items-center gap-20">
    <div class="flex gap-12 text-3xl">
      <RouterLink to="/resume">📜</RouterLink>
      <RouterLink to="/contact">☎️</RouterLink>
      <RouterLink to="/projects">🚧</RouterLink>
    </div>
    <RouterLink to="/">
      <img src="/logo_regular.png" alt="" class="w-24" />
    </RouterLink>
    <div class="flex gap-12 text-3xl">
      <RouterLink to="/photography">📸</RouterLink>
      <RouterLink to="/writing">✍🏼</RouterLink>
      <RouterLink to="/more">‼️</RouterLink>
    </div>
  </nav>
</template>
