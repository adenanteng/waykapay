<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/Deposit/Partials/UpdateInformationForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";3
import {ref} from "vue";
import UpdateBankForm from "@/Pages/Deposit/Partials/UpdateBankForm.vue";

</script>

<template>
    <AppLayout title="Deposit"
               name="Pilih Metode Pembayaran"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <UpdateBankForm
            :users="$page.props.users ?? '' "
            :response="$page.props.response ?? '' "
            :amount="$page.props.amount ?? '' "
        />

<!--        <SectionBorder />-->

    </AppLayout>
</template>
