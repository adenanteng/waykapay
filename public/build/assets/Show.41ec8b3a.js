import{_ as n}from"./AppLayout.76c3ee67.js";import{c,w as p,o as e,b as o,e as a,F as t,f as s}from"./app.0f9b2fb7.js";import f from"./LogoutOtherBrowserSessionsForm.9d461da7.js";import{S as i}from"./SectionBorder.faf24190.js";import u from"./TwoFactorAuthenticationForm.799dd0a1.js";import l from"./UpdatePasswordForm.956a320e.js";import $ from"./UpdateProfileInformationForm.bbaa7a9d.js";import{_}from"./PreviousButton.95406a3e.js";import"./helper.4766f7f2.js";import"./DarkmodeToggle.a7b5ccaf.js";import"./label.fdf29f0e.js";import"./focus-management.78db8c3d.js";import"./ActionMessage.4e574df4.js";import"./ActionSection.1acb599d.js";import"./SectionTitle.fa031d44.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.97496b86.js";import"./InputError.03209e59.js";import"./PrimaryButton.3171b600.js";import"./SecondaryButton.192d58d6.js";import"./TextInput.d73fac1f.js";import"./DangerButton.d1c403e2.js";import"./InputLabel.d0d4dd57.js";import"./FormSection.03a5db02.js";const G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(r,d)=>(e(),c(n,{title:r.$page.props.user.name,name:r.$page.props.user.name,desc:r.$page.props.user.email,avatar:r.$page.props.user.profile_photo_url},{previous:p(()=>[o(_)]),default:p(()=>[r.$page.props.jetstream.canUpdateProfileInformation?(e(),a(t,{key:0},[o($,{user:r.$page.props.user},null,8,["user"]),o(i)],64)):s("",!0),r.$page.props.jetstream.canUpdatePassword?(e(),a(t,{key:1},[o(l),o(i)],64)):s("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(t,{key:2},[o(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),o(i)],64)):s("",!0),o(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{G as default};
