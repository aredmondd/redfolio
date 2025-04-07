<script setup>
import ToolItem from './ToolItem.vue'
</script>
<template>
  <div class="grid grid-cols-2 gap-12 sm:flex sm:flex-row mb-12 text-md sm:text-lg">
    <div class="flex flex-col grow">
      <h3 class="font-mono font-bold mb-3">apps</h3>
      <ToolItem text="magnet" link="https://magnet.crowdcafe.com/" />
      <ToolItem text="obsidian" link="https://obsidian.md/" />
      <ToolItem text="brave" link="https://brave.com/" />
      <ToolItem text="spark" link="https://sparkmailapp.com/" />
      <ToolItem text="eagle" link="https://en.eagle.cool/" />
    </div>
    <div class="flex flex-col grow">
      <h3 class="font-mono font-bold mb-3">sites</h3>
      <ToolItem text="codewars" link="https://www.codewars.com/" />
      <ToolItem text="simplePDF" link="https://simplepdf.com/" />
      <ToolItem text="google suite" image="google.png" link="https://accounts.google.com/" />
      <ToolItem text="sj & viz" image="sj.png" link="https://www.viz.com/shonenjump" />
    </div>
    <div class="flex flex-col grow">
      <h3 class="font-mono font-bold mb-3">design</h3>
      <ToolItem text="figma" link="https://www.figma.com/design/" />
      <ToolItem
        text="affinity suite"
        image="affinity.png"
        link="https://affinity.serif.com/en-us/"
      />
      <ToolItem text="typescale" link="https://typescale.com/" />
    </div>
    <div class="flex flex-col grow">
      <h3 class="font-mono font-bold mb-3">code</h3>
      <ToolItem text="vscode" link="https://code.visualstudio.com/" />
      <ToolItem text="zed" link="https://zed.dev/" />
      <ToolItem text="iterm" link="https://iterm2.com/" />
    </div>
    <div class="flex flex-col grow">
      <h3 class="font-mono font-bold mb-3">technology</h3>
      <ToolItem text="tailwind" link="https://tailwindcss.com/" />
      <ToolItem text="vue" link="https://vuejs.org/" />
      <ToolItem text="netlify" link="https://www.netlify.com/" />
      <ToolItem text="cloudinary" link="https://cloudinary.com/" />
      <ToolItem text="github" link="https://github.com/" />
      <ToolItem text="porkbun" link="https://porkbun.com/" />
    </div>
    <div class="flex flex-col">
      <h3 class="font-mono font-bold mb-3">other</h3>
      <ToolItem text="martian mono" noimage link="https://evilmartians.com/products/martian-mono" />
      <ToolItem text="oneclock" noimage link="https://www.oneclock.co/" />
      <ToolItem
        text="sony wh1000xm4"
        noimage
        link="https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b"
      />
      <ToolItem text="steam deck" noimage link="https://store.steampowered.com/steamdeck/" />
      <ToolItem text="sony a6000" noimage link="https://en.wikipedia.org/wiki/Sony_%CE%B16000" />
    </div>
  </div>
</template>
