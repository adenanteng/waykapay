<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UpdateAppInformationForm from '@/Pages/AppSetting/Partials/UpdateAppInformationForm.vue';
import PreviousButton from "@/Components/PreviousButton.vue";
import SectionBorder from "@/Components/SectionBorder.vue";
import UpdateApiMidtransForm from "./Partials/UpdateApiMidtransForm.vue";
import UpdateApiDigiflazzForm from "./Partials/UpdateApiDigiflazzForm.vue";
import UpdateApiFlipForm from "./Partials/UpdateApiFlipForm.vue";

</script>

<template>
    <AppLayout title="Pengaturan"
               name="Pengaturan Aplikasi"
               desc="lorem ipsum"
   >
        <template #previous>
            <PreviousButton :href="route('profile.index')" />
        </template>

        <UpdateAppInformationForm :setting="$page.props.setting" />

        <SectionBorder />

<!--        <UpdateApiMidtransForm :setting="$page.props.setting" />-->
<!--        <UpdateApiFlipForm :setting="$page.props.setting" />-->

<!--        <SectionBorder />-->

        <UpdateApiDigiflazzForm :setting="$page.props.setting" />

    </AppLayout>
</template>
