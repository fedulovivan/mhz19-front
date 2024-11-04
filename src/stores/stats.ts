import axios from 'axios';
import { defineStore } from 'pinia';

import { IStats } from '../types';

interface IStoreShape {
    stats: Partial<IStats>
    loading: boolean
    error: Error | null
}

export const useStatsStore = defineStore({
    id: 'stats',
    state: (): IStoreShape => ({
        stats: {},
        loading: false,
        error: null
    }),
    getters: {
        getRuleCounter: (state) => {
            return (ruleId: number) => state.stats.counters?.[`rule-${ruleId}`] ?? 0
        }
    },
    actions: {
        async fetchStats() {
            this.stats = {}
            this.loading = true
            axios.get(`${window.frontendConfig.API_BASE}/stats`).then(({ data }) => {
                this.stats = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        },
    }
})