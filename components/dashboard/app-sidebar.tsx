"use client"

import * as React from "react"
import {
    IconDashboard,
    IconHelp,
    IconPigMoney,
    IconReceipt,
    IconSearch,
    IconSettings,
} from "@tabler/icons-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"

import Image from "next/image"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { UserButton } from "@daveyplate/better-auth-ui"
import { cn } from "@/lib/utils"

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Bills",
            url: "/bills",
            icon: IconReceipt,
        },
        {
            title: "Savings",
            url: "/savings",
            icon: IconPigMoney,
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "/account/settings",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: IconSearch,
        },
    ],
}

function UserButtonWrapper() {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
        <div className="flex items-center justify-center min-h-8 w-full overflow-hidden">
            <div 
                className={cn(
                    "transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-8 h-8 flex items-center justify-center" : "w-full"
                )}
            >
                <UserButton
                    className="bg-emerald-200/20"
                    size={isCollapsed ? "icon" : undefined}
                />
            </div>
        </div>
    )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="border-none py-4" collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <Image src="/branding/logo-white.png" alt="Fihance" width={40} height={40} />
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="py-2">
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <UserButtonWrapper />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
