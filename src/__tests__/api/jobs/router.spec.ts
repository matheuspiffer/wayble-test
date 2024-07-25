/**
 * @jest-environment node
 */
import { GET } from "@/app/api/jobs/route";
describe("Job API", () => {
  it("should return data with status 200", async () => {
    const requestObj = {} as any;
    const response = await GET(requestObj);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toHaveProperty("length");
    expect(body.length).toBeGreaterThan(0);
  });
});
