<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {ref} from "vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
    darkMode: Boolean
});

const form = useForm({
    phone: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

const showPassword = ref(false)
</script>

<template>
    <Head title="Login"/>

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo/>
        </template>

        <template #title>
            Nikmati mudahnya bertranksi. transfer apa aja, bayar apa aja dan kapan aja.
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="phone" value="Telepon"/>
                <TextInput
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="mt-1 block w-full"
                    required
                    autocomplete="phone"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.phone"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password"/>
                <div class="relative">
                    <TextInput
                        id="password"
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        class="mt-1 block w-full"
                        required
                        autocomplete="current-password"
                    />
                    <button type="button"
                            @click="showPassword=!showPassword"
                            class="absolute inset-y-0 right-0 text-black px-3">
                        <i class="fa-regular " :class="showPassword ? 'fa-eye-slash' : 'fa-eye' "/>
                    </button>
                </div>

                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <!--            <div class="block mt-4">-->
            <!--                <label class="flex items-center">-->
            <!--                    <Checkbox v-model:checked="form.remember" name="remember" />-->
            <!--                    <span class="ml-2 text-sm text-gray-600">Ingat saya</span>-->
            <!--                </label>-->
            <!--            </div>-->

            <div class="grid gap-4 items-center mt-4">
                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm font-semibold text-primary-600 hover:text-primary-900 text-right">
                    Lupa password?
                </Link>

                <PrimaryButton class="w-full justify-center" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Masuk
                </PrimaryButton>
            </div>
        </form>

<!--        <div class="mt-5 relative">-->
<!--            <div class="absolute inset-0 flex items-center" aria-hidden="true">-->
<!--                <div class="w-full border-t border-gray-600" />-->
<!--            </div>-->
<!--            <div class="relative flex justify-center text-sm font-medium">-->
<!--                <span class="px-2 backdrop-blur text-gray-700"> atau </span>-->
<!--            </div>-->
<!--        </div>-->

        <SecondaryButton as="a" :href="route('register')" class="w-full justify-center mt-5 border border-gray-600 dark:border-gray-300" >
            Daftar
        </SecondaryButton>
    </AuthenticationCard>
</template>
