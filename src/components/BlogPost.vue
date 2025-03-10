<script setup>
import { supabase } from '../lib/supabaseClient'
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
  slug: String,
})

const blogData = ref(null)

// Fetch the blog post
async function getBlogPost() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', props.slug)
    .single() // Ensures we get a single object instead of an array

  if (error) {
    console.error('Error fetching blog:', error.message)
  } else {
    blogData.value = data
  }
}

onMounted(getBlogPost)

// Compute formatted date
const formattedDate = computed(() => blogData.value?.created_at?.slice(0, 10) || '')
const timeToRead = computed(() => {
  const wordCount = props.content ? props.content.split(/\s+/).length : 0
  return `${Math.max(1, Math.ceil(wordCount / 225))} min read`
})
</script>

<template>
  <div class="flex flex-col mx-80 mt-6">
    <h1 class="text-5xl font-semibold">{{ blogData?.title }}</h1>
    <div class="flex gap-2 mt-2 font-mono font-light">
      <h3>{{ formattedDate }}</h3>
      <h3>|</h3>
      <h3>{{ timeToRead }}</h3>
    </div>
    <div v-html="blogData?.content" class="mt-6 prose"></div>
  </div>
</template>
