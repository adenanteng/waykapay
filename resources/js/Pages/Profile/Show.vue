<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';
import MobileMenu from "@/Components/MobileMenu.vue";
import PreviousButton from "../../Components/PreviousButton.vue";
import UpdatePinForm from "@/Pages/Profile/Partials/UpdatePinForm.vue";

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});
</script>

<template>
    <AppLayout :title="$page.props.user.name"
               :name="$page.props.user.name"
               :desc="$page.props.user.email"
               :avatar="$page.props.user.profile_photo_url"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <template v-if="$page.props.jetstream.canUpdateProfileInformation">
            <UpdateProfileInformationForm :user="$page.props.user" />

            <SectionBorder />
        </template>

        <UpdatePinForm />

        <SectionBorder />

        <template v-if="$page.props.jetstream.canUpdatePassword">
            <UpdatePasswordForm />

            <SectionBorder />
        </template>

        <template v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
            <TwoFactorAuthenticationForm
                :requires-confirmation="confirmsTwoFactorAuthentication"
            />

            <SectionBorder />
        </template>

        <LogoutOtherBrowserSessionsForm
            :sessions="sessions" />

<!--        <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">-->
<!--            <SectionBorder />-->

<!--            <DeleteUserForm />-->
<!--        </template>-->

    </AppLayout>
</template>
