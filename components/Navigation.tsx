// components/Navigation.tsx
import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/auth";
import SignOutButton from "./auth-components/SignOutButton";

const Navigation = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="mx-auto max-w-7xl py-1 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* Logo Goes Here */}
            {/* <Imagea
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
            <div className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                NextJs-Starter-Kit
              </span>
              <span className="border-accent ml-1 rounded border border-solid px-1 py-0 text-[8px] font-bold">
                BETA
              </span>
            </div>
          </Link>
        </div>
        <div>
          {!session?.user ? (
            <Link href="/api/auth/signin" className="hover:text-gray-400">
              Sign In
            </Link>
          ) : (
            <SignOutButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
