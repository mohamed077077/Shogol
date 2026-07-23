import { useRef } from "react";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = useRef<QueryClient | null>(null);
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