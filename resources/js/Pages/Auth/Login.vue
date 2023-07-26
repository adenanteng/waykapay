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
            Belum punya akun?
            <Link class="underline text-sm text-gray-600 hover:text-gray-900" :href="route('register')">Daftar</Link>
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email"/>
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autocomplete="email"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.email"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password"/>
                <div class="flex">
                    <TextInput
                        id="password"
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        class="mt-1 block w-full rounded-r-none"
                        required
                        autocomplete="current-password"
                    />
                    <button type="button"
                            @click="showPassword=!showPassword"
                            class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3 ">
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

            <div class="flex items-center justify-end mt-4">
                <Link v-if="canResetPassword" :href="route('password.request')"
                      class="underline text-sm text-gray-600 hover:text-gray-900">
                    Lupa password?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Masuk
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>
