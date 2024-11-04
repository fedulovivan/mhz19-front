<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useRulesStore } from '../stores/rules.ts';
import { useStatsStore } from '../stores/stats.ts';
import RuleRow from './RuleRow.vue';

const { getRuleCounter } = storeToRefs(useStatsStore())
const { fetchStats } = useStatsStore()

const { rules/* , loading, error */ } = storeToRefs(useRulesStore())
const { fetchRules } = useRulesStore()
fetchStats()
fetchRules()
</script>

<template>
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Counter</th>
            </tr>
        </thead>
        <tbody>
            <RuleRow v-for="rule in rules" :rule="rule" :counter="getRuleCounter(rule.id)" />
        </tbody>
    </table>
</template>
