<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:type" content="" />
        <meta property="og:title" content="Waykapay" />
        <meta property="og:description" content="Kemudahan ada disini" />
        <meta property="og:url" content="https://waykapay.com/" />
        <meta property="og:image" content="/img/minion.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@waykapay.com" />
        <meta name="twitter:title" content="Waykapay" />
        <meta name="twitter:description" content="Kemudahan ada disini" />
        <meta name="twitter:image" content="/img/minion.jpg" />

        <link rel="shortcut icon" type="image/jpg" href="/favicon.ico" />

{{--        <title inertia>{{ config('app.name', 'Laravel') }}</title>--}}

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('vendor/fontawesome/css/all.min.css') }}">

        <script>
            // On page load or when changing themes, best to add inline in `head` to avoid FOUC
            // if (localStorage.theme === 'dark' || (!text-lg font-medium('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            //     document.documentElement.classList.add('dark')
            // } else {
            //     document.documentElement.classList.remove('dark')
            // }
        </script>

{{--        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>--}}

{{--        <script type="text/javascript"--}}
{{--                src="https://app.sandbox.midtrans.com/snap/snap.js"--}}
{{--                data-client-key="{{ Helper::api()->midtrans_client_key ?? '' }}"--}}
{{--        ></script>--}}

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])

        @inertiaHead

        <script>
            Ziggy.url = '{{ env('APP_URL') }}'
        </script>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
