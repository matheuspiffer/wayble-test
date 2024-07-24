import { Card, Text } from "@mantine/core";
import { Job } from "../../../../types/job";
import axios from "@/lib/axios";
import { JobDetailCard } from "@/components/jobs/job-detail-card";
import { getServerSession } from "next-auth";
interface PageProps {
  params: {
    id?: string;
  };
}

export default async function Page(props: PageProps) {
  let job: Job | null = null;
  const session = await getServerSession();
  try {
    const { data } = await axios.get<Job>(`/jobs/${props.params.id}`);
    job = data;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }

  return (
    <Card shadow="lg" p={30} radius="lg" withBorder>
      {job ? (
        <JobDetailCard job={job} isLogged={!!session?.user} />
      ) : (
        <Text c="red">Error</Text>
      )}
    </Card>
  );
}
