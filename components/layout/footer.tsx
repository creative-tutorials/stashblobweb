import { useTheme } from "next-themes";
import { Twitter, Github, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Footer() {
  const { setTheme } = useTheme();
  return (
    <footer className="dark:bg-[#0a0a0e] bg-[#e0e2e5] p-10 shadow-lg">
      <div className="flex items-center justify-between md:flex-row lg:flex-row flex-col">
        <div className="flex flex-col gap-4 items-center">
          <span className="flex items-center gap-4">
            <Link href="https://x.com/timi_networks" target="_blank">
              <Twitter className="dark:text-doubleAgrey text-greymid hover:dark:text-white hover:text-sinegrey" />
            </Link>
            <Link
              href="https://github.com/creative-tutorials/stashblob"
              target="_blank"
            >
              <Github className="dark:text-doubleAgrey text-greymid hover:dark:text-white hover:text-sinegrey" />
            </Link>
          </span>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"default"}
                  className="dark:bg-blackmid dark:hover:bg-blackmid/50 bg-cardbg hover:bg-blackmid outline-none border-none"
                  size="icon"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="outline-none border-none dark:bg-blackmid text-white bg-cardbg"
              >
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="dark:focus:bg-blackmid focus:bg-textbg"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="dark:focus:bg-blackmid focus:bg-textbg"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="dark:focus:bg-blackmid focus:bg-textbg"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="md:mt-0 lg:mt-0 mt-4 flex flex-col gap-10">
          <span className="font-Nunito md:text-base lg:text-base text-sm dark:text-doubleAgrey text-blackmid">
            &copy; 2023 StashBlob. All rights reserved.
          </span>
          <iframe
            src="https://stashblob.instatus.com/embed-status/1ef78115/dark-sm"
            width="230"
            height="41"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
