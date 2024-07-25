import Page from "@/app/jobs/[id]/page";
import { render, screen, fireEvent } from "@/testing/utils";
import { JobDataBuilder } from "@/utils/job-data-builder";
import { Job } from "../../../../types/job";
import axios from "@/lib/axios";
import { getServerSession, Session } from "next-auth";
import * as mockRouter from "next-router-mock";

describe("Jobs detail Page", () => {
  let job: Job;
  beforeEach(() => {
    job = JobDataBuilder({ description: "This is a job description" });
    // const page = await Page();
    // render(<SessionProvider></SessionProvider>);
  });
  it("Should render not find job and display error message", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: null });

    const page = await Page({ params: { id: "1" } });
    render(page);
    // Verifique se o título está presente
    const errorEL = await screen.findByText("Error");
    expect(errorEL).toBeInTheDocument();
  });

  it("Should render job detail for an unauthenticated user", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: job });
    const page = await Page({ params: { id: job.id } });
    render(page);

    // Verifique se a mensagem de erro está presente
    const jobCompanyNameEl = await screen.findByText(job.companyName);
    const jobDescriptionEl = await screen.findByText(job.description);
    const jobAddressEl = await screen.findByText(`${job.city}, ${job.state}`);

    const applyButton = screen.getByRole("button", { name: /Apply now/i });
    expect(applyButton).toBeInTheDocument();
    expect(jobCompanyNameEl).toBeInTheDocument();
    expect(jobDescriptionEl).toBeInTheDocument();
    expect(jobAddressEl).toBeInTheDocument();
    fireEvent.click(applyButton);
    expect(mockRouter.default.asPath).toBe(`/login?callbackUrl=%2Fjobs%2F${job.id}`);
  });

  it("Should render job detail for an authenticated user", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: job });
    (getServerSession as jest.Mock).mockResolvedValue({
      user: { email: "any_email", name: "any_name", id: "any_id" },
    } as Session);
    const page = await Page({ params: { id: job.id } });
    render(page);

    const jobCompanyNameEl = await screen.findByText(job.companyName);
    const jobDescriptionEl = await screen.findByText(job.description);
    const jobAddressEl = await screen.findByText(`${job.address}, ${job.city}, ${job.state} ${job.zipCode}`);
    expect(jobCompanyNameEl).toBeInTheDocument();
    expect(jobDescriptionEl).toBeInTheDocument();
    expect(jobAddressEl).toBeInTheDocument();
    const applyButton = screen.getByRole("button", { name: /Apply now/i });
    fireEvent.click(applyButton);
    const modalTitle = await screen.findByText("Job Applied");
    expect(modalTitle).toBeInTheDocument();
    const modalText = await screen.findByText(`You've applied to ${job.companyName} to work as a ${job.title}`);
    expect(modalText).toBeInTheDocument();
  });
});
