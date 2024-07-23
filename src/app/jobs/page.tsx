import { JobDataBuilder } from "@/utils/job-data-builder";
import { Button, Card, Flex, Grid, Group, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import jobs from "../constants/jobs.data";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Title pb={34} order={1}>Recommended jobs      </Title>
      <Flex direction="column" gap="lg" justify={{ sm: "center" }}>
        {jobs.map((job) => (
          <Paper key={job.id} shadow="xs" p={20} radius="lg" withBorder>
            <Group justify="space-between">
              <Stack>
                <Title order={3}>{job.title}</Title>
                <Text size="sm">{job.companyName}</Text>
              </Stack>
              <Button variant="light" color="blue" component={Link} href={`/jobs/${job.id}`}>
                Apply
              </Button>
            </Group>
          </Paper>
        ))}
      </Flex>
    </>
  );
}
