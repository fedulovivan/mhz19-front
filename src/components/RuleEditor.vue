<script setup lang="ts">
import { onMounted } from 'vue';

import { storeToRefs } from 'pinia';
import {
    useRoute,
    useRouter,
} from 'vue-router';

import { useDictsStore } from '../stores/dicts.ts';
import { useRulesStore } from '../stores/rules.ts';
import Action from './Action.vue';
import Condition from './Condition.vue';

const { getConditions } = storeToRefs(useDictsStore())


const onSave = console.log
const { rule, loading, error } = storeToRefs(useRulesStore())
const { fetchRule } = useRulesStore()
const route = useRoute()
const router = useRouter()
onMounted(async function () {
    await router.isReady()
    fetchRule(route.params.id)
})
</script>

<template>
    <RouterLink to="/rules">← Rules</RouterLink>
    <label>
        Name:
    </label>
    <input v-if="rule" type="text" v-model="rule.name" />
    <label>
        Condition:
    </label>
    <Condition v-if="rule" :condition="rule.condition" :conditionsDict="getConditions()" />
    <label>
        Actions:
    </label>
    <Action v-if="rule" v-for="action in rule.actions" :action="action" />
    <button @click="onSave">Save</button>
    {{ loading }}
    {{ error }}
    {{ rule }}
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
    height: 200px;
}
</style>