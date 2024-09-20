<script setup lang="ts">
import {
    onMounted,
    ref,
} from 'vue';

import axios from 'axios';

import { IDevice } from '../types.ts';
import DeviceRow from './DeviceRow.vue';

const devices = ref<Array<IDevice>>([])
onMounted(function () {
    axios.get(`http://localhost:8080/api/devices`).then(({ data }) => {
        devices.value = data
    })
})
</script>
<template>
    <DeviceRow v-for="device in devices" :device="device" />
</template>