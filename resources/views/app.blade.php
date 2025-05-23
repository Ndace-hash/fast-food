<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

                        {{-- <title>Fast Food</title> --}}
                        <meta name="description" content="">
                        <meta name="keywords" content="">

                        <!-- Favicons -->
                        <link href="/assets/img/favicon.png" rel="icon">
                        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

                        <!-- Fonts -->
                        <link href="https://fonts.googleapis.com" rel="preconnect">
                        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Amatic+SC:wght@400;700&display=swap"
                            rel="stylesheet">

                        <!-- Vendor CSS Files -->
                        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
                        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
                        <link href="/assets/vendor/aos/aos.css" rel="stylesheet">
                        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
                        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/aos/aos.js"></script>
        <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        {{-- <script src="/assets/vendor/php-email-form/validate.js"></script>
        --}}

        <script src="/assets/js/main.js"></script>
    </body>
</html>
