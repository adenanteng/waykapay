import{_ as n}from"./AppLayout.2b778640.js";import c from"./DeleteUserForm.1ec1bbe9.js";import u from"./LogoutOtherBrowserSessionsForm.32757558.js";import{S as a}from"./SectionBorder.bf83cbcb.js";import f from"./TwoFactorAuthenticationForm.5d831b46.js";import l from"./UpdatePasswordForm.c2ea4f61.js";import $ from"./UpdateProfileInformationForm.0181d4c1.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.aef2291a.js";import{_ as g}from"./PreviousButton.0673541d.js";import"./helper.3779830b.js";import"./DarkmodeToggle.2769123c.js";import"./label.54976251.js";import"./focus-management.05430249.js";import"./ActionSection.015f514b.js";import"./SectionTitle.d365eec8.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.0c30e1df.js";import"./DialogModal.dd68ac1b.js";import"./InputError.f9f32017.js";import"./SecondaryButton.16865131.js";import"./TextInput.912ad91e.js";import"./ActionMessage.fdb04fda.js";import"./PrimaryButton.c191e237.js";import"./InputLabel.aca9c826.js";import"./FormSection.7ba6839e.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
