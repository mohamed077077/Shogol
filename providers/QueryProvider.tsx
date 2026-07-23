"use client";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { queryCachePersister } from "./helper/presister";
import {queryClient} from "./helper/queryClient";
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {


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