import{v as d,i as _,e as n,b as e,u as a,w as t,F as k,o,X as p,f as g,a as i,n as v,g as r,j as b,B as h}from"./app.f5fc5c7e.js";import{_ as x}from"./AuthenticationCard.cc42d9b2.js";import{_ as y}from"./AuthenticationCardLogo.c01ed1c0.js";import{_ as V}from"./PrimaryButton.f6fbe47c.js";const S=i("div",{class:"mb-4 text-sm text-gray-600"}," Sebelum melanjutkan, dapatkah kamu memverifikasi alamat email dengan mengeklik tautan yang baru saja kami kirimkan melalui email? ",-1),j={key:0,class:"mb-4 font-medium text-sm text-green-600"},w=["onSubmit"],B={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:String},setup(m){const l=m,s=d({}),c=()=>{s.post(route("verification.send"))},u=_(()=>l.status==="verification-link-sent");return(f,N)=>(o(),n(k,null,[e(a(p),{title:"Email Verification"}),e(x,null,{logo:t(()=>[e(y)]),default:t(()=>[S,a(u)?(o(),n("div",j," Tautan verifikasi baru telah dikirim ke alamat email kamu. ")):g("",!0),i("form",{onSubmit:h(c,["prevent"])},[i("div",B,[e(V,{class:v({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:t(()=>[r(" Kirim ulang email verifikasi ")]),_:1},8,["class","disabled"]),i("div",null,[e(a(b),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 ml-2"},{default:t(()=>[r(" Login ")]),_:1},8,["href"])])])],40,w)]),_:1})],64))}};export{L as default};
