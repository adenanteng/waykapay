import{_ as n}from"./AppLayout-cc89e441.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-cd37f081.js";import f from"./LogoutOtherBrowserSessionsForm-b615c321.js";import{S as a}from"./SectionBorder-a1348b22.js";import u from"./TwoFactorAuthenticationForm-de29a7a6.js";import l from"./UpdatePasswordForm-33eb9443.js";import _ from"./UpdateProfileInformationForm-ed9db2eb.js";import{_ as $}from"./PreviousButton-60e21644.js";import d from"./UpdatePinForm-45304d99.js";import"./OnlineStatus-bb59b357.js";import"./index-6d9b7009.js";import"./DarkmodeToggle-81053e8f.js";import"./use-controllable-51d3ca88.js";import"./focus-management-5817941e.js";import"./ActionMessage-6b223f26.js";import"./ActionSection-b27a3c65.js";import"./SectionTitle-a705e878.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-568a40ca.js";import"./InputError-99d14561.js";import"./PrimaryButton-eb181200.js";import"./SecondaryButton-998abe57.js";import"./TextInput-0fdb88ba.js";import"./DangerButton-9fe80291.js";import"./InputLabel-14944c64.js";import"./FormSection-23134474.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
