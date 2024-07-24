"use client";
import React from "react";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { colorsTuple, MantineProvider } from "@mantine/core";
import StoreProvider from "@/lib/store/store.provider";
export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  const theme = {
    primaryColor: "primary-color",
    secondaryColor: "secondary-color",
    colors: {
      "primary-color": colorsTuple(Array.from({ length: 10 }, (_, index) => "#eead2d")),
      "secondary-color": colorsTuple(Array.from({ length: 10 }, (_, index) => "#0a3fdd")),
    },
  };
  return (
    <MantineProvider theme={theme}>
      <SessionProvider session={session}>
        <StoreProvider>{children}</StoreProvider>
      </SessionProvider>
      ;
    </MantineProvider>
  );
}
