import{_ as n}from"./AppLayout.3fff6b82.js";import c from"./DeleteUserForm.302acccc.js";import u from"./LogoutOtherBrowserSessionsForm.81d0aca5.js";import{S as a}from"./SectionBorder.6ba6e984.js";import f from"./TwoFactorAuthenticationForm.16cc5b22.js";import l from"./UpdatePasswordForm.4b1160ea.js";import $ from"./UpdateProfileInformationForm.9ad518ac.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.cf425013.js";import{_ as g}from"./PreviousButton.c90887bb.js";import"./helper.19626a61.js";import"./DarkmodeToggle.a17c103f.js";import"./label.4234e697.js";import"./focus-management.67425124.js";import"./ActionSection.eb808b0c.js";import"./SectionTitle.54189a58.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.6cfc9a3c.js";import"./DialogModal.bea5d34a.js";import"./InputError.2da391ef.js";import"./SecondaryButton.6f7a1f66.js";import"./TextInput.1db5c527.js";import"./ActionMessage.e425d76e.js";import"./PrimaryButton.17c8c004.js";import"./InputLabel.045a3d2f.js";import"./FormSection.57e63f55.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
