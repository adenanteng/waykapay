import{d as n,B as c,i as r,o as g,e as m,b as a,u as p,Z as f,a as s,r as u,n as _,D as l}from"./app.f10bb34b.js";import{_ as S,a as k}from"./OnlineStatus.252b549b.js";import"./index.acc78f65.js";const h={class:"sticky top-0 z-50"},v={class:"sticky top-0 z-50"},y={class:"min-h-screen bg-gray-100 bg-glass bg-fixed flex justify-center items-center"},N={__name:"BlankLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(d){var o;const t=n(!1);return typeof window<"u"&&(t.value=(o=JSON.parse(localStorage.getItem("darkmode")))!=null?o:!1,c(t,e=>{console.log(`darkmode is ${e}`),localStorage.setItem("darkmode",JSON.stringify(e))})),n(!1),r(()=>!!l().action),r(()=>!!l().previous),(e,B)=>{var i;return g(),m("div",{class:_(["transition duration-1000",t.value?"nightwind dark":"nightwind"])},[a(p(f),{title:d.title+" - "+((i=e.$page.props.appSetting)==null?void 0:i.name)},null,8,["title"]),s("div",h,[a(S)]),s("div",v,[a(k)]),s("div",y,[u(e.$slots,"default")])],2)}}};export{N as _};