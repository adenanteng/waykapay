import{_ as n}from"./AppLayout.4e561a2d.js";import{c as d,w as t,o as r,a as e,b as o,g as u,e as i,h as p,F as _,u as m,j as f,t as h}from"./app.ee3cb01f.js";import"./helper.6fc49847.js";import{_ as g}from"./PrimaryButton.b41f9f09.js";import"./DarkmodeToggle.538f1f93.js";import"./label.8c6aff53.js";import"./focus-management.60952601.js";const b={class:"flex justify-between"},v=e("div",{class:""},null,-1),x={class:""},y={class:"grid grid-cols-1 gap-4 sm:grid-cols-3"},w={class:"relative items-center bg-white bg-opacity-50 border border-gray-300 shadow-lg rounded-3xl"},$=["src"],j=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),B={class:"text-sm font-medium text-gray-900 px-3 py-2"},E={__name:"Index",props:{carousel:Object},setup(l){const c=l;return(s,k)=>(r(),d(n,{title:"Saya",name:s.$page.props.user.name,desc:s.$page.props.user.email,avatar:s.$page.props.user.profile_photo_url},{default:t(()=>[e("div",b,[v,e("div",x,[o(g,{as:"a",href:s.route("carousel.create")},{default:t(()=>[u("Tambah")]),_:1},8,["href"])])]),e("div",y,[(r(!0),i(_,null,p(c.carousel,a=>(r(),i("div",w,[e("img",{class:"h-auto w-full aspect-video object-cover rounded-t-3xl",src:a.media[0].original_url,alt:""},null,8,$),o(m(f),{href:s.route("carousel.edit",a),class:"focus:outline-none text-left"},{default:t(()=>[j,e("p",B,h(a.href),1)]),_:2},1032,["href"])]))),256))])]),_:1},8,["name","desc","avatar"]))}};export{E as default};