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
    <AppLayout title="E-Money"
               name="E-Money"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('emoney.show', 'DANA')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/DANA.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Dana</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo Dana</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('emoney.show', 'GO PAY')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/GO%20PAY.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Gopay</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo Gopay</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('emoney.show', 'OVO')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/OVO.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">OVO</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo OVO</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('emoney.show', 'SHOPEE PAY')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/SHOPEE%20PAY.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">ShopeePay</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo ShopeePay</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('emoney.show', 'LinkAja')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/LinkAja.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">LinkAja</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo LinkAja</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('emoney.show', 'MAXIM')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/MAXIM.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Maxim</h3>
                        </div>
                        <p class="text-sm text-gray-500">Topup saldo Maxim</p>
                    </div>
                </div>
            </li>
        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/DANA.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'DANA')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/GO%20PAY.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'GO PAY')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/OVO.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'OVO')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/SHOPEE%20PAY.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'SHOPEE PAY')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/MAXIM.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('emoney.show', 'MAXIM')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
