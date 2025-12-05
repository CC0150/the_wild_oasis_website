import Image from "next/image";
import bgImg from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="mt-24">
        <Image
          src={bgImg}
          fill
          alt="The Wild Oasis background image"
          className="object-cover object-top"
          placeholder="blur"
          quality={80}
        />

        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Welcome to The Wild Oasis.
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Let&apos;s explore right now
          </Link>
        </div>
      </main>
    </>
  );
}
