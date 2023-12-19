<script setup>
import {ref, watch} from "vue";
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import moment from "moment";
import BlankLayout from "../../Layouts/BlankLayout.vue";
import ApplicationLogo from "../../Components/ApplicationLogo.vue";
import VOtpInput from "vue3-otp-input";
import InputError from "../../Components/InputError.vue";

const props = defineProps({
    request: Object,
    history: Object
})

const form = useForm({
    agent_commission: null,
    valid: null,
    pin: null,
});

const storeInformation = () => {
    form.pin = bindModal.value
    form.valid = props.history.order_id
    form.patch(route('transaction.update', props.history), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        replace: true,
        onSuccess: () => {

        }
    });
};

const formReset = () => {
    form.defaults({
        pin: null,
    })
    form.reset()
}

const otpInput = ref(VOtpInput | null);
const bindModal = ref("");

const handleOnComplete = (value) => {
    // console.log("OTP completed: ", value);
    storeInformation()
};

const handleOnChange = (value) => {
    // console.log("OTP changed: ", value);
};

const clearInput = () => {
    otpInput.value?.clearInput();
};

const fillInput = (value) => {
    // console.log(value);
    otpInput.value?.fillInput(value);
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:m')
}

function formatPrice(value) {
    let val = (value / 1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <BlankLayout title="Pin">
        <div class="relative isolate overflow-hidden">
            <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <ApplicationLogo class="mb-10" />
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Masukkan Pin</h1>
                    <p class="text-sm text-gray-600">Masukkan pin transaksi kamu</p>
                    <div class="mt-10">
                        <div class="">
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

                            <!--                            <button @click="clearInput()">Clear Input</button>-->
                            <!--                            <button @click="fillInput('2929')">Fill Input</button>-->
                        </div>

                        <!--                        <PrimaryButton as="a" :href="route('upgrade.create')">Mulai</PrimaryButton>-->
                        <!--                        <SecondaryButton >Lorem</SecondaryButton>-->
                    </div>
                </div>
                <!--                <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">-->
                <!--                    <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">-->
                <!--                        <div class="-m-2 rounded-3xl bg-gray-900 bg-opacity-10 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:p-4">-->
                <!--                            <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png"-->
                <!--                                 alt="App screenshot" width="2432" height="1442"-->
                <!--                                 class="w-[76rem] rounded-3xl shadow-2xl ring-1 ring-gray-900 ring-opacity-10"/>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>

        <!--        <MobileMenu/>-->
    </BlankLayout>
</template>
