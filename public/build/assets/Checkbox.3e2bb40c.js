import{i as u,D as n,G as l,u as d,o as p,e as i,H as m}from"./app.70ec5318.js";const f=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(t,{emit:a}){const s=t,e=u({get(){return s.checked},set(o){a("update:checked",o)}});return(o,r)=>n((p(),i("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>m(e)?e.value=c:null),type:"checkbox",value:t.value,class:"rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"},null,8,f)),[[l,d(e)]])}};export{k as _};
