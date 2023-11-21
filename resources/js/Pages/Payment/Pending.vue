<script setup>
import {onUnmounted, ref} from "vue";
import {Link} from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue";
import BlankLayout from "@/Layouts/BlankLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Badge from "@/Components/Badge.vue";
import {useForm} from "@inertiajs/vue3";
import ApplicationLogoTitle from "../../Components/ApplicationLogoTitle.vue";
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    transaction: Object
})

onUnmounted(() => {
    clearInterval(interval)
})

const interval = setInterval(() => {
    form.get(route('product.status', form), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
}, 5000)

const form = useForm({
    transaction: props.transaction,
});

const storeInformation = () => {

    form.get(route('product.status', form), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y')
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
    <BlankLayout title="Pending" >

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
                            <Vue3Lottie
                                animation-link="https://lottie.host/6fea85f2-ef6f-4d4b-aac5-6e9ef6521950/iNhXM2CBCy.json"
                                :height="200"
                                :width="200"
                            />
                        </div>
                        <h1 class="text-lg font-bold tracking-tight text-gray-900">Transaksi Sedang Diproses</h1>

                        <div class="mt-5 space-x-2">
                            <PrimaryButton as="a" :href="route('dashboard')" >
                                Ke Beranda
                            </PrimaryButton>

<!--                            <PrimaryButton v-if="props.transaction.category_id != 1" @click="storeInformation" >-->
<!--                                Cek Status-->
<!--                            </PrimaryButton>-->
                        </div>
                    </div>
                </div>
            </main>
        </div>

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
