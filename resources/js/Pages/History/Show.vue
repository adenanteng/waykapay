<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import PreviousButton from "@/Components/PreviousButton.vue"
import {Link, router, useForm, usePage} from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";
import ApplicationLogoTitle from "../../Components/ApplicationLogoTitle.vue";
import { Vue3Lottie } from 'vue3-lottie';
import Success from "./Partials/Success.vue";
import Pending from "./Partials/Pending.vue";
import Error from "./Partials/Error.vue";
import DialogModal from "../../Components/DialogModal.vue";
import TextInput from "../../Components/TextInput.vue";
import InputLabel from "../../Components/InputLabel.vue";
import InputError from "../../Components/InputError.vue";

const props = defineProps({
    history: Object,
    goBack: {
        type: Boolean,
        default: true
    },
    goSuccess: {
        type: Boolean,
        default: false
    },
    saveCustomer: {
        type: Boolean,
        default: false
    }
})

const {...userInfo} = computed(() => usePage().props.user).value;

const timerSuccess = ref(props.goSuccess)
const saveModal = ref(false)


onMounted(() => {
    if (timerSuccess.value) {
        // console.log('anjir')
        // setTimeout(() => timerSuccess.value = false, 5000)
    }
})

onUnmounted(() => {

})

const form = useForm({
    customer_name: null,
    customer_no: props.history.customer_no,
    brand: props.history.brand,
    history_id: props.history.order_id
});

const storeInformation = () => {
    form.post(route('transaction-customer.store'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
            timerSuccess.value=false
            saveModal.value=false
        }
    });
};

const closeModal = () => {
    saveModal.value = false;
};

</script>

<template>
    <AppLayout :title="props.history.product_name"
               :name="props.history.product_name"
               desc="lorem ipsum dolor sit"
    >

        <template #previous>
            <PreviousButton v-if="props.goBack" />
        </template>

        <template v-if="timerSuccess">
            <div class="pt-16 pb-12">
                <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                    <div class="flex flex-shrink-0 justify-center">
                        <ApplicationLogoTitle />
                    </div>
                    <div class="mt-5">
                        <div class="text-center justify-center">
                            <div class="px-4 sm:px-6 text-center text-gray-900 text-sm" >
                                <Vue3Lottie
                                    animation-link="https://lottie.host/a3272d43-4bd3-4974-a125-712019ae512e/mskSUiuPqv.json"
                                    :height="200"
                                    :width="200"
                                />
                            </div>

                            <h1 class="text-xl font-bold tracking-tight text-gray-900">Transaksi Berhasil</h1>
                            <p class="text-gray-500 text-sm">Kamu akan dialihkan dalam 5 detik</p>

                            <div class="mt-5 space-x-2 space-y-5">
                                <PrimaryButton
                                    as="a"
                                    :href="route('history.show', props.history.order_id)"
                                >
                                    Lihat Transaksi
                                </PrimaryButton>

                                <SecondaryButton
                                    as="a"
                                    :href="route('dashboard')"
                                    class="border border-gray-300"
                                >
                                    Ke Beranda <i class="fa-regular fa-arrow-right ml-1 text-xs" />
                                </SecondaryButton>

                            </div>

                            <div class="mt-5">
                                <SecondaryButton
                                    v-if="props.saveCustomer"
                                    class="border border-gray-300"
                                    @click="saveModal=true"
                                >
<!--                                    <i class="fa-regular fa-save mr-2" />-->
                                    Simpan Nomor
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </template>

        <template v-else>
            <Success :history="props.history" v-if="props.history.status_id == 1" />

            <Pending :history="props.history" v-else-if="props.history.status_id == 2" />

            <Error :history="props.history" v-else />
        </template>

<!--        save customer modal -->
        <DialogModal :show="saveModal" @close="closeModal">
            <template #title>
                <div class="w-full text-center">
                    Simpan Nomor {{ form.brand }}
                </div>

            </template>

            <template #content>
                <div class="space-y-5">
                    <div class="">
                        <InputLabel for="customer_name" value="Nama" />
                        <TextInput
                            id="customer_name"
                            v-model="form.customer_name"
                            type="text"
                            class="mt-1 block w-full capitalize"
                            required
                            autofocus
                        />
                        <InputError :message="form.errors.customer_name" class="mt-2" />
                    </div>

                    <div class="">
                        <InputLabel for="customer_no" value="Nomor" />
                        <TextInput
                            id="customer_no"
                            v-model="form.customer_no"
                            type="text"
                            class="mt-1 block w-full text-gray-500"
                            required
                            disabled
                        />
                        <InputError :message="form.errors.customer_no" class="mt-2" />
                    </div>
                </div>

            </template>

            <template #footer>
                <div class="grid items-center w-full">
                    <PrimaryButton
                        class="w-full justify-center"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="storeInformation"
                    >
                        Simpan
                    </PrimaryButton>
                </div>
            </template>
        </DialogModal>

<!--        <SaveModal :history="props.history" v-if="saveModal===true" />-->
    </AppLayout>
</template>
