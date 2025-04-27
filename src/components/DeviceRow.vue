<script setup lang="ts">
import {
    IDevice,
    IMessage,
} from '../types.ts';
import { extractDeviceIdString } from '../utils.ts';

defineProps<{ device: IDevice; message?: IMessage }>()

</script>

<template>
    <router-link :to="`/devices/${extractDeviceIdString(device.deviceId)}`" custom v-slot="{ navigate }">
        <tr @click="navigate">
            <td>#{{ device.id }}</td>
            <td>{{ device.deviceClass }}</td>
            <td>{{ device.deviceId }}</td>
            <td>{{ device.name ?? '-' }}</td>
            <td>{{ device.buriedTimeout ?? '-' }}</td>
            <td>{{ message?.payload ?? '-' }}</td>
            <td>{{ device.comments ?? '-' }}</td>
            <td>{{ device.origin ?? '-' }}</td>
        </tr>
    </router-link>
</template>