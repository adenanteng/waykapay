import{$ as i}from"./index-21b082e6.c9ab3f86.js";import"./en-4402d6fc.6c72d05c.js";var l={s:["nokkrar sek\xFAndur","nokkrar sek\xFAndur","nokkrum sek\xFAndum"],m:["m\xEDn\xFAta","m\xEDn\xFAtu","m\xEDn\xFAtu"],mm:["m\xEDn\xFAtur","m\xEDn\xFAtur","m\xEDn\xFAtum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","d\xF6gum"],M:["m\xE1nu\xF0ur","m\xE1nu\xF0","m\xE1nu\xF0i"],MM:["m\xE1nu\xF0ir","m\xE1nu\xF0i","m\xE1nu\xF0um"],y:["\xE1r","\xE1r","\xE1ri"],yy:["\xE1r","\xE1r","\xE1rum"]};function M(u,m,n,a){var t=n?1:2,d=a?0:t,e=u.length===2&&m%10===1,s=e?u[0]:u,k=l[s],_=k[d];return u.length===1?_:"%d "+_}function r(u,m,n,a){var t=M(n,u,a,m);return t.replace("%d",u)}var o={name:"is",weekdays:"sunnudagur_m\xE1nudagur_\xFEri\xF0judagur_mi\xF0vikudagur_fimmtudagur_f\xF6studagur_laugardagur".split("_"),months:"jan\xFAar_febr\xFAar_mars_apr\xEDl_ma\xED_j\xFAn\xED_j\xFAl\xED_\xE1g\xFAst_september_okt\xF3ber_n\xF3vember_desember".split("_"),weekStart:1,weekdaysShort:"sun_m\xE1n_\xFEri_mi\xF0_fim_f\xF6s_lau".split("_"),monthsShort:"jan_feb_mar_apr_ma\xED_j\xFAn_j\xFAl_\xE1g\xFA_sep_okt_n\xF3v_des".split("_"),weekdaysMin:"Su_M\xE1_\xDEr_Mi_Fi_F\xF6_La".split("_"),ordinal:function(u){return u},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xED\xF0an",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};i.locale(o,null,!0);export{o as default};