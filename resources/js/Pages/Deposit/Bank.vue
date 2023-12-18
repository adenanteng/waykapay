<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PreviousButton from "@/Components/PreviousButton.vue";
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
