import{_ as n}from"./AppLayout.8f4d7e33.js";import c from"./DeleteUserForm.fdb9d966.js";import u from"./LogoutOtherBrowserSessionsForm.fa318075.js";import{S as a}from"./SectionBorder.7e104e17.js";import f from"./TwoFactorAuthenticationForm.bc254e1f.js";import l from"./UpdatePasswordForm.22c5cc4d.js";import $ from"./UpdateProfileInformationForm.c253904c.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.da6f37b1.js";import{_ as g}from"./PreviousButton.c2628afe.js";import"./helper.4d48387d.js";import"./DarkmodeToggle.e1c3b16b.js";import"./label.0963e178.js";import"./focus-management.38f0cbda.js";import"./ActionSection.0a8ba05b.js";import"./SectionTitle.aa04cfd5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.07553388.js";import"./DialogModal.dedde2d8.js";import"./InputError.386753fc.js";import"./SecondaryButton.c7ab4ca2.js";import"./TextInput.43ca6f22.js";import"./ActionMessage.6c837b6b.js";import"./PrimaryButton.4cb68018.js";import"./InputLabel.10355358.js";import"./FormSection.60918f8b.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
