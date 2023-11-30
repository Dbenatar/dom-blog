import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-700 flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/blog">
        <h1 className="bg-gray-300 rounded-sm outline-black underline underline-offset-8 decoration-4 decoration-lime-500 p-8 rounded-md text-lg shadow-lg shadow-lime-500">
          Dom&apos;s Blog
        </h1>
      </Link>
      <Image
        src="/components/blogDog_profile.jpg"
        width={400}
        height={600}
        alt="blog dog"
      />
    </main>
  );
}
