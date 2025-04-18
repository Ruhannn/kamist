"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function TanstackProvider({
  children,
}: {
  children: ReactNode;
}) {
  //   const qc = new QueryClient();
  const [qc] = useState(() => new QueryClient());

  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
}
