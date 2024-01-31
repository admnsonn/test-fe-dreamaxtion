<template>
    <div class="search-popup">
      <label for="searchInput" class="text-white text-lg font-semibold mb-2">
        Search Movie/TV Series:
      </label>
      <div class="flex items-center">
        <input
          v-model="searchQuery"
          @input="search"
          id="searchInput"
          type="text"
          class="border-2 border-gray-300 p-2 rounded-l-md focus:outline-none"
          placeholder="Enter your search query"
        />
        <button @click="clearSearch" class="bg-blue-500 text-white p-2 rounded-r-md focus:outline-none">
          Clear
        </button>
      </div>
      <Movielist v-if="searchResults.movies" :film="searchResults.movies" />
      <Serieslist v-if="searchResults.series" :serial="searchResults.series" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  const searchResults = ref({ movies: [], series: [] });
  
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
  
  const clearSearch = () => {
    searchQuery.value = '';
    searchResults.value = { movies: [], series: [] };
  }
  </script>
  
  <style scoped>
  .search-popup {
    max-width: 400px;
    padding: 20px;
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
  }
  </style>
  