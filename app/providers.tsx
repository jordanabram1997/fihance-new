"use client"

import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

import { authClient } from "@/lib/db/auth-client"

export function Providers({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div className={className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthUIProvider
          authClient={authClient}
          navigate={router.push}
          replace={router.replace}
          onSessionChange={() => {
            // Clear router cache (protected routes)
            router.refresh();
          }}
          Link={Link}
        >
          {children}
        </AuthUIProvider>
      </ThemeProvider>
    </div>
  );
}