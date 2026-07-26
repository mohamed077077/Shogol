import "@/shared/styles/globals.css";
import QueryProvider from '@/providers/query-provider'
import ReduxProvider from '@/providers/redux-provider';
import ThemeProvider from '@/providers/theme-provider';
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ReduxProvider >
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </QueryProvider>
      </body>

        
    </html>
  );
}
