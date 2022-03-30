import axios from 'axios';

import CONFIG from '../config/config'
import parseGiteeData from './parseGiteeData';

import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';

const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
    timeout: 10000,
});

instance.interceptors.response.use(result => {
    if (result.status === 200) {
        try {
            return parseGiteeData(result.data);
        } catch (error) {
            ElMessage.error('获取数据异常');
            return Promise.reject(result);
        }
    } else {
        ElMessage.error('获取数据异常');
        return Promise.reject(result);
    }
}, (error) => {
    ElMessage.error('获取数据异常');
    return Promise.reject(error);
});

export default instance;