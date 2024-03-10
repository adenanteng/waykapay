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
    pln_25: props.setting.pln_25 ?? null,
    pln_50: props.setting.pln_50 ?? null,
    pln_75: props.setting.pln_75 ?? null,
    pln_100: props.setting.pln_100 ?? null,
    pln_200: props.setting.pln_200 ?? null,
    pln_500: props.setting.pln_500 ?? null,
    pln_1000: props.setting.pln_1000 ?? null,
    pln_max: props.setting.pln_max ?? null,
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
            Informasi Biaya Token Pln
        </template>

        <template #description>
            Informasi biaya token pln
        </template>

        <template #form>
            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_25"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_25" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_50"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_50" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_75"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_75" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_100"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_100" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_200"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_200" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_500"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_500" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_1000"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_1000" class="mt-2" />
            </div>

            <div class="col-span-3 md:col-span-2">
                <InputLabel value="Max" />
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        Rp
                    </div>
                    <TextInput
                        v-model="form.pln_max"
                        type="number"
                        class="mt-1 block w-full pl-10"
                    />
                </div>
                <InputError :message="form.errors.pln_max" class="mt-2" />
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
