export default [{
    path: '/',
    component: () => import('@/modules/main/views/Main.vue'),
    children: [{
        name: 'Main',
        path: 'sounds',
        meta: {
            title: 'Main',
        },
        component: () => import('@/modules/main/components/Sounds.vue'),
    }],
}];
