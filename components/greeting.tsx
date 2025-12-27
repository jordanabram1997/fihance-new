'use client'

import { cn } from "@/lib/utils"
import { PageHeader, PageHeaderContent, PageHeaderDescription, PageHeaderTitle } from "./typography/page-header"

interface GreetingProps {
  name?: string
  description?: string
  className?: string
}

export function Greeting({ name, description, className }: GreetingProps) {
  const getGreeting = () => {
    const currentHour = new Date().getHours()

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning'
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon'
    } else {
      return 'Good Evening'
    }
  }

  const greeting = getGreeting()
  const displayName = name ? `${name}` : ''

  return (
    <PageHeader>
      <PageHeaderContent>
        <PageHeaderTitle>{greeting}, <span className={cn("text-green-400 font-semibold", displayName ? "text-green-400" : "text-gray-400", className)}>{displayName}</span></PageHeaderTitle>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeaderContent>
    </PageHeader>
  )
}