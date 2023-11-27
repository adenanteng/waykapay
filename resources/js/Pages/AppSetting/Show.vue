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
import SecondaryButton from "../../Components/SecondaryButton.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import DangerButton from "../../Components/DangerButton.vue";
import {computed} from "vue";

const form = useForm({
    // password: '',
});

const {...userInfo} = computed(() => usePage().props.appSetting).value;

const deleteRedis = () => {
    form.delete(route('setting.destroy', userInfo), {
        preserveScroll: true,
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};
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

<!--        <SectionBorder />-->


        <div class="relative py-8">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"/>
            </div>
            <div class="relative flex justify-center">
                <DangerButton
                    class=""
                    @click="deleteRedis"
                >
                    <i class="fa-regular fa-trash mr-2"/>
                    Hapus Cache
                </DangerButton>
            </div>
        </div>

        <UpdateApiDigiflazzForm :setting="$page.props.setting" />

    </AppLayout>
</template>
