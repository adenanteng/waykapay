import{_ as n}from"./AppLayout-1a49b552.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-22c0ab9a.js";import f from"./LogoutOtherBrowserSessionsForm-bf404f69.js";import{S as a}from"./SectionBorder-721b68f1.js";import u from"./TwoFactorAuthenticationForm-cb21fb32.js";import l from"./UpdatePasswordForm-bd16c216.js";import _ from"./UpdateProfileInformationForm-8df57c4e.js";import{_ as $}from"./PreviousButton-e54f2c15.js";import d from"./UpdatePinForm-22ed99dd.js";import"./OnlineStatus-4834e8cb.js";import"./index-07a63f0e.js";import"./DarkmodeToggle-0affa6b3.js";import"./use-controllable-5cdbe07e.js";import"./focus-management-c54ddf9f.js";import"./ActionMessage-aaf11cfe.js";import"./ActionSection-f0ba7742.js";import"./SectionTitle-86dcce65.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-e50d98ba.js";import"./InputError-ad792898.js";import"./PrimaryButton-03a199b4.js";import"./SecondaryButton-70bff6e4.js";import"./TextInput-c13f7bb4.js";import"./DangerButton-c4aead9b.js";import"./InputLabel-e65f7142.js";import"./FormSection-f498670d.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
