import{_ as n}from"./AppLayout.e85a7a0b.js";import f from"./DeleteUserForm.2dd1d350.js";import u from"./LogoutOtherBrowserSessionsForm.961ff8bb.js";import{S as a}from"./SectionBorder.5d4c7db1.js";import c from"./TwoFactorAuthenticationForm.aba95314.js";import l from"./UpdatePasswordForm.c1cd77d8.js";import $ from"./UpdateProfileInformationForm.a751ec9e.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.f04e0c07.js";import{_ as d}from"./PreviousButton.995476d5.js";import"./DarkmodeToggle.30a1b91b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionSection.9b9c8593.js";import"./SectionTitle.a8da68ee.js";import"./DangerButton.96805351.js";import"./DialogModal.cb097856.js";import"./InputError.4fa3022b.js";import"./SecondaryButton.e34186c0.js";import"./TextInput.58d43a7e.js";import"./ActionMessage.3700274b.js";import"./PrimaryButton.0a12fa21.js";import"./InputLabel.4e979e49.js";import"./FormSection.d0524529.js";const z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,g)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(d,{href:e.route("profile.index")},null,8,["href"])]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(c,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(f)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{z as default};
