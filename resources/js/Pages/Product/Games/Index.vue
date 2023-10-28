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
    <AppLayout title="Voucher Games"
               name="Voucher Games"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">

            <li class="relative">
                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">
                    <img src="/img/games/GOOGLE%20PLAY%20INDONESIA.png" alt=""
                         class="w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('games.show', 'GOOGLE PLAY INDONESIA')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Google Play</p>
            </li>

            <li class="relative">
                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">
                    <img src="/img/games/Steam%20Wallet%20(IDR).png" alt=""
                         class="w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('games.show', 'Steam Wallet (IDR)')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Steam</p>
            </li>

            <li class="relative">
                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">
                    <img src="/img/games/PUBG%20MOBILE.png" alt=""
                         class="w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('games.show', 'PUBG MOBILE')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">PUBG Mobile</p>
            </li>

            <li class="relative">
                <div class="group w-full aspect-video rounded-3xl overflow-hidden shadow-lg flex justify-center items-center p-4 border border-gray-300">
                    <img src="/img/games/MOBILE%20LEGENDS.png" alt=""
                         class="w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('games.show', 'MOBILE LEGENDS')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-gray-900 truncate pointer-events-none">Mobile Legends</p>
            </li>

<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/games/free-fire.jpg" alt=""-->
<!--                         class="h-full w-full object-cover pointer-events-none group-hover:opacity-75">-->
<!--                    <Link :href="route('dashboard')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-lg font-medium text-gray-900 truncate pointer-events-none">Free Fire</p>-->
<!--            </li>-->

        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
