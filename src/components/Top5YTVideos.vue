<script setup>
let base_URL = 'https://www.youtube.com/embed/'

let images = [
  'https://i.ytimg.com/vi/6nUsWvqbV7Y/maxresdefault.jpg',
  'https://i.ytimg.com/vi/BY-AR8MP3hw/maxresdefault.jpg',
  'https://i.ytimg.com/vi/LSIOcCcEVaE/maxresdefault.jpg',
  'https://i.ytimg.com/vi/cGzBaSBdikA/maxresdefault.jpg',
  'https://i.ytimg.com/vi/_DEbVM6tgmk/maxresdefault.jpg',
  'https://i.ytimg.com/vi/HIQuWvAWa5U/maxresdefault.jpg',
  'https://i.ytimg.com/vi/RIxmr3dcDEc/maxresdefault.jpg',
  'https://i.ytimg.com/vi/9IiTdSnmS7E/maxresdefault.jpg',
  'https://i.ytimg.com/vi/DIqWuUCsRnw/maxresdefault.jpg',
  'https://i.ytimg.com/vi/JSFkpr_psJs/maxresdefault.jpg',
]

let video_ids = [
  '6nUsWvqbV7Y',
  'BY-AR8MP3hw',
  'LSIOcCcEVaE',
  'cGzBaSBdikA',
  '_DEbVM6tgmk',
  'HIQuWvAWa5U',
  'RIxmr3dcDEc',
  '9IiTdSnmS7E',
  'DIqWuUCsRnw',
  'JSFkpr_psJs',
]
</script>

<template>
  <div class="grid grid-cols-5 gap-1">
    <a
      v-for="(image, index) in images"
      :key="index"
      :href="base_URL + video_ids[index]"
      target="_blank"
    >
      <img :src="image" alt="" />
    </a>
  </div>
</template>
