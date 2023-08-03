<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/User/Partials/UpdateInformationForm.vue";
import DeleteForm from "@/Pages/User/Partials/DeleteForm.vue";
import PasswordResetForm from "@/Pages/User/Partials/PasswordResetForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
               desc="lorem ipsum"
               action="Kembali"
               :href="route('user.index')"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <UpdateInformationForm :users="$page.props.users ?? '' " />

        <SectionBorder />

        <template v-if="$page.props.users">
            <PasswordResetForm :users="$page.props.users" />

            <SectionBorder />

            <DeleteForm :users="$page.props.users" />
        </template>

    </AppLayout>
</template>
