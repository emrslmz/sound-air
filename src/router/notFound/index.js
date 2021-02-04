export default [{
    path: '*',
    component: () => import('@/modules/not-found/views/NotFound.vue'),
    children: [
        // {
        //     name: 'not',
        //     path: 'not',
        //     meta: {
        //         title: 'not',
        //     },
        //     component: () => import('@/modules/not.vue'),
        // },
    ],
}];
