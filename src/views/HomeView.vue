<template>
  <Transition appear>
    <div class="flex flex-col gap-18 mx-12">
      <div class="flex justify-between mt-24">
        <div class="flex items-end gap-8">
          <img src="/redmond.png" alt="" class="w-40 rounded-full" />
          <div class="flex flex-col gap-2">
            <h1 class="text-4xl sm:text-5xl font-bold">hi, i'm aiden.</h1>
            <p class="text-black/50 text-lg">
              i'm a developer & designer <br />
              looking for a place to grow my skills. <br />
              right now, i'm doing
              <RouterLink to="/work" class="link">freelance design & development</RouterLink>.
            </p>
          </div>
        </div>
        <p class="text-black/33 mt-4">see what im up to ↑↑</p>
      </div>
      <div class="flex justify-between items-end mt-12">
        <div>
          <h3 class="font-bold text-3xl mb-3">find me on:</h3>
          <div class="flex flex-col gap-1 font-mono text-black/33">
            <a
              class="hover:text-black/50 transition duration-250 ease-in-out"
              href="https://linkedin.com/in/aidenredmondd/"
              target="_blank"
              >/linkedin</a
            >
            <a
              class="hover:text-black/50 transition duration-250 ease-in-out"
              href="https://github.com/aredmondd"
              >/github</a
            >
            <a
              class="hover:text-black/50 transition duration-250 ease-in-out"
              href="https://medium.com/@aidenredmond"
              >/medium</a
            >
            <a
              class="hover:text-black/50 transition duration-250 ease-in-out"
              href="mailto:aidenredmondd@gmail.com"
              >/email</a
            >
          </div>
        </div>
        <div class="flex flex-col items-end">
          <h1 class="text-3xl sm:text-4xl font-bold">want to say hi?</h1>
          <form
            action="https://formspree.io/f/mblyykyq"
            method="POST"
            class="flex flex-col gap-4 mt-4 w-max"
          >
            <div>
              <input type="name" name="name" placeholder="name" class="border px-1" />
            </div>
            <div>
              <input type="email" name="email" placeholder="email" class="border px-1" />
            </div>
            <div>
              <textarea name="message" class="border px-1" placeholder="message"></textarea>
            </div>
            <!-- your other form fields go here -->
            <div><button type="submit" class="border px-2 py-1 w-full">send</button></div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>
