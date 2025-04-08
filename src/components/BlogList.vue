<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const blogs = ref([])
const loading = ref(true)
const empty = ref(false)

async function getBlogs() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching blogs:', error.message)
  } else {
    blogs.value = data
    loading.value = false
    if (blogs.value.length == 0) {
      empty.value = true
    }
  }
}

onMounted(() => {
  getBlogs()
})
</script>

<template>
  <div v-if="!loading && !empty" class="flex gap-3">
    <RouterLink
      v-for="blog in blogs"
      :key="blog.id"
      href=""
      :to="{
        name: 'blogPost',
        params: {
          slug: blog.slug,
        },
      }"
      class="border border-green rounded-lg p-2 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1 class="font-extrabold">{{ blog.title }}</h1>
      <p>{{ blog.created_at.substring(0, blog.created_at.indexOf('T')) }}</p>
    </RouterLink>
  </div>
  <div v-else class="text-center text-black/50">so empty...</div>
</template>
