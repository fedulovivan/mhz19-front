<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useStatsStore } from '../stores/stats.ts';

const { stats } = storeToRefs(useStatsStore())
const { fetchStats } = useStatsStore()
fetchStats()
</script>
<template>
    <div>Home</div>
    <pre>{{ stats }}</pre>
</template>