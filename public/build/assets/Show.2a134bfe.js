import{_ as n}from"./AppLayout.b746ba46.js";import c from"./DeleteUserForm.86a9a8c4.js";import u from"./LogoutOtherBrowserSessionsForm.0a0dc2fd.js";import{S as t}from"./SectionBorder.88c30e91.js";import f from"./TwoFactorAuthenticationForm.dc64f989.js";import l from"./UpdatePasswordForm.84aa8ac2.js";import $ from"./UpdateProfileInformationForm.2f78c43e.js";import{c as _,w as p,o,b as r,e as a,F as s,f as i}from"./app.9f704c0e.js";import{_ as g}from"./PreviousButton.e1f6d31a.js";import"./Banner.521291a0.js";import"./DarkmodeToggle.04e274e9.js";import"./helper.e9fc3b37.js";import"./label.d8c9ddbd.js";import"./focus-management.7b32c468.js";import"./ActionSection.9c904076.js";import"./SectionTitle.3af75ff1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.5bfd410c.js";import"./DialogModal.b1eec4c1.js";import"./InputError.70b9b854.js";import"./SecondaryButton.0f990723.js";import"./TextInput.b48e0db8.js";import"./ActionMessage.0bda0883.js";import"./PrimaryButton.75bc8127.js";import"./InputLabel.ced27af4.js";import"./FormSection.9673f3a9.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),a(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(t)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),a(s,{key:1},[r(l),r(t)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),a(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),a(s,{key:3},[r(t),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
