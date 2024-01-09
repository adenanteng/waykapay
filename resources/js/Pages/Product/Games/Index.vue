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
    <AppLayout title="Topup Games"
               name="Topup Games"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('games.show', 'GOOGLE PLAY INDONESIA')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/GOOGLE%20PLAY%20INDONESIA.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Google Play</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup Google Play</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'Steam Wallet (IDR)')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/Steam%20Wallet%20(IDR).png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Steam</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup Steam Wallet</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'Unipin Voucher')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/Unipin%20Voucher.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Unipin Voucher</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup Unipin</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'PUBG MOBILE')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/PUBG%20MOBILE.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">PUBG Mobile</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup PUBG Mobile</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'MOBILE LEGENDS')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/MOBILE%20LEGENDS.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Mobile Legends</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup Mobile Legends</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'HAGO')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/HAGO.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">HAGO</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup HAGO</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'FC Mobile')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/FC%20Mobile.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">FC Mobile</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup FC Mobile</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'Valorant')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/Valorant.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Valorant</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup Valorant</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'Bigo Live')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/Bigo%20Live.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Bigo Live</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup Bigo Live</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('games.show', 'IMVU')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/games/IMVU.png" alt="" class="h-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">IMVU</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup IMVU</p>
                    </div>
                </div>
            </li>
        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->
<!--            <li class="relative">-->
<!--                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">-->
<!--                    <img src="/img/games/GOOGLE%20PLAY%20INDONESIA.png" alt=""-->
<!--                         class="w-full object-cover pointer-events-none group-hover:opacity-75">-->
<!--                    <Link :href="route('games.show', 'GOOGLE PLAY INDONESIA')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Google Play</p>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">-->
<!--                    <img src="/img/games/Steam%20Wallet%20(IDR).png" alt=""-->
<!--                         class="w-full object-cover pointer-events-none group-hover:opacity-75">-->
<!--                    <Link :href="route('games.show', 'Steam Wallet (IDR)')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Steam</p>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">-->
<!--                    <img src="/img/games/PUBG%20MOBILE.png" alt=""-->
<!--                         class="w-full object-cover pointer-events-none group-hover:opacity-75">-->
<!--                    <Link :href="route('games.show', 'PUBG MOBILE')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">PUBG Mobile</p>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">-->
<!--                    <img src="/img/games/MOBILE%20LEGENDS.png" alt=""-->
<!--                         class="w-full object-cover pointer-events-none group-hover:opacity-75">-->
<!--                    <Link :href="route('games.show', 'MOBILE LEGENDS')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-gray-900 truncate pointer-events-none">Mobile Legends</p>-->
<!--            </li>-->
<!--        </ul>-->

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
