import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import { Vazirmatn, Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body
        suppressHydrationWarning={true}
        className={
          locale === "fa"
            ? `${vazirmatn.variable} font-vazirmatn`
            : `${inter.variable} font-inter`
        }
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReactQueryProvider>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              {children}
            </div>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
