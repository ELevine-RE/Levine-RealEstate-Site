"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import Head from "next/head";

import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import "rc-slider/assets/index.css";
import { Inter, Poppins } from "next/font/google";
import { useEffect } from "react";

// Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap");
    }
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Evan Levine Real Estate | Designing the Essence of Prestige</title>
        <meta name="description" content="Experience luxury real estate with Evan Levine. Specializing in prestigious properties and personalized service." />
        <meta name="keywords" content="real estate, luxury homes, Evan Levine, prestige properties" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`body  ${poppins.variable} ${inter.variable}`}
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">{children}</div>

        <ScrollToTop />
      </body>
    </html>
  );
}
