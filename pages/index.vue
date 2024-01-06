<template>
  <Loader />
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

definePageMeta({
  layout: "loadingpage",
});

onMounted(() => {
  setTimeout(() => {
    router.push("/home");
  }, 2000);
});
</script>
