import{_ as n}from"./AppLayout.c7c41ec1.js";import{c,w as p,o as e,b as r,e as t,F as s,f as i}from"./app.25e2935f.js";import f from"./LogoutOtherBrowserSessionsForm.4be3e305.js";import{S as a}from"./SectionBorder.fc6414b9.js";import u from"./TwoFactorAuthenticationForm.c92e1f7b.js";import l from"./UpdatePasswordForm.ebf1a815.js";import _ from"./UpdateProfileInformationForm.a454aec6.js";import{_ as $}from"./PreviousButton.9681c20e.js";import d from"./UpdatePinForm.cccc986a.js";import"./helper.71cd3eb2.js";import"./DarkmodeToggle.002e5d65.js";import"./label.d584904d.js";import"./focus-management.ba22d6c5.js";import"./ActionMessage.9e05cb7b.js";import"./ActionSection.80fb9849.js";import"./SectionTitle.65c323d0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.f4b04f4b.js";import"./InputError.9ef43567.js";import"./PrimaryButton.dea61b5f.js";import"./SecondaryButton.1d69a6e1.js";import"./TextInput.1223ccd9.js";import"./DangerButton.28f1fc06.js";import"./InputLabel.fc9a418f.js";import"./FormSection.ffc03236.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
