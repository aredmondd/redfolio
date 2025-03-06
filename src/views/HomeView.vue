<template>
  <main class="flex flex-col flex-1 items-center justify-center">
    <Transition
      appear
      v-for="(text, index) in elements"
      :key="index"
      :style="{ '--delay': `${index * 1250}ms` }"
    >
      <span v-html="text"></span>
    </Transition>
  </main>
</template>

<script setup>
const elements = [
  "<h1 class='text-2xl'>hi, i'm aiden.</h1>",
  '<h1 class="text-2xl">this website is split in half.</h1>',
  '<h1 class="text-2xl mb-8">check out the navbar ↑</h1>',
  '<div class="flex gap-3"><a href="mailto:aidenredmondd@gmail.com" class="underline underline-offset-[6px] hover:text-pink">aidenredmondd@gmail.com</a>|<a href="https://github.com/aredmondd" target="_blank" class="underline underline-offset-[6px] hover:text-pink">github/aredmondd</a></div>',
]
</script>

<style scoped>
.v-enter-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  transition-delay: var(--delay, 0ms);
}

.v-enter-from {
  opacity: 0;
  transform: translateY(48px);
}
</style>
