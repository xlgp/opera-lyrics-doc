import{d as O,a as w,E as v,b as R,c as y,e as F,r as N,o as p,f as h,g,h as f,w as u,i as l,u as d,j as I,t as D,F as E,k as T,l as V,m as $,n as j,p as G,q as U,s as H,v as q,x as K,y as M,z as W,A as Z,B as J,C as Q,D as X,G as Y,H as z,I as ee,J as te,K as re,L as ne,M as oe,N as ae,O as se,P as le}from"./vendor.024afdbd.js";const ue=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};ue();let ce=e=>{let n={};return e.forEach(o=>{if(!o.startsWith("./"))return!1;let t=o.split("/");t.length==3&&(n[t[1]]=n[t[1]]||[],n[t[1]].push(t[2]))}),n};var ie=e=>{if(e&&e.content)return O(e.content).split(`
`);throw new Error("\u6570\u636E\u4E0D\u5B58\u5728")},P={BASE_URL:"https://gitee.com/api/v5/repos/xlgp/opera-lyrics/contents/",GITEE_ACCESS_TOKEN:"a08de9c4e4ccc4154a4ea64880141481"};const b=w.create({baseURL:P.BASE_URL,timeout:1e4});b.interceptors.request.use(e=>(e.url+="?access_token="+P.GITEE_ACCESS_TOKEN,e),e=>(v.error("\u6570\u636E\u8BF7\u6C42\u524D\u9519\u8BEF"),Promise.reject(e)));b.interceptors.response.use(e=>{if(e.status===200)try{return ie(e.data)}catch{return v.error("\u6570\u636E\u6216\u8BB8\u4E3A\u7A7A"),Promise.reject(e)}else return v.error("\u83B7\u53D6\u6570\u636E\u5F02\u5E38"+e.status),Promise.reject(e)},e=>(v.error("\u670D\u52A1\u5668\u6216\u7F51\u7EDC\u5F02\u5E38"),Promise.reject(e)));const _e=()=>b.get("name.list"),pe=e=>b.get(e);var de={nameList:_e,getLrc:pe};const me=R("namelist",{state:()=>({data:{}}),getters:{juZhongList:e=>Object.keys(e.data),list:e=>Object.values(e.data)},actions:{async fetchNameList(){let e=await de.nameList();this.data=ce(e)}}});var L=(e,n)=>{const o=e.__vccOpts||e;for(const[t,r]of n)o[t]=r;return o};const fe=y({props:{data:Array,parent:String},setup(e){const n=e,{data:o,parent:t}=n,r=F(()=>"/"+t+"/");return(a,s)=>{const c=N("router-link"),i=T,_=V;return p(!0),h(E,null,g(d(o),(m,x)=>(p(),f(_,{key:x},{default:u(()=>[l(i,null,{default:u(()=>[l(c,{to:d(r)+m,class:"link","active-class":"active",exact:""},{default:u(()=>[I(D(m),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128)}}});var he=L(fe,[["__scopeId","data-v-1bd747e8"]]);const Ee=y({props:{options:null},setup(e){const n=e,o=$(),t=j(""),{options:r}=G(n),a=(c,i)=>"/"+c+"/"+i,s=c=>o.push(c);return(c,i)=>{const _=U,m=H,x=q;return p(),f(x,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=C=>t.value=C),onChange:s,filterable:"",placeholder:"\u67E5\u8BE2\u5531\u6BB5",class:"el-select"},{default:u(()=>[(p(!0),h(E,null,g(d(r),(C,S)=>(p(),f(m,{key:S,label:S},{default:u(()=>[(p(!0),h(E,null,g(C,k=>(p(),f(_,{key:k,label:k,value:a(S,k)},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}}});var ve=L(Ee,[["__scopeId","data-v-79563d7e"]]);const ge=y({setup(e){const n=me(),o=K(),t=F(()=>o.params.path);return M(()=>{n.fetchNameList()}),(r,a)=>{const s=W,c=Z,i=J;return p(),h(E,null,[l(ve,{options:d(n).data},null,8,["options"]),l(c,{modelValue:d(t),"onUpdate:modelValue":a[0]||(a[0]=_=>Q(t)?t.value=_:null)},{default:u(()=>[(p(!0),h(E,null,g(d(n).juZhongList,(_,m)=>(p(),f(s,{label:_,name:_},{default:u(()=>[l(he,{data:d(n).list[m],parent:_},null,8,["data","parent"])]),_:2},1032,["label","name"]))),256))]),_:1},8,["modelValue"]),l(i,{right:100,bottom:100})],64)}}});var ye=L(ge,[["__scopeId","data-v-67871c6b"]]);const be=y({setup(e){return(n,o)=>{const t=X,r=Y,a=z,s=ee,c=N("router-view"),i=te,_=re;return p(),f(_,{class:"fixed"},{default:u(()=>[l(r,{width:"400px"},{default:u(()=>[l(t,null,{default:u(()=>[l(ye)]),_:1})]),_:1}),l(_,null,{default:u(()=>[l(s,null,{default:u(()=>[l(a,{content:"\u5531\u8BCD\u4FE1\u606F"})]),_:1}),l(i,null,{default:u(()=>[l(c)]),_:1})]),_:1})]),_:1})}}});var Le=L(be,[["__scopeId","data-v-0bc73dd7"]]);const xe="modulepreload",A={},Ce="/opera-lyrics-doc/",Se=function(n,o){return!o||o.length===0?n():Promise.all(o.map(t=>{if(t=`${Ce}${t}`,t in A)return;A[t]=!0;const r=t.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":xe,r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r)return new Promise((c,i)=>{s.addEventListener("load",c),s.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())};var ke=[{path:"/",name:"index",redirect:{path:"/\u9EC4\u6885\u620F/\u8C46\u89D2\u513F\u9999.lrc"}},{path:"/:path/:name",name:"lrc",component:()=>Se(()=>import("./Lrc.ce8b8e52.js"),["assets/Lrc.ce8b8e52.js","assets/Lrc.05efae94.css","assets/vendor.024afdbd.js","assets/vendor.a5e6ce36.css"])}];const B=ne({history:oe(),routes:ke});B.beforeEach((e,n,o)=>{o()});B.afterEach((e,n,o)=>{ae(o)&&console.log("failed navigation",o)});se(Le).use(B).use(le()).mount("#app");export{L as _,de as g};
