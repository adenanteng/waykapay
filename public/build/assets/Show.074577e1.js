import{_ as n}from"./AppLayout.20b76ab3.js";import c from"./DeleteUserForm.a1d52d52.js";import u from"./LogoutOtherBrowserSessionsForm.8b021b88.js";import{S as a}from"./SectionBorder.e8ade4c1.js";import f from"./TwoFactorAuthenticationForm.3f295450.js";import l from"./UpdatePasswordForm.9a24c67a.js";import $ from"./UpdateProfileInformationForm.ab9405c8.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.6f0fd42f.js";import{_ as g}from"./PreviousButton.e90bfba2.js";import"./helper.c468ca5a.js";import"./DarkmodeToggle.664d0588.js";import"./label.2cc25248.js";import"./focus-management.a3527ccf.js";import"./ActionSection.9a72e8f4.js";import"./SectionTitle.f7845b81.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.e9366aec.js";import"./DialogModal.b32b9000.js";import"./InputError.dafdeda9.js";import"./SecondaryButton.9d7ea052.js";import"./TextInput.de553ea8.js";import"./ActionMessage.82986024.js";import"./PrimaryButton.b75d50be.js";import"./InputLabel.c7028bb1.js";import"./FormSection.873c4add.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
