import{_ as n}from"./AppLayout.38c8fa2d.js";import{c,w as p,o as e,b as o,e as a,F as t,f as s}from"./app.06b9da57.js";import f from"./LogoutOtherBrowserSessionsForm.87ec1c9d.js";import{S as i}from"./SectionBorder.d5714343.js";import u from"./TwoFactorAuthenticationForm.cbfc153f.js";import l from"./UpdatePasswordForm.df1932ea.js";import $ from"./UpdateProfileInformationForm.263e99d8.js";import{_}from"./PreviousButton.2f558a29.js";import"./helper.a4c89d61.js";import"./DarkmodeToggle.411c83df.js";import"./label.392990e7.js";import"./focus-management.6856f4a2.js";import"./ActionMessage.3cd29fdd.js";import"./ActionSection.20d81c0b.js";import"./SectionTitle.eee1ee84.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.854153fd.js";import"./InputError.f5bf6d5f.js";import"./PrimaryButton.fa55601b.js";import"./SecondaryButton.0af3fe08.js";import"./TextInput.b52d6a2a.js";import"./DangerButton.6994e42d.js";import"./InputLabel.58462c91.js";import"./FormSection.bbc56e5d.js";const G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(r,d)=>(e(),c(n,{title:r.$page.props.user.name,name:r.$page.props.user.name,desc:r.$page.props.user.email,avatar:r.$page.props.user.profile_photo_url},{previous:p(()=>[o(_)]),default:p(()=>[r.$page.props.jetstream.canUpdateProfileInformation?(e(),a(t,{key:0},[o($,{user:r.$page.props.user},null,8,["user"]),o(i)],64)):s("",!0),r.$page.props.jetstream.canUpdatePassword?(e(),a(t,{key:1},[o(l),o(i)],64)):s("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(t,{key:2},[o(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),o(i)],64)):s("",!0),o(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{G as default};
