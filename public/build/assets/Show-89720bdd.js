import{_ as n}from"./AppLayout-b9fcd4ca.js";import{o as e,c,w as p,b as r,e as a,F as i,f as m}from"./app-c3081f77.js";import f from"./LogoutOtherBrowserSessionsForm-7db55756.js";import{S as t}from"./SectionBorder-61239716.js";import u from"./TwoFactorAuthenticationForm-bb7f6c6b.js";import l from"./UpdatePasswordForm-0ac8e308.js";import _ from"./UpdateProfileInformationForm-d9a4aec2.js";import{_ as $}from"./PreviousButton-62f6cfd1.js";import d from"./UpdatePinForm-d7a9f405.js";import"./OnlineStatus-ab09b8d5.js";import"./index-c32c576d.js";import"./DarkmodeToggle-185f1119.js";import"./helper-04030b53.js";import"./use-controllable-c854508c.js";import"./bcrypt-d876462d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-48c8d70d.js";import"./DialogModal-2f98d8f6.js";import"./PrimaryButton-13edf0f6.js";import"./InputError-87c9f248.js";import"./BackgroundParticle-efbc0c7a.js";import"./focus-management-c1a0870f.js";import"./ActionMessage-041d7ec3.js";import"./ActionSection-f66e6c9b.js";import"./SectionTitle-7ee11186.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-05faf678.js";import"./TextInput-ca367239.js";import"./DangerButton-6779f30b.js";import"./InputLabel-451fd6b8.js";import"./FormSection-c821b4db.js";const W={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(s){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(i,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(t)],64)):m("",!0),r(d),r(t),o.$page.props.jetstream.canUpdatePassword?(e(),a(i,{key:1},[r(l),r(t)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(i,{key:2},[r(u,{"requires-confirmation":s.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):m("",!0),r(f,{sessions:s.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{W as default};
