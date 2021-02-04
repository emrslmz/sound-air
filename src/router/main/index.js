export default [{
    path: '/',
    component: () => import('@/modules/main/views/Main.vue'),
    children: [
        {
        name: 'Main',
        path: '',
        meta: {
            title: 'Main',
        },
        component: () => import('@/modules/main/components/assets/main/MainArea.vue'),
         },
        {
            name: 'Contact Us',
            path: 'contact-us',
            meta: {
                title: 'ContactUs',
            },
            component: () => import('@/modules/main/components/assets/stable/ContactUs.vue'),
        }
    ],
}];
