<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/MoneyTransfer/Partials/UpdateInformationForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";

import {ref} from "vue";

</script>

<template>
    <AppLayout title="Kirim Uang"
               name="Mau isi saldo berapa?"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <UpdateInformationForm
            :users="$page.props.users ?? '' "
            :beneficiary="$page.props.beneficiary ?? '' "
            :token="$page.props.token ?? '' "
            :response="$page.props.response ?? '' "
            :bank="$page.props.bank ?? '' "
            :account_no="$page.props.account_no ?? '' "
        />

<!--        <SectionBorder />-->

    </AppLayout>
</template>
