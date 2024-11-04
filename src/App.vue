<script setup lang="ts">
import { useDictsStore } from './stores/dicts.ts';

// import { storeToRefs } from 'pinia';
// const { dicts } = storeToRefs(useDictsStore())
const { fetchDicts } = useDictsStore()
fetchDicts()
</script>

<template>

    <div class="tabs">
        <ul>
            <!-- https://router.vuejs.org/guide/advanced/extending-router-link -->
            <!-- <li>
                <RouterLink to="/">Home</RouterLink>
            </li> -->
            <!-- <li>
                <RouterLink to="/rules">Rules</RouterLink>
            </li> -->
            <!-- <li>
                <RouterLink to="/devices">Devices</RouterLink>
            </li> -->
            <!-- <li>
                <RouterLink to="/messages">Messages</RouterLink>
            </li> -->
            <router-link to="/" custom v-slot="{ href, navigate, isActive }">
                <li :class="{ 'is-active': isActive }"><a :href="href" @click="navigate">Home</a></li>
            </router-link>
            <router-link to="/devices" custom v-slot="{ href, navigate, isActive }">
                <li :class="{ 'is-active': isActive }"><a :href="href" @click="navigate">Devices</a></li>
            </router-link>
            <router-link to="/rules" custom v-slot="{ href, navigate, isActive }">
                <li :class="{ 'is-active': isActive }"><a :href="href" @click="navigate">Rules</a></li>
            </router-link>
            <router-link to="/messages" custom v-slot="{ href, navigate, isActive }">
                <li :class="{ 'is-active': isActive }"><a :href="href" @click="navigate">Messages</a></li>
            </router-link>
        </ul>
    </div>

    <!-- <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rules">Rules</RouterLink>
        <RouterLink to="/devices">Devices</RouterLink>
        <RouterLink to="/messages">Messages</RouterLink>
    </div> -->

    <div class="container">
        <RouterView />
    </div>

    <!-- {{ dicts }} -->

</template>

<style scoped>
/* .nav {
    display: flex;
    gap: 10px;
}

.router-link-active {
    color: green
} */
</style>