import request from '../utils/request';

const nameList = ()=>{
    return request.get<string[]>('name.list');
}

const getLrc = (path:string)=>{
    return request.get<string[]>(path);
}

export default{
    nameList,
    getLrc
}