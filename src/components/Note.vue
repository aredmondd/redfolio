<script setup>
import { supabase } from '../lib/supabaseClient'
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const noteData = ref(null)
const ready = ref(false)

async function getNote() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('slug', props.slug)
    .maybeSingle()

  if (error) {
    console.error('Error fetching note:', error.message)
  } else {
    noteData.value = data
    ready.value = true
  }
}

onMounted(getNote)

const formattedDate = computed(() => noteData.value?.created_at?.slice(0, 10) || '')
const timeToRead = computed(() => {
  const wordCount = noteData.value.content.split(/\s+/).length
  return `${Math.max(1, Math.ceil(wordCount / 225))} min read`
})
</script>

<template>
  <Transition>
    <div v-if="ready" class="flex flex-col sm:px-[35%] mt-12">
      <h1 class="text-5xl font-semibold">{{ noteData?.title }}</h1>
      <div class="flex gap-2 mt-2 font-mono font-light">
        <span>{{ formattedDate }}</span>
        <span>|</span>
        <span>{{ timeToRead }}</span>
      </div>
      <div v-html="noteData?.content" class="mt-6"></div>
    </div>
  </Transition>
</template>
