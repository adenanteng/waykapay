import{T as v,o as V,c as b,w as t,g as i,a as n,b as l,u as s,n as S}from"./app-e077f49a.js";import{_ as $}from"./ActionMessage-9ae9cb72.js";import{_ as k}from"./FormSection-50ad4769.js";import{_ as m}from"./InputError-910de77e.js";import{_ as u}from"./InputLabel-3757dc56.js";import{_ as w}from"./PrimaryButton-102cbc2c.js";import{_ as d}from"./TextInput-0df19320.js";import{_ as f}from"./SelectInput-3ac64054.js";import"./SectionTitle-bcd98137.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"col-span-6 sm:col-span-3"},B={class:"col-span-6 sm:col-span-2"},U={class:"col-span-6 sm:col-span-2"},q={class:"col-span-6 sm:col-span-2"},y={class:"col-span-6 sm:col-span-2"},E={__name:"UpdateInformationForm",props:{users:Object|String},setup(_){const r=_,e=v({id:r.users.id??null,name:r.users.name??null,email:r.users.email??null,phone:r.users.phone??null,status_id:r.users.status_id??null,role_id:r.users.role_id??null}),g=()=>{r.users.name==null?e.post(route("user.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{p()}}):e.put(route("user.update",e.id),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{p()}})},p=()=>{e.defaults({id:null,name:null,email:null,role_id:null}),e.reset()};return(c,a)=>(V(),b(k,{onSubmitted:g},{title:t(()=>[i(" Informasi Pengguna ")]),description:t(()=>[i(" Perbarui informasi profil akun dan alamat email pengguna. ")]),form:t(()=>[n("div",h,[l(u,{for:"name",value:"Nama"}),l(d,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=o=>s(e).name=o),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name",required:""},null,8,["modelValue"]),l(m,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),n("div",B,[l(u,{for:"email",value:"Email"}),l(d,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).email=o),type:"email",class:"mt-1 block w-full",autocomplete:"email",required:""},null,8,["modelValue"]),l(m,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])]),n("div",U,[l(u,{for:"phone",value:"Telepon"}),l(d,{id:"phone",modelValue:s(e).phone,"onUpdate:modelValue":a[2]||(a[2]=o=>s(e).phone=o),type:"tel",class:"mt-1 block w-full",autocomplete:"phone",required:""},null,8,["modelValue"]),l(m,{message:s(e).errors.phone,class:"mt-2"},null,8,["message"])]),n("div",q,[l(u,{value:"Status"}),l(f,{"model-value":s(e).status_id,"onUpdate:modelValue":a[3]||(a[3]=o=>s(e).status_id=o),"model-valueModifiers":{number:!0},option:c.$page.props.selectStatus,class:"mt-1 block w-full",required:""},null,8,["model-value","option"]),l(m,{message:s(e).errors.status_id,class:"mt-2"},null,8,["message"])]),n("div",y,[l(u,{value:"Peran"}),l(f,{"model-value":s(e).role_id,"onUpdate:modelValue":a[4]||(a[4]=o=>s(e).role_id=o),"model-valueModifiers":{number:!0},option:c.$page.props.selectRole,class:"mt-1 block w-full",required:""},null,8,["model-value","option"]),l(m,{message:s(e).errors.role_id,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[l($,{on:s(e).recentlySuccessful,class:"mr-3"},{default:t(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),l(w,{class:S({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:t(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{E as default};