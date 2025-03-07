<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const blogs = ref([])

async function getBlogs() {
  const { data, error } = await supabase.from('blogs').select('*').filter('public', 'is', true)

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
  <ul class="">
    <li v-for="blog in blogs" :key="blog.id">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.content }}</p>
      <p>{{ blog.created_at.substring(0, blog.created_at.indexOf('T')) }}</p>
    </li>
  </ul>
</template>
