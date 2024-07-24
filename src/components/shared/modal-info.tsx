import { Button, Flex, Modal, Stack, Text } from "@mantine/core";
import { Job } from "../../../types/job";

interface ModalProps {
  title: string;
  text: string;
  opened: boolean;
  onClose: () => void;
}

export const ModalInfo = ({ onClose, title, text, opened }: ModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} centered title={title}>
      <Flex direction="column" gap={20}>
        <Text>{text}</Text>
        <Button size="md" radius="md" variant="outline" fullWidth onClick={onClose}>
          Close
        </Button>
      </Flex>
    </Modal>
  );
};
