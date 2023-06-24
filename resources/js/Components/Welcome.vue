<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <div>
        <div class="p-6 sm:px-20 border-b border-gray-300 rounded-3xl rounded-b-none">
            <div>
                <ApplicationLogo class="block h-12 w-auto" />
            </div>

            <div class="mt-8 text-2xl capitalize text-black">
                Selamat Datang, {{ $page.props.user.name }}!
            </div>

            <div class="mt-6 text-gray-500">
                Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                ecosystem to be a breath of fresh air. We hope you love it.
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6">
                <div class="flex items-center">
                    <i class="fa-duotone fa-moon-cloud text-3xl text-primary-600" />
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold">
                        <a href="https://laravel.com/docs">Documentation</a>
                    </div>
                </div>

                <div class="ml-12">
                    <div class="mt-2 text-sm text-gray-500">
                        Laravel has wonderful documentation covering every aspect of the framework. Whether you're new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end.
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-300 md:border-t-0 md:border-l">
                <div class="flex items-center">
                    <i class="fa-duotone fa-cat-space text-3xl text-primary-600" />
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold">
                        <a href="https://laracasts.com">Laracasts</a>
                    </div>
                </div>

                <div class="ml-12">
                    <div class="mt-2 text-sm text-gray-500">
                        Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-300">
                <div class="flex items-center">
                    <i class="fa-duotone fa-duck text-3xl text-primary-600" />
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold">
                        <a href="https://tailwindcss.com/">Tailwind</a>
                    </div>
                </div>

                <div class="ml-12">
                    <div class="mt-2 text-sm text-gray-500">
                        Laravel Jetstream is built with Tailwind, an amazing utility first CSS framework that doesn't get in your way. You'll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips.
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-300 md:border-l">
                <div class="flex items-center">
                    <i class="fa-duotone fa-lock text-3xl text-primary-600" />
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold">
                        Authentication
                    </div>
                </div>

                <div class="ml-12">
                    <div class="mt-2 text-sm text-gray-500">
                        Authentication and registration views are included with Laravel Jetstream, as well as support for user email verification and resetting forgotten passwords. So, you're free to get started what matters most: building your application.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
