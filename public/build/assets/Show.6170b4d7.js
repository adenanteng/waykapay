import{_ as n}from"./AppLayout.86f7919b.js";import c from"./DeleteUserForm.1fba9a45.js";import u from"./LogoutOtherBrowserSessionsForm.93088637.js";import{S as a}from"./SectionBorder.3ebc85bf.js";import f from"./TwoFactorAuthenticationForm.738b80b8.js";import l from"./UpdatePasswordForm.84f32bf9.js";import $ from"./UpdateProfileInformationForm.897a944e.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.61b98fe4.js";import{_ as g}from"./PreviousButton.3ab5af54.js";import"./helper.4d5a833a.js";import"./DarkmodeToggle.9c94744d.js";import"./label.22bb648e.js";import"./focus-management.a4feca9c.js";import"./ActionSection.46dffe66.js";import"./SectionTitle.e8d6bbf3.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.085a2f8f.js";import"./DialogModal.e6d1969b.js";import"./InputError.e4e3db94.js";import"./SecondaryButton.08e32748.js";import"./TextInput.ae90aabf.js";import"./ActionMessage.4c04b2d0.js";import"./PrimaryButton.3dcf9c85.js";import"./InputLabel.210491ea.js";import"./FormSection.b9e79469.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
