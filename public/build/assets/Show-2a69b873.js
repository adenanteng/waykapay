import{_ as n}from"./AppLayout-9034de9e.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-6562de8f.js";import f from"./LogoutOtherBrowserSessionsForm-d47f2962.js";import{S as a}from"./SectionBorder-ee2287c0.js";import u from"./TwoFactorAuthenticationForm-d8c9e136.js";import l from"./UpdatePasswordForm-2c07b70e.js";import _ from"./UpdateProfileInformationForm-05a69569.js";import{_ as $}from"./PreviousButton-4831d537.js";import d from"./UpdatePinForm-13bcdca6.js";import"./OnlineStatus-c2b23f88.js";import"./index-71223d7c.js";import"./DarkmodeToggle-cc16ee50.js";import"./use-controllable-4997c733.js";import"./focus-management-e9ac5d0f.js";import"./ActionMessage-67333ca2.js";import"./ActionSection-580be446.js";import"./SectionTitle-29425d56.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-9c66c900.js";import"./InputError-e22e92ad.js";import"./PrimaryButton-5be28793.js";import"./SecondaryButton-85a99b2e.js";import"./TextInput-7e0b6b6f.js";import"./DangerButton-568cb170.js";import"./InputLabel-3f42f15c.js";import"./FormSection-b247d9ee.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
