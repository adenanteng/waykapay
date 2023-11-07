import{T as E,d as v,c as w,w as i,o as p,g as n,e as C,a as s,b as a,E as _,G as k,L as N,C as g,f as b,u as o,j,n as T,O as z}from"./app.d165525e.js";import{_ as A}from"./ActionMessage.4298c09d.js";import{_ as F}from"./FormSection.50a683f2.js";import{_ as d}from"./InputError.8b506fdd.js";import{_ as f}from"./InputLabel.297baff6.js";import{_ as L}from"./PrimaryButton.11909b25.js";import{_ as S}from"./SecondaryButton.4fe4ce7f.js";import{_ as y}from"./TextInput.be954670.js";import"./SectionTitle.65fdb34e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const O={key:0,class:"col-span-6 sm:col-span-4"},D={class:"mt-2"},R=["src","alt"],G={class:"mt-2"},H={class:"col-span-6 sm:col-span-4"},K={class:"col-span-6 sm:col-span-4"},M={class:"col-span-6 sm:col-span-4"},q={key:0},J={class:"text-sm mt-2"},Q={class:"mt-2 font-medium text-sm text-green-600"},ie={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const h=u,e=E({_method:"PUT",name:h.user.name,email:h.user.email,phone:h.user.phone,photo:null}),P=v(null),c=v(null),r=v(null),$=()=>{r.value&&(e.photo=r.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>V()})},x=()=>{P.value=!0},I=()=>{r.value.click()},U=()=>{const t=r.value.files[0];if(!t)return;const l=new FileReader;l.onload=m=>{c.value=m.target.result},l.readAsDataURL(t)},B=()=>{z.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{c.value=null,V()}})},V=()=>{var t;(t=r.value)!=null&&t.value&&(r.value.value=null)};return(t,l)=>(p(),w(F,{onSubmitted:$},{title:i(()=>[n(" Informasi Profil ")]),description:i(()=>[n(" Perbarui informasi profil akun dan alamat email kamu. ")]),form:i(()=>[t.$page.props.jetstream.managesProfilePhotos?(p(),C("div",O,[s("input",{ref_key:"photoInput",ref:r,type:"file",class:"hidden",onChange:U},null,544),a(f,{for:"photo",value:"Photo"}),_(s("div",D,[s("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,R)],512),[[k,!c.value]]),_(s("div",G,[s("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:N("background-image: url('"+c.value+"');")},null,4)],512),[[k,c.value]]),a(S,{class:"mt-2 mr-2",type:"button",onClick:g(I,["prevent"])},{default:i(()=>[n(" Ubah Avatar ")]),_:1},8,["onClick"]),u.user.profile_photo_path?(p(),w(S,{key:0,type:"button",class:"mt-2",onClick:g(B,["prevent"])},{default:i(()=>[n(" Hapus Avatar ")]),_:1},8,["onClick"])):b("",!0),a(d,{message:o(e).errors.photo,class:"mt-2"},null,8,["message"])])):b("",!0),s("div",H,[a(f,{for:"name",value:"Nama"}),a(y,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":l[0]||(l[0]=m=>o(e).name=m),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name"},null,8,["modelValue"]),a(d,{message:o(e).errors.name,class:"mt-2"},null,8,["message"])]),s("div",K,[a(f,{for:"phone",value:"Telepon"}),a(y,{id:"phone",modelValue:o(e).phone,"onUpdate:modelValue":l[1]||(l[1]=m=>o(e).phone=m),type:"tel",class:"mt-1 block w-full capitalize"},null,8,["modelValue"]),a(d,{message:o(e).errors.phone,class:"mt-2"},null,8,["message"])]),s("div",M,[a(f,{for:"email",value:"Email"}),a(y,{id:"email",modelValue:o(e).email,"onUpdate:modelValue":l[2]||(l[2]=m=>o(e).email=m),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),a(d,{message:o(e).errors.email,class:"mt-2"},null,8,["message"]),t.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(p(),C("div",q,[s("p",J,[n(" Email belum diverifikasi. "),a(o(j),{href:t.route("verification.send"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900",onClick:g(x,["prevent"])},{default:i(()=>[n(" Klik di sini untuk mengirim ulang email verifikasi. ")]),_:1},8,["href","onClick"])]),_(s("div",Q," Tautan verifikasi baru telah dikirim ke alamat email kamu. ",512),[[k,P.value]])])):b("",!0)])]),actions:i(()=>[a(A,{on:o(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[n(" Berhasil disimpan. ")]),_:1},8,["on"]),a(L,{class:T({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:i(()=>[n(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ie as default};