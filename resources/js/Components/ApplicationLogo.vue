<template>
    <template v-if="$page.props.appSetting != null" >
        <img :src="$page.props.appSetting.media[0].original_url" class="h-12 w-auto" />
    </template>
</template>
