import{_ as n}from"./AppLayout.b7cb3365.js";import{c,w as p,o as e,b as o,e as a,F as t,f as s}from"./app.6f2e8fc4.js";import f from"./LogoutOtherBrowserSessionsForm.8dd9a2ec.js";import{S as i}from"./SectionBorder.e5a15399.js";import u from"./TwoFactorAuthenticationForm.f01e162b.js";import l from"./UpdatePasswordForm.7f77fda2.js";import $ from"./UpdateProfileInformationForm.fd3fff9c.js";import{_}from"./PreviousButton.ab4989fe.js";import"./helper.d4bafd53.js";import"./DarkmodeToggle.2ca6a3e3.js";import"./label.58ac0a48.js";import"./focus-management.a86a9812.js";import"./ActionMessage.fc09f2af.js";import"./ActionSection.0c0bc0b5.js";import"./SectionTitle.cf0e3561.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.6bf1d39a.js";import"./InputError.c0fd51eb.js";import"./PrimaryButton.f34f1c95.js";import"./SecondaryButton.15c401c2.js";import"./TextInput.53d51d8c.js";import"./DangerButton.b4a0e200.js";import"./InputLabel.f46c7d8a.js";import"./FormSection.6b6d43ed.js";const G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(r,d)=>(e(),c(n,{title:r.$page.props.user.name,name:r.$page.props.user.name,desc:r.$page.props.user.email,avatar:r.$page.props.user.profile_photo_url},{previous:p(()=>[o(_)]),default:p(()=>[r.$page.props.jetstream.canUpdateProfileInformation?(e(),a(t,{key:0},[o($,{user:r.$page.props.user},null,8,["user"]),o(i)],64)):s("",!0),r.$page.props.jetstream.canUpdatePassword?(e(),a(t,{key:1},[o(l),o(i)],64)):s("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(t,{key:2},[o(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),o(i)],64)):s("",!0),o(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{G as default};
