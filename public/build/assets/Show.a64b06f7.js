import{_ as n}from"./AppLayout.c171099e.js";import c from"./DeleteUserForm.f8d49984.js";import u from"./LogoutOtherBrowserSessionsForm.bedd7077.js";import{S as t}from"./SectionBorder.f4b5b4a8.js";import f from"./TwoFactorAuthenticationForm.95586dbc.js";import l from"./UpdatePasswordForm.dfa132c9.js";import $ from"./UpdateProfileInformationForm.f73ec977.js";import{c as _,w as p,o,b as r,e as a,F as s,f as i}from"./app.fee5323e.js";import{_ as g}from"./PreviousButton.c7fbecc4.js";import"./Banner.9cb1265a.js";import"./DarkmodeToggle.4d06dc9d.js";import"./helper.e9fc3b37.js";import"./label.0591ef38.js";import"./focus-management.f3261436.js";import"./ActionSection.8b0f7d6e.js";import"./SectionTitle.f98d4e57.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.5047b694.js";import"./DialogModal.5edeb4c2.js";import"./InputError.04533444.js";import"./SecondaryButton.445ed967.js";import"./TextInput.c4f44d1a.js";import"./ActionMessage.b45555bc.js";import"./PrimaryButton.4ea9e756.js";import"./InputLabel.863bfb59.js";import"./FormSection.ed01a669.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),a(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(t)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),a(s,{key:1},[r(l),r(t)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),a(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),a(s,{key:3},[r(t),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
