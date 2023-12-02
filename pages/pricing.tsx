import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Check,
  Twitter,
  Menu,
  Zap,
  ShieldCheck,
  FolderSearch2,
  BellRing,
  ImagePlus,
  Github,
  Share2,
  ExternalLink as ExtLink,
} from "lucide-react";

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

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <>
      <Head>
        <title>StashBlob</title>
        <meta
          name="description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          name="keywords"
          content="Cloud Storage, File Sharing, Storage Bucket, Dropbox, StashBlob"
        />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://stashblobweb.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="StashBlob" />
        <meta
          property="og:description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1700921113/Site_Rollup_pk7dop.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stashblobweb.vercel.app" />
        <meta
          property="twitter:url"
          content="https://stashblobweb.vercel.app"
        />
        <meta name="twitter:title" content="StashBlob" />
        <meta
          name="twitter:description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1700921113/Site_Rollup_pk7dop.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
      </Head>
      <main>
        <Header />
        <div className="md:p-8 lg:p-8 p-4 flex flex-col gap-40 md:px-24 lg:px-24 mt-20">
          <section className="" id="pricing">
            <hgroup className="flex flex-col text-center gap-3 items-center justify-center">
              <h2 className="md:text-5xl lg:text-5xl text-3xl text-white font-Nunito font-bold">
                Choose a Plan that Fits Your Needs
              </h2>
              <p className="text-doubleAgrey font-medium font-Nunito md:text-base lg:text-base text-sm">
                Don&apos;t worry about your bill, worry about your storage.
              </p>
            </hgroup>
            <section className="flex md:flex-row lg:flex-row flex-col gap-5 items-stretch mt-8">
              <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r from-bgon to-midwhite/5 border border-white/20 shadow-lg p-8">
                <hgroup className="flex flex-col gap-2">
                  <h3 className="x font-medium text-3xl font-Nunito text-white">
                    Basic
                  </h3>
                  <span className="text-lg text-doubleAgrey font-medium font-Nunito">
                    For Personal use
                  </span>
                </hgroup>
                <hgroup>
                  <h2 className="text-6xl font-bold font-Nunito text-white flex items-baseline">
                    $0{" "}
                    <span className="text-base font-normal text-doubleAgrey">
                      /month
                    </span>
                  </h2>
                </hgroup>
                <div className="flex items-center justify-center w-full">
                  <Link
                    href="https://stashblob.vercel.app/"
                    className="w-full"
                    target="_blank"
                  >
                    <Button className="w-full p-7 text-lg font-Nunito font-bold bg-purple hover:bg-btnbghover text-white scale-100 transition-all hover:scale-95">
                      Get Started
                    </Button>
                  </Link>
                </div>
                <hgroup>
                  <span className="x text-doubleAgrey font-Nunito font-medium">
                    Get started with:
                  </span>
                </hgroup>
                <hgroup className="mt-4 flex flex-col gap-5">
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> 2GB Cloud Storage
                  </p>
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Image Optimization
                  </p>
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Unlimited File Sharing
                  </p>
                </hgroup>
              </div>
              <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r from-bgon to-midwhite/5 border-2 border-purple shadow-lg p-8 relative">
                <div className="flex items-end justify-end">
                  <span
                    id="tag"
                    className="text-center bg-[#d6cbff] rounded-full w-20 p-1 absolute top-10"
                  >
                    <p className="font-Nunito text-[#2b03b2] text-sm font-bold">
                      Timi&apos;s Fav
                    </p>
                  </span>
                </div>
                <hgroup className="flex flex-col gap-2">
                  <h3 className="font-medium text-3xl font-Nunito text-white">
                    Turbo
                  </h3>
                  <span className="text-lg text-doubleAgrey font-medium font-Nunito">
                    For Professional use
                  </span>
                </hgroup>
                <hgroup>
                  <h2 className="text-6xl font-bold font-Nunito text-white flex items-baseline">
                    $10{" "}
                    <span className="text-base font-normal text-doubleAgrey">
                      /month
                    </span>
                  </h2>
                </hgroup>
                <div className="flex items-center justify-center w-full">
                  <Link
                    href="https://timilab.lemonsqueezy.com/checkout/buy/47120f93-803e-435d-89bd-441482dca0e8"
                    className="w-full"
                    target="_blank"
                  >
                    <Button className="w-full p-7 text-lg font-Nunito font-bold bg-purple hover:bg-btnbghover text-white scale-100 transition-all hover:scale-95">
                      Upgrade now
                    </Button>
                  </Link>
                </div>
                <hgroup>
                  <span className="x text-doubleAgrey font-Nunito font-medium">
                    Everything in basic plus:
                  </span>
                </hgroup>
                <hgroup className="mt-4 flex flex-col gap-5">
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> 100GB Cloud Storage
                  </p>

                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Video Optimization
                  </p>
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Developer API
                  </p>
                </hgroup>
              </div>
              <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r from-bgon to-midwhite/5 border border-white/20 shadow-lg p-8">
                <hgroup className="flex flex-col gap-2">
                  <h3 className="x font-medium text-3xl font-Nunito text-white">
                    Unlimited
                  </h3>
                  <span className="text-lg text-doubleAgrey font-medium font-Nunito">
                    For Enterprise use
                  </span>
                </hgroup>
                <hgroup>
                  <h2 className="text-6xl font-bold font-Nunito text-white flex items-baseline">
                    Custom{" "}
                  </h2>
                </hgroup>
                <div className="flex items-center justify-center w-full">
                  <Link
                    href="https://cal.com/timidev/stashblob"
                    className="w-full"
                    target="_blank"
                  >
                    <Button className="w-full p-7 text-lg font-Nunito font-bold bg-purple hover:bg-btnbghover text-white scale-100 transition-all hover:scale-95">
                      Schedule call
                    </Button>
                  </Link>
                </div>
                <hgroup>
                  <span className="x text-doubleAgrey font-Nunito font-medium">
                    Everything in turbo plus:
                  </span>
                </hgroup>
                <hgroup className="mt-4 flex flex-col gap-5">
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Unlimited storage
                  </p>
                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Backup drive
                  </p>

                  <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
                    <Check className="text-purple" /> Version history
                  </p>
                </hgroup>
              </div>
            </section>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
{
  /* <section className="" id="pricing">
<hgroup className="flex flex-col text-center gap-3 items-center justify-center">
  <h2 className="md:text-5xl lg:text-5xl text-3xl text-white font-Nunito font-bold">
    Choose a Plan that Fits Your Needs
  </h2>
  <p className="text-doubleAgrey font-medium font-Nunito md:text-base lg:text-base text-sm">
    We offer a variety of pricing plans to cater to your unique
    requirements. Whether you’re an individual large cooperation or
    a startup, <br /> we have flexible options to suit your
    financial journey. Select the plan that aligns with your goals
    and start your path to success.
  </p>
</hgroup>
<section className="flex md:flex-row lg:flex-row flex-col gap-5 items-stretch mt-8">
  <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r from-bgon to-midwhite/5 border border-white/20 shadow-lg p-8">
    <hgroup className="flex flex-col gap-2">
      <h3 className="x font-medium text-3xl font-Nunito text-white">
        Basic
      </h3>
      <span className="text-lg text-doubleAgrey font-medium font-Nunito">
        For Personal use
      </span>
    </hgroup>
    <hgroup>
      <h2 className="text-6xl font-bold font-Nunito text-white flex items-baseline">
        $0{" "}
        <span className="text-base font-normal text-doubleAgrey">
          /month
        </span>
      </h2>
    </hgroup>
    <div className="flex items-center justify-center w-full">
      <Link
        href="https://stashblob.vercel.app/"
        className="w-full"
        target="_blank"
      >
        <Button className="w-full p-7 text-lg font-Nunito font-bold bg-purple hover:bg-btnbghover text-white scale-100 transition-all hover:scale-95">
          Get Started
        </Button>
      </Link>
    </div>
    <hgroup>
      <span className="x text-doubleAgrey font-Nunito font-medium">
        Get started with:
      </span>
    </hgroup>
    <hgroup className="mt-4 flex flex-col gap-5">
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> 2GB Cloud Storage
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Image Optimization
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Send up to 50 emails
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> File Sharing
      </p>
    </hgroup>
  </div>
  <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r from-bgon to-midwhite/5 border-2 border-purple shadow-lg p-8 relative">
    <div className="flex items-end justify-end">
      <span
        id="tag"
        className="text-center bg-[#d6cbff] rounded-full w-20 p-1 absolute top-10"
      >
        <p className="font-Nunito text-[#2b03b2] text-sm font-bold">
          Timi&apos;s Fav
        </p>
      </span>
    </div>
    <hgroup className="flex flex-col gap-2">
      <h3 className="font-medium text-3xl font-Nunito text-white">
        Turbo
      </h3>
      <span className="text-lg text-doubleAgrey font-medium font-Nunito">
        For Professional use
      </span>
    </hgroup>
    <hgroup>
      <h2 className="text-6xl font-bold font-Nunito text-white flex items-baseline">
        $10{" "}
        <span className="text-base font-normal text-doubleAgrey">
          /month
        </span>
      </h2>
    </hgroup>
    <div className="flex items-center justify-center w-full">
      <Link
        href="https://timilab.lemonsqueezy.com/checkout/buy/47120f93-803e-435d-89bd-441482dca0e8"
        className="w-full"
        target="_blank"
      >
        <Button className="w-full p-7 text-lg font-Nunito font-bold bg-purple hover:bg-btnbghover text-white scale-100 transition-all hover:scale-95">
          Upgrade now
        </Button>
      </Link>
    </div>
    <hgroup>
      <span className="x text-doubleAgrey font-Nunito font-medium">
        Everything in basic plus:
      </span>
    </hgroup>
    <hgroup className="mt-4 flex flex-col gap-5">
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> 100GB Cloud Storage
      </p>

      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Fast Video Rendering
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Send up to 1K emails
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Developer API
      </p>
    </hgroup>
  </div>
  <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r from-bgon to-midwhite/5 border border-white/20 shadow-lg p-8">
    <hgroup className="flex flex-col gap-2">
      <h3 className="x font-medium text-3xl font-Nunito text-white">
        Unlimited
      </h3>
      <span className="text-lg text-doubleAgrey font-medium font-Nunito">
        For Enterprise use
      </span>
    </hgroup>
    <hgroup>
      <h2 className="text-6xl font-bold font-Nunito text-white flex items-baseline">
        Custom{" "}
      </h2>
    </hgroup>
    <div className="flex items-center justify-center w-full">
      <Link
        href="https://cal.com/timidev/stashblob"
        className="w-full"
        target="_blank"
      >
        <Button className="w-full p-7 text-lg font-Nunito font-bold bg-purple hover:bg-btnbghover text-white scale-100 transition-all hover:scale-95">
          Schedule call
        </Button>
      </Link>
    </div>
    <hgroup>
      <span className="x text-doubleAgrey font-Nunito font-medium">
        Everything in turbo plus:
      </span>
    </hgroup>
    <hgroup className="mt-4 flex flex-col gap-5">
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Unlimited storage
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Backup drive
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Send unlimited emails
      </p>
      <p className="text-lg font-Nunito text-white font-medium flex items-center gap-2">
        <Check className="text-purple" /> Team support
      </p>
    </hgroup>
  </div>
</section>
</section> */
}
