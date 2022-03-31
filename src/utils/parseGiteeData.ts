import { decode } from 'js-base64';

export let nameList = (list:string[])=>{
    let juZhong:any = {};
    list.forEach(element => {
        if(!element.startsWith('./')) return false; //终止本次循环

        let data = element.split('/');

        if(data.length == 3){
            juZhong[data[1]] = juZhong[data[1]] || [];
            juZhong[data[1]].push(data[2]);
        }
    });
    return juZhong;
}

export default (data: any) => {
    if(data && data.content){
        let content = decode(data.content);
        return content.split('\n');
    }
    throw new Error("数据不存在");
}