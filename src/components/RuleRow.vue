<script setup lang="ts">
import { IRule } from '../types.ts';

defineProps<{ rule: IRule }>() 
</script>

<template>
    <div class="row">
        <div>#{{ rule.id }}</div>
        <div>{{ rule.name }}</div>
        <RouterLink :to="`/rules/${rule.id}`">Edit</RouterLink>
    </div>
</template>

<!-- <style scoped>
.row {
    grid-template-columns: 50px 1fr 1fr;
}
</style> -->