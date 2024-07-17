'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
