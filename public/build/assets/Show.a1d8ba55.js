import{_ as n}from"./AppLayout.b19b7949.js";import c from"./DeleteUserForm.8b0c1a54.js";import u from"./LogoutOtherBrowserSessionsForm.46f15542.js";import{S as a}from"./SectionBorder.5c7f37b1.js";import f from"./TwoFactorAuthenticationForm.172a5522.js";import l from"./UpdatePasswordForm.59a095af.js";import $ from"./UpdateProfileInformationForm.2d344f59.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.d1c51d88.js";import{_ as g}from"./PreviousButton.76aeb2ed.js";import"./helper.72647ffe.js";import"./DarkmodeToggle.a86fe228.js";import"./label.38bd0d4a.js";import"./focus-management.1918dce3.js";import"./ActionSection.83dd6ef5.js";import"./SectionTitle.68a7e8fd.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.3b3b4a6f.js";import"./DialogModal.648f6229.js";import"./InputError.b8f8ea0d.js";import"./SecondaryButton.82863c2b.js";import"./TextInput.53a66873.js";import"./ActionMessage.5d8dfc27.js";import"./PrimaryButton.1eebda3b.js";import"./InputLabel.4f17d04d.js";import"./FormSection.07e9858d.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
