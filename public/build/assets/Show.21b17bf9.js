import{_ as n}from"./AppLayout.49ffeeeb.js";import c from"./DeleteUserForm.eee55131.js";import u from"./LogoutOtherBrowserSessionsForm.f69316b0.js";import{S as a}from"./SectionBorder.1c59853a.js";import f from"./TwoFactorAuthenticationForm.207e4fbe.js";import l from"./UpdatePasswordForm.0fd70b1c.js";import $ from"./UpdateProfileInformationForm.f7df2501.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.4768fc91.js";import{_ as g}from"./PreviousButton.d27868da.js";import"./helper.33cf8c80.js";import"./DarkmodeToggle.a295eca1.js";import"./label.17605f67.js";import"./focus-management.3926b8b0.js";import"./ActionSection.6f03ad6b.js";import"./SectionTitle.9bd31227.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.839dd016.js";import"./DialogModal.caedbbb4.js";import"./InputError.8fc2874b.js";import"./SecondaryButton.40446976.js";import"./TextInput.6527242b.js";import"./ActionMessage.8bdc095d.js";import"./PrimaryButton.4b0375b4.js";import"./InputLabel.75bd91c2.js";import"./FormSection.a2fa8f68.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
