import{_ as n}from"./AppLayout.a550f3c7.js";import{c,w as p,o as e,b as r,e as a,F as s,f as i}from"./app.797c6bf3.js";import f from"./LogoutOtherBrowserSessionsForm.477413ff.js";import{S as t}from"./SectionBorder.02251595.js";import u from"./TwoFactorAuthenticationForm.af26285a.js";import l from"./UpdatePasswordForm.57efdaac.js";import _ from"./UpdateProfileInformationForm.b331d841.js";import{_ as $}from"./PreviousButton.8842f1d5.js";import d from"./UpdatePinForm.e6458b50.js";import"./Banner.d5b30c55.js";import"./DarkmodeToggle.7d03aaa6.js";import"./helper.e9fc3b37.js";import"./label.1cc7be90.js";import"./index.82ebeed5.js";import"./focus-management.4994b455.js";import"./ActionMessage.044b052a.js";import"./ActionSection.31bd4e1c.js";import"./SectionTitle.5c0355ea.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.bdb5bb36.js";import"./InputError.d4c730bd.js";import"./PrimaryButton.8fc2a430.js";import"./SecondaryButton.ef2df504.js";import"./TextInput.29aa20e3.js";import"./DangerButton.23898577.js";import"./InputLabel.0496cfd7.js";import"./FormSection.509c6353.js";const L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(t)],64)):i("",!0),r(d),r(t),o.$page.props.jetstream.canUpdatePassword?(e(),a(s,{key:1},[r(l),r(t)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{L as default};
