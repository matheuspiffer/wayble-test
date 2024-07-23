"use client";
import { AuthForm } from "@/components/auth/auth";
import { AppShell, Burger, Button, Container, Flex, Group, Menu, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const [modelOpened, { open, close }] = useDisclosure(false);
  const { data: session, status } = useSession();
  return (
    <AppShell header={{ height: 100 }} padding="md">
      <AuthForm opened={modelOpened} close={close}></AuthForm>
      <AppShell.Header>
        <Flex px="lg" justify="flex-end" align="center" h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Button size="lg" radius="lg" c="black" visibleFrom="sm" onClick={open}>
            Log In
          </Button>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
