import{i as n,j as l,p as i,o as p,e as d}from"./app-01e31d22.js";const m=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:a}){const c=a,s=e,t=n({get(){return s.checked},set(o){c("update:checked",o)}});return(o,r)=>l((p(),d("input",{"onUpdate:modelValue":r[0]||(r[0]=u=>t.value=u),type:"checkbox",value:e.value,class:"rounded bg-white border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"},null,8,m)),[[i,t.value]])}};export{k as _};
