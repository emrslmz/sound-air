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
        },
        {
            name: 'Sounds',
            path: 'play',
            meta: {
                title: 'PlaySounds',
            },
            component: () => import('@/modules/main/components/assets/sounds/PlaySounds.vue'),
        },
        {
            name: 'News',
            path: 'news',
            meta: {
                title: 'LastUpdates',
            },
            component: () => import('@/modules/main/components/assets/stable/News.vue'),
        }
    ],
}];
