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
import ApplicationLogoTitle from "../../Components/ApplicationLogoTitle.vue";

const props = defineProps({
    transaction: Object
})

const form = useForm({
    transaction: props.transaction,
});

const storeInformation = () => {

    // form.put(route('product.status', form), {
    //     errorBag: 'updateInformation',
    //     preserveScroll: true,
    //     onSuccess: () => {}
    // });
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
    <BlankLayout :title="props.transaction?.message ?? 'Transaksi Gagal'" >

        <div class="pt-16 pb-12">
            <main class="mx-auto flex w-full max-w-sm flex-grow flex-col justify-center px-6 lg:px-8">
                <div class="flex flex-shrink-0 justify-center">
                    <ApplicationLogoTitle />
                </div>
                <div class="mt-5">
                    <div class="border-t border-gray-600 border-dashed px-4 py-5 ">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900">
                            <div class=" flex justify-between" v-if="props.transaction">
                                <div class="text-sm ">Status</div>
                                <div class="text-sm font-semibold capitalize">{{ props.transaction?.status }}</div>
                            </div>
                            <div class=" flex justify-between" v-if="props.transaction">
                                <div class="text-sm ">Produk</div>
                                <div class="text-sm font-semibold capitalize">{{ props.transaction?.buyer_sku_code.replaceAll("-", " ") }}</div>
                            </div>
                            <div class=" flex justify-between" v-if="props.transaction">
                                <div class="text-sm ">ID Pelanggan</div>
                                <div class="text-sm font-semibold">{{ props.transaction?.customer_no }}</div>
                            </div>
                            <div class=" flex justify-between gap-5">
                                <div class="text-sm ">Keterangan</div>
                                <div class="text-sm font-semibold ">{{ props.transaction?.message ?? 'Transaksi Gagal' }}</div>
                            </div>

                            <span class="my-2 border-t border-gray-600 border-dashed block" />

                        </div>
                    </div>

                    <div class="text-center">

                        <div class="mt-5 space-x-2">
<!--                            <PrimaryButton as="a" :href="route('dashboard')" >-->
<!--                                Ke Beranda-->
<!--                            </PrimaryButton>-->

                            <PrimaryButton onclick="history.back();return false;">
                                Kembali
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </main>
        </div>

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
