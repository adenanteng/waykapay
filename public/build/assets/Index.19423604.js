import{c as l,w as a,o as p,a as e,b as t,u as s,j as r,g as d,B as n,O as m}from"./app.1710f2ff.js";import{_ as u}from"./AppLayout.f2796c91.js";import{_ as c}from"./MobileMenu.91f49de0.js";import"./helper.4c5a3124.js";import{_}from"./DangerButton.7b188a29.js";import"./DarkmodeToggle.a8d7ca49.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.b1955abb.js";import"./focus-management.5a63cc4e.js";const f={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},h={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},g=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan Profil",-1),b=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan Aplikasi",-1),y=["onSubmit"],T={__name:"Index",setup(x){const i=()=>{m.post(route("logout"))};return(o,v)=>(p(),l(u,{title:"Saya",name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{default:a(()=>[e("div",f,[e("ul",h,[e("li",null,[t(s(r),{href:o.route("profile.show"),class:"block px-6 py-4"},{default:a(()=>[g]),_:1},8,["href"])]),e("li",null,[t(s(r),{href:o.route("setting.index"),class:"block px-6 py-4"},{default:a(()=>[b]),_:1},8,["href"])])])]),e("form",{method:"POST",onSubmit:n(i,["prevent"])},[t(_,{type:"submit",class:"w-full"},{default:a(()=>[d(" Keluar ")]),_:1})],40,y),t(c)]),_:1},8,["name","desc","avatar"]))}};export{T as default};