import{_ as n}from"./AppLayout.2f2522f8.js";import c from"./DeleteUserForm.c32dc5e5.js";import u from"./LogoutOtherBrowserSessionsForm.bec24143.js";import{S as a}from"./SectionBorder.1b5926cf.js";import f from"./TwoFactorAuthenticationForm.43214b5c.js";import l from"./UpdatePasswordForm.b1a4c5ba.js";import $ from"./UpdateProfileInformationForm.7141ec75.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.2fd8b3d3.js";import{_ as g}from"./PreviousButton.3aa2d1f2.js";import"./helper.a9850b61.js";import"./DarkmodeToggle.4a15f4fb.js";import"./label.6847d9b3.js";import"./focus-management.18ceae49.js";import"./ActionSection.8f783dee.js";import"./SectionTitle.a1f0d1c7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.5cda3a5c.js";import"./DialogModal.617f2596.js";import"./InputError.9d7f759b.js";import"./SecondaryButton.416c3bf3.js";import"./TextInput.4d22a7db.js";import"./ActionMessage.63889300.js";import"./PrimaryButton.8c8a9772.js";import"./InputLabel.a3147d41.js";import"./FormSection.4f570cf2.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};