import{_ as n}from"./AppLayout.e53ee030.js";import{c as u,w as t,o as r,a as e,b as o,g as d,e as c,h as p,F as _,u as m,j as f,t as h}from"./app.d09f7161.js";import"./helper.7f8d49f9.js";import{_ as g}from"./PrimaryButton.b8dec0a2.js";import"./DarkmodeToggle.1c686305.js";import"./label.357d5093.js";import"./focus-management.52b3d73d.js";const v={class:"flex justify-between"},b=e("div",{class:""},null,-1),x={class:""},$={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},j={class:"relative items-center space-x-3"},w=["src"],y=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),B={class:"text-sm font-medium text-gray-900"},E={__name:"Index",props:{carousel:Object},setup(i){const l=i;return(s,k)=>(r(),u(n,{title:"Saya",name:s.$page.props.user.name,desc:s.$page.props.user.email,avatar:s.$page.props.user.profile_photo_url},{default:t(()=>[e("div",v,[b,e("div",x,[o(g,{as:"a",href:s.route("carousel.create")},{default:t(()=>[d("Tambah")]),_:1},8,["href"])])]),e("div",$,[(r(!0),c(_,null,p(l.carousel,a=>(r(),c("div",j,[e("img",{class:"h-auto w-full aspect-video object-cover rounded-3xl",src:a.media[0].original_url,alt:""},null,8,w),o(m(f),{href:s.route("carousel.edit",a),class:"focus:outline-none text-left"},{default:t(()=>[y,e("p",B,h(a.href),1)]),_:2},1032,["href"])]))),256))])]),_:1},8,["name","desc","avatar"]))}};export{E as default};