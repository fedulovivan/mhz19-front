<script setup lang="ts">
import {
    ICondition,
    IDictItem,
} from '../types.ts';

defineProps<{ condition: ICondition, conditionsDict?: Array<IDictItem> }>() 
</script>

<template>
    <div class="root">
        <div>fn={{ condition.fn }}, args={{ condition.args }}</div>
        <div v-if="condition.nested?.length">logic={{ condition.or ? "Or" : "And" }}</div>
        <div class="nested">
            <Condition v-for="condition in condition.nested" :condition="condition" :conditionsDict="conditionsDict" />
        </div>
        <select v-model="condition.fn">
            <option v-for="item in conditionsDict" :value="item.name">{{ item.name }}</option>
        </select>
    </div>
</template>

<style scoped>
.root {
    margin-left: 20px
}
</style>