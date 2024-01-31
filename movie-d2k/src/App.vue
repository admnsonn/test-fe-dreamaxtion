<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';
import Navbar from "./components/Navbar.vue"

const film = ref(null)
const bannerFilm = ref(null)
const AsyncBanner = defineAsyncComponent(() => {
  return import("./components/Banner.vue")
})

const getMovies = async () => {
  film.value = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0b51a1ebc294f6b1df34c2a0c0406362")
    .then(res => res.json())
    .then(res => res.results)
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

onMounted(async () => {
  await getMovies()
  bannerFilm.value = film.value[getRandomInt (0, film.value.length - 1)]
})
</script>

<template>
  <Navbar />

  <AsyncBanner 
  :banner="bannerFilm"/>
</template>