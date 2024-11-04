<script setup lang="ts">
import { IRule } from '../types.ts';

defineProps<{ rule: IRule, counter: number }>() 
</script>

<template>
    <router-link :to="`/rules/${rule.id}`" custom v-slot="{ navigate }">
        <tr @click="navigate">
            <td>#{{ rule.id }}</td>
            <td>{{ rule.name }}</td>
            <td>{{ counter }}</td>
        </tr>
    </router-link>
</template>
