import{_ as n}from"./AppLayout.49f1b8fb.js";import c from"./DeleteUserForm.d353607e.js";import u from"./LogoutOtherBrowserSessionsForm.c237d329.js";import{S as a}from"./SectionBorder.afbf6ec5.js";import f from"./TwoFactorAuthenticationForm.6260af2c.js";import l from"./UpdatePasswordForm.fdb7e23a.js";import $ from"./UpdateProfileInformationForm.b496d02c.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.4a2ac90e.js";import{_ as g}from"./PreviousButton.c6c4e43d.js";import"./DarkmodeToggle.03817996.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.9832f3f8.js";import"./label.16ba770f.js";import"./focus-management.0a76b70e.js";import"./ActionSection.8ffb3580.js";import"./SectionTitle.bdee6bfd.js";import"./DangerButton.ab55b3f5.js";import"./DialogModal.ec980ff8.js";import"./InputError.cbd6438c.js";import"./SecondaryButton.717bfa6d.js";import"./TextInput.e9f17e4a.js";import"./ActionMessage.6402ad39.js";import"./PrimaryButton.604058db.js";import"./InputLabel.a6174332.js";import"./FormSection.85a5a010.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
