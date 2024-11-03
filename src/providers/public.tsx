import { NextUIProvider } from "@nextui-org/react";

export function PublicProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
