import{_ as n}from"./AppLayout.ab24f9b1.js";import{c,w as p,o as e,b as r,e as t,F as s,f as i}from"./app.607fac76.js";import f from"./LogoutOtherBrowserSessionsForm.d7be322e.js";import{S as a}from"./SectionBorder.0510f9db.js";import u from"./TwoFactorAuthenticationForm.803852e4.js";import l from"./UpdatePasswordForm.c7526adf.js";import _ from"./UpdateProfileInformationForm.bd3b9bf4.js";import{_ as $}from"./PreviousButton.23c5438c.js";import d from"./UpdatePinForm.6b50f5b0.js";import"./helper.7f8bd4d4.js";import"./DarkmodeToggle.754a97d9.js";import"./label.72bcf3f3.js";import"./focus-management.0a17b071.js";import"./ActionMessage.e883fb72.js";import"./ActionSection.bd3af578.js";import"./SectionTitle.29798035.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.02e953ec.js";import"./InputError.948938fc.js";import"./PrimaryButton.82d29950.js";import"./SecondaryButton.2ffa1858.js";import"./TextInput.86c141c7.js";import"./DangerButton.c7762105.js";import"./InputLabel.7a671e61.js";import"./FormSection.85b85da4.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
