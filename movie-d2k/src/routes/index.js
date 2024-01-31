import HomePage from "../views/Home.vue"
import MoviePage from "../views/Movie.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: "/", component: HomePage },
    {path: "/movie/:id", component: MoviePage },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})