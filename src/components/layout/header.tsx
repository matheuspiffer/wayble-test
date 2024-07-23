"use client";
import { AppShell, Burger, Button, Flex, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [opened, { toggle }] = useDisclosure();
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLogged = status === "authenticated";

  const logOut = async () => {
    signOut();
  };
  return (
    <AppShell.Header>
      <Flex px="lg" justify="flex-end" align="center" h="100%">
        <Menu shadow="md" position="top" opened={opened} width="100%">
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            {!isLogged ? (
              <Menu.Item
                component="button"
                onClick={() => {
                  toggle();
                  router.push("/login");
                }}
              >
                Log In
              </Menu.Item>
            ) : (
              <Menu.Item
                component="button"
                onClick={() => {
                  toggle();
                  logOut();
                }}
              >
                Log Out
              </Menu.Item>
            )}
          </Menu.Dropdown>
        </Menu>
        {!isLogged ? (
          <Button
            size="lg"
            radius="lg"
            c="black"
            visibleFrom="sm"
            onClick={() => router.push("/login")}
          >
            Log In
          </Button>
        ) : (
          <Button
            size="lg"
            radius="lg"
            c="black"
            visibleFrom="sm"
            variant="light"
            onClick={logOut}
          >
            Log Out
          </Button>
        )}
      </Flex>
    </AppShell.Header>
  );
}
