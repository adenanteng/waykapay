<script setup>
import {onBeforeUnmount, onMounted, onUnmounted, ref} from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from "@/Components/TextAreaInput.vue";
import SelectInput from "@/Components/SelectInput.vue";

const props = defineProps({
    users: Object | String,
});

const form = useForm({
    id: props.users.id ?? null,
    name: props.users.name ?? null,
    email: props.users.email ?? null,
    phone: props.users.phone ?? null,
    role_id: props.users.role_id ?? null,
});

const storeInformation = () => {

    if (props.users.name == null) {
        form.post(route('user.store'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            onSuccess: () => {
                formReset()
            }
        });
    } else {
        form.put(route('user.update', form.id), {
            errorBag: 'updateInformation',
            preserveScroll: true,
            onSuccess: () => {
                formReset()
            }
        });
    }
};

const formReset = () => {
    form.defaults({
        id: null,
        name: null,
        email: null,
        role_id: null
    })
    form.reset()
}

</script>

<template>
    <FormSection @submitted="storeInformation">
        <template #title>
            Informasi Pengguna
        </template>

        <template #description>
            Perbarui informasi profil akun dan alamat email pengguna.
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-3">
                <InputLabel for="name" value="Nama"/>
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full capitalize"
                    autocomplete="name"
                    required
                />
                <InputError :message="form.errors.name" class="mt-2"/>
            </div>

            <div class="col-span-6 sm:col-span-2">
                <InputLabel for="email" value="Email"/>
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    autocomplete="email"
                    required
                />
                <InputError :message="form.errors.email" class="mt-2"/>
            </div>

            <div class="col-span-6 sm:col-span-2">
                <InputLabel for="phone" value="Telepon"/>
                <TextInput
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="mt-1 block w-full"
                    autocomplete="phone"
                    required
                />
                <InputError :message="form.errors.phone" class="mt-2"/>
            </div>

            <div class="col-span-6 sm:col-span-2">
                <InputLabel value="Peran" />
                <SelectInput
                    v-model:model-value.number="form.role_id"
                    :option="$page.props.selectRole"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.role_id" class="mt-2" />
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
