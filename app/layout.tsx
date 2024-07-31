import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";

import "./globals.css";

import { Header } from "@/components/parts";
import DataCollection from "@/components/parts/DataCollection";
import Footer from "@/components/parts/Footer";

const futuraFont = localFont({
  src: [
    {
      path: "../public/fonts/FuturaCyrillicDemi.ttf",
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

        <StoreProvider>
          <DataCollection />

          {children}

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
