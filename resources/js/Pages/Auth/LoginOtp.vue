<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import {onMounted, ref} from "vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
    darkMode: Boolean
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

onMounted(() => {
    window.otpless = (otplessUser) => {
        alert(JSON.stringify(otplessUser));
    }
})

</script>

<template>
    <Head title="Login"/>

    <div id="otpless-login-page">

    </div>
</template>
