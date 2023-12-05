<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import {onMounted, ref} from "vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
    darkMode: Boolean
});

onMounted(() => {
    window.otpless = (otplessUser) => {
        // alert(JSON.stringify(otplessUser));

        const form = useForm({
            phone: JSON.stringify(otplessUser['waNumber']),
            // email: JSON.stringify(otplessUser['waNumber']),
        });
        form.post(route('otp.acc'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            // replace: true,
            onSuccess: () => {

            }
        });
    }
})

</script>

<template>
    <Head title="Login"/>

    <div class="min-h-screen flex justify-center items-center">
        <div id="otpless-login-page">

        </div>
    </div>
</template>
