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
    emoney_25: props.setting.emoney_25 ?? null,
    emoney_50: props.setting.emoney_50 ?? null,
    emoney_75: props.setting.emoney_75 ?? null,
    emoney_100: props.setting.emoney_100 ?? null,
    emoney_200: props.setting.emoney_200 ?? null,
    emoney_500: props.setting.emoney_500 ?? null,
    emoney_1000: props.setting.emoney_1000 ?? null,
    emoney_max: props.setting.emoney_max ?? null,
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
            Informasi Biaya E-Money
        </template>

        <template #description>
            Informasi biaya e-money
        </template>

        <template #form>
            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_25"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_25" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_50"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_50" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_75"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_75" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_100"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_100" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_200"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_200" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_500"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_500" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_1000"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_1000" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Max" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.emoney_max"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.emoney_max" class="mt-2" />
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
