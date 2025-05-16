<script setup>
import NoteCollection from '@/components/NoteCollection.vue'
import PinnedNotes from '@/components/PinnedNotes.vue'
</script>

<template>
  <Transition appear>
    <div class="flex flex-col sm:mx-24 mt-12 sm:mt-24">
      <div class="flex justify-between">
        <h2 class="text-xs sm:text-base mr-12 sm:mr-0 text-black/50">
          this is a collection of notes. you can check out what i'm up to, thinking about, or loving
          here. <br />
          they are dynamically pulled from my obsidian vault :)
        </h2>
        <h2 class="text-right text-4xl sm:text-5xl font-bold">NOTES</h2>
      </div>

      <PinnedNotes />

      <div class="flex items-end justify-between mb-4">
        <h2 class="mt-24 text-left text-3xl sm:text-4xl font-bold">DEVLOG</h2>
        <!-- <p class="text-black/50">ascending ↑</p> -->
      </div>
      <NoteCollection collection="devlog" />
    </div>
  </Transition>
</template>
