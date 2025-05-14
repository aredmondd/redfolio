<script setup>
import ContentScroller from '@/components/ContentScroller.vue'
import Vault from '@/components/Vault.vue'
import Tools from '@/components/Tools.vue'
import BlogList from '@/components/BlogList.vue'
import PhotographyGrid from '@/components/PhotographyGrid.vue'
import YoutubeVideos from '@/components/YoutubeVideos.vue'
</script>

<template>
  <div class="flex flex-col flex-1">
    <!-- photograhpy -->
    <h2 class="text-2xl sm:text-4xl font-bold mt-12 mb-6 text-center">photography 📸</h2>
    <h3 class="mb-12 text-center text-sm">
      when i'm not working or running - i'm taking photos. <br />
      here are my favorites, but can you check out more
      <RouterLink to="/photography" class="link">here</RouterLink>
    </h3>
    <PhotographyGrid />

    <!-- what i'm loving section -->
    <h2 class="text-2xl sm:text-4xl font-bold mt-12 mb-3 text-center">what i'm loving 💚</h2>
    <h3 class="mb-12 text-center text-sm">
      a huge part of my inspiration comes from media. <br />click on a card to learn more.
    </h3>
    <ContentScroller class="mb-12" />

    <span id="writing"></span>
    <!-- writing -->
    <h2 class="text-2xl sm:text-4xl font-bold mt-24 mb-3 text-center">writing 👨🏽‍💻</h2>
    <h3 class="mb-6 text-center text-sm">keeping track of the things i'm up to & what i learn</h3>
    <BlogList />

    <!-- raindrop section -->
    <h2 class="text-2xl sm:text-4xl font-bold mt-12 mb-3 text-center">the vault 🏛️</h2>
    <h3 class="mb-12 text-center text-sm">
      this section is <span class="line-through">stolen from</span> inspired by
      <a href="https://www.iamrob.in/bookmarks" target="_blank" class="link">iamrobin's bookmarks</a
      >. <br />
      here are some of my favorite websites, tools, & more.
    </h3>
    <Vault class="mb-12" />

    <!-- tools i'm using -->
    <!-- <h2 class="text-2xl sm:text-4xl font-bold mt-24 mb-3 text-center">tools i use 🧰</h2>
    <h3 class="mb-12 text-center text-sm">here's the tools & technologies i use daily</h3>
    <Tools /> -->

    <!-- youtube videos -->
    <YoutubeVideos />
  </div>
</template>
