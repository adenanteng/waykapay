import{_ as n}from"./AppLayout-d7e8936c.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-d70ede0b.js";import f from"./LogoutOtherBrowserSessionsForm-f10e0064.js";import{S as a}from"./SectionBorder-bc06a1d7.js";import u from"./TwoFactorAuthenticationForm-f9c3d46e.js";import l from"./UpdatePasswordForm-add08c6e.js";import _ from"./UpdateProfileInformationForm-e82c5d49.js";import{_ as $}from"./PreviousButton-18915c90.js";import d from"./UpdatePinForm-7027635b.js";import"./OnlineStatus-b50fa754.js";import"./index-08952767.js";import"./DarkmodeToggle-a8590f48.js";import"./use-controllable-e6d06148.js";import"./focus-management-927dcb09.js";import"./ActionMessage-2ce45a90.js";import"./ActionSection-302afc70.js";import"./SectionTitle-2577e01f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-bf0f1a4d.js";import"./InputError-d982f889.js";import"./PrimaryButton-482defc4.js";import"./SecondaryButton-e480be5e.js";import"./TextInput-c67c85a5.js";import"./DangerButton-43d6e4d0.js";import"./InputLabel-61253a1c.js";import"./FormSection-179c74f1.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
