import{_ as n}from"./AppLayout.9f2073f7.js";import c from"./DeleteUserForm.8dde5e75.js";import f from"./LogoutOtherBrowserSessionsForm.6b65fa51.js";import{S as e}from"./SectionBorder.208984ff.js";import u from"./TwoFactorAuthenticationForm.ea842205.js";import l from"./UpdatePasswordForm.bd191509.js";import $ from"./UpdateProfileInformationForm.a5eb33cc.js";import{c as _,w as p,o as t,b as r,e as a,F as s,f as m}from"./app.6967dcba.js";import{_ as g}from"./PreviousButton.4ac801a6.js";import d from"./UpdatePinForm.d0a96983.js";import"./Banner.ad4812df.js";import"./DarkmodeToggle.1ee5c1b4.js";import"./helper.e9fc3b37.js";import"./label.bbd34984.js";import"./index.971f8480.js";import"./focus-management.947667e7.js";import"./ActionSection.375c9708.js";import"./SectionTitle.3d6e12fd.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.cd19b535.js";import"./DialogModal.19d90a0c.js";import"./InputError.a51a243a.js";import"./SecondaryButton.b16c9230.js";import"./TextInput.6c962662.js";import"./ActionMessage.c6a0b811.js";import"./PrimaryButton.890d07c7.js";import"./InputLabel.cbd971b8.js";import"./FormSection.676a2886.js";const Q={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,h)=>(t(),_(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(t(),a(s,{key:0},[r($,{user:o.$page.props.user},null,8,["user"]),r(e)],64)):m("",!0),r(d),r(e),o.$page.props.jetstream.canUpdatePassword?(t(),a(s,{key:1},[r(l),r(e)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(t(),a(s,{key:2},[r(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(e)],64)):m("",!0),r(f,{sessions:i.sessions},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(t(),a(s,{key:3},[r(e),r(c)],64)):m("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{Q as default};
