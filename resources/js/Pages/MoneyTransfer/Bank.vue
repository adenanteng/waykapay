<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PreviousButton from "@/Components/PreviousButton.vue";
import UpdateBankForm from "./Partials/UpdateBankForm.vue";

</script>

<template>
    <AppLayout title="Kirim Uang"
               name="Pilih Bank"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <UpdateBankForm
            :response="$page.props.response ?? '' "
            :customer_list="$page.props.customer_list ?? '' "
        />
<!--        <SectionBorder />-->

    </AppLayout>
</template>
