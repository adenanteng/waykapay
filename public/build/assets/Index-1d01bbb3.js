import{_ as f}from"./AppLayout-2fd639ab.js";import{o as t,e as s,a as e,f as y,g as x,t as i,n as v,F as n,z as b,O as c,c as p,w as _,b as u,h as g}from"./app-d15140aa.js";import"./moment-6da99bba.js";import k from"./Loading-6776a886.js";import{_ as w}from"./PreviousButton-6af7e794.js";import"./OnlineStatus-aa067937.js";import"./index-55cb8662.js";import"./DarkmodeToggle-ff6084d1.js";import"./helper-04030b53.js";import"./use-controllable-ddb8b388.js";import"./use-resolve-button-type-c7860f5d.js";import"./vue3-otp-input.esm-22899ad1.js";import"./DialogModal-4b68c206.js";import"./PrimaryButton-564733c9.js";import"./InputError-2f00cf80.js";import"./BackgroundParticle-9fc64be9.js";import"./use-outside-click-70d9a0f3.js";import"./focus-management-177679fd.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"-ml-1 mr-1.5 h-2 w-2 opacity-50",fill:"currentColor",viewBox:"0 0 8 8"},$=e("circle",{cx:"4",cy:"4",r:"3"},null,-1),B=[$],C=e("template",null,[e("div",{class:"bg-green-100 text-green-800"}),e("div",{class:"bg-amber-100 text-amber-800"}),e("div",{class:"bg-red-100 text-red-800"}),e("div",{class:"bg-gray-100 text-gray-800"})],-1),S={__name:"Badge",props:{name:String|Number,class:{type:String,default:"bg-primary-100 text-primary-800"},dot:{type:Boolean,default:!1}},setup(r){const a=r;return(m,l)=>(t(),s(n,null,[e("span",{class:v(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",a.class])},[r.dot?(t(),s("svg",N,B)):y("",!0),x(" "+i(r.name),1)],2),C],64))}},V={class:""},z={class:"text-sm text-gray-500 font-medium ml-5 mt-5 mb-1 flex items-center uppercase"},F={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"},T={class:"relative px-4 py-3 flex items-center space-x-3"},D={class:"flex-shrink-0"},L=["src"],O=["src"],A={class:"flex-1 min-w-0"},E={class:"text-sm font-medium text-gray-900 capitalize"},I={class:"text-sm text-gray-500 truncate"},M={class:""},j=["onClick"],q=e("i",{class:"fa-regular fa-trash text-lg text-red-600"},null,-1),G=[q],de={__name:"Index",props:{customer:void 0},setup(r){const a=r;b(()=>{c.reload({only:["customer"]})});const m=l=>{c.delete(route("transaction-customer.destroy",l),{preserveScroll:!0,onFinish:()=>c.reload({only:["customer"]})})};return(l,H)=>(t(),p(f,{title:"Nomor Tersimpan",name:"Nomor Tersimpan",desc:"Nomor tersimpan"},{previous:_(()=>[u(w)]),default:_(()=>[e("div",V,[a.customer===void 0?(t(),p(k,{key:0})):(t(!0),s(n,{key:1},g(a.customer,(d,h)=>(t(),s(n,null,[e("h3",z,[x(i(h.replaceAll("-"," "))+" ",1),u(S,{name:d.length+" Nomor",class:"ml-3 text-xs text-primary-600 bg-primary-100"},null,8,["name"])]),e("ul",F,[(t(!0),s(n,null,g(d,o=>(t(),s("li",T,[e("div",D,[e("img",{class:"w-8",src:"/img/vendor/"+o.brand+".png",alt:""},null,8,L),e("img",{class:"w-8",src:"/img/vendor/"+o.brand+".svg",alt:""},null,8,O)]),e("div",A,[e("p",E,i(o.customer_name),1),e("p",I,i(o.customer_no),1)]),e("div",M,[e("button",{onClick:J=>m(o),class:"mr-2"},G,8,j)])]))),256))])],64))),256))])]),_:1}))}};export{de as default};
