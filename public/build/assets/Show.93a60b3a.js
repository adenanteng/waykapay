import{_ as n}from"./AppLayout.6f39a957.js";import c from"./DeleteUserForm.68b1ee15.js";import u from"./LogoutOtherBrowserSessionsForm.d424320d.js";import{S as a}from"./SectionBorder.0f79011e.js";import f from"./TwoFactorAuthenticationForm.684088d8.js";import l from"./UpdatePasswordForm.41ae0b1f.js";import $ from"./UpdateProfileInformationForm.0b25d322.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.79b4714e.js";import{_ as g}from"./PreviousButton.e9e124b5.js";import"./helper.58260af8.js";import"./DarkmodeToggle.40f4c7b4.js";import"./label.8fa51398.js";import"./focus-management.90416d02.js";import"./ActionSection.74e79342.js";import"./SectionTitle.6b77a702.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.aedfdd23.js";import"./DialogModal.ab37863d.js";import"./InputError.c9f69a70.js";import"./SecondaryButton.6500bb57.js";import"./TextInput.188d2859.js";import"./ActionMessage.27f138aa.js";import"./PrimaryButton.9d036d5f.js";import"./InputLabel.7b21e68a.js";import"./FormSection.3544605d.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
