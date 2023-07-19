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
import PreviousButton from "@/Components/PreviousButton.vue";

const props = defineProps({
    users: Object,
    history: Object
})

const confirm = () => {
    snap.pay(props.history.token, {
        onSuccess: function(result){
            console.log('success');
            // console.log(result);
            // deposit('success')
        },
        onPending: function(result){
            console.log('pending');
            // console.log(result);
            // deposit('pending')
        },
        onError: function(result){
            console.log('error');
            // console.log(result);
            // deposit('error')
        },
        onClose: function(){
            console.log('customer closed the popup without finishing the payment');
            // deposit('close')
        }
    })
}

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
    <AppLayout title="Deposit"
               name="Deposit"
               desc="lorem ipsum dolor sit"
    >

        <template #previous>
            <PreviousButton :href="route('history.index')" />
        </template>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Detail Transaksi</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Waktu Transaksi</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                            <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <p>
                                    {{ formattedDate(props.history.created_at) }}
                                </p>
                                <p class="text-gray-900 ml-2">
                                    {{ formattedTime(props.history.created_at) }}
                                </p>
                            </div>
                        </dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Kategori</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.history.category }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Status</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.history.status }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Total Bayar</dt>
                        <dd class="mt-1 text-sm text-gray-900">Rp {{ formatPrice(props.history.amount) }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Id</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.history.order_id }}</dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">Keterangan</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.history.desc ?? '-' }}</dd>
                    </div>
                </dl>

                <a :href="props.history.redirect_url">
                    jangan di klik
                </a>

                <PrimaryButton @click="confirm">
                    Haaha
                </PrimaryButton>
            </div>
        </div>

<!--        <MobileMenu/>-->
    </AppLayout>
</template>
