const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bdgqvg3W.js","./BOnSkJ10.js","./Cn9obIy0.js","./DKgB2exl.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{h as f,u as m}from"./DKgB2exl.js";import{q as v,w as c,e as l,s as d,j as g,a as y,u as h}from"./Cn9obIy0.js";import{z as _,L as w,M as C,N as P,s as N,l as $,O as x,P as E,A as T,C as p}from"./BOnSkJ10.js";import{_ as j}from"./D_RcNcbj.js";const S=async t=>{const{content:e}=_().public;typeof(t==null?void 0:t.params)!="function"&&(t=v(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${l(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(d())return(await w(()=>import("./Bdgqvg3W.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:g(n),previewToken:m().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function A(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=C(),s=P(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(N(i))return r.payload.state[a]=i,i;s.value=i}return s}const D=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=E(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&A("dd-navigation").value){const{navigation:a}=y();return{navigation:a}}const{data:o}=await h(`content-navigation-${f(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=T(),{navigation:n}=t,o=s=>p(j,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=D;export{Q as default};