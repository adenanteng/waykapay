<script setup>
import {toClipboard} from "@soerenmartius/vue3-clipboard";
import Popper from "vue3-popper";
import PrimaryButton from "../../../Components/PrimaryButton.vue";
import SecondaryButton from "../../../Components/SecondaryButton.vue";
import ApplicationLogoTitle from "../../../Components/ApplicationLogoTitle.vue";
import moment from "moment/moment";
import ActionMessage from "../../../Components/ActionMessage.vue";
import InputLabel from "../../../Components/InputLabel.vue";
import TextInput from "../../../Components/TextInput.vue";
import InputError from "../../../Components/InputError.vue";
import {useForm} from "@inertiajs/vue3";
import {ref, watch} from "vue";

const props = defineProps({
    history: Object,
})

const form = useForm({
    agent_commission: null,
});

const commission = ref(null)
const message = ref(null)

watch(commission, (newAmount) => {
    commission.value = newAmount.toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // console.log(amount.value)
})

const storeInformation = () => {
    form.agent_commission = commission.value.replaceAll(".", "")
    form.patch(route('transaction.update', props.history), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        }
    });
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
</script>

<template>
    <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
        <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
            <!--                    <ApplicationLogo class="block sm:hidden" />-->
            <ApplicationLogoTitle class="block sm:hidden" />
            <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Berhasil</h3>
            <!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
        </div>
        <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
            <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Tanggal</div>
                    <div class="text-sm font-semibold">{{ formattedDate(props.history.updated_at) }}</div>
                </div>
                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Kode Referensi</div>
                    <div class="text-sm text-right font-semibold w-1/2 truncate">{{ props.history.order_id }}</div>
                </div>

                <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                <template v-if="props.history.category_id == 1">
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">Kategori</div>
                        <div class="text-sm font-semibold">{{ props.history.category }}</div>
                    </div>
                </template>

                <template v-if="props.history.category_id == 1">
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">Sumber Dana</div>
                        <template v-if="props.history.virtual_account">
                            <div class="text-sm font-semibold uppercase">{{ props.history.virtual_account.bank }}</div>
                        </template>
                        <template v-if="props.history.wallet_account">
                            <div class="text-sm font-semibold uppercase">{{ props.history.wallet_account.bank }}</div>
                        </template>
                        <template v-if="props.history.offline_account">
                            <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>
                        </template>
                        <template v-if="props.history.manual_account">
                            <div class="text-sm font-semibold uppercase">{{ props.history.manual_account.bank }}</div>
                        </template>
                    </div>
                </template>

                <template v-if="props.history.category_id == 99 || props.history.category_id == 98">
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">Jenis Transaksi</div>
                        <div class="text-sm font-semibold uppercase">{{ props.history.product_name.replaceAll("-", " ") }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">Bank Tujuan</div>
                        <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.bank }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">Nama Tujuan</div>
                        <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to_name }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">No. Rekening Tujuan</div>
                        <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to_number }}</div>
                    </div>
                </template>

                <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">Produk</div>
                        <div class="text-sm font-semibold uppercase">{{ props.history.product_name.replaceAll("-", " ") }}</div>
                    </div>
                </template>

                <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                    <div class="sm:col-span-1 flex sm:block justify-between" >
                        <div class="text-sm ">No. Kustomer</div>
                        <div class="text-sm font-semibold">{{ props.history.customer_no }}</div>
                    </div>
                </template>

                <template v-if="props.history.category_id == 5">
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Nama Kustomer</div>
                        <div class="text-sm font-semibold">{{ props.history.desc.split('/')[1] }}</div>
                    </div>
                    <div class="sm:col-span-2 block justify-between" >
                        <div class="text-sm ">Stroom</div>
                        <div class="text-sm mt-2 sm:mt-0 font-bold text-center sm:text-left">
                            <Popper content="Sukses Copy" arrow placement="right-end">
                                <button
                                    @click="toClipboard(props.history.desc.split('/')[0])"
                                    class="text-lg"
                                >
                                    {{ props.history.desc.split('/')[0] }}
                                </button>
                            </Popper>

                        </div>
                    </div>
                </template>

                <template v-else >
                    <div class="sm:col-span-2 block justify-between">
                        <div class="text-sm ">Keterangan</div>
                        <div class="text-sm mt-2 sm:mt-0 font-semibold text-center sm:text-left ">{{ props.history?.desc?.replaceAll("/", " ") ?? '-' }}</div>
                    </div>
                </template>

                <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Nominal</div>
                    <div class="text-sm font-semibold">
                        Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}
                    </div>
                </div>
                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Biaya Admin</div>
                    <div class="text-sm font-semibold">
                        Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : '0' }}
                    </div>
                </div>
                <div v-if="props.history.agent_commission" class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Komisi</div>
                    <div class="text-sm font-semibold">
                        Rp {{ formatPrice(props.history.agent_commission) }}
                    </div>
                </div>
                <div v-if="props.history.service_fee!=0" class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Biaya Layanan</div>
                    <div class="text-sm font-semibold">
                        Rp {{ formatPrice(props.history.service_fee) }}
                    </div>
                </div>

                <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm font-bold">Total</div>
                    <div class="text-lg font-bold">Rp {{ formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)) }}</div>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6 text-xs text-gray-500">
            <p>CV Cahaya Matahari Dunia</p>
            <p>NPWP: 50.079.228.8-326.000</p>
            <p>Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761</p>
        </div>
    </div>

    <template v-if="props.history.category_id!=0 && props.history.category_id!=1 && $page.props.user.role_id!=3 && props.history.user_id == $page.props.user.id">
        <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
            <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Komisi Agen</h3>
            </div>
            <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                <form @submit.prevent="storeInformation">
                    <div class="grid grid-cols-6">
                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel for="amount" value="Harga Jual"/>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                    Rp
                                </div>
                                <TextInput
                                    id="amount"
                                    v-model="commission"
                                    type="tel"
                                    class="mt-1 block w-full pl-10"
                                    :min="Number(props.history.gross_amount)"
                                    required
                                />
                            </div>
                            <InputError :message="form.errors.agent_commission || message" class="mt-2"/>
                        </div>

                        <div class="col-span-6 mt-3 flex justify-between items-center">
                            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                Berhasil disimpan.
                            </ActionMessage>

                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Konfirmasi
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </template>

    <div class="flex justify-center gap-2">
        <PrimaryButton
            v-if="props.history.user_id == $page.props.user.id && props.history.category_id!=1"
            as="a"
            :href="route('transaction.print', props.history.order_id)"
            class="justify-center w-full"
        >
            <i class="fa-regular fa-print mr-2" />
            Cetak
        </PrimaryButton>

        <PrimaryButton
            v-if="props.history.user_id == $page.props.user.id && props.history.category_id!=1"
            as="a"
            :href="route('transaction.share', props.history.order_id)"
            class="justify-center w-full"
        >
            <i class="fa-regular fa-share-nodes mr-2" />
            Bagikan
        </PrimaryButton>

    </div>

    <div class="">
        <SecondaryButton
            as="a"
            :href="route('dashboard')"
            class="justify-center w-full border border-gray-600 dark:border-white nightwind-prevent"
        >
            <i class="fa-regular fa-home mr-2" />
            Beranda
        </SecondaryButton>
    </div>
</template>
