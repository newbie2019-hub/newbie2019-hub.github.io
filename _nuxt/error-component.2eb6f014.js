import{o as m,c as E,n as f,g,u as s,d as n,_ as a}from"./entry.f2c37c38.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const u=c,{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),o=r===404,i=t.statusMessage??(o?"Page Not Found":"Internal Server Error"),p=t.message||t.toString(),_=void 0,d=o?n(()=>a(()=>import("./error-404.821d2f8d.js"),["./error-404.821d2f8d.js","./nuxt-link.364a2a90.js","./entry.f2c37c38.js","./entry.6e50e0ad.css","./error-404.a441f75b.css"],import.meta.url).then(e=>e.default||e)):n(()=>a(()=>import("./error-500.b4f8ea7c.js"),["./error-500.b4f8ea7c.js","./entry.f2c37c38.js","./entry.6e50e0ad.css","./error-500.b4e85b33.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(m(),E(s(d),f(g({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=k;export{h as default};