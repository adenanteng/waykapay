import{_ as n}from"./AppLayout-82c4ca95.js";import{o as e,c,w as p,b as r,e as a,F as i,f as m}from"./app-1bfae51b.js";import f from"./LogoutOtherBrowserSessionsForm-ba4588b4.js";import{S as t}from"./SectionBorder-278ede32.js";import u from"./TwoFactorAuthenticationForm-892db903.js";import l from"./UpdatePasswordForm-1434474a.js";import _ from"./UpdateProfileInformationForm-d5e676c2.js";import{_ as $}from"./PreviousButton-5a598f1c.js";import d from"./UpdatePinForm-eb63327b.js";import"./OnlineStatus-6d1d7665.js";import"./index-f4013013.js";import"./DarkmodeToggle-934ba185.js";import"./helper-04030b53.js";import"./use-controllable-39bf4dee.js";import"./bcrypt-7949a3ca.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-c9ed9d59.js";import"./DialogModal-a8ea4da4.js";import"./PrimaryButton-b9349185.js";import"./InputError-3dfde35c.js";import"./focus-management-cd35a338.js";import"./ActionMessage-6a2b4e4e.js";import"./ActionSection-fee59141.js";import"./SectionTitle-f5c287ee.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-e11c04e4.js";import"./TextInput-bae4017a.js";import"./DangerButton-c4596309.js";import"./InputLabel-abbfb24a.js";import"./FormSection-d128e163.js";const R={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(s){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(i,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(t)],64)):m("",!0),r(d),r(t),o.$page.props.jetstream.canUpdatePassword?(e(),a(i,{key:1},[r(l),r(t)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(i,{key:2},[r(u,{"requires-confirmation":s.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):m("",!0),r(f,{sessions:s.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{R as default};
