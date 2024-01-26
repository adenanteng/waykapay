<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PreviousButton from "../../../Components/PreviousButton.vue";

const props = defineProps({

});

</script>

<template>
    <AppLayout title="Cicilan Multifinance"
               name="Cicilan Multifinance"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('pasca.index', 'astra-credit-company')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/astra-credit-company.png" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">ACC</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan ACC</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'adira-finance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/adira-finance.png" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Adira Finance</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan Adira Finance</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'federal-inti-finance')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/federal-inti-finance.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">FIF</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan FIF</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'home-credit-indonesia')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/home-credit-indonesia.png" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Home Credit</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan Home Credit</p>
                    </div>
                </div>
            </li>

        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
