<script setup>
import OfficiallyProjectsSection from '@/components/OfficiallyProjectsSection.vue'
</script>

<template>
  <!-- PROFILE -->
  <div class="flex justify-between items-start mb-36 mx-24 mt-24">
    <div class="flex flex-col left-item">
      <!-- mobile -->
      <div>
        <h2 class="text-5xl font-bold mb-12">PROFILE</h2>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center justify-start">
          <img src="@/assets/logo_regular.png" alt="" width="50" />
          <h2 class="text-3xl font-bold text-right ml-2">Aiden Redmond</h2>
        </div>
        <p class="text-sm text-black/50 mt-1">web developer, student-athlete, artist</p>
        <div class="text-md text-black/75 mt-2">
          - working on
          <a
            href="https://www.aidenredmond.com"
            target="_blank"
            class="underline underline-offset-2 hover:underline-offset-4 hover:cursor-pointer transition-all duration-200 ease-in-out"
            >aidenredmond.com</a
          >
          &
          <a
            href="https://www.stridespace.xyz"
            target="_blank"
            class="underline underline-offset-2 hover:underline-offset-4 hover:cursor-pointer transition-all duration-200 ease-in-out"
            >stridespace.xyz</a
          >
          <br />
          - learning vue.js, japanese, & obsidian <br />
          - loves manga, music, video games, and running
        </div>
      </div>
    </div>
    <img src="@/assets/red-profile.jpeg" alt="" class="h-[350px] rounded-lg" />
  </div>

  <!-- EDUCATION -->
  <div class="flex justify-between items-start mb-36 mx-24">
    <div class="flex flex-col left-item">
      <h2 class="text-center text-5xl font-bold sm:text-left mb-12">EDUCATION</h2>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div class="flex items-end justify-start">
            <img src="@/assets/fsc-svg.svg" alt="" width="20" class="mb-2 sm:w-5" />
            <h2 class="text-2xl font-bold ml-3">Florida Southern College</h2>
          </div>
          <p class="text-sm text-black/50">Lakeland, FL | Aug 2021 - May 2025</p>
          <h3 class="text-black/75 mt-2">
            B.S in Computer Science (Web & Cloud Computing)<br />
            <span class="italic">Minor in Graphic Design</span>
          </h3>
          <h4 class="mt-2 text-sm text-black/50">
            - <span class="font-bold">Cumulative GPA: 3.85;</span> Deanʼs list or higher every
            semester. <br />
            - <span class="font-bold">NCAA DII Collegiate Athlete</span>: Compete year-round in
            cross country & track.
          </h4>
        </div>
      </div>
    </div>
    <img
      src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled_hhxhcj.png"
      alt=""
      class="h-[350px] rounded-lg"
    />
  </div>

  <!-- EXPERIENCE -->
  <div class="flex justify-between items-start mb-36 mx-24">
    <div class="flex flex-col left-item">
      <h2 class="text-left text-5xl font-bold mb-12">EXPERIENCE</h2>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div class="flex items-center justify-start">
            <img src="@/assets/aer_logo_png.png" alt="" width="30" />
            <h2 class="text-3xl font-bold text-right ml-2">Alter Ego Running</h2>
          </div>
          <p class="text-sm text-black/50 mt-1">
            Business Development Analyst (and model) - Summer '23, '24
          </p>

          <!-- DESKTOP -->
          <div class="flex flex-col space-y-2 text-md text-black/75 mt-2">
            <p>
              - Redesigned the inventory tracking system using JavaScript & Shopify, increasing
              <br />
              efficiency by over 60%.
            </p>
            <p>
              - Designed a system to optimize product flow, label & identify items, and <br />
              streamline inventory updates, leading to a notable reduction in human error <br />
              and improving overall operational accuracy.
            </p>
            <p>
              - Coordinated end-to-end implementation of
              <a target="_blank" class="underline" href="https://www.gorgias.com/">Gorgias</a>,
              halving <br />
              response time and tripling daily ticket resolutions through optimized <br />
              workflows, templates, and staff training.
            </p>
          </div>
        </div>
      </div>
    </div>
    <img
      src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled-2_sm6aqm.png"
      alt=""
      class="h-[350px] rounded-lg"
    />
  </div>

  <OfficiallyProjectsSection />
</template>
