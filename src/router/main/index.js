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
        },
        {
            name: 'ReportError',
            path: 'report-error',
            meta: {
                title: 'Report Bugs or Error',
            },
            component: () => import('@/modules/main/components/assets/stable/ReportError.vue'),
        },
        {
            name: 'PrivacyAndTerms',
            path: 'privacy-and-terms',
            meta: {
                title: 'PrivacyAndTerms',
            },
            component: () => import('@/modules/main/components/assets/stable/PrivacyAndTerms.vue'),
        },
        {
            name: 'TheFAQ',
            path: 'FAQ',
            meta: {
                title: 'Frequently Asked Questions',
            },
            component: () => import('@/modules/main/components/assets/stable/TheFaq.vue'),
        },
        {
            name: 'ShareApp',
            path: 'share',
            meta: {
                title: 'Share the App',
            },
            component: () => import('@/modules/main/components/assets/stable/ShareApp.vue'),
        },
        {
            name: 'AccordingWeather',
            path: 'according-to-weather',
            meta: {
                title: 'According to the Weather sounds',
            },
            component: () => import('@/modules/main/components/assets/stable/AccordingWeather.vue'),
        },
        {
            name: 'RateUsPage',
            path: 'rate-us',
            meta: {
                title: 'Rate us to improve',
            },
            component: () => import('@/modules/main/components/assets/stable/RateUs.vue'),
        },

        {
            name: 'Category',
            path: 'category',
            meta: {
                title: 'Play the Category Page',
            },
            component: () => import('@/modules/main/components/assets/sounds/PlayCategory.vue'),
        },
        {
            name: 'ForLessonVerticalAngle',
            path: 'vertical-angle-calculation',
            meta: {
                title: 'Lesson 1',
            },
            component: () => import('@/modules/main/components/assets/extras/VerticalAngleCalculation.vue'),
        },
    ],
}];
