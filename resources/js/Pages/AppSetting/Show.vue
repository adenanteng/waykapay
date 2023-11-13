<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UpdateAppInformationForm from '@/Pages/AppSetting/Partials/UpdateAppInformationForm.vue';
import PreviousButton from "@/Components/PreviousButton.vue";
import SectionBorder from "@/Components/SectionBorder.vue";
import UpdateApiMidtransForm from "./Partials/UpdateApiMidtransForm.vue";
import UpdateApiDigiflazzForm from "./Partials/UpdateApiDigiflazzForm.vue";
import UpdateApiFlipForm from "./Partials/UpdateApiFlipForm.vue";
import UpdateFeePulsaForm from "./Partials/UpdateFeePulsaForm.vue";
import UpdateFeeEmoneyForm from "./Partials/UpdateFeeEmoneyForm.vue";
import UpdateFeeEtollForm from "./Partials/UpdateFeeEtollForm.vue";
import UpdateFeeGamesForm from "./Partials/UpdateFeeGamesForm.vue";
import UpdateFeeInternetForm from "./Partials/UpdateFeeInternetForm.vue";
import UpdateFeePlnForm from "./Partials/UpdateFeePlnForm.vue";
import UpdateFeeTVForm from "./Partials/UpdateFeeTVForm.vue";
import UpdateFeeVoucherForm from "./Partials/UpdateFeeVoucherForm.vue";

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

        <UpdateFeeEmoneyForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeeEtollForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeeGamesForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeeInternetForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeePlnForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeePulsaForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeeTVForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateFeeVoucherForm :setting="$page.props.setting" />

        <SectionBorder />

        <UpdateApiDigiflazzForm :setting="$page.props.setting" />

    </AppLayout>
</template>
