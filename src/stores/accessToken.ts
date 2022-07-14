import { defineStore } from "pinia";
import config from "../config/config";

export const useGiteeAccessTokenStore = defineStore('giteeAccessToken', {
    state: () => {
        return {
            data: ''
        }
    },

    actions: {
        get() {
            this.data = config.GITEE_ACCESS_TOKEN;
        },
        set(token: string) {
            this.data = token;
            config.GITEE_ACCESS_TOKEN = this.data;
        }
    }
});