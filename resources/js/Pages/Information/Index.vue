<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import moment from "moment/moment";

const props = defineProps({
    // users: Object,
    // history: Object
})

const clock = moment().format('HH')

const data = [
    {
        name: 'Kontak Admin',
        title: 'Online 08.30 - 22.00',
        role: clock>=22 ? 'Nonaktif' : 'Aktif',
        roleClass: clock>=22 ? 'text-red-800 bg-red-100' : 'text-green-800 bg-green-100',
        icon: 'fa-whatsapp text-green-500',
        btn: 'Admin 1',
        btn2: 'Admin 2',
        link: 'https://wa.me/6285156875180',
        link2: 'https://wa.me/6285156875180',
    },
    {
        name: 'Grup Whatsapp',
        title: 'Gabung grup whatsapp',
        role: 'Aktif',
        roleClass: 'text-green-800 bg-green-100',
        icon: 'fa-whatsapp text-green-500',
        btn: 'Grup Whatsapp',
        // btn2: 'Grup 2',
        link: 'https://wa.me/6285156875180',
        // link2: 'https://wa.me/6285156875180',
    },

]

const faqs = [
    {
        question: "Mengalami Kendala Transaksi?",
        answer: "Konten belum tersedia.",
    },
    {
        question: "Mengalami Kendala Deposit?",
        answer: "Konten belum tersedia.",
    },
]

const info = [
    {
        name: 'Admin Waykapay',
        desc: 'Semua transaksi terpantau lancar bosku.',
        role: 'fa-circle-info',
        roleClass: 'text-blue-700',
    },
    {
        name: 'Admin Waykapay',
        desc: 'Sesuai syarat dan ketentuan Waykapay tidak pernah menerima dana isi ulang atas pencairan paylater dalam bentuk apapun, maka dari itu mohon dipatuhi dan diikuti bosku.',
        role: 'fa-megaphone',
        roleClass: 'text-green-700',
    },
    {
        name: 'Admin Waykapay',
        desc: 'Hindari transaksi di jam 23:00 hingga 00:10 dikarenakan cut off & pemeliharaan sistem.',
        role: 'fa-power-off',
        roleClass: 'text-red-700',
    },

]
function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

</script>

<template>
    <AppLayout title="Informasi"
               name="Informasi"
               desc="Pusat informasi"
    >

        <ul role="list" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in data" :key="item.name"
                class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <div class="flex-1 truncate">
                        <div class="flex items-center space-x-3">
                            <h3 class="truncate text-sm font-medium text-gray-900">{{ item.name }}</h3>
                            <span class="inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium" :class="item.roleClass">
                                {{ item.role }}
                            </span>
                        </div>
                        <p class="mt-1 truncate text-sm text-gray-500">{{ item.title }}</p>
                    </div>
                    <i class="fa-brands text-3xl flex-shrink-0" :class="item.icon"/>
                </div>
                <div>
                    <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
                        <div class="flex w-0 flex-1">
                            <a :href="item.link" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
<!--                                <i class="fa-duotone fa-circle-i text-gray-400"/>-->
                                <span class="ml-3">{{ item.btn }}</span>
                            </a>
                        </div>
                        <div class="-ml-px flex w-0 flex-1" v-if="item.btn2">
                            <a :href="item.link2" class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
<!--                                <i class="fa-duotone fa-circle-i text-gray-400"/>-->
                                <span class="ml-3">{{ item.btn2 }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg ">
            <div class="divide-y divide-gray-300 dark:divide-gray-600">
                <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="" v-slot="{ open }" >
                    <dt>
                        <DisclosureButton class="flex w-full items-start justify-between text-left px-6 py-4">
                            <span class="text-sm font-medium text-gray-900">{{ faq.question }}</span>
                            <span class="ml-6 flex items-center">
                                <i class="fa-regular text-gray-900" :class="open ? 'fa-minus' : 'fa-chevron-down' " />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="px-6 pt-0 pb-4">
                        <p class="text-sm text-gray-500">{{ faq.answer }}</p>
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y divide-gray-300 dark:divide-gray-600">
            <li v-for="item in info" :key="item.name" class="">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <div class="flex-1 ">
                        <div class="flex items-center space-x-2">
                            <span class="inline-block flex-shrink-0 rounded-full text-sm font-medium" :class="item.roleClass">
<!--                                {{ item.role }}-->
                                <i class="fa-regular w-4" :class="item.role" />
                            </span>
                            <h3 class="truncate text-sm font-medium text-gray-900">{{ item.name }}</h3>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">{{ item.desc }}</p>
                    </div>
<!--                    <i class="fa-brands text-3xl flex-shrink-0" :class="item.icon"/>-->
                </div>
            </li>
        </ul>

        <MobileMenu/>
    </AppLayout>
</template>
