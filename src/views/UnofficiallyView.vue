<script setup>
import ContentScroller from '@/components/ContentScroller.vue'
import Vault from '@/components/Vault.vue'
import Projects from '@/components/Projects.vue'
import Tools from '@/components/Tools.vue'
import BlogCollection from '@/components/BlogCollection.vue'
</script>

<template>
  <div class="flex flex-col flex-1">
    <!-- what i'm loving section -->
    <h2 class="text-4xl font-bold mt-12 mb-3">what i'm loving 💚</h2>
    <h3 class="mb-6">
      a huge part of my inspiration comes from media. <br />click on a card to learn more.
    </h3>
    <ContentScroller class="mb-12" />

    <!-- raindrop section -->
    <h2 class="text-4xl font-bold mt-12 mb-3">the vault 🏛️</h2>
    <h3 class="mb-6">
      this section is <span class="line-through">stolen from</span> inspired by
      <a
        href="https://www.iamrob.in/bookmarks"
        target="_blank"
        class="underline underline-offset-4 hover:text-pink transition-all duration-300 ease-in-out"
        >iamrobin's bookmarks &#x2197;</a
      >. <br />
      here are some of my favorite websites, tools, & more.
    </h3>
    <Vault class="mb-12" />

    <!-- github projects section -->
    <h2 class="text-4xl font-bold mt-12 mb-3">featured projects 🚧</h2>
    <h3 class="mb-6">
      listed below are some project i've been working on recently. <br />
      click on one to see the github repo.
    </h3>
    <Projects />

    <!-- tools i'm using -->
    <h2 class="text-4xl font-bold mt-12 mb-3">tools i use 🧰</h2>
    <h3 class="mb-6">here's the tools & technologies i use daily</h3>
    <Tools />

    <!-- writing -->
    <h2 class="text-4xl font-bold mt-12 mb-3">writing 👨🏽‍💻</h2>
    <h3 class="mb-6">working on communicating my ideas better...</h3>
    <BlogCollection />
  </div>
</template>
