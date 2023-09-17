<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = defineProps({
    users: Object,
    history: Object
})

const data = [
    {
        name: 'Kontak Admin',
        title: 'Online 08.30 - 22.00',
        role: 'Aktif',
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
        answer: "Lorem ipsum dolor sit amet.",
    },
    {
        question: "Mengalami Kendala Deposit?",
        answer: "Lorem ipsum dolor sit amet.",
    },
]

</script>

<template>
    <AppLayout title="Informasi"
               name="Informasi"
               desc="Lorem ipsum dolor sit amet"
    >

        <ul role="list" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in data" :key="item.email"
                class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <div class="flex-1 truncate">
                        <div class="flex items-center space-x-3">
                            <h3 class="truncate text-sm font-medium text-gray-900">{{ item.name }}</h3>
                            <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
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
                            <a :href="item.link" target="_blank" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
<!--                                <i class="fa-duotone fa-circle-i text-gray-400"/>-->
                                <span class="ml-3">{{ item.btn }}</span>
                            </a>
                        </div>
                        <div class="-ml-px flex w-0 flex-1" v-if="item.btn2">
                            <a :href="item.link2" target="_blank" class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
<!--                                <i class="fa-duotone fa-circle-i text-gray-400"/>-->
                                <span class="ml-3">{{ item.btn2 }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg ">
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

        <MobileMenu/>
    </AppLayout>
</template>
