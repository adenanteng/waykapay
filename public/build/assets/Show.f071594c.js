import{_ as n}from"./AppLayout.ff7b0211.js";import c from"./DeleteUserForm.72e1fc21.js";import u from"./LogoutOtherBrowserSessionsForm.8e67680d.js";import{S as a}from"./SectionBorder.8b56f817.js";import f from"./TwoFactorAuthenticationForm.f007a82d.js";import l from"./UpdatePasswordForm.984a7866.js";import $ from"./UpdateProfileInformationForm.f198a5cd.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.fe0927a3.js";import{_ as g}from"./PreviousButton.ece1bc3c.js";import"./helper.2c2c494a.js";import"./DarkmodeToggle.a8fa30e8.js";import"./label.e3616116.js";import"./focus-management.7ec35e1e.js";import"./ActionSection.8c33efc0.js";import"./SectionTitle.87663a8f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.17ad3fb8.js";import"./DialogModal.8a64fb15.js";import"./InputError.b2f7d4bd.js";import"./SecondaryButton.023ee25e.js";import"./TextInput.731eb45c.js";import"./ActionMessage.7dacfb46.js";import"./PrimaryButton.1c6cee2f.js";import"./InputLabel.00be28b9.js";import"./FormSection.d738c9ed.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
