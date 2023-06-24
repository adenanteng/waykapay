<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UpdateAppInformationForm from '@/Pages/AppSetting/Partials/UpdateAppInformationForm.vue';
import PreviousButton from "@/Components/PreviousButton.vue";
import SectionBorder from "@/Components/SectionBorder.vue";

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

<!--        <SectionBorder />-->


    </AppLayout>
</template>
