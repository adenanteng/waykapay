import{_ as n}from"./AppLayout.8cd63dc6.js";import c from"./DeleteUserForm.72527deb.js";import f from"./LogoutOtherBrowserSessionsForm.2f579426.js";import{S as e}from"./SectionBorder.834a55ce.js";import u from"./TwoFactorAuthenticationForm.96248f44.js";import l from"./UpdatePasswordForm.805d6214.js";import $ from"./UpdateProfileInformationForm.7e2ca845.js";import{c as _,w as p,o as t,b as r,e as a,F as s,f as m}from"./app.1ef6b7f0.js";import{_ as g}from"./PreviousButton.e44cb942.js";import d from"./UpdatePinForm.6d243b3b.js";import"./Banner.5c5308e3.js";import"./DarkmodeToggle.7227c592.js";import"./helper.e9fc3b37.js";import"./label.7558c534.js";import"./index.ca2c4c55.js";import"./focus-management.e790b29a.js";import"./ActionSection.88c832a3.js";import"./SectionTitle.21fe78eb.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.12048899.js";import"./DialogModal.baad236b.js";import"./InputError.855d3c39.js";import"./SecondaryButton.0ac62433.js";import"./TextInput.de4c3551.js";import"./ActionMessage.e8d88b62.js";import"./PrimaryButton.325c5b21.js";import"./InputLabel.2c8ef4a3.js";import"./FormSection.edac871f.js";const Q={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,h)=>(t(),_(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(t(),a(s,{key:0},[r($,{user:o.$page.props.user},null,8,["user"]),r(e)],64)):m("",!0),r(d),r(e),o.$page.props.jetstream.canUpdatePassword?(t(),a(s,{key:1},[r(l),r(e)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(t(),a(s,{key:2},[r(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(e)],64)):m("",!0),r(f,{sessions:i.sessions},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(t(),a(s,{key:3},[r(e),r(c)],64)):m("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{Q as default};
