import{_ as n}from"./AppLayout-2eef27e2.js";import{o as e,c,w as p,b as r,e as a,F as i,f as m}from"./app-3e1127a3.js";import f from"./LogoutOtherBrowserSessionsForm-591da02f.js";import{S as t}from"./SectionBorder-758b8aa5.js";import u from"./TwoFactorAuthenticationForm-a4bbedce.js";import l from"./UpdatePasswordForm-2f45c107.js";import _ from"./UpdateProfileInformationForm-d1514656.js";import{_ as $}from"./PreviousButton-dfd6703d.js";import d from"./UpdatePinForm-eb6d3586.js";import"./OnlineStatus-0ba558ab.js";import"./index-c7717e5e.js";import"./DarkmodeToggle-1f44a9c3.js";import"./helper-04030b53.js";import"./use-controllable-398b0ea3.js";import"./bcrypt-958b6267.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./vue3-otp-input.esm-a97ae1df.js";import"./DialogModal-3a85f36f.js";import"./PrimaryButton-28f76aed.js";import"./InputError-4796e0d3.js";import"./BackgroundParticle-7a0eda05.js";import"./focus-management-416c92b6.js";import"./ActionMessage-cf058304.js";import"./ActionSection-498b5bfc.js";import"./SectionTitle-4317ab30.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-a16e428c.js";import"./TextInput-c5e691d0.js";import"./DangerButton-013c6d47.js";import"./InputLabel-d0452be6.js";import"./FormSection-776d4a54.js";const W={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(s){return(o,g)=>(e(),c(n,{title:o.$page.props.user.name,name:o.$page.props.user.name,desc:o.$page.props.user.email,avatar:o.$page.props.user.profile_photo_url},{previous:p(()=>[r($)]),default:p(()=>[o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(i,{key:0},[r(_,{user:o.$page.props.user},null,8,["user"]),r(t)],64)):m("",!0),r(d),r(t),o.$page.props.jetstream.canUpdatePassword?(e(),a(i,{key:1},[r(l),r(t)],64)):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),a(i,{key:2},[r(u,{"requires-confirmation":s.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(t)],64)):m("",!0),r(f,{sessions:s.sessions},null,8,["sessions"])]),_:1},8,["title","name","desc","avatar"]))}};export{W as default};
