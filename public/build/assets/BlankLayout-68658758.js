import{d as i,s as c,i as o,L as l,o as d,e as m,b as s,u as p,Z as f,a as e,r as g,n as u}from"./app-bd6038e9.js";import{_,a as h}from"./OnlineStatus-e233dfbd.js";import"./index-58c9e70f.js";const v={class:"sticky top-0 z-50"},y={class:"sticky top-0 z-50"},S={class:"min-h-screen bg-white relative isolate flex justify-center items-center"},k=e("div",{class:"fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true"},[e("div",{class:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%-30rem)]",style:{"clip-path":"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})],-1),w=e("div",{class:"fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true"},[e("div",{class:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%+36rem)]",style:{"clip-path":"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})],-1),$={__name:"BlankLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(n){const a=i(!1);return typeof window<"u"&&(a.value=JSON.parse(localStorage.getItem("darkmode"))??!1,c(a,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))})),i(!1),o(()=>!!l().action),o(()=>!!l().previous),(t,x)=>{var r;return d(),m("div",{class:u(["transition duration-1000",a.value?"nightwind dark":"nightwind"])},[s(p(f),{title:n.title+" - "+((r=t.$page.props.appSetting)==null?void 0:r.name)},null,8,["title"]),e("div",v,[s(_)]),e("div",y,[s(h)]),e("div",S,[k,w,g(t.$slots,"default")])],2)}}};export{$ as _};