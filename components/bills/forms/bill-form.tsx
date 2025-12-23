"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { createBillAction, updateBillAction } from "@/lib/actions/bills";
import { redirect, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Bill, insertBillParams, NewBillParams } from "@/lib/db/zod/bills";
import SaveButton from "@/components/form/save-button";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { getCurrencySymbol } from "@/lib/utils/currency";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BILL_STATUS_OPTIONS } from "@/lib/utils/bills";

interface BillFormProps {
  bill?: Bill;
}

export default function BillForm({
  bill,
}: BillFormProps) {
  const router = useRouter();
  const editing = !!bill?.id;

  const form = useForm<NewBillParams>({
    resolver: process.env.NODE_ENV === "development" ? zodResolver(insertBillParams) : undefined,
    defaultValues: {
      ...bill,
    },
  });

  const currency = form.getValues("currency") ?? bill?.currency ?? "GBP";


  const handleSubmit = async (data: NewBillParams) => { 
    const payload = {
      ...data,
      currency: data.currency ?? null,
    };

    try {
      if (editing) {
        await updateBillAction(bill?.id, payload);
        router.push(`/test`);
        return;
      }

      await createBillAction(payload);

      router.push("/test");
    } catch (error: unknown) {
      form.setError("root.server", { message: (error as Error).message });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8" suppressHydrationWarning>
        <FormField
          control={form.control}
          name="billName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bill Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter bill name"
                  disabled={editing}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>{getCurrencySymbol(currency)}</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput {...field} value={field.value ?? ""} placeholder="0.00" />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>{currency}</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value ?? ""} placeholder="Enter due date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select {...field} value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {BILL_STATUS_OPTIONS.map((status) => (
                      <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
                    ))}
                   
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        

        {!editing && (
          <div className="flex justify-end gap-2">
            <SaveButton editing={editing} />
            <Button variant="outline" onClick={() => redirect("/test")}> {/* TODO: Replace with actual home page route */}
              Cancel
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
