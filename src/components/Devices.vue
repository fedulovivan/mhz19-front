<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useDevicesStore } from '../stores/devices.ts';
import { useLdmStore } from '../stores/ldm.ts';
import DeviceRow from './DeviceRow.vue';

const { devices/* , loading: devicesLoading, error */ } = storeToRefs(useDevicesStore())
const { findMessage/* , loading: ldmLoading */ } = storeToRefs(useLdmStore())
const { fetchDevices } = useDevicesStore()
const { fetchMessages } = useLdmStore()
fetchDevices()
fetchMessages()
</script>

<template>
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>Id</th>
                <th>Class</th>
                <th>Native Id</th>
                <th>Name</th>
                <th>Buried Timeout</th>
                <th>Last Message</th>
                <th>Comments</th>
                <th>Origin</th>
            </tr>
        </thead>
        <tbody>
            <DeviceRow v-for="device in devices" :device="device" :message="findMessage(device.deviceId)" />
        </tbody>
    </table>
</template>

<style scoped>
/* .row {
    grid-template-columns: 50px repeat(7, 1fr)
}

.header {
    font-weight: bold
} */
</style>