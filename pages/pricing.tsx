import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Check } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - StashBlob</title>
        <meta name="description" content="Pricing your way" />
        <meta name="keywords" content="Pricing, StashBlob" />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://stashblobweb.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pricing - StashBlob" />
        <meta property="og:description" content="Pricing your way" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1701692680/Site_Banner_xivy5x.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stashblobweb.vercel.app" />
        <meta
          property="twitter:url"
          content="https://stashblobweb.vercel.app"
        />
        <meta name="twitter:title" content="Pricing - StashBlob" />
        <meta name="twitter:description" content="Pricing your way" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1701692680/Site_Banner_xivy5x.jpg"
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
              <h2 className="md:text-5xl lg:text-5xl text-3xl dark:text-white text-blackmid font-Nunito font-bold">
                Choose a Plan that Fits Your Needs
              </h2>
              <p className="dark:text-doubleAgrey text-greymid font-medium font-Nunito md:text-base lg:text-base text-sm">
                Don&apos;t worry about your bill, worry about your storage.
              </p>
            </hgroup>
            <section className="flex md:flex-row lg:flex-row flex-col gap-5 items-stretch mt-8">
              <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r dark:from-bgon dark:to-midwhite/5 from-white to-whitehub border dark:border-white/20 border-greymid/30 shadow-lg p-8">
                <hgroup className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold font-Nunito dark:text-white text-blackmid">
                    Basic
                  </h3>
                  <span className="text-lg dark:text-doubleAgrey text-[#5f6a75] font-medium font-Nunito">
                    For Personal use
                  </span>
                </hgroup>
                <hgroup>
                  <h2 className="text-6xl font-bold font-Nunito dark:text-white text-blackmid flex items-baseline">
                    $0{" "}
                    <span className="text-base font-normal dark:text-doubleAgrey text-[#5f6a75]">
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
                  <span className="dark:text-doubleAgrey text-[#5f6a75] font-Nunito font-medium">
                    Get started with:
                  </span>
                </hgroup>
                <hgroup className="mt-4 flex flex-col gap-5">
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" /> 2GB
                    Cloud Storage
                  </p>
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" /> Image
                    Optimization
                  </p>
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" />{" "}
                    Unlimited File Sharing
                  </p>
                </hgroup>
              </div>
              <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r dark:from-bgon dark:to-midwhite/5 from-white to-whitehub border-[3px] border-purple shadow-lg p-8 relative">
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
                  <h3 className="text-3xl font-bold font-Nunito dark:text-white text-blackmid">
                    Turbo
                  </h3>
                  <span className="text-lg dark:text-doubleAgrey text-[#5f6a75] font-medium font-Nunito">
                    For Professional use
                  </span>
                </hgroup>
                <hgroup>
                  <h2 className="text-6xl font-bold font-Nunito dark:text-white text-blackmid flex items-baseline">
                    $10{" "}
                    <span className="text-base font-normal dark:text-doubleAgrey text-[#5f6a75]">
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
                  <span className="dark:text-doubleAgrey text-[#5f6a75] font-Nunito font-medium">
                    Everything in basic plus:
                  </span>
                </hgroup>
                <hgroup className="mt-4 flex flex-col gap-5">
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" /> 100GB
                    Cloud Storage
                  </p>

                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" /> Video
                    Optimization
                  </p>
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" />{" "}
                    Developer API
                  </p>
                </hgroup>
              </div>
              <div className="flex flex-col gap-6 w-full rounded-3xl bg-gradient-to-r dark:from-bgon dark:to-midwhite/5 from-white to-whitehub border dark:border-white/20 border-greymid/30 shadow-lg p-8">
                <hgroup className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold font-Nunito dark:text-white text-blackmid">
                    Unlimited
                  </h3>
                  <span className="text-lg dark:text-doubleAgrey text-[#5f6a75] font-medium font-Nunito">
                    For Enterprise use
                  </span>
                </hgroup>
                <hgroup>
                  <h2 className="text-6xl font-bold font-Nunito dark:text-white text-blackmid flex items-baseline">
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
                  <span className="dark:text-doubleAgrey text-[#5f6a75] font-Nunito font-medium">
                    Everything in turbo plus:
                  </span>
                </hgroup>
                <hgroup className="mt-4 flex flex-col gap-5">
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" />{" "}
                    Unlimited storage
                  </p>
                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" />{" "}
                    Backup drive
                  </p>

                  <p className="text-lg font-Nunito dark:text-white text-[#5f6a75] font-medium flex items-center gap-2">
                    <Check className="dark:text-purple text-btnbghover" />{" "}
                    Version history
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
