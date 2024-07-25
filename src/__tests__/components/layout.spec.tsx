import Layout from "@/components/layout/layout";
import { render, screen, fireEvent, waitFor } from "@/testing/utils";
import { SessionProvider, signOut } from "next-auth/react";
import * as mockRouter from "next-router-mock";

describe("Layout component", () => {
  it("Should render the layout with a not authenticated user", () => {
    render(
      <SessionProvider session={null}>
        <Layout>
          <div />
        </Layout>
      </SessionProvider>
    );

    const loginButton = screen.getByRole("button", { name: "Log In" });
    // const logoutButton = screen.getByRole("button", { name: "Log Out" });

    expect(loginButton).toBeInTheDocument();
    // expect(logoutButton).not.toBeInTheDocument();
    fireEvent.click(loginButton);
    expect(mockRouter.default.pathname).toBe(`/login`);
  });

  it("Should render the layout with an authenticated user", async () => {
    render(
      <SessionProvider
        session={{
          user: {
            email: "any_email",
            name: "any_name",
            image: "any_image",
            id: "any_id",
          },
          expires: "any_expires",
        }}
      >
        <Layout>
          <div />
        </Layout>
      </SessionProvider>
    );

    const logoutButton = screen.getByRole("button", { name: "Log Out" });
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
