<template>
  <section class="flex flex-col gap-20 overflow-hidden" id="skills">
    <div class="">
      <PageTitle :title="title" />
    </div>

    <div
      v-motion-slide-visible-right
      class="text-[5.8rem] flex flex-col lg:flex-row items-center lg:justify-center lg:items-start flex-wrap gap-5 lg:gap-20"
    >
      <div class="w-screen p-1 lg:w-auto">
        <p class="text-sm">core.</p>
        <div class="flex justify-center lg:flex-col lg:gap-5">
          <Icon
            name="mdi:language-html5"
            class="transition-opacity"
            color="inherit"
          />
          <Icon
            name="mdi:language-css3"
            class="transition-opacity"
            color="inherit"
          />
          <Icon
            name="mdi:language-javascript"
            class="transition-opacity"
            color="inherit"
          />
          <Icon name="mdi:git" class="transition-opacity" color="inherit" />
        </div>
      </div>
      <div class="w-screen p-1 lg:w-auto">
        <p class="text-sm">libraries and frameworks.</p>
        <div class="flex flex-wrap justify-center lg:gap-5 lg:flex-col">
          <Icon
            name="mdi:tailwind"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="mdi:sass"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="mdi:nuxt"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="ri:vuejs-fill"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
        </div>
      </div>
      <div class="w-screen p-1 lg:w-auto">
        <p class="text-sm">backend and auth.</p>
        <div class="flex flex-wrap justify-center lg:gap-5 lg:flex-col">
          <Icon
            name="mdi:nodejs"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="tabler:brand-supabase"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="mdi:firebase"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="mdi:laravel"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
        </div>
      </div>
      <div class="w-screen p-1 lg:w-auto">
        <p class="text-sm">other.</p>
        <div class="flex flex-wrap justify-center lg:gap-5 lg:flex-col">
          <Icon
            name="mdi:wordpress"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="mdi:blogger"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
          <Icon
            name="ph:figma-logo"
            class="transition-opacity animate-move-slowly"
            color="inherit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const title = ["skills", "my stack", "what do i use"];

    return {
      title,
    };
  },
};
</script>

<style></style>
