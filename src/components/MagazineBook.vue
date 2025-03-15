<template>
  <div class="magazine-container">
    <div class="book">
      <!-- Left Page -->
      <div v-if="currentPages.left !== null" class="page left-page">
        <div class="static-content" v-html="currentPages.left"></div>
        <!-- Flipping overlay for previous page flip -->
        <div
          v-if="isFlipping && flippingDirection === 'prev' && nextContent.left !== null"
          class="flipping-layer flip-left"
          v-html="nextContent.left"
        ></div>
      </div>

      <!-- Right Page -->
      <div v-if="currentPages.right !== null" class="page right-page">
        <div class="static-content" v-html="currentPages.right"></div>
        <!-- Flipping overlay for next page flip -->
        <div
          v-if="isFlipping && flippingDirection === 'next' && nextContent.right !== null"
          class="flipping-layer flip-right"
          v-html="nextContent.right"
        ></div>
      </div>
    </div>
    <div class="controls">
      <button @click="prevPage" :disabled="currentPage === 0 || isFlipping">Previous</button>
      <button @click="nextPage" :disabled="currentPage >= pages.length - 1 || isFlipping">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// The pages prop is an array of spreads; each spread has a "left" and "right" property.
// A single-page spread has one side set to null.
const props = defineProps({
  pages: {
    type: Array,
    default: () => [],
  },
})

// currentPage is the index of the spread currently shown
const currentPage = ref(0)
// isFlipping toggles the overlay animation
const isFlipping = ref(false)
// flippingDirection is either 'next' or 'prev'
const flippingDirection = ref('')
// nextContent will hold the content for the new page that is shown during the flip
const nextContent = ref({ left: null, right: null })

// The currently displayed spread
const currentPages = computed(() => {
  return props.pages[currentPage.value] || { left: null, right: null }
})

// Trigger the next page flip: preload the next spread into nextContent immediately.
function nextPage() {
  if (currentPage.value < props.pages.length - 1 && !isFlipping.value) {
    flippingDirection.value = 'next'
    nextContent.value = props.pages[currentPage.value + 1] || { left: null, right: null }
    isFlipping.value = true
    // Wait for the animation (600ms) then update the static page.
    setTimeout(() => {
      currentPage.value++
      isFlipping.value = false
      flippingDirection.value = ''
      nextContent.value = { left: null, right: null }
    }, 600)
  }
}

// Trigger the previous page flip similarly.
function prevPage() {
  if (currentPage.value > 0 && !isFlipping.value) {
    flippingDirection.value = 'prev'
    nextContent.value = props.pages[currentPage.value - 1] || { left: null, right: null }
    isFlipping.value = true
    setTimeout(() => {
      currentPage.value--
      isFlipping.value = false
      flippingDirection.value = ''
      nextContent.value = { left: null, right: null }
    }, 600)
  }
}
</script>

<style scoped>
.magazine-container {
  width: 800px;
  margin: 0 auto;
  perspective: 1200px;
}

.book {
  position: relative;
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
}

/* Base styling for pages */
.page {
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Left page styles */
.left-page {
  border-right: 1px solid #ccc;
  transform-origin: right;
}

/* Right page styles */
.right-page {
  border-left: 1px solid #ccc;
  transform-origin: left;
}

/* Flipping overlay, positioned on top of the static content */
.flipping-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  z-index: 2;
}

/* Flip animation for next page on right page */
.flip-right {
  animation: flipRight 0.6s forwards;
}

@keyframes flipRight {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
}

/* Flip animation for previous page on left page */
.flip-left {
  animation: flipLeft 0.6s forwards;
}

@keyframes flipLeft {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

.controls {
  clear: both;
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
}
</style>
