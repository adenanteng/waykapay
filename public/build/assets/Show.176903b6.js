import{_ as n}from"./AppLayout.0fd2f3a4.js";import c from"./DeleteUserForm.57cab3ad.js";import u from"./LogoutOtherBrowserSessionsForm.1c1dcb35.js";import{S as a}from"./SectionBorder.8a98c6ac.js";import f from"./TwoFactorAuthenticationForm.d5b813e4.js";import l from"./UpdatePasswordForm.07a64398.js";import $ from"./UpdateProfileInformationForm.b5ca056b.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.8b22e426.js";import{_ as g}from"./PreviousButton.1d90fc3c.js";import"./helper.fb556f7f.js";import"./DarkmodeToggle.79637ef1.js";import"./label.b0fd8d73.js";import"./focus-management.bec6c689.js";import"./ActionSection.4d28e56d.js";import"./SectionTitle.010114c6.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.2c0fa872.js";import"./DialogModal.28a1261c.js";import"./InputError.a24da272.js";import"./SecondaryButton.57294132.js";import"./TextInput.27945563.js";import"./ActionMessage.bd057cf1.js";import"./PrimaryButton.57b50b5a.js";import"./InputLabel.78364b3d.js";import"./FormSection.3883f6da.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
