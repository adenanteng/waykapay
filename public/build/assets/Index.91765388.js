import{_ as n}from"./AppLayout.0e75964e.js";import{c as d,w as a,o as r,a as e,b as o,g as u,e as i,h as p,t as m,u as _,j as f,F as h}from"./app.c5a8f3a4.js";import"./helper.e9fc3b37.js";import{_ as g}from"./PrimaryButton.237b2a47.js";import"./Banner.bca6386f.js";import"./DarkmodeToggle.09e46d35.js";import"./label.6113e346.js";import"./focus-management.cea82651.js";const b={class:"flex justify-between"},v=e("div",{class:""},null,-1),x={class:""},y={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},w={class:"relative items-center bg-white bg-opacity-50 border border-gray-300 shadow-lg rounded-3xl"},$=["src"],j=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),B={class:"text-sm font-medium text-gray-900 px-3 py-2"},I={__name:"Index",props:{carousel:Object},setup(l){const c=l;return(s,k)=>(r(),d(n,{title:"Saya",name:s.$page.props.user.name,desc:s.$page.props.user.email,avatar:s.$page.props.user.profile_photo_url},{default:a(()=>[e("div",b,[v,e("div",x,[o(g,{as:"a",href:s.route("carousel.create")},{default:a(()=>[u("Tambah")]),_:1},8,["href"])])]),e("div",y,[(r(!0),i(h,null,p(c.carousel,t=>(r(),i("div",w,[e("img",{class:"h-auto w-full aspect-video object-cover rounded-t-3xl",src:t.media[0].original_url,alt:""},null,8,$),o(_(f),{href:s.route("carousel.edit",t),class:"focus:outline-none text-left"},{default:a(()=>[j,e("p",B,m(t.href),1)]),_:2},1032,["href"])]))),256))])]),_:1},8,["name","desc","avatar"]))}};export{I as default};