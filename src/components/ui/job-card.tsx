import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import { Job } from "../../../types/job";

interface JobProps {
  job: Job;
}

export default function JobCard({ job }: JobProps) {
  return (
    <Paper shadow="xs" p={20} radius="lg" withBorder>
      <Group justify="space-between">
        <Stack>
          <Title order={3}>{job.title}</Title>
          <Text size="sm">{job.companyName}</Text>
        </Stack>
        <Button
          variant="light"
          color="blue"
          component={Link}
          href={`/jobs/${job.id}`}
        >
          Apply
        </Button>
      </Group>
    </Paper>
  );
}
