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
    <AppLayout title="Voucher"
               name="Voucher"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('voucher.show', 'SPOTIFY')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/SPOTIFY.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Spotify</h3>
                        </div>
                        <p class="text-sm text-gray-500">Beli paket Spotify</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('voucher.show', 'e-Meterai')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/e-Meterai.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">e-Meterai</h3>
                        </div>
                        <p class="text-sm text-gray-500">Beli e-Meterai</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('voucher.show', 'TIX ID')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/TIX%20ID.png" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">TIX ID</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo TIX ID</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('voucher.show', 'M-Tix')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/M-Tix.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">M-TIX</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo M-TIX</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('voucher.show', 'INDOMARET')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/INDOMARET.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Indomaret</h3>
                        </div>
                        <p class="text-sm text-gray-500">Voucher Indomaret</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('voucher.show', 'ALFAMART VOUCHER')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/ALFAMART%20VOUCHER.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Alfamart</h3>
                        </div>
                        <p class="text-sm text-gray-500">Voucher Alfamart</p>
                    </div>
                </div>
            </li>
        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/SPOTIFY.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'SPOTIFY')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/e-Meterai.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'e-Meterai')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/TIX%20ID.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'TIX ID')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/M-Tix.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'M-Tix')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
