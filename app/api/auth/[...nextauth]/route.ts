// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/app/utils/auth";

// The NextAuth function initializes NextAuth with the provided options
const handler = NextAuth(authOptions);

// Export handler for both GET and POST requests
export { handler as GET, handler as POST };
