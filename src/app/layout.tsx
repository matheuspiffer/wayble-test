import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import Providers from "@/components/layout/providers/providers";
import { getServerSession } from "next-auth";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wayble Test",
  description: "Created by Matheus Piffer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <Providers session={session}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
