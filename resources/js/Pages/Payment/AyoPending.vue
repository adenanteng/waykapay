<script setup>
import {computed, onUnmounted, ref} from "vue";
import {Link, router, usePage} from '@inertiajs/vue3';
import moment from "moment";
import BlankLayout from "@/Layouts/BlankLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {useForm} from "@inertiajs/vue3";
import ApplicationLogoTitle from "@/Components/ApplicationLogoTitle.vue";
import {Vue3Lottie} from "vue3-lottie";
import Pusher from "pusher-js";
import Echo from "laravel-echo";

const props = defineProps({
    transaction: Object,
    response: Object
})

onUnmounted(() => {
    window.Echo.leave('transaction-channel')
})

const form = useForm({
    transaction: props.transaction,
    response: props.response
});

const storeInformation = () => {
    form.post(route('money-transfer.ayoStatus'), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
};

const {...userInfo} = computed(() => usePage().props.user).value;
// console.log(userInfo.name); // Show my user name

if (typeof window !== 'undefined') {
    window.Pusher = Pusher;

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
        forceTLS: true
    });

    let channel = window.Echo.channel('ayo-disbursement-channel');
    channel.listen('.ayo-disbursement-event', function (data) {
        if (data.action === 'reload' && data.orderId === props.transaction.order_id) {
            form.get(route('money-transfer.ayoStatus', form), {
                errorBag: 'updateInformation',
                preserveScroll: true,
                onSuccess: () => {}
            });

            console.log(data.action, data.orderId)
        } else {
            console.log(data)
        }
    });
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
                        <div class="">
                            <h1 class="text-lg font-bold tracking-tight text-gray-900">Transaksi Sedang Diproses</h1>
                            <p class="text-gray-500 text-sm">Kamu bisa kembali ke Beranda tanpa harus menunggu proses transaksi</p>
                        </div>

                        <div class="mt-5 space-x-2">
                            <PrimaryButton as="a" :href="route('dashboard')" >
                                Ke Beranda
                            </PrimaryButton>

                            <PrimaryButton @click="storeInformation" >
                                Cek Status
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </main>
        </div>

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
