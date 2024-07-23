"use client";
import React from "react";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { colorsTuple, MantineProvider } from "@mantine/core";
export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  const theme = {
    primaryColor: "bright-pink",
    colors: {
      "bright-pink": colorsTuple(Array.from({ length: 10 }, (_, index) => "#eead2d")),
    },
  };
  return (
    <MantineProvider theme={theme}>
      <SessionProvider session={session}>{children}</SessionProvider>;
    </MantineProvider>
  );
}
