import{e as a,g as m,t,F as i,o as n}from"./app.df14e751.js";const R={__name:"FormatPln",props:{price:Number},setup(k){const e=k;function r(p){return(p/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(p,S)=>{var u,o,N,b,c,g,s,l;return Number(e.price)<25e3?(n(),a(i,{key:0},[m(" Rp "+t(r(Number(e.price)+Number((u=p.$page.props.appSetting)==null?void 0:u.pln_25))),1)],64)):Number(e.price)<5e4?(n(),a(i,{key:1},[m(" Rp "+t(r(Number(e.price)+Number((o=p.$page.props.appSetting)==null?void 0:o.pln_50))),1)],64)):Number(e.price)<75e3?(n(),a(i,{key:2},[m(" Rp "+t(r(Number(e.price)+Number((N=p.$page.props.appSetting)==null?void 0:N.pln_75))),1)],64)):Number(e.price)<1e5?(n(),a(i,{key:3},[m(" Rp "+t(r(Number(e.price)+Number((b=p.$page.props.appSetting)==null?void 0:b.pln_100))),1)],64)):Number(e.price)<2e5?(n(),a(i,{key:4},[m(" Rp "+t(r(Number(e.price)+Number((c=p.$page.props.appSetting)==null?void 0:c.pln_200))),1)],64)):Number(e.price)<5e5?(n(),a(i,{key:5},[m(" Rp "+t(r(Number(e.price)+Number((g=p.$page.props.appSetting)==null?void 0:g.pln_500))),1)],64)):Number(e.price)<1e6?(n(),a(i,{key:6},[m(" Rp "+t(r(Number(e.price)+Number((s=p.$page.props.appSetting)==null?void 0:s.pln_1000))),1)],64)):(n(),a(i,{key:7},[m(" Rp "+t(r(Number(e.price)+Number((l=p.$page.props.appSetting)==null?void 0:l.pln_max))),1)],64))}}};export{R as default};
