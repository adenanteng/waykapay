import{_ as n}from"./AppLayout.a21b702c.js";import{c,w as p,o as e,b as r,e as a,F as s,f as i}from"./app.61470a46.js";import f from"./LogoutOtherBrowserSessionsForm.8cca1f24.js";import{S as t}from"./SectionBorder.2a9466dc.js";import u from"./TwoFactorAuthenticationForm.fe4a09ec.js";import l from"./UpdatePasswordForm.c4ecd327.js";import _ from"./UpdateProfileInformationForm.594982f4.js";import{_ as $}from"./PreviousButton.6c75d377.js";import d from"./UpdatePinForm.a42e4b17.js";import"./Banner.4dccff6c.js";import"./DarkmodeToggle.cb0e286c.js";import"./helper.e9fc3b37.js";import"./label.3825a50a.js";import"./index.2ecbe270.js";import"./focus-management.b101602e.js";import"./ActionMessage.5d6bb3ae.js";import"./ActionSection.e6ce2a90.js";import"./SectionTitle.121a70ce.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.420b6f18.js";import"./InputError.1e19787a.js";import"./PrimaryButton.22fcb552.js";import"./SecondaryButton.d1079d56.js";import"./TextInput.def82503.js";import"./DangerButton.e96827c2.js";import"./InputLabel.2a112e5f.js";import"./FormSection.5ae4b4bb.js";const L={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(t)],64)):i("",!0),r(d),r(t),o.$page.props.jetstream.canUpdatePassword?(e(),a(s,{key:1},[r(l),r(t)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{L as default};
