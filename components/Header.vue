<template>
  <div class="">
    <nav class="w-full flex justify-center items-center p-5 h-[10vh]">
      <ul class="flex gap-5">
        <li
          :enter="{ opacity: 0.5 }"
          :hovered="{ opacity: 1 }"
          v-for="item in list"
          :key="item"
          class="text-lg font-bold lg:text-xl"
        >
          <a :href="'#' + item.toLowerCase()" @click="scrollToSection">{{
            item
          }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const list = ["about", "skills", "projects", "contact"];

const text = ["gideon sarfo.", "frontend developer."];

import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  document.addEventListener("mousemove", updateCursor);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", updateCursor);
});

function updateCursor(event) {
  const cursor = document.getElementById("cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
}

function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");
  const section = document.querySelector(target);
  section.scrollIntoView({ behavior: "smooth" });
}
</script>
