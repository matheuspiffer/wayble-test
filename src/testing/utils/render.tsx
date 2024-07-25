// ./test-utils/render.tsx
import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/components/layout/providers/providers";
import StoreProvider from "@/lib/store/store.provider";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </StoreProvider>
    ),
  });
}
