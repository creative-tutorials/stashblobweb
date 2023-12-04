import Image from "next/image";
import LightLogo from "@/public/assets/TransparentBlob White.png";
import DarkLogo from "@/public/assets/TransparentBlob Color.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
export function MobileHeader() {
  return (
    <div className="block md:hidden lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="w-12 h-12 dark:text-white text-greymid" />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="dark:bg-bgon bg-white border border-transparent border-r-white/20"
        >
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image
                  src={LightLogo}
                  width={120}
                  height={120}
                  alt="Light logo"
                  className="hidden dark:block"
                />
                <Image
                  src={DarkLogo}
                  width={120}
                  height={120}
                  alt="Dark logo"
                  className="block dark:hidden"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-8 mt-10">
            <Link
              href="/pricing"
              className="text-xl font-medium font-Nunito dark:text-white text-boxicard"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-xl font-medium font-Nunito dark:text-white text-boxicard"
            >
              Docs
            </Link>
            <Link
              href="/blog"
              className="text-xl font-medium font-Nunito dark:text-white text-boxicard"
            >
              Blog
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
