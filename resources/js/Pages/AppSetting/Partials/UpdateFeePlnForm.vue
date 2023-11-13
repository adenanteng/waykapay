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
            <div class="col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_25"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_25" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_50"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_50" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_75"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_75" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_100"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_100" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_200"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_200" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_500"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_500" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_1000"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pln_1000" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Max" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pln_max"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
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
