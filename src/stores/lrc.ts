import { defineStore } from "pinia";
import gitee from "../api/gitee";

export const useLrcStore = defineStore('lrc', {
    state: () => {
        return {
            data: [] as String[]
        }
    },

    actions: {
        async fetchLrc(path: string) {
            let data = await gitee.getLrc(path);
            console.log(path, data);
            this.data = data;
        }
    }
});