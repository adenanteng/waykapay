<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UpdateAppInformationForm from '@/Pages/AppSetting/Partials/UpdateAppInformationForm.vue';
import PreviousButton from "@/Components/PreviousButton.vue";
import SectionBorder from "@/Components/SectionBorder.vue";
import UpdateApiDigiflazzForm from "./Partials/UpdateApiDigiflazzForm.vue";
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

        <UpdateAppInformationForm :setting="$page.props.appSetting" />

        <SectionBorder />

<!--        <UpdateApiMidtransForm :setting="$page.props.appSetting" />-->
<!--        <UpdateApiFlipForm :setting="$page.props.appSetting" />-->

        <UpdateFeeEmoneyForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeeEtollForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeeGamesForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeeInternetForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeePlnForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeePulsaForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeeTVForm :setting="$page.props.appSetting" />

        <SectionBorder />

        <UpdateFeeVoucherForm :setting="$page.props.appSetting" />

<!--        <SectionBorder />-->


<!--        <div class="relative py-8">-->
<!--            <div class="absolute inset-0 flex items-center" aria-hidden="true">-->
<!--                <div class="w-full border-t border-gray-300"/>-->
<!--            </div>-->
<!--            <div class="relative flex justify-center">-->
<!--                <DangerButton-->
<!--                    class=""-->
<!--                    @click="deleteRedis"-->
<!--                >-->
<!--                    <i class="fa-regular fa-trash mr-2"/>-->
<!--                    Hapus Cache-->
<!--                </DangerButton>-->
<!--            </div>-->
<!--        </div>-->

        <UpdateApiDigiflazzForm :setting="$page.props.appSetting" />

    </AppLayout>
</template>
