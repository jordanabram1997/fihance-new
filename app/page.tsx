"use client";

import { WaitlistSignup } from "@/components/waitlist-signup";
import { Logo } from "@/components/logo";
import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WaitlistPage() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for CTRL + A (or CMD + A on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === "a") {
        e.preventDefault(); // Prevent default select all behavior
        setShowNav((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Stellar Mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 140% 50% at 15% 60%, rgba(124, 58, 237, 0.11), transparent 48%),
            radial-gradient(ellipse 90% 80% at 85% 25%, rgba(245, 101, 101, 0.09), transparent 58%),
            radial-gradient(ellipse 120% 65% at 40% 90%, rgba(34, 197, 94, 0.13), transparent 52%),
            radial-gradient(ellipse 100% 45% at 70% 5%, rgba(251, 191, 36, 0.07), transparent 42%),
            radial-gradient(ellipse 80% 75% at 90% 80%, rgba(168, 85, 247, 0.10), transparent 55%),
            #000000
          `,
        }}
      />
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {showNav && (
          <nav className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 rounded-lg px-4 py-3 shadow-xl">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Link 
                  href="/auth/sign-in"
                  className="text-neutral-300 hover:text-white transition-colors font-medium"
                >
                  Sign In
                </Link>
              </SignedOut>
            </div>
          </nav>
        )}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Logo />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-300 mb-4 sm:mb-6 tracking-tight text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Join the waitlist
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            Receive all the latest news and updates, as well as early access to the beta.
          </p>
        </div>

        <div className="mb-20 w-full flex justify-center px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 max-w-2xl">
          <WaitlistSignup />
        </div>

        {/* Feature Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="p-6 rounded-xl bg-neutral-900/70 border border-neutral-700/60 backdrop-blur-md shadow-lg hover:bg-neutral-900/80 transition-colors">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
              <Shield className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Privacy Guaranteed</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Enterprise grade security measures keep your financial data safely encrypted and protected.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/70 border border-neutral-700/60 backdrop-blur-md shadow-lg hover:bg-neutral-900/80 transition-colors">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
              <Zap className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Exceptional Performance</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Advanced, intelligent automation ensures the highest efficiency in managing your bills and savings.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/70 border border-neutral-700/60 backdrop-blur-md shadow-lg hover:bg-neutral-900/80 transition-colors">
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
              <Sparkles className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quality Design</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Highly customizable components and features that seamlessly integrate into your financial workflow.
            </p>
          </div>
        </div> */}
      </div>
    </main>
  );
}


