"use client";
import { AppShell, Burger, Button, Flex, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [opened, { toggle }] = useDisclosure();
  const { status } = useSession();
  const router = useRouter();
  const isLogged = status === "authenticated";

  const logOut = async () => {
    signOut();
  };
  return (
    <AppShell.Header>
      <Flex px="lg" justify="space-between" align="center" h="100%">
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
            <Menu.Item
              component="button"
              onClick={() => {
                toggle();
                router.push("/jobs");
              }}
            >
              Jobs
            </Menu.Item>
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
        <Button
          style={(theme) => ({
            backgroundColor: theme.colors.secondaryColor,
          })}
          size="lg"
          radius="lg"
          bg="secondary-color"
          onClick={() => router.push("/jobs")}
          visibleFrom="sm"
        >
          Jobs
        </Button>
        {!isLogged ? (
          <Button
            size="lg"
            radius="lg"
            visibleFrom="sm"
            onClick={() => router.push("/login")}
          >
            Log In
          </Button>
        ) : (
          <Button
            size="lg"
            radius="lg"
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
