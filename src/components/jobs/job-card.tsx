"use client";
import { Button, Flex, Group, Paper, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import { Job } from "../../../types/job";
import { useAppSelector } from "@/lib/store/hooks";
import { isApplied } from "@/lib/store/slices/job.slice";
interface JobProps {
  job: Job;
}

export default function JobCard({ job }: JobProps) {
  const applied = useAppSelector((state) => isApplied(state.job, job.id));
  return (
    <Paper shadow="xs" p={20} radius="lg" withBorder>
      <Flex direction={{ xs: "column", sm: "row" }} justify="space-between" gap={20}>
        <Stack gap={8}>
          <Title order={3}>{job.title}</Title>
          <Text size="sm">{job.companyName}</Text>
        </Stack>
        <Button
          color="primary-color"
          variant={applied ? "light" : "filled"}
          component={Link}
          href={`/jobs/${job.id}`}
          radius="md"
        >
          {applied ? "Already Applied" : "Apply now"}
        </Button>
      </Flex>
    </Paper>
  );
}
