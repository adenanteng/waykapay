import{v as P,d as _,c as x,w as a,o as h,g as i,a as r,b as o,D as v,E as g,e as C,f as I,L as V,B as $,u as t,n as N}from"./app.4763e647.js";import{_ as F}from"./ActionMessage.f3fa41d0.js";import{_ as L}from"./FormSection.c081acfb.js";import{_ as b}from"./InputError.8c18e553.js";import{_ as k}from"./InputLabel.5e6a658a.js";import{_ as U}from"./PrimaryButton.32cac93a.js";import{_ as D}from"./SecondaryButton.61fdc76d.js";import{_ as j}from"./TextInput.0c1ef0d4.js";import"./SectionTitle.5fa7251b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const z={class:"col-span-6 sm:col-span-4"},E={key:0,class:"mt-2"},R=["src","alt"],A={class:"mt-2"},M={class:"col-span-6 sm:col-span-4"},Y={__name:"UpdateProfileInformationForm",props:{carousel:Object|null},setup(w){var d,f;const n=w,e=P({id:(d=n.carousel.id)!=null?d:null,href:(f=n.carousel.href)!=null?f:null,photo:null}),u=_(null),s=_(null),y=()=>{s.value&&(e.photo=s.value.files[0]),e.id==null?e.post(route("carousel.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>p()}):e.put(route("carousel.update",e),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>p()})},S=()=>{s.value.click()},B=()=>{const l=s.value.files[0];if(!l)return;const c=new FileReader;c.onload=m=>{u.value=m.target.result},c.readAsDataURL(l)},p=()=>{var l;(l=s.value)!=null&&l.value&&(s.value.value=null)};return(l,c)=>(h(),x(L,{onSubmitted:y},{title:a(()=>[i(" Carousel ")]),description:a(()=>[i(" Lorem ipsum dolor sit amet ")]),form:a(()=>[r("div",z,[r("input",{ref_key:"photoInput",ref:s,type:"file",class:"hidden",onChange:B},null,544),o(k,{for:"photo",value:"Photo"}),n.carousel?v((h(),C("div",E,[r("img",{src:n.carousel.media[0].original_url,alt:n.carousel.href,class:"h-20 w-auto aspect-video rounded-3xl object-cover"},null,8,R)],512)),[[g,!u.value]]):I("",!0),v(r("div",A,[r("span",{class:"block h-20 w-auto aspect-video rounded-3xl bg-cover bg-no-repeat bg-center",style:V("background-image: url('"+u.value+"');")},null,4)],512),[[g,u.value]]),o(D,{class:"mt-2 mr-2",type:"button",onClick:$(S,["prevent"])},{default:a(()=>[i(" Ubah Foto ")]),_:1},8,["onClick"]),o(b,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])]),r("div",M,[o(k,{for:"href",value:"Link"}),o(j,{id:"href",modelValue:t(e).href,"onUpdate:modelValue":c[0]||(c[0]=m=>t(e).href=m),type:"text",class:"mt-1 block w-full",autocomplete:"href"},null,8,["modelValue"]),o(b,{message:t(e).errors.href,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(F,{on:t(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),o(U,{class:N({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{Y as default};
