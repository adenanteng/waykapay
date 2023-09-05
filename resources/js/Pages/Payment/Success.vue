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
    return moment(value).format('DD MMM Y | HH:mm')
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
        <main class="px-4 sm:px-6 lg:px-8 w-full">
            <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                <ApplicationLogo class="block sm:hidden" />
                <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Berhasil</h3>
                <!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
            </div>
            <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Tanggal</div>
                        <div class="text-sm font-semibold">{{ formattedDate(props.transaction.updated_at) }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">No. Referensi</div>
                        <div class="text-sm font-semibold ">{{ props.transaction.order_id }}</div>
                    </div>

                    <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Kategori</div>
                        <div class="text-sm font-semibold">{{ props.transaction.category }}</div>
                    </div>

                    <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.transaction.category_id == 1">
                        <div class="text-sm ">Sumber Dana</div>
                        <template v-if="props.transaction.virtual_account">
                            <div class="text-sm font-semibold uppercase">{{ props.transaction.virtual_account.bank }}</div>
                        </template>
                        <template v-if="props.transaction.wallet_account">
                            <div class="text-sm font-semibold uppercase">{{ props.transaction.wallet_account.bank }}</div>
                        </template>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.transaction.category_id != 1">
                        <div class="text-sm ">Produk</div>
                        <div class="text-sm font-semibold">{{ props.transaction.product_name }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.transaction.category_id != 1">
                        <div class="text-sm ">No. Kustomer</div>
                        <div class="text-sm font-semibold">{{ props.transaction.customer_no }}</div>
                    </div>
                    <!--                        <div class="sm:col-span-1 flex sm:block justify-between">-->
                    <!--                            <div class="text-sm ">Status</div>-->
                    <!--                            <div class="text-sm font-semibold"><Badge :name="props.transaction.status" /></div>-->
                    <!--                        </div>-->
                    <div class="sm:col-span-2 flex sm:block justify-between">
                        <div class="text-sm ">Keterangan</div>
                        <div class="text-sm font-semibold">{{ props.transaction.desc ?? '-' }}</div>
                    </div>

                    <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Nominal</div>
                        <div class="text-sm font-semibold">Rp {{ props.transaction.category_id == 1 ? formatPrice(props.transaction.amount) : formatPrice(props.transaction.gross_amount) }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Biaya Admin</div>
                        <div class="text-sm font-semibold">Rp {{ props.transaction.category_id == 1 ? formatPrice(props.transaction.admin_fee) : '0' }}</div>
                    </div>

                    <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm font-bold">Total</div>
                        <div class="text-sm font-bold">Rp {{ formatPrice(props.transaction.gross_amount) }}</div>
                    </div>
                </div>
            </div>
        </div>

            <div class="mt-5 space-x-2 flex justify-center">
                <PrimaryButton as="a" :href="route('dashboard')" >
                    Ke Beranda
                </PrimaryButton>

<!--                            <PrimaryButton v-if="props.transaction.category_id != 1" @click="storeInformation" >-->
<!--                                Cek Status-->
<!--                            </PrimaryButton>-->
            </div>
        </main>

<!--        <main class="mx-auto flex max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8 ">-->
<!--                <div class="flex flex-shrink-0 justify-center">-->
<!--                    <ApplicationLogo />-->
<!--                </div>-->
<!--                <div class="mt-5 ">-->
<!--                    <div class="text-center">-->
<!--&lt;!&ndash;                        <p class="text-base font-semibold text-indigo-600">Lorem ipsum</p>&ndash;&gt;-->
<!--                        <h1 class="text-lg font-bold tracking-tight text-gray-900">Transaksi Berhasil</h1>-->

<!--                        <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 mt-5">-->
<!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                <div class="text-sm ">Tanggal</div>-->
<!--                                <div class="text-sm font-semibold">{{ formattedDate(props.transaction.updated_at) }}</div>-->
<!--                            </div>-->
<!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                <div class="text-sm ">No. Referensi</div>-->
<!--                                <div class="text-sm font-semibold ">{{ props.transaction.order_id }}</div>-->
<!--                            </div>-->

<!--                            <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />-->

<!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                <div class="text-sm ">Kategori</div>-->
<!--                                <div class="text-sm font-semibold">{{ props.transaction.category }}</div>-->
<!--                            </div>-->
<!--                            <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.transaction.category_id == 1">-->
<!--                                <div class="text-sm ">Sumber Dana</div>-->
<!--                                <template v-if="props.transaction.virtual_account">-->
<!--                                    <div class="text-sm font-semibold uppercase">{{ props.transaction.virtual_account.bank }}</div>-->
<!--                                </template>-->
<!--                                <template v-if="props.transaction.wallet_account">-->
<!--                                    <div class="text-sm font-semibold uppercase">{{ props.transaction.wallet_account.bank }}</div>-->
<!--                                </template>-->
<!--                            </div>-->

<!--                            <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.transaction.category_id !== 1">-->
<!--                                <div class="text-sm ">Produk</div>-->
<!--                                <div class="text-sm font-semibold">{{ props.transaction.product_name }}</div>-->
<!--                            </div>-->
<!--                            <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.transaction.category_id !== 1">-->
<!--                                <div class="text-sm ">No. Kustomer</div>-->
<!--                                <div class="text-sm font-semibold">{{ props.transaction.customer_no }}</div>-->
<!--                            </div>-->
<!--                            &lt;!&ndash;                        <div class="sm:col-span-1 flex sm:block justify-between">&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div class="text-sm ">Status</div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div class="text-sm font-semibold"><Badge :name="props.transaction.status" /></div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                            <div class="sm:col-span-2 flex sm:block justify-between">-->
<!--                                <div class="text-sm ">Keterangan</div>-->
<!--                                <div class="text-sm font-semibold">{{ props.transaction.desc ?? '-' }}</div>-->
<!--                            </div>-->

<!--                            <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />-->

<!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                <div class="text-sm ">Nominal</div>-->
<!--                                <div class="text-sm font-semibold">Rp {{ props.transaction.category_id == 1 ? formatPrice(props.transaction.amount) : formatPrice(props.transaction.gross_amount) }}</div>-->
<!--                            </div>-->
<!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                <div class="text-sm ">Biaya Admin</div>-->
<!--                                <div class="text-sm font-semibold">Rp {{ props.transaction.category_id == 1 ? formatPrice(props.transaction.admin_fee) : '0' }}</div>-->
<!--                            </div>-->

<!--                            <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />-->

<!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                <div class="text-sm font-bold">Total</div>-->
<!--                                <div class="text-sm font-bold">Rp {{ formatPrice(props.transaction.gross_amount) }}</div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="mt-5 space-x-2">-->
<!--                            <PrimaryButton as="a" :href="route('dashboard')" >-->
<!--                                Ke Beranda-->
<!--                            </PrimaryButton>-->

<!--&lt;!&ndash;                            <PrimaryButton v-if="props.transaction.category_id != 1" @click="storeInformation" >&ndash;&gt;-->
<!--&lt;!&ndash;                                Cek Status&ndash;&gt;-->
<!--&lt;!&ndash;                            </PrimaryButton>&ndash;&gt;-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </main>-->

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
