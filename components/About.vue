<template>
  <section class="flex flex-col gap-10 overflow-hidden" id="about">
    <div class="">
      <PageTitle :title="title" />
    </div>
    <div class="flex flex-col items-center justify-center gap-5 lg:flex-row">
      <div class="flex flex-col items-center">
        <p class="text-sm translate-y-8">
          this is me <br />
          by the way
        </p>
        <img src="../assets/images/me.gif" alt="" class="lg:h-[50vh]" />
      </div>
      <p class="text-balance p-3 lg:max-w-[40vw] text-lg leading-8">
        I'm Gideon Sarfo, a frontend developer based in Ghana with four years of
        experience. I'm deeply passionate about creating captivating web
        experiences through code. My journey is all about turning concepts into
        digital realities. I thrive on building beautiful, functional, and
        user-friendly websites that leave a lasting impression.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const title = ["about me", "who am i", "what do i do"];

    return {
      title,
    };
  },
};
</script>
