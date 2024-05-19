import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1 className="text-yellow-400 w-3/6 font-bold line-through border-white">Hello NextJS</h1>
      <Link href='/hello'>Hello Page</Link>
      <p>Hello</p>
    </main>
  );
}
