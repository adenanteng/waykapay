import{_ as n}from"./AppLayout.1d8da634.js";import c from"./DeleteUserForm.7703d304.js";import u from"./LogoutOtherBrowserSessionsForm.d932f75f.js";import{S as a}from"./SectionBorder.07a4ea14.js";import f from"./TwoFactorAuthenticationForm.b8ef8e64.js";import l from"./UpdatePasswordForm.217f9ee8.js";import $ from"./UpdateProfileInformationForm.72a0e95a.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.c49a277f.js";import{_ as g}from"./PreviousButton.5726b7de.js";import"./helper.eacae53b.js";import"./DarkmodeToggle.a47ed5e1.js";import"./label.04407716.js";import"./focus-management.95735432.js";import"./ActionSection.7f2ff0df.js";import"./SectionTitle.24f5d028.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.40c4a3db.js";import"./DialogModal.eace0064.js";import"./InputError.89e55662.js";import"./SecondaryButton.0cbc5655.js";import"./TextInput.41f97687.js";import"./ActionMessage.4565b879.js";import"./PrimaryButton.dc4a1696.js";import"./InputLabel.450fe328.js";import"./FormSection.23f99a98.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
