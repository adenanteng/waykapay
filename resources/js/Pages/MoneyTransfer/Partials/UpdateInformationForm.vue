<script setup>
import {Link, router, useForm, usePage} from '@inertiajs/vue3';
import {computed, onMounted, onUnmounted, ref, watch} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionSection from "@/Components/ActionSection.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import VOtpInput from "vue3-otp-input";
import bcrypt from "bcryptjs";
import DialogModal from "@/Components/DialogModal.vue";
import Pusher from "pusher-js";
import Echo from "laravel-echo";

const props = defineProps({
    users: Object | String,
    beneficiary: Object | String,
    token: String,
    response: Object | String,
    bank: Object,
    account_no: String,
});

const form = useForm({
    amount: null,
    bank: props.bank,
    account_no: props.account_no,
    desc: null,
    beneficiary: props.beneficiary ?? null,
    token: props.token ?? null,
});

const {...userInfo} = computed(() => usePage().props.user).value;
// console.log(userInfo.name); // Show my user name
const message = ref(null)

const storeInformation = () => {
    if (Number(amount.value) >= Number(userInfo.wallet_balance)) {
        pinModal.value = false
        message.value = "Saldo kurang"
    } else {
        if (props.beneficiary) {
            form.amount = amount.value.replaceAll(".", "")
            form.beneficiary.beneficiaryDetails.beneficiaryName = accountName.value
            form.post(route('money-transfer.confirmAyo'), {
                errorBag: 'storeInformation',
                preserveScroll: true,
                replace: true,
                onSuccess: () => {
                    otpInput.value?.clearInput();
                }
            });
        } else {
            form.amount = amount.value.replaceAll(".", "")
            form.post(route('money-transfer.confirm'), {
                errorBag: 'storeInformation',
                preserveScroll: true,
                replace: true,
                onSuccess: () => {
                    otpInput.value?.clearInput();
                }
            });
        }
    }
};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const amount = ref(null)

watch(amount, (newAmount) => {
    amount.value = newAmount.toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // console.log(amount.value)
})

const pinModal = ref(false);
const otpInput = ref(VOtpInput | null);
const bindModal = ref("");
const msgError = ref(false);

const handleModal = () => {
    if (userInfo.pin) {
        pinModal.value=true
    } else {
        storeInformation()
    }
};

const closeModal = () => {
    pinModal.value = false;
    // form.reset();
};

const handleOnComplete = (value) => {
    let hash = value;
    hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
    bcrypt.compare(hash, userInfo.pin, function(err, res) {
        if (res) {
            storeInformation()
            // otpInput.value?.clearInput();
        } else {
            msgError.value = true
            otpInput.value?.clearInput();
        }
    });

};

const handleOnChange = (value) => {
    // console.log("OTP changed: ", value);
};

const accountName = ref()
const errMessage = ref()

if (typeof window !== 'undefined') {
    window.Pusher = Pusher;

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
        forceTLS: true
    });

    let channel = window.Echo.channel('ayo-beneficiary-channel');
    channel.listen('.ayo-beneficiary-event', function (data) {
        if (data.action === 'success' &&
            props.beneficiary?.beneficiaryDetails?.beneficiaryAccountNumber == data.beneficiaryAccountNumber)
        {
            accountName.value = data.beneficiaryName
            console.log(data.beneficiaryName, data.beneficiaryAccountNumber)

        } else if (data.action === 'error' &&
            props.beneficiary?.beneficiaryDetails?.beneficiaryAccountNumber == data.beneficiaryAccountNumber) {
            errMessage.value = data.message
            console.log(data.message, data.beneficiaryAccountNumber)

        } else {
            console.log(data)
        }
    });
}

onMounted(() => {

})

onUnmounted(() => {
    window.Echo.leave('ayo-beneficiary-channel')
})
</script>

<template>
    <ActionSection>
        <template #title>

        </template>

        <template #description>

        </template>

        <template #content>
            <div class="flex items-center px-2" v-if="props.beneficiary">
                <template v-if="accountName">
                    <div class="flex-shrink-0">
                        <img class="h-5 w-full"
                             :src="props.bank.logo"
                             :alt="props.bank.name" />
                    </div>
                    <div class="ml-3 min-w-0 flex-1">
                        <div class="text-base font-medium text-gray-800 truncate capitalize" >
                            {{ accountName }}
                        </div>
                        <div class="text-sm font-medium text-gray-500 truncate">
                            {{ props.account_no }}
                        </div>
                    </div>
                </template>
                <template v-else-if="errMessage">
                    <div class="text-center">
                        <i class="fa-regular fa-triangle-exclamation text-2xl text-red-600" />
                        <p class="text-gray-900">{{ errMessage }}</p>
                    </div>
                </template>
                <template v-else>
                    <i class="fa-regular fa-spinner-third animate-spin" />
                </template>
            </div>

            <div class="flex items-center px-2" v-else>
                <div class="flex-shrink-0">
                    <img class="h-5 w-full"
                         :src="props.bank.logo"
                         :alt="props.bank.name" />
                </div>
                <div class="ml-3 min-w-0 flex-1">
                    <div class="text-base font-medium text-gray-800 truncate capitalize" >
                        {{ props.users?.name }}
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                        {{ props.account_no }}
                    </div>
                </div>
            </div>
        </template>
    </ActionSection>

    <FormSection v-if="accountName || !props.beneficiary">
        <template #title>
            Mau Transfer berapa?
        </template>

        <template #description>
<!--            * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}-->
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-3">
                <InputLabel for="amount" value="Nominal"/>
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        id="amount"
                        v-model="amount"
                        type="tel"
                        class="mt-1 block w-full rounded-l-none"
                        min="1"
                        :max="Number($page.props.user.wallet_balance) <= 2000000 ? $page.props.user.wallet_balance : 2000000"
                        required
                        autofocus
                    />
                </div>
                <InputError :message="form.errors.amount || message" class="mt-2"/>
                <p class="mt-1 text-xs text-gray-600">
                    Max Rp {{ Number($page.props.user.wallet_balance) <= 2000000 ?
                    formatPrice($page.props.user.wallet_balance) : '2.000.000' }}
                </p>
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="amount" value="Keterangan"/>
                <TextAreaInput
                    id="desc"
                    v-model="form.desc"
                    type="text"
                    class="mt-1 block w-full"
                    rows="1"
                />
                <InputError :message="form.errors.desc" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton
                class="w-full justify-center"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
                @click="handleModal"
            >
                Konfirmasi
            </PrimaryButton>

<!--            <PrimaryButton-->
<!--                class="w-full justify-center"-->
<!--                :class="{ 'opacity-25': form.processing }"-->
<!--                disabled-->
<!--            >-->
<!--                Konfirmasi-->
<!--            </PrimaryButton>-->
        </template>
    </FormSection>

    <DialogModal :show="pinModal" @close="closeModal">
        <template #title>
            <div class="w-full text-center">
                Masukkan PIN transaksi kamu
            </div>

        </template>

        <template #content>
            <div class="grid justify-center">
                <VOtpInput
                    ref="otpInput"
                    v-model:value="bindModal"
                    input-classes="otp-input"
                    separator=""
                    :num-inputs="6"
                    :should-auto-focus="true"
                    input-type="letter-numeric"
                    :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                />
<!--                    <InputError :message="form.errors.pin" class="mt-2"/>-->
                <p v-if="msgError" class="w-full text-center text-sm text-red-600 mt-2">Pin salah, silahkan coba lagi.</p>

            </div>
        </template>

    </DialogModal>

</template>
