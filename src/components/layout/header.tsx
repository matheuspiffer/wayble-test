import { AppShell, Button } from "@mantine/core";

export default function Header() {
  return (
    <AppShell header={{ height: { base: 48, sm: 60, lg: 76 } }}>
      <AppShell.Header>
        <Button>Login</Button>
      </AppShell.Header>
    </AppShell>
  );
}
