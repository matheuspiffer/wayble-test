import * as mockRouter from "next-router-mock";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next-router-mock"),
  useSearchParams: () => {
    const router = mockRouter.useRouter();
    const path = router.query;
    return new URLSearchParams(path as any);
  },
  usePathname: () => {
    const router = mockRouter.useRouter();
    return router.pathname;
  },
  useRouter: () => {
    return mockRouter.useRouter();
  },
}));
