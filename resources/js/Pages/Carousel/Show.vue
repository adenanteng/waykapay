<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UpdateProfileInformationForm from '@/Pages/Carousel/Partials/UpdateProfileInformationForm.vue';
import DeleteForm from '@/Pages/Carousel/Partials/DeleteForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import MobileMenu from "@/Components/MobileMenu.vue";
import PreviousButton from "@/Components/PreviousButton.vue";

</script>

<template>
    <AppLayout :title="$page.props.user.name"
               :name="$page.props.user.name"
               :desc="$page.props.user.email"
    >

        <template #previous>
            <PreviousButton :href="route('profile.index')" />
        </template>

        <UpdateProfileInformationForm :carousel="$page.props.carousel ?? '' " />

        <SectionBorder />

        <template v-if="$page.props.carousel">
            <DeleteForm :carousel="$page.props.carousel" />
        </template>

<!--        <MobileMenu />-->
    </AppLayout>
</template>
