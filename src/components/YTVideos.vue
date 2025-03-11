<script setup>
import { ref } from 'vue'
let baseURL = 'https://www.youtube.com/embed/'

const hoveredVideo = ref(null)

let videoIDs = [
  '3aG9Spllx5I',
  'gPHdypbzUU8',
  'fIuhg0bjvQI',
  'PK2SMIOHYig',
  'O2C5R3FOWdE',
  'wuDbl75QITU',
  'k2mwG2h2zVQ',
  'Sk8VtJ9ELQQ',
  'J7r4rYb0aII',
  'jI7hfqDAgd0',
  'RPnQbKgotOw',
  'UmCW0xi_790',
  'nkgAlnDIPMU',
  'w61PT-HpCis',
  'yRVY5969OZw',
  '-cJfZR59p-A',
  '6nUsWvqbV7Y',
  'R3r01BruBok',
  'KI_DBvaBpR8',
  'nwP3TeK-fPs',
  'YzfUj-m2I6I',
  'Xne9CEwR7Rc',
  '76HijAoXi6k',
  'C0WAWMmbPYc',
  '_pNRuafoyZ4',
  'LlCEmPF4-V0',
  'YGvCjqIl9dI',
  'dls1vkI8xY8',
  '-dKZuyQsXWg',
  '9xV7Lyui6SI',
  'gIKR1kkIvWA',
  'v2QfOkixp4k',
  'sjberqBTFz0',
  'WYsc-0Id1_Q',
  '_8m-SGKHuQ8',
  'IJilkMPqvs0',
  '_vhYwGECRrs',
  'Edjkzz2jrT0',
  'CNqzl92f5FY',
  '5ggke9pDUho',
  '_M77_e85Nuc',
  'wYXPybDP6K8',
  'RQdxHi4_Pvc',
  '5Jx5kzYfByo',
  'B_sp7iJFp5I',
  '1Y41l4FGHPg',
  'BZfBZhrsaPE',
  'o53zLE7MxwM',
  '8nArzvFMLqM',
  'T-JrP0_OqFc',
  'y8wM-TVIqSA',
  '0FGlsuTnt_U',
  'O5Uli9nCDi8',
  '5jZtuCtsjVA',
  'wm_hfvgakcM',
  'jQVTNuTjnFU',
  '52avIJWQWAY',
  'rRBupcAy8ds',
  'icilp2OlBcM',
  'CPNhH3tISZw',
  'p7mmFOohIsg',
  '_jeM1lQJmNg',
  '7kIW80JzwS4',
  'd0k7tCxylWo',
  '2MQF00rTEJU',
  'nNdma3ARe28',
  '5bifn15-BnI',
  'HIQuWvAWa5U',
  '_0ycrWbrCUE',
  '4SiFgB1lGxw',
  'IIEgtIEDfB0',
  'sg2BLJGSwFs',
  'eAMeMkVsjiw',
  'o8yIbDpx7ZA',
  'IqVoEpRIaKg',
  'JSFkpr_psJs',
  'v68zYyaEmEA',
  'LSIOcCcEVaE',
  'qUmgxoRbuWQ',
  '5GhhVHpPR_M',
  'hLlDGbwlIEE',
  'Qxf592eakLE',
  'hS2emKDlGmE',
  'KxGRhd_iWuE',
  '9O0hjG-Gt7U',
  'VwL-EFrjnGM',
  'foEDIiSNbAY',
  'gh5CYvi5E40',
  '_DEbVM6tgmk',
  'G_jchNKMwV4',
  'bWOYtkap6ec',
  'tYAYqxocCXY',
  'k7yTp25cpdc',
  '2cV75NeMRxk',
  '8W2m7fW5j5k',
  'b5xT0AAjMGc',
  '1mg3ojoR73g',
  'OkVg_rRP0Mc',
  'gHrb1RfWK3M',
  '0dxSJOxz2KE',
  'DIqWuUCsRnw',
  'Km4pT58YRM0',
  'GQAvce3MA44',
  'fvUy9AIVJQs',
  'pvoAWvE0wUM',
  '8NpKLKcgOLo',
  'tYk0BS84ItY',
  'EzdNfC7JapM',
  '2u3gd9FVzcw',
  'rs89EaMayyk',
  'TkNqCuZzOQc',
  '9IiTdSnmS7E',
  'GNhp16fpICs',
  'wzHAL6h5Yi0',
  'GFAeAQ0qQ9c',
  'X5bY0skFp18',
  '_Fu4pE46-zM',
  'IgdSANXdv1Y',
  'BY-AR8MP3hw',
  'uI29qCR9PGk',
  'sop2V_MREEI',
  'E11viHMHEww',
  'Pa16NwdX2dw',
  'LSK5bYPBcmw',
  'PwTS-CcrSjQ',
  '8BqNrpfrjr0',
  '_TOSjeql1Jw',
  'FGJjSbyA7f8',
  'F3wJzNQUivw',
  'ra3oh-G8rEA',
  'Ip6cw8gfHHI',
  'RQY_oJd1QkY',
  'FcGPpwFdE1Y',
  'iu7wJwbLkpo',
  'yutsIpLK2Rs',
  'z10n6elrYkc',
  'Oo6s09Jcqac',
  'tumZt0IbYaI',
  'arFtIiUBga4',
  'RVaDgIPEiW8',
  '_7nPP11-4fg',
  'Uoa1OmMfyvY',
  'cGzBaSBdikA',
  'Kj4R1vQTrUE',
  'Ex_6IF3AGmQ',
]

const randomVideoIndex = ref(Math.floor(Math.random() * videoIDs.length))
</script>

<template>
  <h2 class="text-4xl font-bold mt-24 mb-3 text-center">important videos 📺</h2>
  <h3 class="text-center">
    this is a collection of some of my favorite youtube videos. <br />
    some changed my life, and some are just funny.
  </h3>
  <p class="text-center mb-6">
    <a
      :href="baseURL + videoIDs[randomVideoIndex]"
      target="_blank"
      class="link"
      @click="randomVideoIndex = Math.floor(Math.random() * videoIDs.length)"
      >click me</a
    >
    to watch a random video.
  </p>
  <div class="grid grid-cols-14 mb-12">
    <a
      v-for="(id, index) in videoIDs"
      :key="index"
      :href="baseURL + id"
      target="_blank"
      @mouseenter="hoveredVideo = id"
      @mouseleave="hoveredVideo = null"
      class="p-1 transition-all duration-200 ease-in-out"
      :class="{
        grayscale: hoveredVideo !== null && hoveredVideo !== id,
        'opacity-33': hoveredVideo !== null && hoveredVideo !== id,
      }"
    >
      <img :src="'https://i.ytimg.com/vi/' + id + '/mqdefault.jpg'" alt="" />
    </a>
  </div>
</template>
