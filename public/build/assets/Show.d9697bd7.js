import{_ as n}from"./AppLayout.59802c4f.js";import f from"./DeleteUserForm.9238a0bf.js";import u from"./LogoutOtherBrowserSessionsForm.ffb628a9.js";import{S as a}from"./SectionBorder.8bf5bcf4.js";import c from"./TwoFactorAuthenticationForm.47b02a92.js";import l from"./UpdatePasswordForm.961cd6d6.js";import $ from"./UpdateProfileInformationForm.aa35fbae.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.3cbb3de2.js";import{_ as d}from"./PreviousButton.1e67dd92.js";import"./DarkmodeToggle.c68ddc3b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionSection.f64db80a.js";import"./SectionTitle.bc403d9a.js";import"./DangerButton.a6d54ef6.js";import"./DialogModal.fa023ae1.js";import"./InputError.ec84b288.js";import"./SecondaryButton.85c8e475.js";import"./TextInput.122e2ef2.js";import"./ActionMessage.8e56add2.js";import"./PrimaryButton.d45a6a64.js";import"./InputLabel.8d76062e.js";import"./FormSection.543a9f9e.js";const z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,g)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(d,{href:e.route("profile.index")},null,8,["href"])]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(c,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(f)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{z as default};
