<template>
  <section
    class="flex flex-col w-full gap-20 mt-20 overflow-hidden lg:mt-40"
    id="contact"
  >
    <div
      class="flex flex-col items-center gap-40 p-2 lg:gap-5 lg:flex-row lg:justify-between"
    >
      <div class="self-start h-full break-all">
        <p class="text-xl uppercase">{{ question }}</p>
        <a
          class="underline text-7xl"
          :href="'mailto:' + email"
          target="_blank"
          >{{ email }}</a
        >
        <div class="flex w-full gap-2 mt-5">
          <p
            class="text-xl underline"
            v-for="(link, index) in socialslinks"
            :key="index"
          >
            <a class="self-end" :href="link" target="_blank">{{
              socials[index] + "."
            }}</a>
          </p>
        </div>
      </div>
      <footer class="self-start mt-auto mb-6 lg:mb-0 lg:mr-10">
        <p class="text-xl">{{ text[0] }}</p>
        <p class="text-xl">{{ text[1] }}</p>
        <p class="text-xl">{{ text[2] }}</p>
      </footer>
    </div>
  </section>
</template>

<script setup>
const title = ["i am your guy", "reach me", "available"];
const question = "want to work together?";
const telephone = "(+233)551641245";
const email = "aemonsarfo@outlook.com";
const socialslinks = [
  "https://www.linkedin.com/in/thetobigit",
  "https://twitter.com/TheTobiGit",
  "https://github.com/TheTobiGit",
];
const socials = ["linkedin", "twitter", "github"];
const headings = ["telephone.", "email.", "socials."];
const text = ["Designed and Developed by", "Gideon Sarfo", "Copyright © 2024"];
</script>

<style scoped>
/* .main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
} */
</style>
