<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/Deposit/Partials/UpdateInformationForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";

</script>

<template>
    <AppLayout title="Deposit"
               name="Mau isi saldo berapa?"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton :href="route('dashboard')" />
        </template>

        <UpdateInformationForm
            :users="$page.props.users ?? '' "
            :response="$page.props.response ?? '' "
        />

<!--        <SectionBorder />-->

<!--        <template v-if="$page.props.users">-->
<!--            <PasswordResetForm :users="$page.props.users" />-->

<!--            <SectionBorder />-->

<!--            <DeleteForm :users="$page.props.users" />-->
<!--        </template>-->

    </AppLayout>
</template>
