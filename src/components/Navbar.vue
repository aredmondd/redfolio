<script setup>
import { RouterLink } from 'vue-router'
import NavLink from './NavLink.vue'
</script>

<template>
  <nav class="flex justify-between items-center sm:gap-20">
    <RouterLink to="/">
      <img src="/logo_regular.png" alt="" class="w-24" />
    </RouterLink>
    <div class="flex gap-6">
      <NavLink route="about" />
      <NavLink route="work" />
      <NavLink route="now" />
      <NavLink route="photography" />
    </div>
  </nav>
</template>
