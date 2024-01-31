import HomePage from "../views/Home.vue"
import MoviePage from "../views/Movie.vue"
import SeriesPage from "../views/Series.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: "/", component: HomePage },
    {path: "/movie/:id", component: MoviePage },
    {path: "/series/:id", component: SeriesPage },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})