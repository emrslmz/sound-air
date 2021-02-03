export default [{
    path: '/',
    component: () => import('@/modules/main/views/Main.vue'),
    children: [
        {
        name: 'Home',
        path: 'home',
        meta: {
            title: 'Home',
        },
        component: () => import('@/modules/main/components/Sounds.vue'),
    }
    ],
}];
