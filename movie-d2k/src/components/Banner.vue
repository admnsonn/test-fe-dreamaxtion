<script setup>
import getImage from "../lib/getImage"
const { banner } = defineProps(["banner"])
const {
    title,
    overview: description,
    backdrop_path: background,
    release_date,
    vote_avarage: vote,
    original_language: language
} = banner
</script>

<template>
    <div class="w-screen h-screen"
    :style="{
        backgroundImage: 'url('+getImage(background)+')',
        backgroundPosition: 'center center'
    }">
    </div>
</template>

