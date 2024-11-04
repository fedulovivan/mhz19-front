<script setup lang="ts">
import { IAction } from '../types.ts';

defineProps<{ action: IAction }>() 
</script>

<template>
    <div class="root">
        <div>fn={{ action.fn }}, args={{ action.args }}</div>
    </div>
</template>

<style scoped>
.root {
    margin-left: 20px
}
</style>