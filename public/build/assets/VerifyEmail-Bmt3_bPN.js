import{T as f,k as _,o,e as n,b as e,u as a,w as t,F as k,Z as p,f as g,a as s,i as h,n as v,g as r,j as b}from"./app-D798UzWS.js";import{_ as x,a as y}from"./AuthenticationCardLogo-D21j1D5T.js";import{_ as V}from"./PrimaryButton-En4sk2ac.js";import"./BackgroundParticle-BPFSWV6p.js";import"./index-q9DgJikW.js";const j=s("div",{class:"mb-4 text-sm text-gray-600"}," Sebelum melanjutkan, dapatkah kamu memverifikasi alamat email dengan mengeklik tautan yang baru saja kami kirimkan melalui email? ",-1),w={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"mt-4 flex items-center justify-between"},S=s("div",null,null,-1),L={__name:"VerifyEmail",props:{status:String},setup(m){const l=m,i=f({}),c=()=>{i.post(route("verification.send"))},u=_(()=>l.status==="verification-link-sent");return(d,B)=>(o(),n(k,null,[e(a(p),{title:"Email Verification"}),e(x,null,{logo:t(()=>[e(y)]),default:t(()=>[j,u.value?(o(),n("div",w," Tautan verifikasi baru telah dikirim ke alamat email kamu. ")):g("",!0),s("div",N,[s("form",{onSubmit:h(c,["prevent"])},[e(V,{class:v({"opacity-25":a(i).processing}),disabled:a(i).processing},{default:t(()=>[r(" Kirim email verifikasi ")]),_:1},8,["class","disabled"]),e(a(b),{href:d.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 ml-5"},{default:t(()=>[r(" Log Out ")]),_:1},8,["href"])],32),S])]),_:1})],64))}};export{L as default};
