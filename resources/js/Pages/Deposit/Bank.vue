<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/Deposit/Partials/UpdateInformationForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import UpdateMethodForm from "@/Pages/Deposit/Partials/UpdateBankForm.vue";
import {ref} from "vue";

</script>

<template>
    <AppLayout title="Deposit"
               name="Pilih Metode Pembayaran"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <UpdateMethodForm
            :users="$page.props.users ?? '' "
            :response="$page.props.response ?? '' "
            :amount="$page.props.amount ?? '' "
        />

<!--        <SectionBorder />-->

    </AppLayout>
</template>
