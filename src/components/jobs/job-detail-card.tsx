"use client";
import { Button, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { Job } from "../../../types/job";
import { useRouter } from "next/navigation";
import { applyJob, isApplied } from "@/lib/store/slices/job.slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { ModalInfo } from "../shared/modal-info";
import { useDisclosure } from "@mantine/hooks";

export const JobDetailCard = ({ job, isLogged }: { job: Job; isLogged: boolean }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const applied = useAppSelector((state) => isApplied(state.job, job.id));
  const dispatch = useAppDispatch();
  const onApply = () => {
    if (!isLogged) return router.push(`/login?callbackUrl=/jobs/${job.id}`);
    if (applied) return;
    open();
    dispatch(applyJob(job));
  };

  const renderAddressText = () => {
    if (!isLogged) return `${job.city}, ${job.state}`;
    return `${job.address}, ${job.city}, ${job.state} ${job.zipCode}`;
  };

  return (
    <>
      <ModalInfo
        opened={opened}
        onClose={close}
        title="Job Applied"
        text={`You've applied to ${job.companyName} to work as a ${job.title}`}
      />
      <Flex justify="space-between" mb={20}>
        <Title order={3}>{job.title}</Title>
        <Text size="sm" fw={500}>
          {job.companyName}
        </Text>
      </Flex>
      <Flex direction="column" gap={20}>
        <Text>{job.description}</Text>
        <Text fw={500} size="sm">
          {renderAddressText()}
        </Text>
        <Button m="auto" radius="md" w={200} size="lg" onClick={onApply} disabled={applied}>
          {applied ? "Already Applied" : "Apply now"}
        </Button>
      </Flex>
    </>
  );
};
