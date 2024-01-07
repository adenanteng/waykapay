import{d as _,T as V,o as g,c as I,w as l,g as m,a as n,b as s,j as v,v as h,e as $,f as x,k as B,l as N,u as t,n as U}from"./app-01e31d22.js";import{_ as C}from"./ActionMessage-e5901eb7.js";import{_ as P}from"./FormSection-655d6329.js";import{_ as d}from"./InputError-ac269078.js";import{_ as p}from"./InputLabel-0625e1d5.js";import{_ as j}from"./PrimaryButton-bea28cd7.js";import{_ as z}from"./SecondaryButton-75ae5a45.js";import{_ as b}from"./TextInput-af00b154.js";import"./SectionTitle-69c6479f.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={class:"col-span-6 sm:col-span-4"},L={class:"mt-2"},A=["src","alt"],D={class:"mt-2"},R={class:"col-span-6 sm:col-span-4"},T={class:"col-span-6"},X={__name:"UpdateAppInformationForm",props:{setting:Object},setup(f){const i=f,u=_(null),a=_(null),e=V({id:i.setting.id??null,name:i.setting.name??null,desc:i.setting.desc??null,photo:null}),k=()=>{a.value&&(e.photo=a.value.files[0]),e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0,onSuccess:()=>S()})},w=()=>{a.value.click()},y=()=>{const r=a.value.files[0];if(!r)return;const o=new FileReader;o.onload=c=>{u.value=c.target.result},o.readAsDataURL(r)},S=()=>{var r;(r=a.value)!=null&&r.value&&(a.value.value=null)};return(r,o)=>(g(),I(P,{onSubmitted:k},{title:l(()=>[m(" Informasi Umum ")]),description:l(()=>[m(" Informasi umum tentang aplikasi ")]),form:l(()=>[n("div",F,[n("input",{ref_key:"photoInput",ref:a,type:"file",class:"hidden",onChange:y},null,544),s(p,{for:"photo",value:"Logo"}),v(n("div",L,[i.setting.media!=null?(g(),$("img",{key:0,src:i.setting.media[0].original_url,alt:f.setting.name,class:"rounded-full h-20 w-20 object-cover"},null,8,A)):x("",!0)],512),[[h,!u.value]]),v(n("div",D,[n("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:B("background-image: url('"+u.value+"');")},null,4)],512),[[h,u.value]]),s(z,{class:"mt-2 mr-2 border border-gray-300",type:"button",onClick:N(w,["prevent"])},{default:l(()=>[m(" Ubah Logo ")]),_:1}),s(d,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])]),n("div",R,[s(p,{for:"name",value:"Nama"}),s(b,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=c=>t(e).name=c),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name",required:""},null,8,["modelValue"]),s(d,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),n("div",T,[s(p,{for:"desc",value:"Slogan"}),s(b,{id:"desc",modelValue:t(e).desc,"onUpdate:modelValue":o[1]||(o[1]=c=>t(e).desc=c),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),s(d,{message:t(e).errors.desc,class:"mt-2"},null,8,["message"])])]),actions:l(()=>[s(C,{on:t(e).recentlySuccessful,class:"mr-3"},{default:l(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),s(j,{class:U({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:l(()=>[m(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{X as default};
