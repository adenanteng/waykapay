import{d as i,z as c,o,e as u,F as p,h as d,t as m}from"./app-01e31d22.js";const f=["value"],g=["value"],b={__name:"SelectInput",props:{modelValue:String|Number,option:Object|Array},emits:["update:modelValue"],setup(a,{expose:s}){const e=i(null);return c(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(n,r)=>(o(),u("select",{ref_key:"input",ref:e,class:"bg-white text-black border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm",value:a.modelValue,onInput:r[0]||(r[0]=t=>n.$emit("update:modelValue",t.target.value))},[(o(!0),u(p,null,d(a.option,(t,l)=>(o(),u("option",{value:l},m(t),9,g))),256))],40,f))}};export{b as _};
