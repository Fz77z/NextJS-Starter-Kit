// app/auth/signin/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/utils/auth";
import SignInForm from "@/components/auth-components/SignInForm";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect to dashboard or another page if authenticated
    redirect("/");
    return null; // Avoid rendering anything on the page
  }
  return (
    <>
      <div className="mt-32 flex items-center justify-center lg:mt-64">
        <SignInForm />
      </div>
    </>
  );
}
