<template>
  <button
    @click="resetChart"
    class="mt-2 underline hover:underline-offset-4 font-bold text-black/50 transition-all duration-200 ease-in-out"
  >
    reset graph
  </button>
  <div class="flex flex-col justify-center items-center flex-1">
    <div ref="chartContainer"></div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'

// === CONSTS ===
const WIDTH = 928
const HEIGHT = 680
const RADIUS = 100
const DISTANCE = 250

const LINK_STROKE = '#999'
const LINK_OPACITY = 0.5

const TEXT_COLOR = '#0f1109'
const CENTER_NODE_ID = '📸'
const CENTER_FONT_SIZE = 45
const OUTER_FONT_SIZE = 16
const CENTER_FORCE_STRENGTH = 0.25
const OUTER_FORCE_STRENGTH = 0.15

// === Props & Setup ===
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const chartContainer = ref(null)
let simulation = null
let nodes = []
let links = []

// === Main Function ===
function renderChart(data) {
  links = data.links.map((d) => ({ ...d }))
  nodes = data.nodes.map((d) => ({ ...d }))

  const outerNodes = nodes.filter((n) => n.id !== CENTER_NODE_ID)
  const centerNode = nodes.find((n) => n.id === CENTER_NODE_ID)

  centerNode.fx = 0
  centerNode.fy = 0

  outerNodes.forEach((node, i) => {
    const angle = (i / outerNodes.length) * 2 * Math.PI
    node.x = RADIUS * Math.cos(angle)
    node.y = RADIUS * Math.sin(angle)
  })

  nodes.forEach((node) => {
    if (node.id === CENTER_NODE_ID) {
      node.fx = 0
      node.fy = 0
    }
  })

  simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(DISTANCE),
    )
    .force('charge', d3.forceManyBody())
    .force(
      'x',
      d3
        .forceX()
        .strength((d) => (d.id === CENTER_NODE_ID ? CENTER_FORCE_STRENGTH : OUTER_FORCE_STRENGTH)),
    )
    .force(
      'y',
      d3
        .forceY()
        .strength((d) => (d.id === CENTER_NODE_ID ? CENTER_FORCE_STRENGTH : OUTER_FORCE_STRENGTH)),
    )

  const svg = d3
    .create('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
    .attr('viewBox', [-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT])
    .attr('style', 'max-width: 100%; height: auto;')

  const link = svg
    .append('g')
    .attr('stroke', LINK_STROKE)
    .attr('stroke-opacity', LINK_OPACITY)
    .selectAll('line')
    .data(links)
    .join('line')

  const nodeGroup = svg.append('g').selectAll('g').data(nodes).join('g')

  nodeGroup.each(function (d) {
    const g = d3.select(this)

    g.append('text')
      .text(d.id)
      .attr('text-anchor', 'middle')
      .attr('font-size', d.id === CENTER_NODE_ID ? CENTER_FONT_SIZE : OUTER_FONT_SIZE)
      .attr('font-weight', d.id === CENTER_NODE_ID ? 'bold' : 'normal')
      .attr('fill', TEXT_COLOR)
      .style('cursor', d.url ? 'pointer' : 'default')
      .on('click', () => {
        if (d.url) {
          router.push(`/photography/${d.url}`)
        }
      })
  })

  nodeGroup.append('title').text((d) => d.id)

  nodeGroup.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))

  simulation.on('tick', () => {
    link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)

    nodeGroup.attr('transform', (d) => `translate(${d.x},${d.y})`)
  })

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart()
    event.subject.fx = event.subject.x
    event.subject.fy = event.subject.y
  }

  function dragged(event) {
    event.subject.fx = event.x
    event.subject.fy = event.y
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0)
    event.subject.fx = null
    event.subject.fy = null
  }

  chartContainer.value.innerHTML = ''
  chartContainer.value.appendChild(svg.node())
}

// === Reset Function ===
function resetChart() {
  // Recalculate positions for reset
  const outerNodes = nodes.filter((n) => n.id !== CENTER_NODE_ID)
  const centerNode = nodes.find((n) => n.id === CENTER_NODE_ID)

  centerNode.fx = 0
  centerNode.fy = 0

  outerNodes.forEach((node, i) => {
    const angle = (i / outerNodes.length) * 2 * Math.PI
    node.x = RADIUS * Math.cos(angle)
    node.y = RADIUS * Math.sin(angle)
  })

  // Restart the simulation
  simulation.alpha(1).restart()
}

// === Lifecycle Hooks ===
onMounted(() => {
  renderChart(props.data)
})

onBeforeUnmount(() => {
  if (simulation) simulation.stop()
})
</script>
