import{_ as n}from"./AppLayout.70fc428c.js";import c from"./DeleteUserForm.5edce5db.js";import u from"./LogoutOtherBrowserSessionsForm.e8a1ae26.js";import{S as a}from"./SectionBorder.35fc47f7.js";import f from"./TwoFactorAuthenticationForm.0db0d433.js";import l from"./UpdatePasswordForm.81f5db4a.js";import $ from"./UpdateProfileInformationForm.c235ef37.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.82ffed1c.js";import{_ as g}from"./PreviousButton.97250014.js";import"./helper.cebe9b51.js";import"./DarkmodeToggle.4e90ac2e.js";import"./label.d337ace9.js";import"./focus-management.10fbedae.js";import"./ActionSection.479b81e7.js";import"./SectionTitle.a38b8043.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.642cfa65.js";import"./DialogModal.e8439576.js";import"./InputError.1352f3cd.js";import"./SecondaryButton.aa9d5f62.js";import"./TextInput.d077a8a6.js";import"./ActionMessage.51055ffe.js";import"./PrimaryButton.ce17d3ae.js";import"./InputLabel.8cdbd944.js";import"./FormSection.81e4c61e.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
