import{_ as n}from"./AppLayout-8418dbd5.js";import{o as e,c,w as p,b as r,e as t,F as s,f as i}from"./app-643b08a2.js";import f from"./LogoutOtherBrowserSessionsForm-e7ce1118.js";import{S as a}from"./SectionBorder-948855a5.js";import u from"./TwoFactorAuthenticationForm-75f095a0.js";import l from"./UpdatePasswordForm-a054a5d4.js";import _ from"./UpdateProfileInformationForm-d7976c6b.js";import{_ as $}from"./PreviousButton-3e4519c3.js";import d from"./UpdatePinForm-c472671a.js";import"./OnlineStatus-7fb82cd2.js";import"./index-5a5a58ff.js";import"./DarkmodeToggle-a33b010e.js";import"./use-controllable-104b7dde.js";import"./focus-management-228444b7.js";import"./ActionMessage-4be013b8.js";import"./ActionSection-f458139e.js";import"./SectionTitle-4d720bbf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-8408d21c.js";import"./InputError-cf28e385.js";import"./PrimaryButton-b2ba40c2.js";import"./SecondaryButton-404d8f43.js";import"./TextInput-23a3d5fe.js";import"./DangerButton-9660fe53.js";import"./InputLabel-212fd0e3.js";import"./FormSection-e275288d.js";const K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t(s,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),r(d),r(a),o.$page.props.jetstream.canUpdatePassword?(e(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),t(s,{key:2},[r(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(f,{sessions:m.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{K as default};
