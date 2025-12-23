import BillForm from '@/components/bills/forms/bill-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getUserAuth } from '@/lib/integrations/auth/utils';
import { getAllBills } from '@/lib/services/bills/queries';
import { UserButton } from '@daveyplate/better-auth-ui'
import { notFound } from 'next/navigation';

const TestPage = async() => {
  const { session } = await getUserAuth();

  if (!session) {
    return notFound();
  }

  const { bills } = await getAllBills();
  return (
    <div className='p-4' suppressHydrationWarning>
     <UserButton size="icon" />
     <div className="max-w-2xl mx-auto">
      <BillForm />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
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
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
     </div>
    </div>
  )
}

export default TestPage