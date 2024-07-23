import { Flex, Title } from "@mantine/core";
import JobCard from "@/components/ui/job-card";
import axios from "@/lib/axios";
import { Job } from "../../../types/job";

export default async function Page() {
  const res = await axios.get<Job[]>("/jobs");
  const jobs = res.data;
  return (
    <>
      <Title pb={34} order={1}>
        Recommended Jobs
      </Title>
      <Flex direction="column" gap="lg" justify={{ sm: "center" }}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Flex>
    </>
  );
}
