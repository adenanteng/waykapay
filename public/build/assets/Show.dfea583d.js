import{_ as n}from"./AppLayout.8a65e784.js";import c from"./DeleteUserForm.db509bd5.js";import u from"./LogoutOtherBrowserSessionsForm.565c22eb.js";import{S as a}from"./SectionBorder.56466f2b.js";import f from"./TwoFactorAuthenticationForm.c9bfb638.js";import l from"./UpdatePasswordForm.03dbfff0.js";import $ from"./UpdateProfileInformationForm.6cb75293.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.50baaa61.js";import{_ as g}from"./PreviousButton.4572fb01.js";import"./helper.17dbc766.js";import"./DarkmodeToggle.1890af56.js";import"./label.f16f7bf5.js";import"./focus-management.f47a116b.js";import"./ActionSection.3088c53b.js";import"./SectionTitle.59a73d5c.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.e45d12e3.js";import"./DialogModal.658704fe.js";import"./InputError.6100d4ef.js";import"./SecondaryButton.bd9f8e2c.js";import"./TextInput.78e277db.js";import"./ActionMessage.304a52a8.js";import"./PrimaryButton.e3cb03e3.js";import"./InputLabel.c026d7c7.js";import"./FormSection.4dc83d43.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
