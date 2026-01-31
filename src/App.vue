<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/myPage">myPage</router-link>
    <router-view :key="$route.fullPath" />
  </nav>
</template>

<style scoped></style>
