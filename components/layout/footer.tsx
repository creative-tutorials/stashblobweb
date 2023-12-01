import { Twitter, Github } from "lucide-react";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-[#0a0a0e] p-10 shadow-lg ">
      <div className="flex items-center justify-between md:flex-row lg:flex-row flex-col">
        <div className="flex items-center gap-4">
          <Link href="https://x.com/timi_networks" target="_blank">
            <Twitter className="text-doubleAgrey hover:text-white" />
          </Link>
          <Link
            href="https://github.com/creative-tutorials/stashblob"
            target="_blank"
          >
            <Github className="text-doubleAgrey hover:text-white" />
          </Link>
        </div>
        <div className="md:mt-0 lg:mt-0 mt-4 flex flex-col gap-10">
          <span className="font-Nunito text-doubleAgrey">
            Copyright &copy; 2023 StashBlob
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
