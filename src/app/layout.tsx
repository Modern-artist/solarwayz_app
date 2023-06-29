import Head from "next/head";

// import "./globals.css";
import { Inter } from "next/font/google";
// import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/vendor/aos/aos.js";
// import "./assets/vendor/glightbox/js/glightbox.min.js";
// // import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "./assets/vendor/swiper/swiper-bundle.min.js";
// import "./assets/js/main.js";
// import "assets/vendor/purecounter/purecounter_vanilla.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solarwayz",
  description: "Solarwayz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solarwayz</title>
        <link rel="icon" href="/assets/img/logo.svg" />
        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="assets/css/index.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/js/main.js"></script>
      </body>
    </html>
  );
}
