import axios from 'axios';
import { defineStore } from 'pinia';

import { IRule } from '../types';

interface IStoreShape {
    rules: Array<IRule>
    rule: IRule | null
    loading: boolean
    error: Error | null
}

export const useRulesStore = defineStore({
    id: 'rules',
    state: (): IStoreShape => ({
        rules: [],
        rule: null,
        loading: false,
        error: null
    }),
    getters: {
        // getPostsPerAuthor: (state) => {
        //   return (authorId) => state.posts.filter((post) => post.userId === authorId)
        // }
    },
    actions: {
        async fetchRules() {
            this.rules = []
            this.loading = true
            axios.get(`${window.frontendConfig.API_BASE}/rules`).then(({ data }) => {
                this.rules = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        },
        async fetchRule(id: string | Array<string>) {
            this.rule = null
            this.loading = true
            axios.get(`${window.frontendConfig.API_BASE}/rules/${id}`).then(({ data }) => {
                this.rule = data
            }).catch(e => {
                this.error = e
            }).finally(() => {
                this.loading = false
            })
        }
    }
})