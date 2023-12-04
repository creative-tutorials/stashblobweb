import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { MobileHeader } from "./mobile-header";
import LightLogo from "@/public/assets/TransparentBlob White.png";
import DarkLogo from "@/public/assets/TransparentBlob Color.png";

export function Header() {
  return (
    <header className="fixed top-0 w-full md:px-24 lg:px-24 p-4 flex items-stretch justify-between z-10 dark:bg-bgon/50 bg-midwhite/50 backdrop-blur-md">
      <div className="flex items-stretch gap-8">
        <Link href="/">
          <Image
            src={LightLogo}
            width={200}
            height={200}
            alt="App"
            className="hidden dark:block"
          />
          <Image
            src={DarkLogo}
            width={200}
            height={200}
            alt="App"
            className="block dark:hidden"
          />
        </Link>
      </div>
      <nav className="hidden items-center gap-6 md:flex lg:flex">
        <Link
          href="/pricing"
          className="dark:text-white text-boxicard transition-colors hover:dark:text-purple hover:text-purple font-medium text-lg"
        >
          Pricing
        </Link>
        <Link
          href="/docs"
          className="dark:text-white text-boxicard transition-colors hover:dark:text-purple hover:text-purple font-medium text-lg"
        >
          Docs
        </Link>
        <Link
          href="/blog"
          className="dark:text-white text-boxicard transition-colors hover:dark:text-purple hover:text-purple font-medium text-lg"
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
