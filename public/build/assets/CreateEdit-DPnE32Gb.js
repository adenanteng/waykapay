import{T as C,d as r,z as P,o as p,c as E,w as g,a as e,l as u,q as m,e as x,b as t,n as v,f as k,u as l,g as N}from"./app-CaR_YMvJ.js";import{_ as U}from"./PrimaryButton-XpxRpvCD.js";import"./moment-Cl4UOzQZ.js";import{_ as B}from"./BlankLayout-CXxzhYqA.js";import{_ as h}from"./InputLabel-_3f3Vnbu.js";import{_ as w}from"./TextInput-DRNSVejG.js";import{_ as y}from"./InputError-Br9kkj1v.js";import"./OnlineStatus-CYP1rC9a.js";import"./helper-Dp3OpoYX.js";import"./BackgroundParticle-BaXRgoMO.js";const M={class:"min-h-screen"},S={class:"mt-10"},$=e("div",{class:""},null,-1),j={class:"my-10 text-center"},I=e("i",{class:"fa-duotone fa-loader fa-spin text-3xl text-primary-600"},null,-1),O=[I],A={id:"photoTaken",ref:"canvas",class:"rounded-3xl scale-x-flip w-full",width:450,height:337.5},F={key:0,class:"text-center mt-2 absolute bottom-5 left-0 right-0 justify-center"},K=e("i",{class:"fa-light fa-camera text-3xl text-white nightwind-prevent"},null,-1),L=[K],z={class:"mt-5 p-3 grid space-y-5"},D={class:""},H={class:""},q={class:""},te={__name:"CreateEdit",props:{},setup(G){const a=C({name:null,ktp:null,photo:null}),o=r(!1),n=r(!1),c=r(!1),i=r(!1);r("#");const d=r(null);P(()=>{setTimeout(()=>T(),1e3)});function T(){o.value===!0?(o.value=!1,n.value=!1,c.value=!1):(o.value=!0,b())}function b(){i.value=!0;const f=window.constraints={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(f).then(s=>{i.value=!1,d.value.srcObject=s}).catch(s=>{i.value=!1,alert("May the browser didn't support or there is some errors.")})}function V(){n||(c.value=!0,setTimeout(()=>{c.value=!1},50)),n.value=!n.value,document.getElementById("photoTaken").getContext("2d").drawImage(d.value,0,0,450,337.5)}return(f,s)=>(p(),E(B,{title:"Upgrade"},{default:g(()=>[e("div",M,[e("div",S,[$,u(e("div",j,O,512),[[m,o.value&&i.value]]),o.value?u((p(),x("div",{key:0,class:v(["p-3 rounded-3xl relative",{flash:c.value}])},[t(h,{value:"Foto KTP",class:"ml-3 mb-1"}),e("div",{class:v(["",{flash:c.value}])},null,2),u(e("video",{ref_key:"camcam",ref:d,class:"rounded-3xl scale-x-flip",width:450,height:337.5,autoplay:""},null,512),[[m,!n.value]]),u(e("canvas",A,null,512),[[m,n.value]]),o.value&&!i.value?(p(),x("div",F,[e("button",{class:"",onClick:V},L)])):k("",!0)],2)),[[m,!i.value]]):k("",!0)]),e("div",z,[e("div",D,[t(h,{for:"ktp",value:"Nomor KTP",class:"ml-3"}),t(w,{id:"ktp",modelValue:l(a).ktp,"onUpdate:modelValue":s[0]||(s[0]=_=>l(a).ktp=_),type:"number",class:"mt-1 block w-full"},null,8,["modelValue"]),t(y,{message:l(a).errors.ktp,class:"mt-2"},null,8,["message"])]),e("div",H,[t(h,{for:"name",value:"Nama Sesuai KTP",class:"ml-3"}),t(w,{id:"name",modelValue:l(a).name,"onUpdate:modelValue":s[1]||(s[1]=_=>l(a).name=_),type:"text",class:"mt-1 block w-full uppercase"},null,8,["modelValue"]),t(y,{message:l(a).errors.name,class:"mt-2"},null,8,["message"])]),e("div",q,[t(U,{class:v(["w-full justify-center",{"opacity-25":l(a).processing}]),disabled:l(a).processing},{default:g(()=>[N(" Ajukan Pendaftaran ")]),_:1},8,["class","disabled"])])])])]),_:1}))}};export{te as default};
