import{_ as n}from"./AppLayout-2fa3ce49.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-5b6e4ba5.js";import f from"./LogoutOtherBrowserSessionsForm-e7cf323e.js";import{S as a}from"./SectionBorder-57a711bf.js";import u from"./TwoFactorAuthenticationForm-459c5171.js";import l from"./UpdatePasswordForm-495f3671.js";import _ from"./UpdateProfileInformationForm-a6134cc2.js";import{_ as $}from"./PreviousButton-1a817e93.js";import d from"./UpdatePinForm-702ebe14.js";import"./OnlineStatus-7fae24c1.js";import"./index-bf94e9ef.js";import"./DarkmodeToggle-6aa230d2.js";import"./use-controllable-6166452d.js";import"./focus-management-2ed29b5f.js";import"./ActionMessage-0db2b5be.js";import"./ActionSection-48f14d6b.js";import"./SectionTitle-aaaf14f5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-312d8fdb.js";import"./InputError-b2b40188.js";import"./PrimaryButton-0115e2d4.js";import"./SecondaryButton-a368201d.js";import"./TextInput-5f42ee84.js";import"./DangerButton-b7411598.js";import"./InputLabel-3bee1820.js";import"./FormSection-0f8fefb0.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
