import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: "Home | Thomas McKyer"
            },
            methods: { 
                scrollToTop() {
                     window.scrollTo(0,0);
                }
             }
        },
        {
            path: '/about',
            name: 'about',
            component : () => import('./views/About.vue'),
            meta: {
                title: "About | Thomas McKyer"
            },
            methods: { 
                scrollToTop() {
                     window.scrollTo(0,0);
                }
             }
        },
        {
            path: '/resume',
            name: 'resume',
            component : () => import('./views/Resume.vue'),
            meta: {
                title: "Resume | Thomas McKyer"
            },
            methods: { 
                scrollToTop() {
                     window.scrollTo(0,0);
                }
             }
        }
    ],
    
    mode: 'history'
})
