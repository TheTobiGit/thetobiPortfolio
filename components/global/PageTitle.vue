<template>
  <div
    class="h-[10vh] bg-gray-100 text-black text-4xl -rotate-[3deg] flex items-center lg:mt-[20vh] mt-[5vh] justify-end overflow-hidden"
  >
    <ul class="flex gap-20 pr-5 list-disc">
      <li class="min-w-fit">{{ title[0] }}</li>
      <li class="min-w-fit">{{ title[1] }}</li>
      <li class="min-w-fit">{{ title[2] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: Array,
  },
  setup(props) {
    return { ...props };
  },
};
</script>

<style scoped>
@keyframes slideLeft {
  0% {
    transform: translateX(1%);
  }
  100% {
    transform: translateX(-100%);
  }
}

ul {
  animation: slideLeft 20s infinite linear forwards alternate-reverse;
}
</style>
