import{_ as n}from"./AppLayout.7a5b688f.js";import c from"./DeleteUserForm.e15bc427.js";import u from"./LogoutOtherBrowserSessionsForm.d56a4f6d.js";import{S as a}from"./SectionBorder.b6b1527e.js";import f from"./TwoFactorAuthenticationForm.657f9ad9.js";import l from"./UpdatePasswordForm.bfb074c9.js";import $ from"./UpdateProfileInformationForm.add04d7d.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.a307c72d.js";import{_ as g}from"./PreviousButton.efdc33c6.js";import"./helper.87723a9e.js";import"./DarkmodeToggle.a26e9420.js";import"./label.7de1b1cb.js";import"./focus-management.095ae618.js";import"./ActionSection.0e88756d.js";import"./SectionTitle.9fe6125d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.4d29bbee.js";import"./DialogModal.3e83380f.js";import"./InputError.e66f376f.js";import"./SecondaryButton.55b471db.js";import"./TextInput.a1ce02e8.js";import"./ActionMessage.3457e1d8.js";import"./PrimaryButton.76978f49.js";import"./InputLabel.a3b2705e.js";import"./FormSection.fe8e0d7a.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
