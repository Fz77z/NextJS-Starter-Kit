// components/SignOutButton.tsx
"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <button onClick={() => signOut()} className="hover:text-gray-400">
      Sign Out
    </button>
  );
};

export default SignOutButton;
