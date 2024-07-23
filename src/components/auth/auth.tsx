"use client";
import { Button, Modal, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export function AuthForm() {
  const [modelOpened, { open, close }] = useDisclosure(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6
          ? null
          : "Password should be at least 6 characters long",
    },
  });

  const onSubmit = (values: { email: string; password: string }) => {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: callbackUrl || "/",
    });
  };

  return (
    <Modal
      opened={modelOpened}
      onClose={() => {
        close();
        router.back();
      }}
      title="Authentication"
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          data-autofocus
          type="email"
          label="Email"
          placeholder="email@example.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          mt="md"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button type="submit" variant="light" c="black" fullWidth mt="lg">
          Log in
        </Button>
      </form>
    </Modal>
  );
}
