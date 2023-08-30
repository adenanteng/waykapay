<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {ref} from "vue";
import Table from "@/Components/Table.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
// import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";

const props = defineProps({
    users: Object | String,
});

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


        <Table
            :title="gridTitle"
            :data="props.users.data"
            :paginate="props.users"
            :columns="gridColumns"
            :filter-key="searchQuery"
            routes="user"
            :view=true
        />

    </AppLayout>



</template>
