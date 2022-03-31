import axios, { AxiosRequestConfig } from 'axios';

import CONFIG from '../config/config'
import parseGiteeData from './parseGiteeData';

import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';

const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    config.url += "?access_token=" + CONFIG.GITEE_ACCESS_TOKEN;
    return config;
}, (error) => {
    ElMessage.error('数据请求前错误');
    return Promise.reject(error);
});

instance.interceptors.response.use(result => {
    if (result.status === 200) {
        try {
            return parseGiteeData(result.data);
        } catch (error) {
            ElMessage.error('数据或许为空');
            return Promise.reject(result);
        }
    } else {
        ElMessage.error('获取数据异常' + result.status);
        return Promise.reject(result);
    }
}, (error) => {
    ElMessage.error('服务器或网络异常');
    return Promise.reject(error);
});

export default instance;