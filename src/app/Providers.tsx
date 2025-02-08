"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { defaultSystem } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
