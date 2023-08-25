import{_ as n}from"./AppLayout.a68a1d32.js";import c from"./DeleteUserForm.1254bf22.js";import u from"./LogoutOtherBrowserSessionsForm.c48919c4.js";import{S as a}from"./SectionBorder.bb957a5c.js";import f from"./TwoFactorAuthenticationForm.3df71a48.js";import l from"./UpdatePasswordForm.9598e17a.js";import $ from"./UpdateProfileInformationForm.7749e77a.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.ba494407.js";import{_ as g}from"./PreviousButton.2487b0ab.js";import"./helper.b00fc970.js";import"./DarkmodeToggle.2846c315.js";import"./label.97fd1f8d.js";import"./focus-management.b25998ec.js";import"./ActionSection.71bc9dd5.js";import"./SectionTitle.ff7c1539.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.af4a5c3c.js";import"./DialogModal.0bb70395.js";import"./InputError.fd7b4ac2.js";import"./SecondaryButton.3e32bf72.js";import"./TextInput.b1794523.js";import"./ActionMessage.50dcc5d4.js";import"./PrimaryButton.cdd3e881.js";import"./InputLabel.741e0bdd.js";import"./FormSection.6b2f0aad.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
