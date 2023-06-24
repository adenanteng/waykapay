import{d as $,s as k,o as d,e as f,F as w,h as B,t as I,v as x,c as h,w as t,g as c,a as _,b as a,u as s,n as N}from"./app.70ec5318.js";import{_ as U}from"./ActionMessage.9c2784f7.js";import{_ as q}from"./FormSection.e787922f.js";import{_ as g}from"./InputError.356c67e7.js";import{_ as v}from"./InputLabel.21483e70.js";import{_ as F}from"./PrimaryButton.3ac0663e.js";import{_ as y}from"./TextInput.76a7ca2c.js";import"./SectionTitle.6afa7dc3.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["value"],j=["value"],z={__name:"SelectInput",props:{modelValue:String|Number,option:Object|Array},emits:["update:modelValue"],setup(i,{expose:l}){const e=$(null);return k(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),l({focus:()=>e.value.focus()}),(p,n)=>(d(),f("select",{ref_key:"input",ref:e,class:"bg-white text-black border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm",value:i.modelValue,onInput:n[0]||(n[0]=o=>p.$emit("update:modelValue",o.target.value))},[(d(!0),f(w,null,B(i.option,(o,m)=>(d(),f("option",{value:m},I(o),9,j))),256))],40,P))}},A={class:"col-span-6 sm:col-span-3"},C={class:"col-span-6 sm:col-span-2"},E={class:"col-span-6 sm:col-span-2"},K={__name:"UpdateInformationForm",props:{users:Object|String},setup(i){var o,m,b,V;const l=i,e=x({id:(o=l.users.id)!=null?o:null,name:(m=l.users.name)!=null?m:null,email:(b=l.users.email)!=null?b:null,role_id:(V=l.users.role_id)!=null?V:null}),p=()=>{l.users.name==null?e.post(route("user.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{n()}}):e.put(route("user.update",e.id),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{n()}})},n=()=>{e.defaults({id:null,name:null,email:null,role_id:null}),e.reset()};return(S,r)=>(d(),h(q,{onSubmitted:p},{title:t(()=>[c(" Informasi Pengguna ")]),description:t(()=>[c(" Perbarui informasi profil akun dan alamat email pengguna. ")]),form:t(()=>[_("div",A,[a(v,{for:"name",value:"Nama"}),a(y,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=u=>s(e).name=u),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name",required:""},null,8,["modelValue"]),a(g,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),_("div",C,[a(v,{for:"email",value:"Email"}),a(y,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[1]||(r[1]=u=>s(e).email=u),type:"email",class:"mt-1 block w-full",autocomplete:"email",required:""},null,8,["modelValue"]),a(g,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])]),_("div",E,[a(v,{value:"Peran"}),a(z,{"model-value":s(e).role_id,"onUpdate:modelValue":r[2]||(r[2]=u=>s(e).role_id=u),"model-valueModifiers":{number:!0},option:S.$page.props.selectRole,class:"mt-1 block w-full",required:""},null,8,["model-value","option"]),a(g,{message:s(e).errors.role_id,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[a(U,{on:s(e).recentlySuccessful,class:"mr-3"},{default:t(()=>[c(" Berhasil disimpan. ")]),_:1},8,["on"]),a(F,{class:N({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:t(()=>[c(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{K as default};
