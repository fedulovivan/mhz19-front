<script setup lang="ts">
import {
    onMounted,
    watch,
} from 'vue';

import { storeToRefs } from 'pinia';
import {
    useRoute,
    useRouter,
} from 'vue-router';

import { useDevicesStore } from '../stores/devices.ts';
import { useLdmStore } from '../stores/ldm.ts';
import { extractDeviceIdString } from '../utils.ts';

const route = useRoute()

const router = useRouter()

const { device, error: deviceError } = storeToRefs(useDevicesStore())
const { message } = storeToRefs(useLdmStore())
const { fetchDevice, updateName } = useDevicesStore()
const { fetchMessage } = useLdmStore()

onMounted(async function () {
    await router.isReady()
    fetchDevice(route.params.id)
    fetchMessage(route.params.id)
})

const save = () => {
    updateName(
        extractDeviceIdString(device.value.deviceId!!),
        device.value.name!!,
    )
}

// watch(device, (newDevice, oldDevice) => {
//     console.log(newDevice, oldDevice)
// })

</script>

<template>

    <div class="columns">
        <div class="field column">
            <label class="label">Native Id</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" :value="device?.deviceId" disabled>
            </div>
        </div>
        <div class="field column">
            <label class="label">Class</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" :value="device?.deviceClass" disabled>
            </div>
        </div>
    </div>

    <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="device.name">
        </div>
    </div>
    <div class="field">
        <label class="label">Json</label>
        <div class="control">
            <textarea class="textarea is-small" placeholder="10 lines of textarea" rows="15" disabled>
        {{ device.json }}
        </textarea>
        </div>
    </div>
    <button class="button" @click="save">Save</button>
    {{ deviceError }}
    <!-- {{ messageError }} -->
</template>

<!-- <div class="container block"> -->
<!-- <pre>{{ device }}</pre>
<pre>{{ message }}</pre> -->
<!-- </div> -->
<!-- <RouterLink to="/devices">← Devices</RouterLink>
    <pre>{{ message }}</pre> -->
<!-- <template>
    <RouterLink to="/rules">← Rules</RouterLink>
    <label>
        Name:
    </label>
    <input type="text" v-model="rule.name" />
    <label>
        Condition:
    </label>
    <textarea readonly>{{ rule.condition }}</textarea>
    <label>
        Actions:
    </label>
    <textarea readonly>{{ rule.actions }}</textarea>
    <button @click="onSave">Save</button>
</template> -->

<style scoped>
/* label,
textarea {
    display: block
}

input {
    width: 100%;
}

textarea {
    width: 100%;
    height: 100px;
} */
</style>