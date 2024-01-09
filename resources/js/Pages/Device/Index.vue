<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import PreviousButton from "../../Components/PreviousButton.vue";
import NotificationForm from "./Partials/NotificationForm.vue";

const props = defineProps({

})

onMounted(() => {

})

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Perangkat"
               name="Perangkat"
               desc="Profil perangkat kamu"
    >

<!--        <template #previous>-->
<!--            <PreviousButton />-->
<!--        </template>-->

        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                        <h3 class="truncate text-sm text-gray-600">Notifikasi Perangkat</h3>
<!--                        <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">-->
<!--                            Transaksi-->
<!--                        </span>-->
                    </div>
                    <p class="mt-1 truncate text-sm font-medium text-gray-900">{{ $page.props.user.device_token ? 'Aktif' : 'Tidak aktif' }}</p>
                    <p class="mt-1 text-xs text-gray-500" v-if="$page.props.user.device_token">{{ $page.props.user.device_token }}</p>
                </div>
                <i class="fa-duotone fa-mobile-android text-3xl flex-shrink-0" :class="$page.props.user.device_token ? 'text-green-600' : 'text-red-600' " />
            </div>
            <div>
                <div class="flex divide-x divide-gray-300 dark:divide-gray-600">
                    <div class="flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
<!--                            <i class="fa-duotone fa-coins text-amber-400"/>-->
                            <div class="ml-3 truncate">
                                <div class="text-xs text-gray-500"></div>
                                <Link
                                    v-if="$page.url.startsWith('/device/store')"
                                    class="text-sm font-medium text-primary-600 truncate"
                                    :href="route('dashboard')"
                                    replace
                                >
                                    Kembali ke dasbor
                                </Link>
                                <Link
                                    v-else
                                    class="text-sm font-medium text-primary-600 truncate"
                                    :href="route('device.store', { 'user' : $page.props.user.slug})"
                                    replace
                                >
                                    Refresh perangkat
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <NotificationForm v-if="$page.props.user.role_id==1" />
        <!--        <MobileMenu/>-->
    </AppLayout>
</template>
