import Vue from 'vue';
import VueRouter from 'vue-router';

import MainRouters from './main/index';
import AdminRouters from './admin/index';

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes.concat(MainRouters, AdminRouters),
});

export default router;
