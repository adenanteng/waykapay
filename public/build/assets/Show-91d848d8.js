import{_ as n}from"./AppLayout-ff1c800c.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-5430f45e.js";import f from"./LogoutOtherBrowserSessionsForm-b40d78c2.js";import{S as a}from"./SectionBorder-8170edc8.js";import u from"./TwoFactorAuthenticationForm-4ddd8326.js";import l from"./UpdatePasswordForm-d587aa47.js";import _ from"./UpdateProfileInformationForm-054fe3fd.js";import{_ as $}from"./PreviousButton-2118414e.js";import d from"./UpdatePinForm-a4de666f.js";import"./OnlineStatus-e0d4d3ac.js";import"./index-efdf3a46.js";import"./DarkmodeToggle-f81c2be8.js";import"./use-controllable-72835dd1.js";import"./focus-management-90d28524.js";import"./ActionMessage-d06435f5.js";import"./ActionSection-6a596228.js";import"./SectionTitle-e83e41ff.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-665c6752.js";import"./InputError-473c773c.js";import"./PrimaryButton-5108ecdf.js";import"./SecondaryButton-d3319be4.js";import"./TextInput-387a6535.js";import"./DangerButton-1643a0ab.js";import"./InputLabel-3e6734f6.js";import"./FormSection-b3d31d2a.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
