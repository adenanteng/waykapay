import{_ as n}from"./AppLayout.a7f3d111.js";import f from"./DeleteUserForm.bae626d0.js";import u from"./LogoutOtherBrowserSessionsForm.a63a94c2.js";import{S as a}from"./SectionBorder.28bb7feb.js";import c from"./TwoFactorAuthenticationForm.5f8c981b.js";import l from"./UpdatePasswordForm.4e3b1658.js";import $ from"./UpdateProfileInformationForm.2c88d9af.js";import{c as _,w as p,o,b as e,e as t,F as s,f as i}from"./app.67087bab.js";import{_ as d}from"./PreviousButton.daa9b454.js";import"./DarkmodeToggle.bd1a79aa.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./helper.7b2aa8a6.js";import"./label.0e098d6b.js";import"./focus-management.5d8f5dd2.js";import"./ActionSection.91b9c7bf.js";import"./SectionTitle.8b3e8a7d.js";import"./DangerButton.011425ca.js";import"./DialogModal.94b234c8.js";import"./InputError.5aa6f7b4.js";import"./SecondaryButton.e88ce0ed.js";import"./TextInput.78d05b57.js";import"./ActionMessage.a5b44beb.js";import"./PrimaryButton.37dc9fae.js";import"./InputLabel.be69ae79.js";import"./FormSection.e5981c7f.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(r,g)=>(o(),_(n,{title:r.$page.props.user.name,name:r.$page.props.user.name,desc:r.$page.props.user.email,avatar:r.$page.props.user.profile_photo_url},{previous:p(()=>[e(d,{href:r.route("profile.index")},null,8,["href"])]),default:p(()=>[r.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[e($,{user:r.$page.props.user},null,8,["user"]),e(a)],64)):i("",!0),r.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[e(l),e(a)],64)):i("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[e(c,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),e(a)],64)):i("",!0),e(u,{sessions:m.sessions},null,8,["sessions"]),r.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[e(a),e(f)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};
