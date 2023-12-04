import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { MobileHeader } from "./mobile-header";

export function Header() {
  return (
    <header className="fixed top-0 w-full md:px-24 lg:px-24 p-4 flex items-stretch justify-between z-10 bg-bgon/50 backdrop-blur-md">
      <div className="flex items-stretch gap-8">
        <Link href="/">
          <Image
            src="/assets/TransparentBlob White.png"
            width={200}
            height={200}
            alt="App"
          />
        </Link>
      </div>
      <nav className="hidden items-center gap-6 md:flex lg:flex">
        <Link
          href="/pricing"
          className="text-white transition-colors hover:text-purple font-normal text-lg"
        >
          Pricing
        </Link>
        <Link
          href="/docs"
          className="text-white transition-colors hover:text-purple font-normal text-lg"
        >
          Docs
        </Link>
        <Link
          href="/blog"
          className="text-white transition-colors hover:text-purple font-normal text-lg"
        >
          Blog
        </Link>
      </nav>
      <div className="hidden md:block lg:block">
        <Link href="https://stashblob.vercel.app/" target="_blank">
          <Button className="bg-purple text-white hover:bg-btnbghover scale-100 transition-all hover:scale-95 text-base font-medium p-6">
            Create a free account
          </Button>
        </Link>
      </div>
      <MobileHeader />
    </header>
  );
}
