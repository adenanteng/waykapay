import{T as v,d as g,e as _,b as e,u as a,w as l,F as h,o as w,Z as b,g as i,a as o,n as p,f as x,j as k,C as V}from"./app.36d484e8.js";import{_ as $,a as P}from"./AuthenticationCardLogo.e3d44704.js";import{_ as C}from"./Checkbox.ebc2610a.js";import{_ as n}from"./InputError.bba59a83.js";import{_ as m}from"./InputLabel.e683b2f5.js";import{_ as q}from"./PrimaryButton.e241cc91.js";import{_ as d}from"./TextInput.2e729975.js";const U={class:"mt-4"},N={class:"mt-4"},T={class:"mt-4"},j={class:"flex"},F={class:"mt-4"},B={class:"flex"},S={key:0,class:"mt-4"},z={class:"flex items-center"},D={class:"ml-2"},E=["href"],R=["href"],A={class:"flex items-center justify-end mt-4"},O={__name:"Register",setup(I){const s=v({name:"",phone:"",email:"",password:"",password_confirmation:"",terms:!1}),y=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})},u=g(!1),c=g(!1);return(f,r)=>(w(),_(h,null,[e(a(b),{title:"Register"}),e($,null,{logo:l(()=>[e(P)]),title:l(()=>[i(" Daftar untuk menjadi anggota ")]),default:l(()=>[o("form",{onSubmit:V(y,["prevent"])},[o("div",null,[e(m,{for:"name",value:"Nama"}),e(d,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":r[0]||(r[0]=t=>a(s).name=t),type:"text",class:"mt-1 block w-full capitalize",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(n,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),o("div",U,[e(m,{for:"email",value:"Email"}),e(d,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":r[1]||(r[1]=t=>a(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"email"},null,8,["modelValue"]),e(n,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),o("div",N,[e(m,{for:"phone",value:"Telepon"}),e(d,{id:"phone",modelValue:a(s).phone,"onUpdate:modelValue":r[2]||(r[2]=t=>a(s).phone=t),type:"tel",class:"mt-1 block w-full",required:"",autocomplete:"phone"},null,8,["modelValue"]),e(n,{class:"mt-2",message:a(s).errors.phone},null,8,["message"])]),o("div",T,[e(m,{for:"password",value:"Password"}),o("div",j,[e(d,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":r[3]||(r[3]=t=>a(s).password=t),type:u.value?"text":"password",class:"mt-1 block w-full rounded-r-none",required:"",autocomplete:"password"},null,8,["modelValue","type"]),o("button",{type:"button",onClick:r[4]||(r[4]=t=>u.value=!u.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[o("i",{class:p(["fa-regular",u.value?"fa-eye-slash":"fa-eye"])},null,2)])]),e(n,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),o("div",F,[e(m,{for:"password_confirmation",value:"Konfirmasi Password"}),o("div",B,[e(d,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":r[5]||(r[5]=t=>a(s).password_confirmation=t),type:c.value?"text":"password",class:"mt-1 block w-full rounded-r-none",required:"",autocomplete:"password"},null,8,["modelValue","type"]),o("button",{type:"button",onClick:r[6]||(r[6]=t=>c.value=!c.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[o("i",{class:p(["fa-regular",c.value?"fa-eye-slash":"fa-eye"])},null,2)])]),e(n,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),f.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(w(),_("div",S,[e(m,{for:"terms"},{default:l(()=>[o("div",z,[e(C,{id:"terms",checked:a(s).terms,"onUpdate:checked":r[7]||(r[7]=t=>a(s).terms=t),name:"terms",required:""},null,8,["checked"]),o("div",D,[i(" I agree to the "),o("a",{target:"_blank",href:f.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,E),i(" and "),o("a",{target:"_blank",href:f.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,R)])]),e(n,{class:"mt-2",message:a(s).errors.terms},null,8,["message"])]),_:1})])):x("",!0),o("div",A,[e(a(k),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[i(" Sudah punya akun? ")]),_:1},8,["href"]),e(q,{class:p(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:l(()=>[i(" Daftar ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{O as default};
