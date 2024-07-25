import { SessionProvider } from "next-auth/react";
import { render, screen } from "@/testing/utils";
import { JobDataBuilder } from "@/utils/job-data-builder";
import Page from "@/app/jobs/page";
import axios from "@/lib/axios";

describe("Jobs Page", () => {
  const jobs = [JobDataBuilder({}), JobDataBuilder({}), JobDataBuilder({}), JobDataBuilder({})];

  beforeEach(async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: jobs });
  });

  it("Should render recommended jobs", async () => {
    const page = await Page();
    render(<SessionProvider session={null}>{page}</SessionProvider>);
    // Verifique se o título está presente
    const titleEl = await screen.findByText("Recommended Jobs");
    expect(titleEl).toBeInTheDocument();

    // Verifique se cada job está presente
    for (const job of jobs) {
      const jobCard = await screen.findByText(job.title);
      expect(jobCard).toBeInTheDocument();
    }
  });
});
