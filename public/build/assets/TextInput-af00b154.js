import{d as s,z as l,o as n,e as i}from"./app-01e31d22.js";const p=["value"],d={__name:"TextInput",props:{modelValue:String|Number},emits:["update:modelValue"],setup(u,{expose:t}){const e=s(null);return l(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(r,o)=>(n(),i("input",{ref_key:"input",ref:e,class:"bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=a=>r.$emit("update:modelValue",a.target.value))},null,40,p))}};export{d as _};
