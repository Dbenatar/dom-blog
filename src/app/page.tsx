import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/blog">
        <h1 className="bg-gray-300 rounded-sm underline decoration-wavy underline-offset-8 decoration-4 decoration-lime-500 p-8 rounded-md text-lg">
          Dom&apos;s Blog
        </h1>
      </Link>
    </main>
  );
}
