<script setup>
import Moviecard from "./Moviecard.vue"
const {film} = defineProps({
    film: Array
})
</script>

<template>
    <div class="grid grid-cols-4 gap-4 mx-20 my-10">
        <Moviecard
        v-for="movie in film"
        :key="Math.random() * 10000"
        :movie="movie" />
    </div>
</template>