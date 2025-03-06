<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const blogs = ref([])

async function getBlogs() {
  const { data, error } = await supabase.from('blogs').select('*')

  if (error) {
    console.error('Error fetching blogs:', error.message)
  } else {
    blogs.value = data
  }
}

onMounted(() => {
  getBlogs()
})
</script>

<template>
  <ul class="bg-pink">
    <h1 v-for="blog in blogs" :key="blog.id">{{ blog.slug }}</h1>
  </ul>
</template>
