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

</script>

<template>
    <AppLayout title="E-Toll"
               name="E-Toll"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('etoll.show', 'MANDIRI E-TOLL')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/MANDIRI%20E-TOLL.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Mandiri E-Toll</h3>
                        </div>
                        <p class="truncate text-sm text-gray-500">Topup saldo Mandiri</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('etoll.show', 'TAPCASH BNI')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/TAPCASH%20BNI.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Tapcash BNI</h3>
                        </div>
                        <p class="truncate text-sm text-gray-500">Topup saldo BNI</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('etoll.show', 'BRI BRIZZI')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/BRI%20BRIZZI.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">BRI Brizzi</h3>
                        </div>
                        <p class="truncate text-sm text-gray-500">Topup saldo BRI</p>
                    </div>
                </div>
            </li>
        </ul>
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/DANA.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('etoll.show', 'MANDIRI E-TOLL')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Mandiri E-Toll</p>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/OVO.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('etoll.show', 'TAPCASH BNI')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Tapcash BNI</p>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/GO%20PAY.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('etoll.show', 'BRI BRIZZI')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">BRI Brizzi</p>-->
<!--            </li>-->


        <!--        <MobileMenu />-->
    </AppLayout>
</template>
