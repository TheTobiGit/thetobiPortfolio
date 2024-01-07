<template>
  <div class="">
    <PageTitle :title="title" />
  </div>
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
