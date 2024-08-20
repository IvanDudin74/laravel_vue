import * as VueRouter from "vue-router"


export default VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
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
            path: '/people/:id/edit',
            component: () => import('./components/Person/Edit.vue'),
            name: 'person.edit',
        },

        {
            path: '/people/:id',
            component: () => import('./components/Person/Show.vue'),
            name: 'person.show',
        },
    ]
})

