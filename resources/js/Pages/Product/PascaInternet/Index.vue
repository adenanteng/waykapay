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
    <AppLayout title="Internet Pascabayar"
               name="Internet Pascabayar"
               desc="Masukkan nomor meter"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('pasca.index', 'indihome')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/INDIHOME.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Indihome</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan Indihome</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('pasca.index', 'myrepublic')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/MYREPUBLIC.svg" alt="" class="w-10">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">MyRepublic</h3>
                        </div>
                        <p class="text-sm text-gray-500">Bayar tagihan MyRepublic</p>
                    </div>
                </div>
            </li>
        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->
<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/INDIHOME.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('pasca.index', 'indihome')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Indihome</p>-->
<!--            </li>-->

<!--            <li class="relative">-->
<!--                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">-->
<!--                    <img src="/img/vendor/MYREPUBLIC.svg" alt=""-->
<!--                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('pasca.index', 'myrepublic')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                <p class="mt-1 block text-gray-900 truncate pointer-events-none">MyRepublic</p>-->
<!--            </li>-->

<!--        </ul>-->

    </AppLayout>
</template>
