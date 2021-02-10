export default [{
    path: '/admin',
    component: () => import('@/modules/admin/views/Admin.vue'),
    children: [
        {
        name: 'UploadSound',
        path: 'upload-sound',
        meta: {
            title: 'Upload Sound',
        },
        component: () => import('@/modules/admin/components/assets/stable/UploadSound.vue'),
        },
        {
            name: 'AdminHomePage',
            path: 'admin-home',
            meta: {
                title: 'Uploaded Sounds',
            },
            component: () => import('@/modules/admin/components/assets/home/AdminHomePage.vue'),
        },
        {
            name: 'UploadedSounds',
            path: 'uploaded-sounds',
            meta: {
                title: 'Uploaded Sounds',
            },
            component: () => import('@/modules/admin/components/assets/stable/UploadedSound.vue'),
        },
        {
            name: 'UploadedSoundEdit',
            path: 'uploaded-sounds/edit/:id',
            meta: {
                title: 'Uploaded Sounds',
            },
            component: () => import('@/modules/admin/components/assets/stable/dashboard/EditSounds.vue'),
        },
        {
            name: 'ContactUsMessages',
            path: 'contact-us-messages',
            meta: {
                title: 'Contact, Feedback Messages',
            },
            component: () => import('@/modules/admin/components/assets/stable/ContactUsMessages.vue'),
        },
        {
            name: 'BugReportMessages',
            path: 'bug-report-messages',
            meta: {
                title: 'Bug, Report Messages',
            },
            component: () => import('@/modules/admin/components/assets/stable/BugReportMessages.vue'),
        },
    ],
}];
