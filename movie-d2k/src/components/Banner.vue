<script setup>
import getImage from "../lib/getImage"
import { Icon } from '@iconify/vue';
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
    <div class="w-screen h-screen" :style="{
        backgroundImage: 'url(' + getImage(background) + ')',
        backgroundPosition: 'center center'
    }">
        <div
            class="text-white p-10 flex flex-col justify-center w-full h-full bg-gradient-to-r from-black to to-transparent">
            <h1 class="text-8xl font-bold">{{ title }}</h1>
            <p class="mt-2 w-1/2 text-sm text-neutral-400">{{ description }}</p>
            <button
                class="flex items-center gap-1 px-6 py-4 rounded-md bg-blue-900 w-fit mt-4 transition hover:bg-neutral-800 font-semibold">
                <span>Lihat Lainnya</span>
                <span>
                    <Icon icon="mingcute:right-fill" />
                </span>
            </button>
        </div>
    </div>
</template>

