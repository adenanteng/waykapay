import{_ as n}from"./AppLayout-d3de19bb.js";import{o as e,c,w as p,b as r,e as a,F as i,f as m}from"./app-14213192.js";import f from"./LogoutOtherBrowserSessionsForm-8ec08dd6.js";import{S as t}from"./SectionBorder-b42d66d4.js";import u from"./TwoFactorAuthenticationForm-f53ee1e4.js";import l from"./UpdatePasswordForm-a0a30116.js";import _ from"./UpdateProfileInformationForm-f19e1914.js";import{_ as $}from"./PreviousButton-cffd21eb.js";import d from"./UpdatePinForm-35fa6f79.js";import"./OnlineStatus-58a37a6d.js";import"./index-95837d61.js";import"./DarkmodeToggle-be497689.js";import"./helper-04030b53.js";import"./use-controllable-9aadd587.js";import"./use-resolve-button-type-a450102f.js";import"./vue3-otp-input.esm-680d5482.js";import"./DialogModal-ec3dd490.js";import"./PrimaryButton-bcf370da.js";import"./InputError-10e4dcec.js";import"./BackgroundParticle-3d653474.js";import"./use-outside-click-f993b61f.js";import"./focus-management-9eac28b7.js";import"./ActionMessage-8995a1a7.js";import"./ActionSection-3b679c84.js";import"./SectionTitle-8c8efa44.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-5062d68e.js";import"./TextInput-7673c789.js";import"./DangerButton-d90b23c8.js";import"./InputLabel-56370c5c.js";import"./FormSection-813aea0e.js";const W={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(s){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(i,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(t)],64)):m("",!0),r(d),r(t),o.$page.props.jetstream.canUpdatePassword?(e(),a(i,{key:1},[r(l),r(t)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(i,{key:2},[r(u,{"requires-confirmation":s.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):m("",!0),r(f,{sessions:s.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{W as default};
