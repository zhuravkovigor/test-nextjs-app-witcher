import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";

import "./globals.css";

import { Header } from "@/components/parts";

const futuraFont = localFont({
  src: [
    {
      path: "../public/fonts/FuturaCyrillicBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FuturaCyrillicMedium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={futuraFont.className}>
        <Header />

        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
