import{_ as n}from"./AppLayout.722d163d.js";import c from"./DeleteUserForm.10affb20.js";import u from"./LogoutOtherBrowserSessionsForm.ea55b1a8.js";import{S as t}from"./SectionBorder.3ab88481.js";import f from"./TwoFactorAuthenticationForm.a0c79515.js";import l from"./UpdatePasswordForm.ae0c15f1.js";import $ from"./UpdateProfileInformationForm.013c0587.js";import{c as _,w as p,o,b as r,e as a,F as s,f as i}from"./app.2b444570.js";import{_ as g}from"./PreviousButton.6a62fcbf.js";import"./Banner.c799c6b1.js";import"./DarkmodeToggle.e8832584.js";import"./helper.e9fc3b37.js";import"./label.b752297c.js";import"./focus-management.88344a1d.js";import"./ActionSection.6811cac2.js";import"./SectionTitle.55893c24.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.9fd38885.js";import"./DialogModal.433f8b3e.js";import"./InputError.02d953e4.js";import"./SecondaryButton.9c5a2170.js";import"./TextInput.8b4de385.js";import"./ActionMessage.0df3138c.js";import"./PrimaryButton.845fd4f5.js";import"./InputLabel.368678d0.js";import"./FormSection.169d150f.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),a(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(t)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),a(s,{key:1},[r(l),r(t)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),a(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),a(s,{key:3},[r(t),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
