<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <nav
        class="flex text-white items-center gap-20 absolute left-0 right-0 mx-6 py-4 top-4 bg-transparent border-b-2 border-neutral-400">
        <RouterLink to="/" class="flex text-2xl items-center font-bold gap-2">
            <img src="../assets/logo.png" width="40" alt="">
            <span>Rumah Ensik</span>
        </RouterLink>
        <ul class="flex items-center gap-4 font-semibold">
            <RouterLink tag="li" class="col" class-active="active" to="/" exact>Dashboard</RouterLink>
        </ul>
    </nav>
</template>

<style scoped>
.logo{
    width: 10%;
}
</style>