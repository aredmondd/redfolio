<template>
  <Transition appear>
    <div class="flex flex-col sm:flex-row flex-1 gap-12 sm:gap-24 justify-center items-start mt-12">
      <div class="flex flex-col text-sm sm:text-lg">
        <h1 class="font-bold mb-6">
          digital photography <br />
          <span class="text-black/50 font-medium">2024-8-20 to 2024-12-8</span>
        </h1>
        <div class="flex flex-col gap-1">
          <RouterLink
            :to="{
              name: 'carousel',
              params: {
                slug: 'aperture-and-shutter-speed',
              },
            }"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            aperture & shutter speed
          </RouterLink>
          <RouterLink
            :to="{
              name: 'carousel',
              params: {
                slug: 'shadow-and-light',
              },
            }"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            shadow & light
          </RouterLink>
          <RouterLink
            :to="{
              name: 'carousel',
              params: {
                slug: 'still-life',
              },
            }"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            still life
          </RouterLink>
          <RouterLink
            :to="{
              name: 'carousel',
              params: {
                slug: 'disconnected',
              },
            }"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            portraits (disconnected)
          </RouterLink>
          <RouterLink
            :to="{
              name: 'carousel',
              params: {
                slug: 'self-portraits',
              },
            }"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            self portraits
          </RouterLink>
          <RouterLink
            :to="{
              name: 'carousel',
              params: {
                slug: 'non-project-photos',
              },
            }"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            non-project photos
          </RouterLink>
        </div>
      </div>
      <div class="flex flex-col">
        <h1 class="font-bold mb-6 text-sm sm:text-lg">
          post digital photography<br />
          <span class="text-black/50 font-medium">???</span>
        </h1>
        <div class="flex flex-col text-sm sm:text-lg">
          <RouterLink
            to="/photography/weeklyfive"
            class="hover:text-pink duration-200 ease-in-out transition-all"
          >
            the weekly five
          </RouterLink>
        </div>
      </div>
    </div>
  </Transition>
</template>
