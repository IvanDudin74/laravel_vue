import './bootstrap';
import {createApp} from "vue";
import * as VueRouter from "vue-router"
import IndexComponent from "@/components/IndexComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
import TagComponent from "@/components/TagComponent.vue";

const routes = [
    {
        path: '/',
        component: IndexComponent,
    },
    {
        path: '/posts',
        component: PostComponent,
    },
    {
        path: '/tags',
        component: TagComponent,
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = createApp({})
app.use(router)
app.component("index-component", IndexComponent)
app.mount('#app')


