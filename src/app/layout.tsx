import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { classNames } from "primereact/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pt = {
    panel: {
      header: { className: "bg-green-600" },
    },
  };

  const Tailwind = {
    datatable: {
      header: { className: "bg-green-600" },
    },
  };

  return (
    <html lang="en">
      <PrimeReactProvider value={{ pt: pt }}>
        <body className={``}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
