<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }

            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};

const showPassword = ref(false)
const showPasswordNew = ref(false)
const showPasswordConfirm = ref(false)

</script>

<template>
    <FormSection @submitted="updatePassword">
        <template #title>
            Ubah Password
        </template>

        <template #description>
            Pastikan akun kamu menggunakan kata sandi acak yang panjang agar tetap aman.
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="current_password" value="Password" />
                <div class="flex">
                    <TextInput
                        id="current_password"
                        ref="currentPasswordInput"
                        v-model="form.current_password"
                        :type="showPassword ? 'text' : 'password'"
                        class="mt-1 block w-full rounded-r-none"
                        autocomplete="current-password"
                    />
                    <button type="button"
                            @click="showPassword=!showPassword"
                            class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3 ">
                        <i class="fa-regular " :class="showPassword ? 'fa-eye-slash' : 'fa-eye' "/>
                    </button>
                </div>
                <InputError :message="form.errors.current_password" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="password" value="Password Baru" />
                <div class="flex">
                    <TextInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        :type="showPasswordNew ? 'text' : 'password'"
                        class="mt-1 block w-full rounded-r-none"
                        autocomplete="new-password"
                    />
                    <button type="button"
                            @click="showPasswordNew=!showPasswordNew"
                            class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3 ">
                        <i class="fa-regular " :class="showPasswordNew ? 'fa-eye-slash' : 'fa-eye' "/>
                    </button>
                </div>
                <InputError :message="form.errors.password" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="password_confirmation" value="Konfirmasi Password Baru" />
                <div class="flex">
                    <TextInput
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        :type="showPasswordConfirm ? 'text' : 'password'"
                        class="mt-1 block w-full rounded-r-none"
                        autocomplete="new-password"
                    />
                    <button type="button"
                            @click="showPasswordConfirm=!showPasswordConfirm"
                            class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3 ">
                        <i class="fa-regular " :class="showPasswordConfirm ? 'fa-eye-slash' : 'fa-eye' "/>
                    </button>
                </div>
                <InputError :message="form.errors.password_confirmation" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Simpan
            </PrimaryButton>
        </template>
    </FormSection>
</template>
