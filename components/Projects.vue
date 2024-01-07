<template>
  <section class="flex flex-col gap-20 overflow-hidden" id="projects">
    <div class="">
      <PageTitle :title="title" />
    </div>

    <div class="mx-auto lg:mt-20">
      <div
        class="flex flex-wrap gap-20 lg:grid lg:grid-cols-3 lg:gap-40 justify-evenly"
      >
        <div
          class="card h-[360px] border w-[280px] border-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[280px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            ></div>
            <div class="h-[15%] flex justify-center items-center gap-3"></div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[260px] border-black bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[260px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            ></div>
            <div class="h-[15%] flex justify-center items-center gap-3"></div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[260px] border-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[260px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            ></div>
            <div class="h-[15%] flex justify-center items-center gap-3"></div>
          </div>
        </div>

        <div
          class="card h-[360px] border w-[260px] border-black bg-gradient-to-r from-gray-700 via-gray-900 to-black z-30 cursor-pointer"
        >
          <div
            class="card h-[360px] border w-[260px] border-black bg-white z-20 -translate-x-6 -translate-y-6 hover:-translate-x-[1px] hover:-translate-y-[0.05rem] transition-all duration-[1s]"
          >
            <div
              class="flex items-center justify-center h-[15%] border border-t-0 border-b border-l-0 border-r-0 border-black"
            >
              <p>2022</p>
            </div>
            <div
              class="h-[70%] border border-black border-t-0 border-l-0 border-r-0"
            ></div>
            <div class="h-[15%] flex justify-center items-center gap-3"></div>
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
