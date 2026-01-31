<script setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("시작~!");
});
onUnmounted(() => {
  console.log("끝~!");
});
</script>
<template><div>mypage</div></template>
<style scoped></style>
