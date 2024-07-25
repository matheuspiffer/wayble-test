import { SessionProvider, signIn } from "next-auth/react";
import { render, screen, fireEvent } from "../../testing/utils";
import Page from "@/app/login/page";
import { faker } from "@faker-js/faker";
import * as mockRouter from "next-router-mock";

describe("Login Page", () => {
  const email = faker.internet.email();
  const password = faker.internet.password();
  const callBackUrl = "/any-call-back-url";

  beforeEach(() => {
    mockRouter.default.push(`/login?callbackUrl=${callBackUrl}`);

    render(
      <SessionProvider session={null}>
        <Page />
      </SessionProvider>
    );
  });
  it("Should render Auth form modal", () => {
    const titleEl = screen.getByText("Authentication");
    expect(titleEl).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue("");

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveValue("");

    const submitButton = screen.getByRole("button", { name: /log in/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("Should handle email and password input and submit form", () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /log in/i });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);

    fireEvent.click(submitButton);
    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith("credentials", {
      email,
      password,
      callbackUrl: callBackUrl,
    });
  });
});
