import{v as B,d as _,c as I,w as a,o as h,g as i,a as l,b as o,D as v,E as g,e as x,f as V,L as $,B as C,u as t,n as N}from"./app.a23797f5.js";import{_ as U}from"./ActionMessage.59b97e66.js";import{_ as F}from"./FormSection.b8a53074.js";import{_ as b}from"./InputError.dc8d7427.js";import{_ as k}from"./InputLabel.9bbaf73d.js";import{_ as D}from"./PrimaryButton.d9585310.js";import{_ as L}from"./SecondaryButton.06fc0ff3.js";import{_ as j}from"./TextInput.f70e0561.js";import"./SectionTitle.7dff3197.js";import"./_plugin-vue_export-helper.cdc0426e.js";const z={class:"col-span-6 sm:col-span-4"},E={key:0,class:"mt-2"},R=["src","alt"],A={class:"mt-2"},M={class:"col-span-6 sm:col-span-4"},Y={__name:"UpdateProfileInformationForm",props:{carousel:Object|null},setup(w){var f,d;const n=w,e=B({id:(f=n.carousel.id)!=null?f:null,href:(d=n.carousel.href)!=null?d:null,photo:null}),u=_(null),s=_(null),y=()=>{s.value&&(e.photo=s.value.files[0]),e.id==null?e.post(route("carousel.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>p()}):e.put(route("carousel.update",e),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>p()})},P=()=>{s.value.click()},S=()=>{const r=s.value.files[0];if(!r)return;const c=new FileReader;c.onload=m=>{u.value=m.target.result},c.readAsDataURL(r)},p=()=>{var r;(r=s.value)!=null&&r.value&&(s.value.value=null)};return(r,c)=>(h(),I(F,{onSubmitted:y},{title:a(()=>[i(" Informasi Profil ")]),description:a(()=>[i(" Update your account's profile information and email address. ")]),form:a(()=>[l("div",z,[l("input",{ref_key:"photoInput",ref:s,type:"file",class:"hidden",onChange:S},null,544),o(k,{for:"photo",value:"Photo"}),n.carousel?v((h(),x("div",E,[l("img",{src:n.carousel.media[0].original_url,alt:n.carousel.href,class:"h-20 w-auto aspect-video rounded-3xl object-cover"},null,8,R)],512)),[[g,!u.value]]):V("",!0),v(l("div",A,[l("span",{class:"block h-20 w-auto aspect-video rounded-3xl bg-cover bg-no-repeat bg-center",style:$("background-image: url('"+u.value+"');")},null,4)],512),[[g,u.value]]),o(L,{class:"mt-2 mr-2",type:"button",onClick:C(P,["prevent"])},{default:a(()=>[i(" Ubah Foto ")]),_:1},8,["onClick"]),o(b,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])]),l("div",M,[o(k,{for:"href",value:"Link"}),o(j,{id:"href",modelValue:t(e).href,"onUpdate:modelValue":c[0]||(c[0]=m=>t(e).href=m),type:"text",class:"mt-1 block w-full",autocomplete:"href"},null,8,["modelValue"]),o(b,{message:t(e).errors.href,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(U,{on:t(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),o(D,{class:N({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{Y as default};