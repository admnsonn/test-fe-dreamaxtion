<script setup>
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div class="main">
    <Navbar />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
.main{
  background-color: black;
}
</style>