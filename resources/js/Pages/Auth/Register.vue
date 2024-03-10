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

const form = useForm({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const showPassword = ref(false)
const showPasswordConfirm = ref(false)
</script>

<template>
    <Head title="Register"/>

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo/>
        </template>

        <template #title>
            Ayo buat akun Anda, masukkan alamat email aktif dan nomor telepon Anda.
        </template>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Nama"/>
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full capitalize"
                    required
                    autofocus
                    autocomplete="name"
                />
                <InputError class="mt-2" :message="form.errors.name"/>
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email"/>
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autocomplete="email"
                />
                <InputError class="mt-2" :message="form.errors.email"/>
            </div>

            <div class="mt-4">
                <InputLabel for="phone" value="Telepon"/>
                <TextInput
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="mt-1 block w-full"
                    required
                    autocomplete="phone"
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
                        autocomplete="password"
                    />
                    <button type="button"
                            @click="showPassword=!showPassword"
                            class="absolute inset-y-0 right-0 text-black px-3">
                        <i class="fa-regular " :class="showPassword ? 'fa-eye-slash' : 'fa-eye' "/>
                    </button>
                </div>

                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Konfirmasi Password"/>
                <div class="relative">
                    <TextInput
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        :type="showPasswordConfirm ? 'text' : 'password'"
                        class="mt-1 block w-full"
                        required
                        autocomplete="password"
                    />
                    <button type="button"
                            @click="showPasswordConfirm=!showPasswordConfirm"
                            class="absolute inset-y-0 right-0 text-black px-3">
                        <i class="fa-regular " :class="showPasswordConfirm ? 'fa-eye-slash' : 'fa-eye' "/>
                    </button>
                </div>

                <InputError class="mt-2" :message="form.errors.password_confirmation"/>
            </div>

            <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                <InputLabel for="terms">
                    <div class="flex items-center">
                        <Checkbox id="terms" v-model:checked="form.terms" name="terms" required/>

                        <div class="ml-2">
                            Saya menyetujui
                            <Link :href="route('terms.show')"
                                  class="underline text-sm font-semibold text-primary-600 hover:text-primary-900">
                                Ketentuan Layanan
                            </Link>
                            dan
                            <Link :href="route('policy.show')"
                                  class="underline text-sm font-semibold text-primary-600 hover:text-primary-900">
                                Kebijakan Privasi
                            </Link>
                        </div>
                    </div>
                    <InputError class="mt-2" :message="form.errors.terms"/>
                </InputLabel>
            </div>

            <div class="flex items-center mt-4">
<!--                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">-->
<!--                    Sudah punya akun?-->
<!--                </Link>-->

                <PrimaryButton class="w-full justify-center" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Daftar
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>
