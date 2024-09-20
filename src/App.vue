<script setup lang="ts">

</script>

<template>

    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rules">Rules</RouterLink>
        <RouterLink to="/devices">Devices</RouterLink>
        <RouterLink to="/messages">Messages</RouterLink>
    </div>

    <RouterView />

</template>

<style scoped>
.nav {
    display: flex;
    gap: 10px;
}

.router-link-active {
    color: green
}
</style>

<!-- <Rules title="Rules list" />
    <Devices />
    <Messages /> -->
<!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} -->
