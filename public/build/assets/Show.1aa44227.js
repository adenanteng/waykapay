import{_ as n}from"./AppLayout.e2e007bf.js";import c from"./DeleteUserForm.8a8e2ff2.js";import u from"./LogoutOtherBrowserSessionsForm.282d4bf9.js";import{S as a}from"./SectionBorder.e1a44e1c.js";import f from"./TwoFactorAuthenticationForm.423539b6.js";import l from"./UpdatePasswordForm.34f3be5d.js";import $ from"./UpdateProfileInformationForm.f83eda03.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.deaa3c13.js";import{_ as g}from"./PreviousButton.ecfb7dc5.js";import"./helper.0bd72aae.js";import"./DarkmodeToggle.eac7023a.js";import"./label.60075001.js";import"./focus-management.ee83491e.js";import"./ActionSection.44da62ae.js";import"./SectionTitle.ced27db6.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.74d09245.js";import"./DialogModal.783fc13f.js";import"./InputError.d25c1e79.js";import"./SecondaryButton.9757e45c.js";import"./TextInput.ffb4c103.js";import"./ActionMessage.f4b72673.js";import"./PrimaryButton.56232861.js";import"./InputLabel.20daeed4.js";import"./FormSection.832cb12e.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
