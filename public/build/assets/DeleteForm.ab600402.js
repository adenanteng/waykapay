import{d as c,v as u,c as d,w as e,o as i,g as a,a as t,b as m}from"./app.713b49ec.js";import{_ as p}from"./ActionSection.b675712d.js";import{_ as l}from"./DangerButton.c5534f3a.js";import"./SectionTitle.53c095c7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _=t("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah akun dihapus, semua sumber daya dan datanya akan dihapus secara permanen. ",-1),f={class:"mt-5"},w={__name:"DeleteForm",props:{users:Object},setup(r){const s=r;c(null);const o=u({id:s.users.id}),n=()=>{o.delete(route("user.destroy",s.users),{preserveScroll:!0})};return(x,g)=>(i(),d(p,null,{title:e(()=>[a(" Hapus Pengguna ")]),description:e(()=>[a(" Hapus akun secara permanen ")]),content:e(()=>[_,t("div",f,[m(l,{class:"",onClick:n},{default:e(()=>[a(" Hapus Pengguna ")]),_:1})])]),_:1}))}};export{w as default};