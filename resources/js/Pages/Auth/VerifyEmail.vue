<script setup>
import { computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const props = defineProps({
    status: String,
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <Head title="Email Verification" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600">
            Sebelum melanjutkan, dapatkah kamu memverifikasi alamat email dengan mengeklik tautan yang baru saja kami kirimkan melalui email?
        </div>

        <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600">
            Tautan verifikasi baru telah dikirim ke alamat email kamu.
        </div>

        <div class="mt-4 flex items-center justify-between">
            <form @submit.prevent="submit">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Kirim email verifikasi
                </PrimaryButton>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="underline text-sm text-gray-600 hover:text-gray-900 ml-5"
                >
                    Log Out
                </Link>
            </form>

            <div>
<!--                    <Link-->
<!--                        :href="route('profile.show')"-->
<!--                        class="underline text-sm text-gray-600 hover:text-gray-900"-->
<!--                    >-->
<!--                        Edit Profile-->
<!--                    </Link>-->



<!--                    <Link-->
<!--                        :href="route('login')"-->
<!--                        class="underline text-sm text-gray-600 hover:text-gray-900 ml-2"-->
<!--                    >-->
<!--                        Login-->
<!--                    </Link>-->
            </div>
        </div>
    </AuthenticationCard>
</template>
