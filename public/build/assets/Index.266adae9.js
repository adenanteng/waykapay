import{c as r,w as a,o as s,a as e,b as t,u as i,j as l,f as d,g as n,B as m,O as u}from"./app.e057f974.js";import{_ as c}from"./AppLayout.d60a29c0.js";import{_ as f}from"./MobileMenu.e6258556.js";import"./helper.fd353f67.js";import{_}from"./DangerButton.fd04cc1b.js";import"./DarkmodeToggle.9c0ad514.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./label.05dbf699.js";import"./focus-management.186579d9.js";const g={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},h={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},b=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan Profil",-1),y=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan Aplikasi",-1),k=["onSubmit"],T={__name:"Index",setup(v){const p=()=>{u.post(route("logout"))};return(o,w)=>(s(),r(c,{title:"Saya",name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{default:a(()=>[e("div",g,[e("ul",h,[e("li",null,[t(i(l),{href:o.route("profile.show"),class:"block px-6 py-4"},{default:a(()=>[b]),_:1},8,["href"])]),e("li",null,[o.$page.props.user.role_id==1?(s(),r(i(l),{key:0,href:o.route("setting.index"),class:"block px-6 py-4"},{default:a(()=>[y]),_:1},8,["href"])):d("",!0)])])]),e("form",{method:"POST",onSubmit:m(p,["prevent"])},[t(_,{type:"submit",class:"w-full"},{default:a(()=>[n(" Keluar ")]),_:1})],40,k),t(f)]),_:1},8,["name","desc","avatar"]))}};export{T as default};
