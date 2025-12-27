import { Greeting } from "@/components/greeting";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserAuth } from "@/lib/integrations/auth/utils";
import { getAllBills } from "@/lib/services/bills/queries";

export default async function Page() {
 const { session } = await getUserAuth()
  const { bills } = await getAllBills();
  return (
    <div className="flex flex-col gap-4">
      <Greeting name={session?.userId || "Guest"} description="You can manage your bills and track your payments here." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bills.map((bill) => (
          <Card key={bill.id}>
            <CardHeader>
              <CardTitle>{bill.billName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{bill.amount}</p>
              <p>{bill.currency}</p>
              <p>{bill.dueDate}</p>
              <p>{bill.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
