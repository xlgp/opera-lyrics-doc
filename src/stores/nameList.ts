import { defineStore } from 'pinia'
import { nameList } from '../utils/parseGiteeData';
import request from '../utils/request';

export const useNameListStore = defineStore('namelist', {
    state: () => {
        return {
            list: [],
        }
    },
    getters: {
        juZhongList: (state) => Object.keys(state.list)
    },
    actions: {
        async fetchNameList() {
            let data = await request.get<string[]>('name.list');
            this.list = nameList(data);
        }
    },
})