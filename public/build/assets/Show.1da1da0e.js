import{_ as n}from"./AppLayout.3f3c33b9.js";import c from"./DeleteUserForm.17f00b11.js";import f from"./LogoutOtherBrowserSessionsForm.49c331b9.js";import{S as e}from"./SectionBorder.e69e1d77.js";import u from"./TwoFactorAuthenticationForm.4a7d95c1.js";import l from"./UpdatePasswordForm.d697a274.js";import $ from"./UpdateProfileInformationForm.3aa58777.js";import{c as _,w as p,o as t,b as r,e as a,F as s,f as m}from"./app.7cbcdd66.js";import{_ as g}from"./PreviousButton.43b82aaa.js";import d from"./UpdatePinForm.577693bc.js";import"./Banner.8a52fb81.js";import"./DarkmodeToggle.f73f6f84.js";import"./helper.e9fc3b37.js";import"./label.e24b74d3.js";import"./index.4010f064.js";import"./focus-management.47c86403.js";import"./ActionSection.eea82c3f.js";import"./SectionTitle.3471bf5f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.c5747e57.js";import"./DialogModal.1cc8548a.js";import"./InputError.a0d88a84.js";import"./SecondaryButton.67199da5.js";import"./TextInput.e20285c6.js";import"./ActionMessage.6282bfda.js";import"./PrimaryButton.5d95d83a.js";import"./InputLabel.15ac392d.js";import"./FormSection.79ed941c.js";const Q={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,h)=>(t(),_(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(t(),a(s,{key:0},[r($,{user:o.$page.props.user},null,8,["user"]),r(e)],64)):m("",!0),r(d),r(e),o.$page.props.jetstream.canUpdatePassword?(t(),a(s,{key:1},[r(l),r(e)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(t(),a(s,{key:2},[r(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(e)],64)):m("",!0),r(f,{sessions:i.sessions},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(t(),a(s,{key:3},[r(e),r(c)],64)):m("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{Q as default};