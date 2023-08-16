import{d as i,v as f,c as k,w as e,o as h,g as a,a as u,b as o,u as t,U as w,n as y}from"./app.03ba1f84.js";import{_ as g}from"./ActionSection.c4dfc2da.js";import{_ as p}from"./DangerButton.786df4d1.js";import{a as v}from"./DialogModal.9ee77c50.js";import{_ as x}from"./InputError.c0e59613.js";import{_ as b}from"./SecondaryButton.ee2940d0.js";import{_ as C}from"./TextInput.6b4452a3.js";import"./SectionTitle.b0a62ddd.js";import"./_plugin-vue_export-helper.cdc0426e.js";const U=u("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah akun kamu dihapus, semua sumber daya dan datanya akan dihapus secara permanen. ",-1),V={class:"mt-5"},$={class:"mt-4"},z={__name:"DeleteUserForm",setup(A){const n=i(!1),r=i(null),s=f({password:""}),d=()=>{n.value=!0,setTimeout(()=>r.value.focus(),250)},c=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>r.value.focus(),onFinish:()=>s.reset()})},l=()=>{n.value=!1,s.reset()};return(B,m)=>(h(),k(g,null,{title:e(()=>[a(" Hapus Akun ")]),description:e(()=>[a(" Menghapus akun secara permanen. ")]),content:e(()=>[U,u("div",V,[o(p,{onClick:d},{default:e(()=>[a(" Hapus Akun ")]),_:1})]),o(v,{show:n.value,onClose:l},{title:e(()=>[a(" Hapus Akun ")]),content:e(()=>[a(" Apakah kamu yakin ingin menghapus akun? Setelah akun kamu dihapus, semua sumber daya dan datanya akan dihapus secara permanen. "),u("div",$,[o(C,{ref_key:"passwordInput",ref:r,modelValue:t(s).password,"onUpdate:modelValue":m[0]||(m[0]=_=>t(s).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:w(c,["enter"])},null,8,["modelValue","onKeyup"]),o(x,{message:t(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[o(b,{onClick:l},{default:e(()=>[a(" Batal ")]),_:1}),o(p,{class:y(["ml-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing,onClick:c},{default:e(()=>[a(" Hapus Akun ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{z as default};