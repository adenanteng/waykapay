<script setup>
import {onMounted, ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue";
import BlankLayout from "@/Layouts/BlankLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Badge from "../../Components/Badge.vue";
import {router, useForm} from "@inertiajs/vue3";
import ApplicationLogoTitle from "@/Components/ApplicationLogoTitle.vue";
// import {Vue3Lottie} from "vue3-lottie";
import SecondaryButton from "../../Components/SecondaryButton.vue";

const props = defineProps({
    transaction: Object
})

const form = useForm({
    transaction: props.transaction,
});

const storeInformation = () => {

    form.put(route('product.status', form), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
};

onMounted(() => {
    setTimeout(() => route('history.show', props.transaction), 500);
})

function formattedDate(value) {
    return moment(value).format('DD MMM Y | HH:mm')
}

function formattedTime(value) {
    return moment(value).format('HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <BlankLayout title="Sukses" >

        <div class="pt-16 pb-12">
            <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                <div class="flex flex-shrink-0 justify-center">
                    <!--                    <ApplicationLogo />-->
                    <ApplicationLogoTitle />
                </div>
                <div class="mt-5">
                    <div class="text-center justify-center">
                        <!--                        <p class="text-base font-semibold text-indigo-600">Lorem ipsum</p>-->
                        <div class="px-4 sm:px-6 text-center text-gray-900 text-sm" >
<!--                            <Vue3Lottie-->
<!--                                animation-link="https://lottie.host/a3272d43-4bd3-4974-a125-712019ae512e/mskSUiuPqv.json"-->
<!--                                :height="200"-->
<!--                                :width="200"-->
<!--                            />-->
                        </div>
                        <h1 class="text-lg font-bold tracking-tight text-gray-900">Transaksi Berhasil</h1>
                        <p class="text-gray-500 text-sm">Kamu akan dialihkan dalam </p>

                        <div class="mt-5 space-x-2">
<!--                            <PrimaryButton as="a" :href="route('history.show', props.transaction)" >-->
<!--                                Lihat Transaksi-->
<!--                            </PrimaryButton>-->

                            <SecondaryButton as="a" :href="route('dashboard')" >
                                Ke Beranda <i class="fa-regular fa-arrow-right ml-1 text-xs" />
                            </SecondaryButton>

                            <!--                            <PrimaryButton v-if="props.transaction.category_id != 1" @click="storeInformation" >-->
                            <!--                                Cek Status-->
                            <!--                            </PrimaryButton>-->
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </BlankLayout>
</template>
