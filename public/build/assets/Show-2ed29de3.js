import{_ as n}from"./AppLayout-9186672d.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-7c9a15bb.js";import f from"./LogoutOtherBrowserSessionsForm-f5ddae5a.js";import{S as a}from"./SectionBorder-748c5d1d.js";import u from"./TwoFactorAuthenticationForm-58aac868.js";import l from"./UpdatePasswordForm-1294b549.js";import _ from"./UpdateProfileInformationForm-a813749e.js";import{_ as $}from"./PreviousButton-8eadc4b2.js";import d from"./UpdatePinForm-c40ebfb1.js";import"./OnlineStatus-6dbd08a1.js";import"./index-b47dfda3.js";import"./DarkmodeToggle-b0561ad4.js";import"./use-controllable-f7e2b667.js";import"./focus-management-03e70129.js";import"./ActionMessage-684ae243.js";import"./ActionSection-c04c41f9.js";import"./SectionTitle-d2150902.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-56019578.js";import"./InputError-56c72369.js";import"./PrimaryButton-218ef8f9.js";import"./SecondaryButton-b1a7a6de.js";import"./TextInput-ea1db3d4.js";import"./DangerButton-af4d65da.js";import"./InputLabel-0af767fa.js";import"./FormSection-5f81e263.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
