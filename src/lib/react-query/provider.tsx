'use client';

import React, { type PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const RQProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default RQProvider;
