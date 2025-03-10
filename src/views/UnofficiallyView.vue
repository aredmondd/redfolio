<script setup>
import ContentScroller from '@/components/ContentScroller.vue'
import Vault from '@/components/Vault.vue'
import Projects from '@/components/RecentProjects.vue'
import Tools from '@/components/Tools.vue'
import BlogCollection from '@/components/BlogCollection.vue'
import PhotographyGrid from '@/components/PhotographyGrid.vue'
import YTVideos from '@/components/YTVideos.vue'
</script>

<template>
  <div class="flex flex-col flex-1">
    <!-- photograhpy -->
    <h2 class="text-3xl font-bold mt-12 mb-6 text-center">photography 📸</h2>
    <h3 class="mb-12 text-center">
      when i'm not working or running - i'm taking photos. <br />
      here are my favorites, but can you check out more
      <RouterLink
        to="/photography"
        class="underline underline-offset-2 hover:underline-offset-4 hover:cursor-pointer transition-all duration-200 ease-in-out"
        >here</RouterLink
      >
    </h3>
    <PhotographyGrid />

    <!-- what i'm loving section -->
    <h2 class="text-4xl font-bold mt-12 mb-3 text-center">what i'm loving 💚</h2>
    <h3 class="mb-12 text-center">
      a huge part of my inspiration comes from media. <br />click on a card to learn more.
    </h3>
    <ContentScroller class="mb-12" />

    <!-- raindrop section -->
    <h2 class="text-4xl font-bold mt-12 mb-3 text-center">the vault 🏛️</h2>
    <h3 class="mb-12 text-center">
      this section is <span class="line-through">stolen from</span> inspired by
      <a
        href="https://www.iamrob.in/bookmarks"
        target="_blank"
        class="underline underline-offset-2 hover:underline-offset-4 hover:cursor-pointer transition-all duration-200 ease-in-out"
        >iamrobin's bookmarks</a
      >. <br />
      here are some of my favorite websites, tools, & more.
    </h3>
    <Vault class="mb-12" />

    <!-- github projects section -->
    <h2 class="text-4xl font-bold mt-12 mb-3 text-center">featured projects 🚧</h2>
    <h3 class="mb-6 text-center">
      listed below are some project i've been working on recently. <br />
      click on one to see the github repo.
    </h3>
    <Projects />

    <!-- tools i'm using -->
    <h2 class="text-4xl font-bold mt-12 mb-3 text-center">tools i use 🧰</h2>
    <h3 class="mb-12 text-center">here's the tools & technologies i use daily</h3>
    <Tools />

    <!-- writing -->
    <h2 class="text-4xl font-bold mt-12 mb-3 text-center">writing 👨🏽‍💻</h2>
    <h3 class="mb-6 text-center">working on communicating my ideas better...</h3>
    <BlogCollection />

    <!-- youtube videos -->
    <YTVideos />

    <!-- <h3 class="mb-6 text-center">
      if you're looking for top 10... here they are. <br />
      (in no particular order)
    </h3>
    <Top5YTVideos /> -->
  </div>
</template>
