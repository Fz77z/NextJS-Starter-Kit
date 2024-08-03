import Image from "next/image";
import DiscordSignInButton from "./DiscordSignInButton";

export default function SignInForm() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="next-logo"
          src="/next.svg"
          width={400}
          height={400}
          className="mx-auto h-12 w-auto"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:max-w-sm">
        <DiscordSignInButton />

        <p className="mt-10 text-center text-sm text-gray-400">
          Need more help?{" "}
          <a href="#" className="text-accent font-semibold leading-6">
            Open a ticket
          </a>
        </p>
      </div>
    </div>
  );
}
