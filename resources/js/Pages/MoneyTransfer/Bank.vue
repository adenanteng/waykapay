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
            :users="$page.props.users ?? '' "
            :response="$page.props.response ?? '' "
        />

        <div class="mb-80">

        </div>
<!--        <SectionBorder />-->

    </AppLayout>
</template>
