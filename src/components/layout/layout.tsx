"use client";
import { AppShell, Container } from "@mantine/core";
import Header from "./header";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 100 }} padding="md">
      <Header />
      <AppShell.Main bg="#f2f9fe">
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
