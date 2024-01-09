<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import FormSection from "@/Components/FormSection.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import ActionSection from "@/Components/ActionSection.vue";
import DialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {ref} from "vue";

const props = defineProps({

});

</script>

<template>
    <AppLayout title="PLN"
               name="PLN"
               desc="Masukkan nomor meter"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('pln.prepaid.index')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/PLN.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Token PLN</h3>
                        </div>
                        <p class="text-sm text-gray-500">Beli token PLN</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'pln')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/PLN.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Tagihan PLN</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan PLN</p>
                    </div>
                </div>
            </li>

<!--            <li class="relative">-->
<!--                <Link :href="route('pln.postpaid.index')" class="absolute inset-0" />-->
<!--                <div class="flex w-full items-center justify-between space-x-6 p-6">-->
<!--                    <img src="/img/vendor/PLN.svg" alt="" class="w-20">-->
<!--                    <div class="flex-1">-->
<!--                        <div class="flex items-center space-x-3">-->
<!--                            <h3 class="text-sm font-medium text-gray-900">Tagihan PLN</h3>-->
<!--                        </div>-->
<!--                        <p class="text-sm text-gray-500">Bayar tagihan PLN</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </li>-->

        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->

<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/PLN.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('pln.prepaid.index')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Token PLN</p>-->
<!--            </li>-->

<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/PLN.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('pln.postpaid.index')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Tagihan PLN</p>-->
<!--            </li>-->

<!--        </ul>-->

    </AppLayout>
</template>
