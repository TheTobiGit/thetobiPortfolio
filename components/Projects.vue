<template>
  <section class="flex flex-col gap-20 overflow-hidden" id="projects">
    <div class="">
      <PageTitle :title="title" />
    </div>

    <div class="mx-auto lg:mt-20">
      <div
        class="flex flex-wrap gap-20 lg:grid lg:grid-cols-3 lg:gap-40 justify-evenly *:select-none"
      >
        <div
          class="card h-[360px] border w-[300px] border-black bg-gradient-to-t from-slate-800 via-gray-500 to-black z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[300px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            >
              <a href="https://vercis-edit.netlify.app" target="_blank"
                ><img
                  src="../assets/images/projects/thevercisedit.webp"
                  class="w-full h-full"
                  alt=""
              /></a>
            </div>
            <div class="h-[15%] flex justify-center items-center gap-3">
              thevercisedit
            </div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[300px] border-black bg-gradient-to-t from-black via-gray-700 to-green-700 z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[300px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2023</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            >
              <a href="https://zenithrealhomes.com" target="_blank"
                ><img
                  src="../assets/images/projects/zenithomes.webp"
                  class="w-full h-full"
                  alt=""
              /></a>
            </div>
            <div class="h-[15%] flex justify-center items-center gap-3">
              zenithrealhomes
            </div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[300px] border-black bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white via-lime-600 to-black z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[300px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            >
              <a href="https://edutex.netlify.app" target="_blank"
                ><img
                  src="../assets/images/projects/edutex.webp"
                  class="w-full h-full"
                  alt=""
              /></a>
            </div>
            <div class="h-[15%] flex justify-center items-center gap-3">
              edutex
            </div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[300px] border-black bg-gradient-to-tr from-black via-amber-600 to-gray-300 z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[300px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            >
              <a href="https://vascoprojectors.com" target="_blank"
                ><img
                  src="../assets/images/projects/vasco.gif"
                  class="w-full h-full"
                  alt=""
              /></a>
            </div>
            <div class="h-[15%] flex justify-center items-center gap-3">
              vascoprojectors
            </div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[300px] border-black z-30 cursor-not-allowed"
        >
          <div
            class="card h-[360px] border w-[300px] border-black bg-white z-20 -translate-x-6 -translate-y-6 transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2024</p>
            </div>
            <div
              class="h-[70%] border-black border-t-0 border-l-0 border-r-0 flex items-center justify-center"
            >
              <p class="text-3xl">coming soon..</p>
            </div>
            <div class="h-[15%] flex justify-center items-center gap-3">
              wopebozin
            </div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[300px] border-black z-30 cursor-not-allowed"
        >
          <div
            class="card h-[360px] border w-[300px] border-black bg-white z-20 -translate-x-6 -translate-y-6 transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2024</p>
            </div>
            <div
              class="h-[70%] border-black border-t-0 border-l-0 border-r-0 flex items-center justify-center"
            >
              <p class="text-3xl">coming soon..</p>
            </div>
            <div class="h-[15%] flex justify-center items-center gap-3">
              driverless
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const title = ["projects", "my works", "what i have created"];

    return {
      title,
    };
  },
};
</script>

<style scoped>
/* .card {
  box-shadow: 10px 10px black;
} */
</style>
