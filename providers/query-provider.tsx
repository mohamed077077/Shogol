"use client";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { queryCachePersister } from "@/lib/persister";
import { useRef } from "react";
import { QueryClient } from "@tanstack/react-query";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = useRef<QueryClient | null>(null);
  if (!queryClient.current) {
      queryClient.current = new QueryClient({
          defaultOptions: {
            queries: {
            gcTime: 1000 * 60 * 60 * 24, // يوم
            staleTime: 1000 * 60 * 5,
            }
          }
        })
    } 
  return (
    <PersistQueryClientProvider client={queryClient.current!} // `!` non null assertion because we initialize it above
    persistOptions={{ 
      persister: queryCachePersister ,
      maxAge: 1000 * 60 * 5,
      dehydrateOptions:{
       shouldDehydrateQuery: (query) => {
        return query.meta?.persist === true
       } 
      }
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
