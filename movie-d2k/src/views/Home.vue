<template>
    <div class="home">
        <AsyncBanner :banner="bannerFilm" />
        <br><br>
        <div class="search-section">
            <h2 class="text-white translate-x-[5%] justify-center text-3xl font-bold">
                Search Results
            </h2>
            <br>
            <div class="flex translate-x-[5%] items-center">
                <input v-model="searchQuery" @input="search" id="searchInput" type="text"
                    class="focus:outline-none w-full border h-12 shadow p-4 rounded-full w-full"
                    placeholder="Search Movie/Tv Series" />
            </div>
            <Movielist v-if="searchResults.movies" :film="searchResults.movies" class="mt-1" />
            <Serieslist v-if="searchResults.series" :serial="searchResults.series" />
        </div>
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
import Recomlist from "../components/Recomlist.vue"
import { useRouter } from "vue-router";

const router = useRouter()
const film = ref([])
const serial = ref([])
const recom = ref([])
const searchQuery = ref('');
const searchResults = ref({ movies: [], series: [] });
const recomId = router.currentRoute.value.params.id
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

const getRecomended = async () => {
    recom.value = await fetch(`https://api.themoviedb.org/3/movie/${recomId}/recommendations?api_key=0b51a1ebc294f6b1df34c2a0c0406362&language=en-US`)
        .then(res => res.json())
        .then(res => res.results)
}

const search = async () => {
    if (searchQuery.value.trim() === '') {
        searchResults.value = { movies: [], series: [] };
        return;
    }

    const searchMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b51a1ebc294f6b1df34c2a0c0406362&language=en-US&query=${searchQuery.value}`)
        .then(res => res.json())
        .then(res => res.results);

    const searchSeries = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=0b51a1ebc294f6b1df34c2a0c0406362&language=en-US&query=${searchQuery.value}`)
        .then(res => res.json())
        .then(res => res.results);

    searchResults.value = { movies: searchMovies, series: searchSeries };
}


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

onBeforeMount(async () => {
    await getMovies()
    bannerFilm.value = film.value[getRandomInt(0, film.value.length - 1)]

    await getTVSeries()
    serial.value[getRandomInt(0, serial.value.length - 1)]
});
</script>

<style scope>
<style scoped>.home {
    max-width: 800px;
    margin: auto;
}

.search-section {
    margin: 1px;
}

#searchInput {
    width: 70%;
}

button {
    cursor: pointer;
}
</style>