<template>
  <div class="grid grid-cols-6 gap-3 mt-12">
    <!-- my tools -->
    <RouterLink
      to="/notes/my-tools"
      class="border border-green rounded-lg pb-12 pt-4 px-4 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1 class="font-extrabold">my-tools</h1>
      <p class="text-sm text-current/50 italic">circa 2025-05-15</p>
    </RouterLink>
    <!-- my favorite things -->
    <RouterLink
      to="/notes/my-favorite-things"
      class="border border-green rounded-lg pb-12 pt-4 px-4 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1 class="font-extrabold">my-favorite-things</h1>
      <p class="text-sm text-current/50 italic">circa 2025-05-15</p>
    </RouterLink>
    <!-- important videos -->
    <RouterLink
      to="/notes/important-videos"
      class="border border-green rounded-lg pb-12 pt-4 px-4 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1 class="font-extrabold">important-videos</h1>
      <p class="text-sm text-current/50 italic">circa 2025-05-15</p>
    </RouterLink>
    <!-- vault -->
    <RouterLink
      to="/notes/the-vault"
      class="border border-green rounded-lg pb-12 pt-4 px-4 hover:bg-green hover:text-white transition-all duration-200 ease-in-out"
    >
      <h1 class="font-extrabold">the-vault</h1>
      <p class="text-sm text-current/50 italic">circa 2025-05-15</p>
    </RouterLink>
  </div>
</template>
