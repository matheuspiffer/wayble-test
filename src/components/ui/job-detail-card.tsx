"use client";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { Job } from "../../../types/job";
import { useRouter } from "next/navigation";

export const JobDetailCard = (props: { job: Job; isLogged: boolean }) => {
  const router = useRouter();

  function renderAddressText(job: Job) {
    if (!props.isLogged) return `${job.city}, ${job.state}`;
    return `${job.address}, ${job.city}, ${job.state} ${job.zipCode}`;
  }
  
  return (
    <>
      <Group justify="space-between" mb={20}>
        <Title order={3}>{props.job.title}</Title>
        <Text size="sm" fw={500}>
          {props.job.companyName}
        </Text>
      </Group>
      <Stack>
        <Text>{props.job.description}</Text>
        <Group>
          <Text fw={500} size="sm">
            {renderAddressText(props.job)}
          </Text>
        </Group>
        <Button
          onClick={() => {
            if (!props.isLogged)
              router.push(`/login?callbackUrl=/jobs/${props.job.id}`);
          }}
        >
          Apply
        </Button>
      </Stack>
    </>
  );
};
