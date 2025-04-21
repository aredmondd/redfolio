<template>
  <h1 class="text-center text-black/50 mt-12">
    you can interact with this graph! drag stuff around, try to break it. click on a node to see
    more :)
  </h1>
  <div class="flex flex-col flex-1 items-center">
    <GraphChart :data="graphData" />
  </div>
</template>

<script setup>
import GraphChart from '../components/GraphChart.vue'

const graphData = {
  nodes: [
    { id: '📸', group: 1 },
    { id: 'aperture & shutter speed', group: 2, url: 'aperture-and-shutter-speed' },
    { id: 'shadow & light', group: 2, url: 'shadow-and-light' },
    { id: 'still life', group: 2, url: 'still-life' },
    { id: 'disconnected', group: 2, url: 'disconnected' },
    { id: 'self portraits', group: 2, url: 'self-portraits' },
    { id: 'more :)', group: 2, url: 'non-project-photos' },
  ],
  links: [
    { source: '📸', target: 'aperture & shutter speed', value: 1 },
    { source: '📸', target: 'shadow & light', value: 1 },
    { source: '📸', target: 'still life', value: 1 },
    { source: '📸', target: 'disconnected', value: 1 },
    { source: '📸', target: 'self portraits', value: 1 },
    { source: '📸', target: 'more :)', value: 1 },
  ],
}
</script>
