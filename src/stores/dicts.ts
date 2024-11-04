import axios from 'axios';
import { defineStore } from 'pinia';

import { IDicts } from '../types';

interface IStoreShape {
    dicts: Partial<IDicts>
    loading: boolean
    error: Error | null
}

export const useDictsStore = defineStore({
    id: 'dicts',
    state: (): IStoreShape => ({
        dicts: {},
        loading: false,
        error: null
    }),
    getters: {
        getActions: (state) => {
            return () => state.dicts.actions
        },
        getConditions: (state) => {
            return () => state.dicts.conditions
        },
        getChannels: (state) => {
            return () => state.dicts.channels
        },
        getDeviceClasses: (state) => {
            return () => state.dicts.deviceClasses
        },
    },
    actions: {
        async fetchDicts() {
            this.dicts = {}
            this.loading = true
            axios.get(`${window.frontendConfig.API_BASE}/dicts`).then(({ data }) => {
                this.dicts = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        },
    }
})