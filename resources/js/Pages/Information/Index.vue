<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SectionTitle from "@/Components/SectionTitle.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import moment from "moment";

const props = defineProps({
    users: Object,
    history: Object
})

const data = [
    {
        name: 'Kontak Admin',
        title: 'Online 08.30 - 22.00',
        role: 'Available',
        icon: 'fa-whatsapp text-green-500',
        link: 'https://wa.me/6285156875180',
    },
    {
        name: 'Grup Whatsapp',
        title: 'Join grup whatsapp',
        role: 'Available',
        icon: 'fa-whatsapp text-green-500',
        link: 'https://wa.me/6285156875180',
    },

]

</script>

<template>
    <AppLayout title="Informasi"
               name="Informasi"
               desc="Lorem ipsum dolor sit amet"
    >

<!--        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">-->
        <ul role="list" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in data" :key="item.email" class="col-span-1 divide-y divide-gray-200 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
                <a :href="item.link" target="_blank">
                    <div class="flex w-full items-center justify-between space-x-6 p-6">
                        <div class="flex-1 truncate">
                            <div class="flex items-center space-x-3">
                                <h3 class="truncate text-sm font-medium text-gray-900">{{ item.name }}</h3>
                                <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">{{ item.role }}</span>
                            </div>
                            <p class="mt-1 truncate text-sm text-gray-500">{{ item.title }}</p>
                        </div>
                        <i class="fa-brands text-3xl flex-shrink-0" :class="item.icon" />
                    </div>
                </a>
<!--                <div>-->
<!--                    <div class="-mt-px flex divide-x divide-gray-200">-->
<!--                        <div class="flex w-0 flex-1">-->
<!--                            <a class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">-->
<!--                                <i class="fa-duotone fa-circle-i text-gray-400" />-->
<!--                                <span class="ml-3">Chat</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="-ml-px flex w-0 flex-1">-->
<!--                            <a class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">-->
<!--                                <i class="fa-duotone fa-circle-i text-gray-400" />-->
<!--                                <span class="ml-3">Call</span>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </li>
        </ul>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link href="" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Mengalami Kendala Transaksi?</p>
                    </Link>
                </li>

                <li>
                    <Link href="" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Mengalami Kendala Deposit?</p>
                    </Link>
                </li>
            </ul>
        </div>
<!--        </div>-->

        <MobileMenu/>
    </AppLayout>
</template>
