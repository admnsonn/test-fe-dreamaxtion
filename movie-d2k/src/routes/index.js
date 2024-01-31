import HomePage from "../views/Home.vue"
import MoviePage from "../views/Movie.vue"
import {createRouter} from "vue-router"

export const routes = [
    {path: "/", component: HomePage },
    {path: "/movie:id", component: HomePage },
]