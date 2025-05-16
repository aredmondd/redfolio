<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const props = defineProps({
  collection: {
    type: String,
    required: true,
  },
})

const collection = ref([])
const loading = ref(true)
const empty = ref(false)

async function getCollection() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('collection', props.collection)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching collection:', error.message)
  } else {
    collection.value = data
    loading.value = false
    if (collection.value.length == 0) {
      empty.value = true
    }
  }
}

function sortCollection() {
  collection.value.reverse()
}

onMounted(() => {
  getCollection()
})
</script>

<template>
  <div v-if="!loading && !empty" class="grid grid-cols-6 gap-3">
    <RouterLink
      v-for="note in collection"
      :key="note.id"
      :to="{
        name: 'note',
        params: { slug: note.slug },
      }"
      class="border border-green rounded-lg pb-12 pt-4 px-4 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1 class="font-extrabold">{{ note.title }}</h1>
      <p class="text-sm text-current/50">
        {{ note.created_at.substring(0, note.created_at.indexOf('T')) }}
      </p>
    </RouterLink>
  </div>
  <div v-else class="text-center text-black/50">so empty...</div>
</template>
