<script setup>
import Seriescard from "./Seriescard.vue"
const {serial} = defineProps({
    serial: Array
})
</script>

<template>
    <div class="grid grid-cols-4 gap-4 mx-20 my-10">
        <Seriescard
        v-for="series in serial"
        :key="Math.random() * 10000"
        :series="series" />
    </div>
</template>