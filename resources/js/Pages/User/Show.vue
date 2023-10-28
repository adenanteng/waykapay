<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {ref} from "vue";
import Table from "@/Components/Table.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import {Link} from "@inertiajs/vue3";
import moment from "moment/moment";

const props = defineProps({
    users: Object | String,
    history: Object,
});

function formattedDate(value) {
    return moment(value).format('DD MMM Y')
}

function formattedTime(value) {
    return moment(value).format('HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
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
                        <span class="block text-xl font-bold text-gray-900 capitalize">{{ props.users.name }}</span>
                        <span class="block font-semibold text-primary-600">
                            Rp {{ formatPrice(props.users.wallet_balance) }}
                        </span>
                    </div>

                </div>
                <div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2">
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

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="history in $page.props.history">
                    <li>
                        <Link preserve-scroll :href="route('history.show', history)" class="block hover:bg-primary-50" >
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <p class="font-medium truncate uppercase"
                                       :class="history.status_id == 1 || history.status_id == 2 ? 'text-primary-600' : 'text-gray-500'">
                                        {{ history.product_name }}
                                        <template v-if="history.virtual_account">{{ history.virtual_account.bank }}</template>
                                        <template v-else-if="history.wallet_account">{{ history.wallet_account.bank }}</template>
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
                                        <p class="flex items-center text-sm" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                            {{ history.category_id == 1 ? '+' : '-' }} Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                        </p>
                                        <!--                                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">-->
                                        <!--                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />-->
                                        <!--                                                {{ history.customer_no }}-->
                                        <!--                                            </p>-->
                                    </div>
                                    <div class="flex items-center text-sm" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                        <!--                                            <i class="fa-regular fa-calendar pr-2" />-->
                                        {{ formattedDate(history.updated_at) }}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>

                </template>
            </ul>
        </div>


    </AppLayout>



</template>
