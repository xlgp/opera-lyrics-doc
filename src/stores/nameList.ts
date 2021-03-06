import { defineStore } from 'pinia'
import { nameList } from '../utils/parseGiteeData';
import Api from '../api/gitee'

interface DataType{
    [key:string]:Array<string>
}

export const useNameListStore = defineStore('namelist', {
    state: () => {
        return {
            data: {} as DataType,
        }
    },
    getters: {
        juZhongList: (state) => Object.keys(state.data),
        list:(status)=>Object.values(status.data)
    },
    actions: {
        async fetchNameList() {
            let data = await Api.nameList() as unknown as string[];
            this.data = nameList(data);
        }
    },
})