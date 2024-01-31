<template>
    <div class="main">
        <AsyncBanner :banner="bannerFilm" />
        <Movielist :film="film" />
    </div>
</template>

<script setup>
import { onBeforeMount, ref, defineAsyncComponent } from 'vue';
import Movielist from "../components/Movielist.vue"

const film = ref([])
const bannerFilm = ref(null)
const AsyncBanner = defineAsyncComponent(() => {
    return import("../components/Banner.vue")
})

const getMovies = async () => {
    film.value = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0b51a1ebc294f6b1df34c2a0c0406362&language=en-US")
        .then(res => res.json())
        .then(res => res.results)
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

onBeforeMount(async () => {
    await getMovies()
    bannerFilm.value = film.value[getRandomInt(0, film.value.length - 1)]
})
</script>