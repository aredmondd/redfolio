<script setup>
import { ref, onMounted } from 'vue'

let github_url = 'https://api.github.com/users/aredmondd/repos'

let repos = ref([])

async function fetchRepos() {
  try {
    const response = await fetch(github_url)
    repos.value = await response.json()
    console.log(repos)
  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(() => {
  fetchRepos()
})
</script>

<template>
  <ul>
    <li v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
  </ul>
</template>
