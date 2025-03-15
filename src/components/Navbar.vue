<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-between items-center">
    <RouterLink to="/officially" class="hover:text-pink text-sm"
      >aiden <br class="block sm:hidden" />(officially)</RouterLink
    >

    <RouterLink to="/">
      <img src="@/assets/images/logo_regular.png" alt="" class="w-20" />
    </RouterLink>

    <RouterLink to="/unofficially" class="hover:text-pink text-right text-sm">
      aiden <br class="block sm:hidden" />(unofficially)
    </RouterLink>
  </nav>
</template>
