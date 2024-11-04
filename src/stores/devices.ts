import axios from 'axios';
import { defineStore } from 'pinia';

import { IDevice } from '../types';

interface IStoreShape {
    devices: Array<IDevice>
    device: Partial<IDevice>
    loading: boolean
    error: Error | null
}

export const useDevicesStore = defineStore({
    id: 'devices',
    state: (): IStoreShape => ({
        devices: [],
        device: {},
        loading: false,
        error: null
    }),
    getters: {
        // getPostsPerAuthor: (state) => {
        //   return (authorId) => state.posts.filter((post) => post.userId === authorId)
        // }
    },
    actions: {
        async fetchDevices() {
            this.devices = []
            this.loading = true
            this.error = null
            axios.get(`${window.frontendConfig.API_BASE}/devices`).then(({ data }) => {
                this.devices = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        },
        async fetchDevice(id: string | Array<string>) {
            this.device = {}
            this.loading = true
            this.error = null
            axios.get(`${window.frontendConfig.API_BASE}/devices/${id}`).then(({ data }) => {
                this.device = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        },
        async updateName(id: string, name: string) {
            this.loading = true
            this.error = null
            axios
                .post(`${window.frontendConfig.API_BASE}/devices/${id}`, { name })
                .catch(e => { this.error = e })
                .finally(() => { this.loading = false })
        }
    }
})