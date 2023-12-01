import Image from "next/image";
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
          <Menu className="w-12 h-12 text-white" />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-bgon border border-r-white/20"
        >
          <SheetHeader>
            <SheetTitle className="text-white font-Nunito text-2xl">
              <Link href="/">
                <Image
                  src="/assets/TransparentBlob White.png"
                  width={120}
                  height={120}
                  alt="Small logo"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-8 mt-10">
            <Link
              href="/pricing"
              className="text-xl font-medium font-Nunito text-white"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-xl font-medium font-Nunito text-white"
            >
              Docs
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
