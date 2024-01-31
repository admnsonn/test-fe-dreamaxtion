<script setup>
import getImage from '../lib/getImage';
import { Icon } from '@iconify/vue';
import { RouterLink } from "vue-router"
const { series } = defineProps(["series"])
import Swal from 'sweetalert2';
const {
    id,
    original_name,
    overview,
    backdrop_path: background,
    poster_path: poster,
    release_date,
    vote_average: vote,
    original_language: language
} = series

const addToWatchlist = () => {
    Swal.fire({
        title: `Ditambahkan ke Watchlist`,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
    });
    console.log(`Added ${original_name} to the watchlist`);
}

const openDeletePopup = () => {
    Swal.fire({
        title: `Apakah kamu ingin menghapus ${original_name} dari watchlist?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            confirmDelete();
        }
    });
}

const confirmDelete = () => {
    console.log(`Deleted ${original_name} from the watchlist`);
    showDeletePopup.value = false;
}
console.log(series)
const description = overview.length <= 60 ? overview : overview.slice(0, 60)
</script>

<template>
    <RouterLink :to="`/series/${id}`">
        <div class="w-full h-full grid grid-rows-[4fr_1fr]">
            <div class="relative group w-full h-full">
                <img :src="getImage(poster)"
                    class="w-full h-full transition rounded-md group-hover:blur-sm cursor-pointer" />
                <div
                    class="group-hover:opacity-100 transition-opacity opacity-0 absolute left-[-50%] top-[50%] translate-x-[50%] flex flex-col gap-2 w-full font-semibold text-white">
                    <div class="w-full flex flex-col items-center justify center">
                        <button>
                            <Icon icon="ic:round-play-arrow" width="60" class="hover:text-blue-900" />
                        </button>
                    </div>
                </div>
                <div class="absolute top-4 right-4 px-2 bg-blue-900 py-1 rounded-md">
                    <p class="flex items-center gap-1 justify-center text-white">
                        <span>{{ vote }}</span>
                        <Icon icon="material-symbols:star-rounded" color="white" />
                    </p>
                </div>
                <div>
                    <br>
                    <h1 class="text-xl font-semibold my-2 text-white">{{ original_name }}</h1>
                    <p class="text-neutral-400 text-sm">{{ description }}</p>
                </div>
                <div class="absolute top-4 left-4 flex items-center gap-2">
                    <button @click="addToWatchlist"
                        class="flex items-center gap-1 justify-center text-white bg-yellow-500 px-2 py-1 rounded-md">
                        <Icon icon="mdi:playlist-plus" class="text-white" />
                    </button>
                    <button @click="openDeletePopup"
                        class="flex items-center gap-1 justify-center text-white bg-red-500 px-2 py-1 rounded-md">
                        <Icon icon="mdi:playlist-remove" class="text-white" />
                    </button>
                </div>
            </div>
        </div>
    </RouterLink>
    <div v-if="showDeletePopup" class="popup-container">
        <div class="popup-content">
            <p>Are you sure you want to remove {{ original_name }} from the watchlist?</p>
            <button @click="confirmDelete" class="bg-red-500 text-white px-2 py-1 rounded-md">Confirm</button>
            <button @click="showDeletePopup = false" class="bg-gray-500 text-white px-2 py-1 rounded-md">Cancel</button>
        </div>
    </div>
</template>