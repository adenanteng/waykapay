import{_ as n}from"./AppLayout.57e0ffdc.js";import c from"./DeleteUserForm.9367791d.js";import u from"./LogoutOtherBrowserSessionsForm.57d194bc.js";import{S as t}from"./SectionBorder.74cf6897.js";import f from"./TwoFactorAuthenticationForm.2538c5be.js";import l from"./UpdatePasswordForm.62c63505.js";import $ from"./UpdateProfileInformationForm.387938b3.js";import{c as _,w as p,o,b as r,e as a,F as s,f as i}from"./app.6f659bd2.js";import{_ as g}from"./PreviousButton.85091591.js";import"./Banner.f4c8b691.js";import"./DarkmodeToggle.5513d94d.js";import"./helper.e9fc3b37.js";import"./label.20121957.js";import"./focus-management.6ae0846b.js";import"./ActionSection.ada4a8a6.js";import"./SectionTitle.2d02c396.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.b65550a5.js";import"./DialogModal.086c22d9.js";import"./InputError.23ad631a.js";import"./SecondaryButton.63907c8e.js";import"./TextInput.ba97495d.js";import"./ActionMessage.4b040986.js";import"./PrimaryButton.ec163215.js";import"./InputLabel.d3e3680e.js";import"./FormSection.062adaca.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),a(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(t)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),a(s,{key:1},[r(l),r(t)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),a(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),a(s,{key:3},[r(t),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
