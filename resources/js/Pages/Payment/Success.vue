<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue";
import BlankLayout from "@/Layouts/BlankLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Badge from "../../Components/Badge.vue";
import {useForm} from "@inertiajs/vue3";

const props = defineProps({
    transaction: Object
})

const form = useForm({
    transaction: props.transaction,
});

const storeInformation = () => {

    form.put(route('product.status', form), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
};

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
    <BlankLayout title="Sukses" >

        <div class="pt-16 pb-12">
            <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                <div class="flex flex-shrink-0 justify-center">
                    <ApplicationLogo />
                </div>
                <div class="py-16">
                    <div class="text-center">
<!--                        <p class="text-base font-semibold text-indigo-600">Lorem ipsum</p>-->
                        <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Transaksi Berhasil</h1>

                        <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 mt-5">
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Waktu Transaksi</div>
                                <div class="text-sm text-gray-900">
                                    <div class="flex items-center text-sm text-gray-500 sm:mt-0">
                                        <p>
                                            {{ formattedDate(props.transaction.created_at) }}
                                        </p>
                                        <p class="text-gray-900 ml-2">
                                            {{ formattedTime(props.transaction.created_at) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Id Transaksi</div>
                                <div class="text-sm text-gray-900">{{ props.transaction.order_id }}</div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Produk</div>
                                <div class="text-sm text-gray-900">{{ props.transaction.product_name }}</div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">No. Kustomer</div>
                                <div class="text-sm text-gray-900">{{ props.transaction.customer_no }}</div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Status</div>
                                <div class="text-sm text-gray-900"><Badge :name="props.transaction.status" /></div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Bayar</div>
                                <div class="text-sm text-gray-900">Rp {{ props.transaction.category_id == 1 ? formatPrice(props.transaction.amount) : formatPrice(props.transaction.gross_amount) }}</div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Biaya Admin</div>
                                <div class="text-sm text-gray-900">Rp {{ props.transaction.category_id == 1 ? formatPrice(props.transaction.admin_fee) : '0' }}</div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Total Bayar</div>
                                <div class="text-sm text-gray-900">Rp {{ formatPrice(props.transaction.gross_amount) }}</div>
                            </div>
                            <div class="sm:col-span-1 flex justify-between">
                                <div class="text-sm font-medium text-gray-500">Ket</div>
                                <div class="text-sm text-gray-900">{{ props.transaction.desc ?? '-' }}</div>
                            </div>
                        </div>

                        <div class="mt-6 space-x-2">
                            <PrimaryButton as="a" :href="route('dashboard')" >
                                Ke Beranda
                            </PrimaryButton>

                            <PrimaryButton v-if="props.transaction.category_id != 1" @click="storeInformation" >
                                Cek Status
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </main>
        </div>

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
