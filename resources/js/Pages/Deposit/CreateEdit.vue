<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/Deposit/Partials/UpdateInformationForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";

import {ref} from "vue";

</script>

<template>
    <AppLayout title="Deposit"
               name="Mau isi saldo berapa?"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <UpdateInformationForm
            :users="$page.props.users ?? '' "
            :response="$page.props.response ?? '' "
        />

<!--        <SectionBorder />-->

    </AppLayout>
</template>
