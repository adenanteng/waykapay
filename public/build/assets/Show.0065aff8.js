import{_ as n}from"./AppLayout.e82c1ea6.js";import c from"./DeleteUserForm.720480d2.js";import u from"./LogoutOtherBrowserSessionsForm.efda1fab.js";import{S as a}from"./SectionBorder.a5e2f509.js";import f from"./TwoFactorAuthenticationForm.4f2b5df2.js";import l from"./UpdatePasswordForm.294a8359.js";import $ from"./UpdateProfileInformationForm.10d73772.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.a4cc0a97.js";import{_ as g}from"./PreviousButton.7428fb5b.js";import"./helper.0aa5a33e.js";import"./DarkmodeToggle.c36139ce.js";import"./label.f3306f98.js";import"./focus-management.fb04ef3e.js";import"./ActionSection.349602a6.js";import"./SectionTitle.5eb46ea0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.afd021dd.js";import"./DialogModal.4645d66f.js";import"./InputError.0bda049c.js";import"./SecondaryButton.7904d2da.js";import"./TextInput.6db5d5b7.js";import"./ActionMessage.2eb18645.js";import"./PrimaryButton.b7cdf196.js";import"./InputLabel.c20c0a9b.js";import"./FormSection.405bc5f0.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
