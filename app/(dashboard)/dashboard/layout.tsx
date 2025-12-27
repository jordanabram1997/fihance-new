import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import DashboardHeader from "@/components/dashboard/dashboard-header"

export const metadata: Metadata = {
    title: `Fihance - Dashboard`,
    description: "Manage your household bills and track payments",
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="p-2 w-full h-full">
         <div className="bg-[#111111] w-full h-screen rounded-lg">
         <DashboardHeader title={"Dashboard"} />
         <div className="p-4">
          {children}
          </div>
          </div>
        </main>
      </SidebarProvider>
    )
  }