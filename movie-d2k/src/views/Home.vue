<template>
    <div class="main">
        <AsyncBanner :banner="bannerFilm" />
        <br><br>
        <h2 class="text-white translate-x-[5%] justify-center text-3xl font-bold">Popular Movies</h2>
        <Movielist :film="film" />
        <h2 class="text-white translate-x-[5%] justify-center text-3xl font-bold">Popular TV Series</h2>
        <Serieslist :serial="serial" />
    </div>
</template>

<script setup>
import { onBeforeMount, ref, defineAsyncComponent } from 'vue';
import Movielist from "../components/Movielist.vue"
import Serieslist from "../components/Serieslist.vue"

const film = ref([])
const serial = ref([])
const bannerFilm = ref(null)
const AsyncBanner = defineAsyncComponent(() => {
    return import("../components/Banner.vue")
})

const getMovies = async () => {
    film.value = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0b51a1ebc294f6b1df34c2a0c0406362&language=en-US")
        .then(res => res.json())
        .then(res => res.results)
}

const getTVSeries = async () => {
    serial.value = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=0b51a1ebc294f6b1df34c2a0c0406362&language=en-US")
        .then(res => res.json())
        .then(res => res.results)
}


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

onBeforeMount(async () => {
    await getMovies()
    bannerFilm.value = film.value[getRandomInt(0, film.value.length - 1)]

    await getTVSeries()
    bannerSeries.value = serial.value[getRandomInt(0, series.value.length - 1)]
})
</script>