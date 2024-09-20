import './style.css';

import { createApp } from 'vue';

import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import App from './App.vue';
import Devices from './components/Devices.vue';
import Home from './components/Home.vue';
import Messages from './components/Messages.vue';
import RuleEditor from './components/RuleEditor.vue';
import Rules from './components/Rules.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/rules', component: Rules },
    { path: '/rules/:id', component: RuleEditor },
    { path: '/devices', component: Devices },
    { path: '/messages', component: Messages },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
