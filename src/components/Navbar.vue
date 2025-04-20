<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-center items-center gap-12">
    <div class="flex gap-6">
      <RouterLink to="/officially">resume</RouterLink>
      <RouterLink to="/projects">projects</RouterLink>
    </div>
    <RouterLink to="/">
      <img src="/logo_regular.png" alt="" class="w-24" />
    </RouterLink>
    <div class="flex gap-6">
      <RouterLink to="/photography">photography</RouterLink>
      <RouterLink to="/writing">writing</RouterLink>
    </div>
  </nav>
</template>
