"use client";
import { Suspense } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { siteConfig } from "@/components/Navbar/site";
import { buttonVariants } from "@/components/shadcn/button";
import { Icons } from "@/components/Icons/icons";
import { MobileDropdown } from "@/components/Navbar/mobile-nav";
import { MainNav } from "@/components/Navbar/main-nav";
import { useSession } from "next-auth/react";
import { getCurrentUser } from "@/lib/currentUser/session";

export default function MarketingLayout(props: { children: ReactNode }) {
  //TODO Make this SSR
  // const user = await getCurrentUser();
  // console.log(user);

  return (
    <div className="flex min-h-screen flex-col justify-start">
      <nav className="container z-50 flex h-16 items-center ">
        <div className="md:hidden">
          <MobileDropdown /> {/* Mobile navigation */}
        </div>
        <div className="hidden md:flex">
          <MainNav items={siteConfig.mainNav} /> {/* Desktop navigation */}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {/* <ThemeToggle /> */}
          <Suspense>
            <DashboardLink />
          </Suspense>
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign In
            <Icons.chevronright className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </nav>
      <main className="flex-initial">{props.children}</main>
    </div>
  );
}

//This is for NextAuth
function DashboardLink() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
        Sign In
        <Icons.chevronright className="ml-1 h-4 w-4" />
      </Link>
    );
  }

  return (
    <Link
      href={`/dashboard`}
      className={buttonVariants({ variant: "outline" })}
    >
      Dashboard
      <Icons.chevronright className="ml-1 h-4 w-4" />
    </Link>
  );
}

//TODO Make logic for Auth - This is for clerk.
// function DashboardLink() {
//   const { userId, orgId } = auth();

//   if (!userId) {
//     return (
//       <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
//         Sign In
//         <Icons.chevronright className="ml-1 h-4 w-4" />
//       </Link>
//     );
//   }

//   return (
//     <Link
//       href={`/dashboard`}
//       className={buttonVariants({ variant: "outline" })}
//     >
//       Dashboard
//       <Icons.chevronright className="ml-1 h-4 w-4" />
//     </Link>
//   );
// }
