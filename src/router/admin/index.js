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
            name: 'UploadedSounds',
            path: 'uploaded-sounds',
            meta: {
                title: 'Uploaded Sounds',
            },
            component: () => import('@/modules/admin/components/assets/stable/UploadedSound.vue'),
        },
    ],
}];
