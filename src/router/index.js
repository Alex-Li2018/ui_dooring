import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
        hidden: true
    },
    {
        path: '/editor',
        component: () => import('@/pages/editor/index.vue'),
        hidden: true
    },
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
        hidden: true
    },
    {
        path: '/me',
        component: () => import('@/pages/me/index.vue'),
        hidden: true
    },
];

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(savedPosition);
                }, 1600);
            });
        }
        return { x: 0, y: 0 };
    },
    routes: constantRoutes
});

const router = createRouter();

export default router;
