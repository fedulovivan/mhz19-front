<script setup lang="ts">
import {
    onMounted,
    ref,
} from 'vue';

import axios from 'axios';

import { IRule } from '../types.ts';
import RuleRow from './RuleRow.vue';

const rules = ref<Array<IRule>>([])
onMounted(function () {
    axios.get(`http://localhost:8080/api/rules`).then(({ data }) => {
        rules.value = data
    })
})
</script>


<template>
    <RuleRow v-for="rule in rules" :rule="rule" />
</template>


<style scoped>
.row {
    grid-template-columns: 50px 1fr 1fr;
}
</style>

<!-- defineProps<{ title: string }>() -->
<!-- <h1>{{ title }}</h1> -->
<!-- // const count = ref(0) -->
<!-- <button type="button" @click="count++">count is {{ count }}</button> -->
<!-- {{ rules?.[0]?.name }} -->
<!-- <div class="card">
  <button type="button" @click="count++">count is {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test HMR
  </p>
</div>
<p>
  Check out 1
  <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
  >, the official Vue + Vite starter
</p>
<p>
  Learn more about IDE Support for Vue in the
  <a
    href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
    target="_blank"
    >Vue Docs Scaling up Guide</a
  >.
</p>
<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
<!-- .read-the-docs {
color: #888;
} -->
