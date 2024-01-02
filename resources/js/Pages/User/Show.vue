<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {onMounted, ref, watch} from "vue";
import Table from "@/Components/Table.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import {Link, router} from "@inertiajs/vue3";
import moment from "moment/moment";
import Pagination from "../../Components/Pagination.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";

const props = defineProps({
    users: Object | String,
    history: {
        type: Object,
        default: () => ({}),
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
});

// onMounted(() => {
//     router.reload({ only: ['history'] })
// })

let search = ref(props.filters.search);
watch(search, (value) => {
    router.get(
        route('user.show', props.users),
        { search: value },
        {
            preserveState: true,
            replace: true,
        }
    );
});

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout :title="props.users.name"
               :name="props.users.name"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <div class="py-4 px-4 lg:flex lg:items-center lg:justify-between">
                <div class="tracking-tight flex gap-5 items-center">
                    <div class="">
                        <img v-if="props.users.profile_photo_url" class="mx-auto h-12 w-12 object-cover rounded-full"
                             :src="props.users.profile_photo_url" :alt="props.users.name" />
                    </div>

                    <div class="">
                        <div class="block text-xl font-bold text-gray-900 capitalize">{{ props.users.name }}
                            <span class="text-sm font-medium ml-2 text-gray-500">#{{ props.users.slug }}</span>
                        </div>
                        <div class="block text-sm font-medium text-gray-600">
                            <p><i class="fa-regular fa-mobile mr-1 w-3" /> {{ props.users.phone }}</p>
                            <p><i class="fa-regular fa-envelope mr-1 w-3" /> {{ props.users.email }}</p>
                        </div>
                        <div class="block text-sm font-medium text-gray-600">
                            Akun {{ props.users.role }}
                        </div>
                        <div class="block text-sm font-medium text-primary-600">
                            Rp {{ formatPrice(props.users.wallet_balance) }}
                        </div>
                    </div>

                </div>
                <div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2">
                    <SecondaryButton
                        as="a" :href="route('user.normalizeTransaction', props.users)"
                    >
                        <i class="fa-regular fa-arrows-rotate" />
                    </SecondaryButton>

                    <PrimaryButton as="a" :href="route('user.edit', props.users)">
                        Ubah Data
                    </PrimaryButton>

                    <!--                    <SecondaryButton >-->
                    <!--                        <i class="fa-regular fa-coins mr-1"/>-->
                    <!--                        Withdraw-->
                    <!--                    </SecondaryButton>-->
                </div>
            </div>
        </div>

        <div class="flex justify-between gap-3">
            <div class="">
<!--                <TextInput-->
<!--                    type="text"-->
<!--                    v-model="search"-->
<!--                    placeholder="Cari disini"-->
<!--                    class="block w-full lg:w-96 mb-5 shadow"-->
<!--                />-->
            </div>

            <div class="">
                <!--                <PrimaryButton as="a" :href="route('user.create')" >Tambah</PrimaryButton>-->
            </div>
        </div>

<!--        <template v-if="props.history.data === undefined">-->
<!--            <div class="animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300">-->
<!--                <div v-for="loader in 4" class="px-4 py-4 sm:px-6">-->
<!--                    <div class="flex items-center justify-between">-->
<!--                        <p class="bg-gray-300 text-gray-300 w-full rounded-3xl">a</p>-->
<!--                        <div class="ml-2 flex-shrink-0 flex">-->
<!--                            <p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20">b</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="sm:flex sm:justify-between">-->
<!--                        <p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" >c</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </template>-->

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="history in props.history.data">
                    <li>
                        <Link preserve-scroll :href="route('history.show', history.order_id)" class="block hover:bg-primary-50" >
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-medium truncate capitalize"
                                       :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                        {{ history.product_name }}
                                        <template v-if="history.virtual_account">{{ history.virtual_account.bank }}</template>
                                        <template v-else-if="history.wallet_account">{{ history.wallet_account.bank }}</template>
                                        <template v-else-if="history.offline_account">{{ history.offline_account.bank }}</template>
                                        <template v-else-if="history.manual_account">{{ history.manual_account.bank }}</template>
                                        <template v-else-if="history.money_transfer">
                                            <template v-if="history.user_id == $page.props.user.id">
                                                ke {{ history.money_transfer.to.name }}
                                            </template>
                                            <template v-else>
                                                dari {{ history.user.name }}
                                            </template>
                                        </template>
                                    </p>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                           :class="history.color"
                                        >
                                            {{ history.status }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex">
                                        <p class="flex items-center text-xs" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                            {{ history.category_id == 1 || history.user_id != props.users.id ? '+' : '-' }}
                                            Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                        </p>
                                    </div>
                                    <div class="flex items-center text-xs" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                        {{ formattedDate(history.created_at) }}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>

                </template>
            </ul>
        </div>
        <Pagination :pagination="props.history" />

    </AppLayout>



</template>
