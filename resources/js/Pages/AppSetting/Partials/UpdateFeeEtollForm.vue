<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    setting: Object,
});

const form = useForm({
    etoll_25: props.setting.etoll_25 ?? null,
    etoll_50: props.setting.etoll_50 ?? null,
    etoll_75: props.setting.etoll_75 ?? null,
    etoll_100: props.setting.etoll_100 ?? null,
    etoll_200: props.setting.etoll_200 ?? null,
    etoll_500: props.setting.etoll_500 ?? null,
    etoll_1000: props.setting.etoll_1000 ?? null,
    etoll_max: props.setting.etoll_max ?? null,
});

const updateSettingInformation = () => {
    form.post(route('setting.store'), {
        errorBag: 'storeSettingInformation',
        preserveScroll: true,
        // onSuccess: () => clearPhotoFileInput(),
    });


};

</script>

<template>
    <FormSection @submitted="updateSettingInformation">
        <template #title>
            Informasi Biaya E-Toll
        </template>

        <template #description>
            Informasi biaya e-toll
        </template>

        <template #form>
            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_25"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_25" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_50"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_50" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_75"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_75" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_100"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_100" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_200"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_200" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_500"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_500" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_1000"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_1000" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Max" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.etoll_max"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.etoll_max" class="mt-2" />
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
