<template>
    <div class="watchlist">
      <h2 class="watchlist-title">My Watchlist</h2>
      <ul class="movie-list">
        <li v-for="movie in watchlist" :key="movie.id" class="watchlist-item">
          {{ movie.title }}
          <button @click="removeFromWatchlist(movie.id)" class="remove-from-watchlist-button">
            Remove
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const watchlist = ref([]);
  
  const addToWatchlist = (movie) => {
    watchlist.value.push(movie);
  };
  
  const removeFromWatchlist = (movieId) => {
    watchlist.value = watchlist.value.filter((movie) => movie.id !== movieId);
  };
  
  onMounted(() => {
  });
  
  const { addToWatchlist: parentAddToWatchlist } = defineProps(["addToWatchlist"]);
  
  // If addToWatchlist prop is provided, use it to add movies to the watchlist
  if (parentAddToWatchlist) {
    watchEffect(() => {
      addToWatchlist(parentAddToWatchlist);
    });
  }
  </script>
  
  <style scoped>
  .watchlist {
    margin: 20px;
  }
  
  .watchlist-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .movie-list {
    list-style: none;
    padding: 0;
  }
  
  .watchlist-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .remove-from-watchlist-button {
    padding: 5px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .remove-from-watchlist-button:hover {
    background-color: #c82333;
  }
  </style>
  