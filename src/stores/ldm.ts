import axios from 'axios';
import { defineStore } from 'pinia';

import { IMessage } from '../types';

interface IStoreShape {
    messages: Array<IMessage>
    message: IMessage | null
    loading: boolean
    error: Error | null
}

export const useLdmStore = defineStore({
    id: 'ldm',
    state: (): IStoreShape => ({
        messages: [],
        message: null,
        loading: false,
        error: null
    }),
    getters: {
        findMessage: (state) => {
            return (deviceId: string) => state.messages.find(message => {
                return message.deviceId == deviceId;
            })
        }
    },
    actions: {
        async fetchMessages() {
            this.messages = []
            this.loading = true
            axios.get(`${window.frontendConfig.API_BASE}/last-device-messages`).then(({ data }) => {
                this.messages = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        },
        async fetchMessage(id: string | Array<string>) {
            this.message = null
            this.loading = true
            axios.get(`${window.frontendConfig.API_BASE}/last-device-messages/${id}`).then(({ data }) => {
                this.message = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        }
    }
})