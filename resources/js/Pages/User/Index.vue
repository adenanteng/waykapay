<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {ref, watch} from "vue";
import Table from "@/Components/Table.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import {Link, router} from "@inertiajs/vue3";
import moment from "moment/moment";
import Badge from "../../Components/Badge.vue";
import Pagination from "@/Components/Pagination.vue";
import SelectInput from "../../Components/SelectInput.vue";

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
let filterPaginate = ref(props.filters.filterPaginate);
watch([search, filterPaginate], ([value, valueP]) => {
    router.get(
        route('user.index'),
        {
            search: value,
            filter_paginate: valueP
        },
        {
            preserveState: true,
            replace: true,
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
                <TextInput
                    type="text"
                    v-model="search"
                    placeholder="Cari disini"
                    class="block w-full lg:w-96 shadow"
                />
            </div>

            <div class="">
                <PrimaryButton as="a" :href="route('user.create')" >Tambah</PrimaryButton>
            </div>
        </div>

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

        <Pagination :pagination="props.users" >
            <template #select>
                <SelectInput
                    v-model:model-value.number="filterPaginate"
                    :option="$page.props.selectPaginate"
                    class="block text-center shadow"
                />
            </template>
        </Pagination>

        <!--        <Table-->
<!--            :title="gridTitle"-->
<!--            :data="props.users.data"-->
<!--            :paginate="props.users"-->
<!--            :columns="gridColumns"-->
<!--            :filter-key="searchQuery"-->
<!--            routes="user"-->
<!--            :view=true-->
<!--        />-->

    </AppLayout>



</template>
