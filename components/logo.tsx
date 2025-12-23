import Image from "next/image";

export function Logo() {
  return (
    <div className="relative size-16 drop-shadow-lg" suppressHydrationWarning>
      <Image
        src="/branding/logo-white.png"
        className="hidden dark:block drop-shadow-lg absolute inset-0"
        alt="Fihance"
        width={64}
        height={64}
      />
      <Image
        src="/branding/logo-black.png"
        className="block dark:hidden drop-shadow-lg absolute inset-0"
        alt="Fihance"
        width={64}
        height={64}
      />
    </div>
  );
}

