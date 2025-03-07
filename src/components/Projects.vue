<script setup>
import { ref, onMounted } from 'vue'

let github_url = 'https://api.github.com/users/aredmondd/repos'

let repos = ref([])
let bestthree = ref([])

async function fetchRepos() {
  try {
    const response = await fetch(github_url)
    repos.value = await response.json()
    repos.value.forEach((repo) => {
      if (repo.name == 'perfect-kana' || repo.name == 'redfolio-v2' || repo.name == 'stridespace') {
        console.log(repo)
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
  <div class="grid grid-cols-3 mb-12 gap-6">
    <div
      v-for="repo in bestthree"
      :key="repo.id"
      class="border-2 rounded-lg py-12 flex flex-col items-center justify-center hover:border-pink hover:text-pink"
    >
      <a :href="repo.html_url" target="_blank" class="text-xl">{{ repo.name }}</a>
      <p v-if="repo.description != null" class="text-xs">{{ repo.description }}</p>
    </div>
  </div>
</template>
