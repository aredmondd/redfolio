<script setup>
import { ref, onMounted } from 'vue'

let githubURL = 'https://api.github.com/users/aredmondd/repos'

const repos = ref([])
const bestthree = ref([])
const images = [
  '/src/assets/PERFECT-KANA.png',
  '/src/assets/PORTFOLIO.png',
  '/src/assets/STRIDESPACE.png',
]

async function fetchRepos() {
  try {
    const response = await fetch(githubURL)
    repos.value = await response.json()
    repos.value.forEach((repo) => {
      if (repo.name == 'perfect-kana' || repo.name == 'redfolio-v2' || repo.name == 'stridespace') {
        bestthree.value.push(repo)
      }
    })
  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(() => {
  fetchRepos()
})
</script>

<template>
  <div class="grid grid-cols-3 mb-12 gap-12">
    <div
      v-for="(repo, index) in bestthree"
      :key="repo.id"
      class="py-12 flex flex-col items-center justify-center"
    >
      <a :href="repo.html_url" target="_blank" class="text-center">
        <img :src="images[index]" alt="" class="rounded-lg" />
        <p v-if="repo.description != null" class="text-sm mt-2">{{ repo.description }}</p>
      </a>
    </div>
  </div>
</template>
