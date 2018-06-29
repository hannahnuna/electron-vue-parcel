import VueRouter from 'vue-router'

import Home from './view/Home.vue'

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
    ]
});

export default router;