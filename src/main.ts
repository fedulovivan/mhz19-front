import './style.css';

import { createApp } from 'vue';

import { createPinia } from 'pinia';
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';

import App from './App.vue';
import DeviceEditor from './components/DeviceEditor.vue';
import Devices from './components/Devices.vue';
import Home from './components/Home.vue';
import Messages from './components/Messages.vue';
import RuleEditor from './components/RuleEditor.vue';
import Rules from './components/Rules.vue';

const pinia = createPinia()

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//         count.value++
//     }
//     return { count, doubleCount, increment }
// })

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/rules', component: Rules },
    { path: '/rules/:id', component: RuleEditor },
    { path: '/devices', component: Devices },
    { path: '/devices/:id', component: DeviceEditor },
    { path: '/messages', component: Messages },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
