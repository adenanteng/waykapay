import{_ as n}from"./AppLayout.e0f88b31.js";import c from"./DeleteUserForm.ce9c05d0.js";import u from"./LogoutOtherBrowserSessionsForm.4e18241c.js";import{S as a}from"./SectionBorder.84cc8ec9.js";import f from"./TwoFactorAuthenticationForm.96a5dfe5.js";import l from"./UpdatePasswordForm.87738a14.js";import $ from"./UpdateProfileInformationForm.9e4877fb.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.756e61c9.js";import{_ as g}from"./PreviousButton.d9f39dd7.js";import"./helper.9f0b7b1d.js";import"./DarkmodeToggle.485870f9.js";import"./label.279e2035.js";import"./focus-management.22c0a87d.js";import"./ActionSection.5bf1b710.js";import"./SectionTitle.a9709125.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.103558dc.js";import"./DialogModal.32a6ae44.js";import"./InputError.39de05f2.js";import"./SecondaryButton.34c8daab.js";import"./TextInput.8401f417.js";import"./ActionMessage.eceef7e5.js";import"./PrimaryButton.1cabf42c.js";import"./InputLabel.c40faf8d.js";import"./FormSection.877b0b4a.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
