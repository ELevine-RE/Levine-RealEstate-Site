"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "../../builder-registry";

import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import "rc-slider/assets/index.css";
import { Inter, Poppins } from "next/font/google";
import { useEffect } from "react";

// Metadata is handled in individual page files since this is a client component

// Inter font for body text (ELR Brand)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--body-font-family",
});

// Poppins font for headings (ELR Brand)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
