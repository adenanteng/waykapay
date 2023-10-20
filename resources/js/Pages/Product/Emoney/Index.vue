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
    <AppLayout title="E-Money"
               name="E-Money"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/DANA.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'DANA')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/GO%20PAY.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'GO PAY')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/OVO.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'OVO')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/SHOPEE%20PAY.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'SHOPEE PAY')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/MAXIM.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'MAXIM')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
