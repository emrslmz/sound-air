export default [{
    path: '/admin',
    component: () => import('@/modules/admin/views/Admin.vue'),
    children: [
        {
        name: 'Feedbacks',
        path: 'feedbacks',
        meta: {
            title: 'Feedbacks',
        },
        component: () => import('@/modules/admin/components/Feedbacks.vue'),
    },
    {
        name: 'Feedbacks',
        path: 'settings',
        meta: {
            title: 'Feedbacks',
        },
        component: () => import('@/modules/admin/components/Feedbacks.vue'),
    }
    ],
}];
