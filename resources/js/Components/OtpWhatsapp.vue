<script setup>

import VOtpInput from "vue3-otp-input";
import DialogModal from "./DialogModal.vue";
import {Link, router, useForm, usePage} from "@inertiajs/vue3";
import {computed, onMounted, ref} from "vue";
import PrimaryButton from "./PrimaryButton.vue";
import InputError from "./InputError.vue";

const props = defineProps({
    greet: {
        type: Boolean,
        default: true
    }
})

const form = useForm({
    pin: null,
});

const {...userInfo} = computed(() => usePage().props.user).value;
// console.log(userInfo.name); // Show my user name

const closeModal = () => {
    // pinModal.value = false;
    // form.reset();
};

const pinModal = ref(userInfo.phone_verified_at == null);

const greet = ref(props.greet)
const otpInput = ref(VOtpInput | null);
const bindModal = ref("");
const msgError = ref(false);

const handleOnComplete = (value) => {
    form.pin = bindModal.value
    form.post(route('otp.verify'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        replace: true,
        onError: (errors) => {
            msgError.value = true
            otpInput.value?.clearInput();
            // console.log(errors)
        },
        onSuccess: () => {
            pinModal.value = false
        }
    });
};

const handleOnChange = (value) => {
    // console.log("OTP changed: ", value);
};

const handleButton = () => {
    router.post(route('otp.request'), null, {
        onBefore: (visit) => {},
        onStart: (visit) => {},
        onProgress: (progress) => {},
        onSuccess: (page) => { },
        onError: (errors) => {},
        onCancel: () => {},
        onFinish: () => { greet.value = false },
    })

    // greet.value = false
    console.log(greet.value + ' asf')
}

onMounted(() => {
    // console.log(props.greet)
})

</script>

<template>
    <DialogModal :show="pinModal" @close="closeModal">
        <template #title v-if="greet">
            <div class="w-full text-center">
                Satu Langkah Lagi
            </div>
            <div class="text-center text-xs text-gray-600">
                Proses verifikasi ini hanya dilakukan satu kali.
            </div>

        </template>

        <template #title v-else>
            <div class="w-full text-center">
                Masukkan kode OTP Whatsapp
            </div>
            <div class="text-center text-xs text-gray-600">
                Tidak menerima kode? <Link class="text-primary-600 underline font-medium" href="">Kirim ulang kode OTP</Link>
            </div>

        </template>

        <template #content v-if="greet">
            <PrimaryButton
                @click="handleButton"
                class="w-full justify-center"
            >
                <i class="fa-brands fa-whatsapp mr-1.5" />
                Verifikasi Whatsapp
            </PrimaryButton>
        </template>

        <template #content v-else>
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
                <InputError :message="form.errors.pin" class="mt-2"/>
                <p v-if="msgError" class="w-full text-center text-sm text-red-600 mt-2">Kode OTP salah, silahkan coba lagi.</p>

            </div>
        </template>
    </DialogModal>
</template>
