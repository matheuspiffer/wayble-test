import { Card, Text } from "@mantine/core";
import { Job } from "../../../../types/job";
import axios from "@/lib/axios";
import { JobDetailCard } from "@/components/jobs/job-detail-card";
import { getServerSession } from "next-auth";
interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page(props: PageProps) {
  let job: Job | null = null;
  const session = await getServerSession();
  const { data } = await axios.get<Job>(`/jobs/${props.params.id}`);
  job = data;

  return (
    <Card shadow="lg" p={30} radius="lg" withBorder>
      {job ? <JobDetailCard job={job} isLogged={!!session?.user} /> : <Text c="red">Error</Text>}
    </Card>
  );
}
