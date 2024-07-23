import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Modal,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from "@mantine/core";
  
  type PageProps = {
    opened: boolean;
    close: () => void;
  };
  
  export function AuthForm(props: PageProps) {
    return (
      <Modal opened={props.opened} onClose={props.close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>
    );
  }
  