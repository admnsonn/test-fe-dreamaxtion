<template>
    <div class="movie-details">
      <img :src="getImage(poster)" alt="Movie Poster" class="movie-poster" />
      <div class="details-container">
        <h1 class="title">{{ title }}</h1>
        <p class="overview">{{ overview }}</p>
        <div class="additional-details">
          <p>Release Date: {{ release_date }}</p>
          <p>Vote Average: {{ Math.round(vote) }}/10</p>
          <p>Popularity: {{ popularity }}</p>
          <p>Duration: {{ movieDuration }}h / {{ runtime }} minutes</p>
        </div>
        <button @click="addToWatchlist" class="add-to-watchlist-button">
          Add to Watchlist
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import getImage from "../lib/getImage";
  
  const {
    title,
    overview,
    poster_path: poster,
    release_date,
    vote_average: vote,
    popularity,
    runtime
  } = movie.value;
  
  const movieDuration = Math.round(runtime / 60);
  
  const { addToWatchlist } = defineProps(["addToWatchlist"]);
  </script>
  
  <style scoped>
  .movie-details {
    display: flex;
    margin: 20px;
  }
  
  .movie-poster {
    width: 200px;
    height: 300px;
    margin-right: 20px;
  }
  
  .details-container {
    flex: 1;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .overview {
    margin-bottom: 15px;
  }
  
  .additional-details {
    margin-bottom: 15px;
  }
  
  .add-to-watchlist-button {
    padding: 10px;
    background-color: #3490dc;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .add-to-watchlist-button:hover {
    background-color: #2779bd;
  }
  </style>
  