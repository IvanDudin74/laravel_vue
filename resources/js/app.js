import './bootstrap';
import {createApp} from "vue";
import * as VueRouter from "vue-router"
import IndexComponent from "@/components/IndexComponent.vue";

const routes = [
    {
        path: '/people',
        component: () => import('./components/Person/Index.vue'),
        name: 'person.index',
    },

    {
        path: '/people/create',
        component: () => import('./components/Person/Create.vue'),
        name: 'person.create',
    },

    {
        path: '/people/edit',
        component: () => import('./components/Person/Edit.vue'),
        name: 'person.edit',
    },

    {
        path: '/people/show',
        component: () => import('./components/Person/Show.vue'),
        name: 'person.show',
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


