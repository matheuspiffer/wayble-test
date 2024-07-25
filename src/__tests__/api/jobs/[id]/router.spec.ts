/**
 * @jest-environment node
 */
import { GET } from "@/app/api/jobs/[id]/route";
import jobs from "@/constants/jobs.data";
describe("Job id API", () => {
  it("should return data with status 200", async () => {
    const requestObj = {
      nextUrl: {
        pathname: `jobs/${jobs[0].id}`,
      },
    } as any;
    const response = await GET(requestObj);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.id).toBe(jobs[0].id);
  });

  it("should return error with status 404 when job not found", async () => {
    const requestObj = {
      nextUrl: {
        pathname: `jobs/any_id`,
      },
    } as any;

    const response = await GET(requestObj);
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.error).toEqual("Job not found");
  });
});
