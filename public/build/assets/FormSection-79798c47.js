import{i as d,L as l,o,e as n,c as u,w as m,r as s,f as c,a as t,l as b,n as p}from"./app-6225c7d0.js";import{S as g}from"./SectionTitle-a11d7407.js";const v={class:"mt-5 md:mt-0 md:col-span-3"},h={class:"grid grid-cols-6 gap-6"},f={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow-lg rounded-bl-3xl rounded-br-3xl border-b border-x border-gray-300"},S={__name:"FormSection",emits:["submitted"],setup(x){const r=d(()=>!!l().actions),a=d(()=>!!l().title);return(e,i)=>(o(),n("div",{class:p(["mb-5 sm:mt-0",a.value?"md:grid md:grid-cols-4 md:gap-6":""])},[a.value?(o(),u(g,{key:0,class:"pl-3"},{title:m(()=>[s(e.$slots,"title")]),description:m(()=>[s(e.$slots,"description")]),_:3})):c("",!0),t("div",v,[t("form",{onSubmit:i[0]||(i[0]=b(y=>e.$emit("submitted"),["prevent"]))},[t("div",{class:p(["px-4 py-5 bg-white bg-opacity-50 sm:p-6 shadow-lg border border-gray-300",r.value?"rounded-tl-3xl rounded-tr-3xl":"rounded-3xl"])},[t("div",h,[s(e.$slots,"form")])],2),r.value?(o(),n("div",f,[s(e.$slots,"actions")])):c("",!0)],32)])],2))}};export{S as _};
