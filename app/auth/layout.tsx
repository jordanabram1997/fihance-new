import type { Metadata } from "next"

import { DollarSign, TrendingDown, Receipt, PieChart } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sign In - Expense Manager",
  description: "Sign in to manage your expenses and bills",
}

export default function SignInPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-12 flex-col justify-between border-r border-border/50">
        <div className="geometric-bg" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-2xl font-bold">
            <div className="size-9 rounded-lg flex items-center justify-center">
              <Image src="/branding/logo-white.png" alt="Fihance" width={36} height={36} />
            </div>
            <span className="text-foreground">Fihance</span>
          </div>
        </div>

        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Take control of
              <br />
              your finances
            </h2>
            <p className="text-muted-foreground text-lg">
              Track expenses, manage bills, and gain insights into your spending patterns
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { icon: TrendingDown, title: "Smart Tracking", desc: "Automatically categorize your expenses" },
              { icon: Receipt, title: "Bill Reminders", desc: "Never miss a payment deadline" },
              { icon: PieChart, title: "Visual Insights", desc: "Understand your spending at a glance" },
            ].map((feature, i) => (
              <div key={i} className="flex gap-3 items-start group">
                <div className="size-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex gap-8">
          {[
            { value: "10k+", label: "Active Users" },
            { value: "$2M+", label: "Tracked" },
            { value: "4.9", label: "Rating" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xl font-bold">
              <div className="size-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <DollarSign className="size-4 text-primary" />
              </div>
              <span className="text-foreground">Fihance</span>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to continue managing your expenses</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
