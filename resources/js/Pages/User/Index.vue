<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {ref} from "vue";
import Table from "@/Components/Table.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import {Link} from "@inertiajs/vue3";
import moment from "moment/moment";
import Badge from "../../Components/Badge.vue";
// import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";

const props = defineProps({
    users: Object | String,
});

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

const searchQuery = ref('')
const gridTitle = [
    'Nama',
    'Email',
    'Peran',
    'Bergabung',
]
const gridColumns = [
    'name',
    'email',
    'role',
    'created',
]

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
               desc="lorem ipsum"
    >

<!--        <Table :resource="props.users" >-->
<!--            <template #cell(aksi)="{ item: users }">-->
<!--                <Link class="text-primary-500 font-medium" :href="`/user/${users.id}/edit`">-->
<!--                    Ubah-->
<!--                </Link>-->
<!--            </template>-->
<!--        </Table>-->

        <div class="flex justify-between gap-3">
            <div class="">
                <form id="search">
                    <TextInput
                        name="query"
                        v-model="searchQuery"
                        type="text"
                        class="block w-full lg:w-96 mb-5 shadow"
                        placeholder="Cari disini"
                    />
                </form>
            </div>

            <div class="">
                <PrimaryButton as="a" :href="route('user.create')" >Tambah</PrimaryButton>
            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="item in $page.props.users" :key="item.id">
                    <li>
                        <Link preserve-scroll :href="route('user.show', item)" class="block hover:bg-primary-50" >
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <p class="font-medium truncate capitalize text-gray-900">
                                        {{ item.name }}
                                    </p>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <p  v-if="item.email_verified_at"
                                            class="px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"
                                        >
                                            <i class="fa-regular fa-check mr-1" /> Verified
                                        </p>
                                        <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                           :class="item.color"
                                        >
                                            {{ item.status }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex">
                                        <p class="flex items-center text-sm text-gray-600" >
                                            {{ item.email }}
                                        </p>
                                    </div>
                                    <div class="flex items-center text-sm text-gray-600" >
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
