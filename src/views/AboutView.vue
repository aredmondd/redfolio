<template>
  <!-- PROFILE -->
  <Transition appear>
    <div class="flex justify-between items-start mb-6 sm:mb-36 sm:mx-24 mt-12 sm:mt-24">
      <div class="flex flex-col left-item">
        <div>
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 sm:mb-12">PROFILE</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center justify-start">
            <img src="/logo_regular.png" alt="" width="50" />
            <h2 class="text-xl sm:text-2xl font-bold text-right ml-2">Aiden Redmond</h2>
          </div>
          <p class="text-sm text-black/50 mt-1">developer, designer, athlete</p>
          <div class="text-sm sm:text-md text-black/75 mt-2 flex flex-col gap-y-1">
            <p>
              - working on
              <a href="https://www.aidenredmond.com" target="_blank" class="link"
                >aidenredmond.com</a
              >
            </p>
            <p>- learning UI/UX, linux, & obsidian</p>
            <p>- love manga, music, video games, and running</p>
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742152811/red-profile_sp7snx.jpg"
        alt=""
        class="h-[350px] rounded-lg hidden sm:block"
      />
    </div>
  </Transition>
  <Transition appear>
    <img
      src="https://res.cloudinary.com/dkznczrj0/image/upload/v1742152811/red-profile_sp7snx.jpg"
      alt=""
      class="rounded-lg block sm:hidden mb-24"
    />
  </Transition>

  <!-- EDUCATION -->
  <Transition appear>
    <div class="flex justify-between items-start mb-6 sm:mb-36 sm:mx-24">
      <div class="flex flex-col left-item">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 sm:mb-12">EDUCATION</h2>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <div class="flex items-end justify-start">
              <img src="/fsc-svg.svg" alt="" width="20" class="mb-2 sm:w-5" />
              <h2 class="text-xl sm:text-2xl font-bold ml-3">Florida Southern College</h2>
            </div>
            <p class="text-sm text-black/50 mt-2">Lakeland, FL | Aug 2021 - May 2025</p>
            <h3 class="text-black/75 mt-2 text-sm sm:text-md">
              B.S in Computer Science (Web & Cloud Computing)<br />
              <span class="italic">Minor in Graphic Design (Web Emphasis)</span>
            </h3>
            <h4 class="mt-3 text-xs sm:text-sm text-black/50">
              - <span class="font-bold">Cumulative GPA: 3.86;</span> Graduated with summa cum
              laude<br />
              - <span class="font-bold">NCAA DII Collegiate Athlete</span>: Compete year-round in
              cross country & track.
            </h4>
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dkznczrj0/image/upload/v1746727376/award_pgbhru.jpg"
        alt=""
        class="h-[350px] rounded-lg hidden sm:block"
      />
    </div>
  </Transition>
  <Transition appear>
    <img
      src="https://res.cloudinary.com/dkznczrj0/image/upload/v1746727376/award_pgbhru.jpg"
      alt=""
      class="rounded-lg block sm:hidden mb-24"
    />
  </Transition>

  <!-- EXPERIENCE -->
  <div class="flex justify-between items-start mb-6 sm:mb-36 sm:mx-24">
    <div class="flex flex-col left-item">
      <h2 class="text-4xl sm:text-5xl font-bold mb-12">EXPERIENCE</h2>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div class="flex items-center justify-start">
            <img src="/aer_logo_png.png" alt="" width="30" />
            <h2 class="text-xl sm:text-2xl font-bold text-right ml-2">Alter Ego Running</h2>
          </div>
          <p class="text-xs sm:text-sm text-black/50 mt-1">
            Business Development Analyst (and model) - Summer '23, '24
          </p>

          <div class="text-sm sm:text-md flex flex-col space-y-2 text-md text-black/75 mt-2">
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
              <a target="_blank" class="link" href="https://www.gorgias.com/">Gorgias</a>, halving
              <br />
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
      class="h-[350px] rounded-lg hidden sm:block"
    />
  </div>
  <img
    src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled-2_sm6aqm.png"
    alt=""
    class="rounded-lg block sm:hidden mb-24"
  />
</template>
