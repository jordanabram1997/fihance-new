import { UserButton } from "@daveyplate/better-auth-ui";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-900">
       <h1 className="text-2xl font-bold">Hello World</h1>
       <UserButton />
    </div>
  );
}
