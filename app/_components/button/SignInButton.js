import { signInWithGitHub } from "@/app/_lib/actions";
import Image from "next/image";

function SignInButton() {
  return (
    <form action={signInWithGitHub}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium bg-slate-300">
        <Image
          src="https://authjs.dev/img/providers/github.svg"
          alt="GitHub logo"
          height="24"
          width="24"
        />
        <span className="text-black">Continue with GitHub</span>
      </button>
    </form>
  );
}

export default SignInButton;
