import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export default function Home() {
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
          content="https://res.cloudinary.com/derbreilm/image/upload/v1700076620/New_Site_Thumb_Graphics_aa9mki.jpg"
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
          content="https://res.cloudinary.com/derbreilm/image/upload/v1700076620/New_Site_Thumb_Graphics_aa9mki.jpg"
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
            <nav className="hidden items-center gap-6 md:flex lg:flex">
              <Link
                href=""
                className="text-white transition-colors hover:text-purple font-normal text-lg"
              >
                Overview
              </Link>
              <Link
                href="#features"
                className="text-white transition-colors hover:text-purple font-normal text-lg"
              >
                Features
              </Link>

              <Link
                href="#pricing"
                className="text-white transition-colors hover:text-purple font-normal text-lg"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="hidden md:block lg:block">
            <Link href="https://stashblob.vercel.app/" target="_blank">
              <Button className="bg-purple text-white hover:bg-btnbghover scale-100 transition-all hover:scale-95 text-lg font-medium p-6">
                Start Sharing
              </Button>
            </Link>
          </div>
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
                    StashBlob
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-8 mt-10">
                  <Link
                    href="/"
                    className="text-xl font-medium font-Nunito text-white"
                  >
                    Overview
                  </Link>
                  <Link
                    href="#features"
                    className="text-xl font-medium font-Nunito text-white"
                  >
                    Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-xl font-medium font-Nunito text-white"
                  >
                    Pricing
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <div className="md:p-8 lg:p-8 p-4 flex flex-col gap-40 md:px-24 lg:px-24 mt-44">
          <section
            className="flex flex-col items-center justify-center text-center gap-10"
            id="overview"
          >
            <hgroup className="flex flex-col gap-3">
              <h1 className="font-Nunito md:text-8xl lg:text-8xl text-6xl font-[900] text-white">
                The Cloud That{" "}
                <span className="bg-[#ac94fd] text-boxicard rounded-md">
                  Cares
                </span>{" "}
                About Your File
              </h1>
              <p className="text-doubleAgrey font-medium md:text-2xl lg:text-2xl text-base font-Nunito">
                StashBlob cloud enables you to upload files faster with our file
                system. <br /> We built something cool that allows you to watch
                videos at a higher quality without any buffering.
              </p>
            </hgroup>
            <div className="">
              <Link href="https://stashblob.vercel.app/" target="_blank">
                <Button className="bg-purple w-full text-white text-lg font-Nunito p-7 font-bold hover:bg-btnbghover scale-100 transition-all hover:scale-95">
                  Start Sharing
                </Button>
              </Link>
            </div>
            <div className="">
              <video
                src="https://qhgpubnqzskccobolzai.supabase.co/storage/v1/object/public/meta/lv_0_20231113132712.mp4?t=2023-11-15T18%3A38%3A56.579Z"
                autoPlay
                muted
                loop
                className="x w-full max-w-7xl rounded-2xl shadow-lg backdrop-blur-md shadow-purple/30 border border-purple"
                controls={false}
              ></video>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row lg:flex-row flex-col items-center justify-between md:gap-8 lg:gap-8 gap-8">
              <div className="">
                <Image
                  src="/assets/iPhone - Fast Upload.png"
                  width={500}
                  height={500}
                  alt="App"
                  className="rounded-3xl"
                />
              </div>
              <hgroup className="flex flex-col gap-8">
                <h3 className="text-white font-Nunito font-bold md:text-6xl lg:text-6xl text-3xl">
                  The Greatest App Experience
                </h3>
                <div id="list">
                  <hgroup className="flex flex-col gap-14">
                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <Zap className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Fast Upload Stream
                        </h4>
                        <span className="text-white">
                          We make uploads faster with our upload stream built
                          into our file system, <br /> just hit upload and watch
                          the magic happen.
                        </span>
                      </div>
                    </div>
                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <ShieldCheck className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Malware Protection
                        </h4>
                        <span className="text-white">
                          We have our own antivirus system that scans your files
                          for any vulnerable <br /> or malicious junks laying
                          around your cloud storage.
                        </span>
                      </div>
                    </div>
                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <FolderSearch2 className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Fast Search
                        </h4>
                        <span className="text-white">
                          Searching for a file is pretty fast, we&apos;re
                          talking 100x faster than other <br /> cloud storage
                          services like: Google Drive.
                        </span>
                      </div>
                    </div>
                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <BellRing className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Alerts
                        </h4>
                        <span className="text-white">
                          We are rolling in alerts to alert you when something
                          goes wrong with <br /> your cloud storage and when we
                          update our Terms Of Service.
                        </span>
                      </div>
                    </div>
                  </hgroup>
                </div>
              </hgroup>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row-reverse lg:flex-row-reverse flex-col items-center justify-between md:gap-8 lg:gap-8 gap-8">
              <div className="">
                <Image
                  src="/assets/iPhone - Video Render.png"
                  width={500}
                  height={500}
                  alt="App"
                  className="rounded-3xl"
                />
              </div>
              <hgroup className="flex flex-col gap-8">
                <h3 className="text-white font-Nunito font-bold md:text-6xl lg:text-6xl text-3xl">
                  The Fun Doesn&apos;t Stop There!
                </h3>
                <div id="list">
                  <hgroup className="flex flex-col gap-14">
                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <Zap className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Fast Video Render
                        </h4>
                        <span className="text-white">
                          We are rolling out our own video player soon, this
                          would enable you to <br /> binge watch any movie,
                          football matches, and YouTube videos without any
                          buffering
                        </span>
                      </div>
                    </div>
                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <ImagePlus className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Optimized Image
                        </h4>
                        <span className="text-white">
                          Yes we are also optimizing image, this means we are
                          improving the quality <br /> of your images as you
                          upload them.
                        </span>
                      </div>
                    </div>

                    <div id="heading_g" className="flex items-center gap-5">
                      <span className="p-4 bg-gradient-to-r from-purple to-btnbghover border border-purple rounded-md">
                        <Share2 className="w-8 h-8 text-white" />
                      </span>
                      <div id="empty" className="flex flex-col gap-2">
                        <h4 className="text-white font-Nunito text-2xl font-bold">
                          Easy Sharing
                        </h4>
                        <span className="text-white">
                          Share fies with anyone publicly is easy, Its just a
                          click away. Get sharing now!
                        </span>
                      </div>
                    </div>
                  </hgroup>
                </div>
              </hgroup>
            </div>
          </section>
          <section
            id="owner-writeup"
            className="flex flex-col items-center justify-center text-center gap-5"
          >
            <hgroup className="flex items-center justify-center gap-5 flex-col text-center">
              <h2 className="md:text-6xl lg:text-6xl text-4xl font-Nunito font-bold text-white">
                <span className="text-purple">Passion</span> led us here
              </h2>
              <p className="text-doubleAgrey font-medium font-Nunito md:text-lg lg:text-lg text-base">
                We’re open-source, the main app itself is open-source so you can
                play around and see how we do stuff.
              </p>
            </hgroup>
            <div id="btn-github">
              <Link
                href="https://github.com/creative-tutorials/stashblob"
                target="_blank"
              >
                <Button className="bg-purple w-full text-white text-lg font-Nunito p-7 font-bold hover:bg-btnbghover scale-100 transition-all hover:scale-95 flex items-center gap-2">
                  <Github />
                  Check Out Our GitHub Repo
                </Button>
              </Link>
            </div>
          </section>
          <section
            id="tesimonials"
            className="flex flex-col items-center justify-center text-center gap-5"
          >
            <hgroup className="flex flex-col gap-3">
              <h2 className="md:text-6xl lg:text-6xl text-5xl text-white font-Nunito font-bold">
                Testimonials
              </h2>
              <p className="text-doubleAgrey font-medium font-Nunito md:text-lg lg:text-lg text-base">
                Did you have a great experience? Tell us about it by adding your
                testimonials
              </p>
            </hgroup>
            <div>
              <Link
                href="https://twitter.com/timi_networks/status/1724408277776093287"
                target="_blank"
              >
                <Button className="bg-purple w-full text-white text-lg font-Nunito p-7 font-bold hover:bg-btnbghover scale-100 transition-all hover:scale-95 flex items-center gap-2">
                  Add Testimonial
                  <ExtLink />
                </Button>
              </Link>
            </div>
          </section>
          <section className="" id="pricing">
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
          </section>
          <section className="flex flex-col gap-8 items-center justify-center">
            <div
              id="callend"
              className="x md:p-20 lg:p-20 p-10 w-full  bg-gradient-to-r from-bgon to-midwhite/5 border border-white/20 shadow-lg rounded-xl text-center flex items-center justify-center flex-col gap-8"
            >
              <hgroup>
                <h3 className="x font-Nunito md:text-5xl lg:text-5xl text-3xl font-bold text-white">
                  Start Using Cloud That Can{" "}
                  <span className="x bg-purple/70 p-3 rounded-lg">
                    Carry You
                  </span>{" "}
                  Now!
                </h3>
              </hgroup>
              <div>
                <Link href="https://stashblob.vercel.app/" target="_blank">
                  <Button className="bg-purple hover:bg-btnbghover scale-100 transition-all hover:scale-95 font-Nunito p-8 font-bold md:text-2xl lg:text-2xl text-lg text-white">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <footer className="bg-bgon p-10 shadow-lg border border-transparent border-t-white/25">
          <div className="flex gap-4">
            <hgroup>
              <p className="text-lg font-Nunito font-medium text-white">
                Follow me on:
              </p>
            </hgroup>
            <div>
              <Link href="https://x.com/timi_networks" target="_blank">
                <Twitter className="text-white" />
              </Link>
            </div>
          </div>
          <div className="flex md:items-end lg:items-end md:justify-end lg:justify-end md:mt-0 lg:mt-0 mt-4">
            <span className="font-Nunito text-doubleAgrey">
              Copyright &copy; 2023 StashBlob
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
