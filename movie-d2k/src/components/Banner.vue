<script setup>
import getImage from "../lib/getImage"
const { banner } = defineProps(["banner"])
const {
    title,
    overview,
    backdrop_path: background,
    release_date,
    vote_avarage: vote,
    original_language: language
} = banner
const description = overview.length <= 200 ? overview : overview.slice(0, 200)  
</script>

<template>
    <div 
    class="w-screen h-screen"
    :style="{
        backgroundImage: 'url('+ getImage(background)+')',
        backgroundPosition: 'center center'
    }">
    <div class="text-white p-10 flex flex-col justify-center w-full h-full bg-gradient-to-r from-black to to-transparent">
        <h1 class="text-8xl font-bold">{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
    </div>
</template>

