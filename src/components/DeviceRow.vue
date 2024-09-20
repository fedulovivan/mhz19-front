<script setup lang="ts">
import { IDevice } from '../types.ts';

defineProps<{ device: IDevice }>() 
</script>

<template>
    <div class="row">
        <div>#{{ device.id }}</div>
        <div>{{ device.name ?? '-' }}</div>
        <div>{{ device.deviceId }}</div>
        <div>{{ device.deviceClassId }}</div>
        <div>{{ device.comments }}</div>
    </div>
</template>

<style scoped>
.row {
    grid-template-columns: 50px 1fr 1fr 1fr 1fr;
}
</style>