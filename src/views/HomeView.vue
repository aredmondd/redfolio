<template>
  <main class="flex flex-col flex-1 items-center justify-center">
    <Transition
      appear
      v-for="(tag, index) in elements"
      :key="index"
      :style="{ '--delay': `${index * 1250}ms` }"
    >
      <span v-html="tag"></span>
    </Transition>
  </main>

  <Transition appear :style="{ '--delay': '7000ms' }">
    <div class="mb-12">
      <p class="text-center">don't know where to go? here's a key:</p>
      <div class="flex justify-center items-center gap-12">
        <p>📜 = resume</p>
        <p>🚧 = projects</p>
        <p class="flex items-center justify-center">
          <img src="/logo_regular.png" alt="" class="w-12" /> = back here :)
        </p>
        <p>📸 = photography</p>
        <p>✍🏼 = notes</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const elements = [
  "<h1 class='text-2xl'>hi, i'm aiden.</h1>",
  '<h1 class="text-2xl mb-8">check out what i\'m up to ↑</h1>',
  '<div class="text-sm flex gap-2"><a href="mailto:aidenredmondd@gmail.com" class="link">aidenredmondd@gmail.com</a>|<a href="https://github.com/aredmondd" target="_blank" class="link">github/aredmondd</a></div>',
]
</script>
