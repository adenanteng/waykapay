import{_ as n}from"./AppLayout.7cd6e4c1.js";import f from"./DeleteUserForm.3e9e9f89.js";import u from"./LogoutOtherBrowserSessionsForm.3d105749.js";import{S as a}from"./SectionBorder.b9e2096a.js";import c from"./TwoFactorAuthenticationForm.2a8e4a47.js";import l from"./UpdatePasswordForm.df7e5443.js";import $ from"./UpdateProfileInformationForm.3115e3aa.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.70ec5318.js";import{_ as d}from"./PreviousButton.e847ad9c.js";import"./DarkmodeToggle.efe73e65.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionSection.093de6de.js";import"./SectionTitle.6afa7dc3.js";import"./DangerButton.b51c7ebd.js";import"./DialogModal.6707afc9.js";import"./InputError.356c67e7.js";import"./SecondaryButton.4d414075.js";import"./TextInput.76a7ca2c.js";import"./ActionMessage.9c2784f7.js";import"./PrimaryButton.3ac0663e.js";import"./InputLabel.21483e70.js";import"./FormSection.e787922f.js";const z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,g)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(d,{href:e.route("profile.index")},null,8,["href"])]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(c,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(f)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{z as default};
