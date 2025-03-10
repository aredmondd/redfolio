<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const blogs = ref([])

async function getBlogs() {
  const { data, error } = await supabase.from('blog_posts').select('*')

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
  <div class="flex">
    <RouterLink
      v-for="blog in blogs"
      :key="blog.id"
      href=""
      :to="'/writing/' + blog.slug"
      class="border border-green rounded-md p-2 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.created_at.substring(0, blog.created_at.indexOf('T')) }}</p>
    </RouterLink>
  </div>
</template>
