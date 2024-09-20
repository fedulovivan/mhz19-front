<script setup lang="ts">
import {
    onMounted,
    ref,
} from 'vue';

import axios from 'axios';
import {
    useRoute,
    useRouter,
} from 'vue-router';

import { IRule } from '../types.ts';

const rule = ref<Partial<IRule>>({})
const route = useRoute()

const onSave = console.log

const router = useRouter()
onMounted(async function () {
    await router.isReady()
    axios.get(`http://localhost:8080/api/rules/${route.params.id}`).then(({ data }) => {
        rule.value = data
    })
})

</script>

<template>
    <RouterLink to="/rules">← Rules</RouterLink>
    <label>
        Name:
    </label>
    <input type="text" v-model="rule.name" />
    <label>
        Condition:
    </label>
    <textarea readonly>{{ rule.condition }}</textarea>
    <label>
        Actions:
    </label>
    <textarea readonly>{{ rule.actions }}</textarea>
    <button @click="onSave">Save</button>
    <!-- {{ rule }} -->
</template>

<style scoped>
label,
textarea {
    display: block
}

input {
    width: 100%;
}

textarea {
    width: 100%;
    height: 100px;
}
</style>