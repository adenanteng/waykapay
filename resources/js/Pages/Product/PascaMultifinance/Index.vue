<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PreviousButton from "../../../Components/PreviousButton.vue";

const props = defineProps({
    // user: Object,
});

const form = useForm({
    name: null,
    email: null,
});

</script>

<template>
    <AppLayout title="Cicilan Multifinance"
               name="Cicilan Multifinance"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('pasca.index', 'adira-finance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
<!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Adira Finance</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan Adira Finance</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'home-credit')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
<!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Home Credit</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan Home Credit</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'mnc-finance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
<!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">MNC Finance</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan MNC Finance</p>
                    </div>
                </div>
            </li>

            <li class="relative">
                <Link :href="route('pasca.index', 'bca-multifinance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">BCA Multifinance</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan BCA Multifinance</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'cimb-niaga-jcb')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">CIMB Niaga JCB</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan CIMB Niaga JCB</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'mega-auto-finance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Mega Auto Finance</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan Mega Auto Finance</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'sms-finance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <!--                    <img src="/img/vendor/BPJSK.svg" alt="" class="w-20">-->
                    <i class="fa-regular fa-credit-card text-3xl text-blue-500" />
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">SMS Finance</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan SMS Finance</p>
                    </div>
                </div>
            </li>
        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/BPJSK.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('pasca.index', 'bpjs-kesehatan')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">BPJS Kesehatan</p>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/BPJSK.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('pasca.index', 'bpjs-ketenagakerjaan')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">BPJS Ketenagakerjaan</p>-->
<!--            </li>-->
<!--        </ul>-->

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
