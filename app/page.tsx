import Image from "next/image";
import { WaitlistSignup } from "@/components/waitlist-signup";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 border-b border-border/20 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Image
            src="/branding/logo-white.png"
            className="hidden dark:block hover:animate-pulse"
            alt="Fihance"
            width={45}
            height={45}
          />
          <Image
            src="/branding/logo-black.png"
            className="block dark:hidden hover:animate-pulse"
            alt="Fihance"
            width={50}
            height={50}
          />
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Smart Bill Management
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Take control of your finances with Fihance. Track bills, manage subscriptions,
              and save money effortlessly.
            </p>
          </div>
          <WaitlistSignup />
        </div>
      </div>
    </main>
  );
}
