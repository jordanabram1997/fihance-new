"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: WaitlistFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/waitlist/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to join waitlist");
      }

      setIsSuccess(true);
      toast.success("Successfully joined the waitlist!", {
        description: "We'll notify you when we launch.",
      });
      form.reset();
    } catch (error) {
      toast.error("Failed to join waitlist", {
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
          <CheckCircle2 className="size-5 text-green-500 shrink-0" />
          <p className="text-white font-medium text-sm sm:text-base text-center sm:text-left">You&apos;re on the list! We&apos;ll notify you when we launch.</p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-0">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="h-14 sm:h-16 w-full text-base sm:text-lg bg-neutral-800/90 border-2 border-neutral-700/50 text-white placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 px-5 sm:px-6 rounded-xl transition-all"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm mt-2" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto sm:whitespace-nowrap relative overflow-hidden rounded-xl shadow-lg hover:shadow-primary/20 transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                <span className="group-hover:opacity-0 transition-opacity duration-300">Join waitlist</span>
                <ArrowRight className="absolute inset-0 m-auto size-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

