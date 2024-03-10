<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {onMounted, ref, watch} from "vue";
import Table from "@/Components/Table.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import {Link, router} from "@inertiajs/vue3";
import moment from "moment/moment";
import Badge from "../../Components/Badge.vue";
import Pagination from "@/Components/Pagination.vue";
import SelectInput from "../../Components/SelectInput.vue";
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    users: {
        type: Object,
        default: () => ({}),
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
});

let search = ref(props.filters.search);
let filterPaginate = ref(props.filters.filterPaginate ?? 20);

onMounted(() => {
    router.reload({ only: ['users', 'usersCount', 'filters'] })
})

watch([search, filterPaginate], ([value, valueP]) => {
    router.get(
        route('user.index'),
        {
            search: value,
            filter_paginate: valueP
        },
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            only: ['users', 'usersCount', 'filters']
        }
    );
});

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
               desc="Data pengguna"
    >

        <div class="flex justify-between gap-3">
            <div class="">
                <div class="relative ">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="fa-regular fa-magnifying-glass text-gray-500" />
                    </div>
                    <TextInput
                        type="search"
                        v-model="search"
                        placeholder="Cari disini"
                        class="block w-full lg:w-96 shadow pl-10"
                    />
                </div>
            </div>

            <div class="">
                <PrimaryButton as="a" :href="route('user.create')" >Tambah</PrimaryButton>
            </div>
        </div>

        <template v-if="props.users === undefined">
            <div class="animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300">
                <div v-for="loader in 4" class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                        <p class="bg-gray-300 text-gray-300 w-full rounded-3xl">a</p>
                        <div class="ml-2 flex-shrink-0 flex">
                            <p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20">b</p>
                        </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                        <p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" >c</p>
                    </div>
                </div>
            </div>
        </template>

        <div v-else class="">
            <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
                <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                    <template v-for="item in props.users.data" :key="item.id">
                        <li>
                            <Link :href="route('user.show', item.slug)" class="block hover:bg-primary-50" >
                                <div class="px-4 py-4 sm:px-6">
                                    <div class="flex items-center justify-between">
                                        <p class="text-sm font-medium truncate capitalize text-gray-900">
                                            {{ item.name }}
    <!--                                        <span class="text-sm font-medium ml-2 text-gray-500">#{{ item.slug }}</span>-->
                                        </p>
                                        <div class="ml-2 flex-shrink-0 flex">
    <!--                                        <p  v-if="item.email_verified_at"-->
    <!--                                            class="px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"-->
    <!--                                        >-->
    <!--                                            <i class="fa-regular fa-check mr-1" /> Verified-->
    <!--                                        </p>-->
                                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                               :class="item.color"
                                            >
                                                {{ item.status }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="sm:flex gap-3">
                                            <p class="flex items-center text-xs text-gray-600" >
                                                {{ item.phone }}
                                            </p>
                                            <p class="flex items-center text-xs text-gray-600" >
                                                {{ item.email }}
                                            </p>

                                        </div>
                                        <div class="flex items-end text-xs text-gray-600" >
    <!--                                        <i class="fa-regular fa-calendar pr-2" />-->
                                            {{ formattedDate(item.updated_at) }}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>

        <div class="">
            <div class="text-sm text-center text-gray-600 mb-5">
                Menampilkan <strong>{{ filterPaginate }}</strong> dari <strong>{{ $page.props.usersCount }}</strong> hasil
            </div>

            <button class="w-full grid text-gray-900 font-medium"
                    @click="filterPaginate+=20"
                    v-if="filterPaginate <= $page.props.usersCount"
            >
                Selanjutnya
                <i class="fa-regular fa-angle-down animate-bounce mt-1" />
            </button>

            <div class="px-4 py-4 sm:px-6 text-center text-gray-900 text-sm" v-else>
                <Vue3Lottie
                    animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"
                    :height="200"
                    :width="200"
                />
                Eits, udah mentok hehe
            </div>
        </div>

<!--        <Pagination :pagination="props.users" >-->
<!--            <template #select>-->
<!--                <SelectInput-->
<!--                    v-model:model-value.number="filterPaginate"-->
<!--                    :option="$page.props.selectPaginate"-->
<!--                    class="block text-center shadow"-->
<!--                />-->
<!--            </template>-->
<!--        </Pagination>-->

    </AppLayout>



</template>
