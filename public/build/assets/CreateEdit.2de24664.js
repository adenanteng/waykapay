import{d as l,q as k,c as w,w as y,o as n,a as e,n as v,e as r,E as u,G as d,f as h}from"./app.8b83cab5.js";import"./moment.9709ab41.js";import"./vue3-lottie.es.30a2b2c7.js";import{_ as x}from"./BlankLayout.4d2e4230.js";import"./helper.395131bd.js";const C={class:"min-h-screen text-center"},T=e("div",{class:""},[e("h3",null,"Hello bitch")],-1),b={class:"mt-10"},E={class:""},B={key:0},I={key:1},M={class:"my-10"},O=e("i",{class:"fa-duotone fa-loader fa-spin text-3xl"},null,-1),P=[O],U={id:"photoTaken",ref:"canvas",class:"p-3 rounded-3xl",width:450,height:337.5},j={key:1,class:"mt-2"},D=e("i",{class:"fa-regular fa-camera text-3xl"},null,-1),L=[D],S={key:2,class:""},z={__name:"CreateEdit",props:{},setup(A){const t=l(!1),a=l(!1),c=l(!1),o=l(!1);l("#");const m=l(null);k(()=>{setTimeout(()=>_(),1e3)});function _(){t.value===!0?(t.value=!1,a.value=!1,c.value=!1):(t.value=!0,f())}function f(){o.value=!0;const i=window.constraints={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(i).then(s=>{o.value=!1,m.value.srcObject=s}).catch(s=>{o.value=!1,alert("May the browser didn't support or there is some errors.")})}function p(){a||(c.value=!0,setTimeout(()=>{c.value=!1},50)),a.value=!a.value,document.getElementById("photoTaken").getContext("2d").drawImage(m.value,0,0,450,337.5)}function g(){const i=document.getElementById("downloadPhoto"),s=document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream");i.setAttribute("href",s)}return(i,s)=>(n(),w(x,{title:"Upgrade"},{default:y(()=>[e("div",C,[T,e("div",b,[e("div",E,[e("button",{type:"button",class:v(["",{"is-primary":!t.value,"is-danger":t.value}]),onClick:_},[t.value?(n(),r("span",I,"Close Camera")):(n(),r("span",B,"Open Camera"))],2)]),u(e("div",M,P,512),[[d,t.value&&o.value]]),t.value?u((n(),r("div",{key:0,class:v(["p-3 rounded-3xl",{flash:c.value}])},[e("div",{class:v(["",{flash:c.value}])},null,2),u(e("video",{ref_key:"camcam",ref:m,class:"rounded-3xl",width:450,height:337.5,autoplay:""},null,512),[[d,!a.value]]),u(e("canvas",U,null,512),[[d,a.value]])],2)),[[d,!o.value]]):h("",!0),t.value&&!o.value?(n(),r("div",j,[e("button",{class:"",onClick:p},L)])):h("",!0),a.value&&t.value?(n(),r("div",S,[e("a",{id:"downloadPhoto",download:"my-photo.jpg",class:"button",role:"button",onClick:g}," Download ")])):h("",!0)])])]),_:1}))}};export{z as default};
