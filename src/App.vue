<script setup>
import { onMounted, onUnmounted } from "vue";
import { useCounterStore } from "./stores/counter";
const counter = useCounterStore();

onMounted(() => {
  console.log("시작~!");
});
onUnmounted(() => {
  console.log("끝~!");
});
</script>

<template>
  <div>
    <P>{{ counter.count }}</P>
    <button @click="counter.decrement()">-</button>
    <button @click="counter.increment()">+</button>
  </div>
</template>

<style scoped></style>
