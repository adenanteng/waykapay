<script setup>
import { ref } from 'vue';
// import { Inertia } from '@inertiajs/inertia';
import {Link, router, useForm} from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    carousel: Object | null,
});

const form = useForm({
    id: props.carousel.id ?? null,
    href: props.carousel.href ?? null,
    photo: null,
});

const photoPreview = ref(null);
const photoInput = ref(null);

const updateProfileInformation = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    if (form.id == null) {
        form.post(route('carousel.store'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            onSuccess: () => clearPhotoFileInput(),
        });
    } else {
        form.put(route('carousel.update', form), {
            errorBag: 'updateInformation',
            preserveScroll: true,
            onSuccess: () => clearPhotoFileInput(),
        });
    }

};

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];

    if (! photo) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);
};

const deletePhoto = () => {
    router.delete(route('carousel.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            photoPreview.value = null;
            clearPhotoFileInput();
        },
    });
};

const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};
</script>

<template>
    <FormSection @submitted="updateProfileInformation">
        <template #title>
            Informasi Profil
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>
            <!-- Profile Photo -->
            <div class="col-span-6 sm:col-span-4">
                <!-- Profile Photo File Input -->
                <input
                    ref="photoInput"
                    type="file"
                    class="hidden"
                    @change="updatePhotoPreview"
                >

                <InputLabel for="photo" value="Photo" />

                <!-- Current Profile Photo -->
                <template v-if="props.carousel">
                    <div v-show="!photoPreview" class="mt-2">
                        <img :src="props.carousel.media[0].original_url" :alt="props.carousel.href" class="h-20 w-auto aspect-video rounded-3xl object-cover">
                    </div>
                </template>


                <!-- New Profile Photo Preview -->
                <div v-show="photoPreview" class="mt-2">
                    <span
                        class="block h-20 w-auto aspect-video rounded-3xl bg-cover bg-no-repeat bg-center"
                        :style="'background-image: url(\'' + photoPreview + '\');'"
                    />
                </div>

                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                    Ubah Foto
                </SecondaryButton>

<!--                <SecondaryButton-->
<!--                    v-if="props.carousel"-->
<!--                    type="button"-->
<!--                    class="mt-2"-->
<!--                    @click.prevent="deletePhoto"-->
<!--                >-->
<!--                    Hapus Foto-->
<!--                </SecondaryButton>-->

                <InputError :message="form.errors.photo" class="mt-2" />
            </div>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="href" value="Link" />
                <TextInput
                    id="href"
                    v-model="form.href"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="href"
                />
                <InputError :message="form.errors.href" class="mt-2" />
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
