import{v as _,i as p,e as r,b as e,u as t,w as s,F as h,o as l,X as y,f as g,a as o,n as v,g as a,j as c,B as x}from"./app.a307c72d.js";import{_ as b}from"./AuthenticationCard.ae7400a4.js";import{_ as w}from"./AuthenticationCardLogo.4f3266eb.js";import{_ as k}from"./PrimaryButton.76978f49.js";const V=o("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},E=["onSubmit"],N={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:String},setup(m){const d=m,i=_(),u=()=>{i.post(route("verification.send"))},f=p(()=>d.status==="verification-link-sent");return(n,S)=>(l(),r(h,null,[e(t(y),{title:"Email Verification"}),e(b,null,{logo:s(()=>[e(w)]),default:s(()=>[V,t(f)?(l(),r("div",B," A new verification link has been sent to the email address you provided in your profile settings. ")):g("",!0),o("form",{onSubmit:x(u,["prevent"])},[o("div",N,[e(k,{class:v({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:s(()=>[a(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o("div",null,[e(t(c),{href:n.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[a(" Edit Profile")]),_:1},8,["href"]),e(t(c),{href:n.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 ml-2"},{default:s(()=>[a(" Log Out ")]),_:1},8,["href"])])])],40,E)]),_:1})],64))}};export{L as default};