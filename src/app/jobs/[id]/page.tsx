import jobs from "@/app/constants/jobs.data";
import { Button, Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id?: string;
  };
}
export default function Page(props: PageProps) {
  const job = jobs.find((job) => job.id === props.params.id);
  if (!job) {
    notFound();
  }
  return (
    <Card shadow="lg" p={30} radius="lg" withBorder>
      <Group justify="space-between" mb={20}>
        <Title order={3}>{job.title}</Title>
        <Text size="sm" fw={500}>
          {job.companyName}
        </Text>
      </Group>
      <Stack>
        <Text>{job.description}</Text>
        <Group>
          <Text fw={500} size="sm">
            {job.address}, {job.city}, {job.state} {job.zipCode}
          </Text>
        </Group>
        <Button>Apply</Button>
      </Stack>
    </Card>
  );
}
