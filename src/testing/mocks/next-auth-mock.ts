jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  signOut: jest.fn(),
  signIn: jest.fn(),
}));

jest.mock("next-auth", () => ({
  getServerSession: jest.fn(),
}));

jest.mock("@/auth", () => ({
  authOptions: {
    adapter: {},
    providers: [],
    callbacks: {},
  },
  signOut: jest.fn(),
}));
