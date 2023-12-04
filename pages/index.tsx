import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";

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
        <div className="md:p-8 lg:p-8 p-4 flex flex-col gap-40 md:px-24 lg:px-24 mt-44">
          <section
            className="flex flex-col items-center justify-center text-center gap-10"
            id="overview"
          >
            <hgroup className="flex flex-col gap-3">
              <h1 className="font-Nunito md:text-8xl lg:text-8xl text-5xl font-[900] dark:text-white text-bgon">
                File Uploads made easy
              </h1>
              <p className="dark:text-doubleAgrey text-greymid font-medium md:text-2xl lg:text-2xl text-base font-Nunito">
                StashBlob is a simple, easy to use file upload solution for your
                files
              </p>
            </hgroup>
            <div className="">
              <Link href="https://stashblob.vercel.app/" target="_blank">
                <Button className="bg-purple w-full text-white text-lg font-Nunito p-7 font-bold hover:bg-btnbghover scale-100 transition-all hover:scale-95">
                  Create a free account
                </Button>
              </Link>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row-reverse lg:flex-row-reverse flex-col items-center justify-between md:gap-8 lg:gap-8 gap-8">
              <div className="w-full h-full">
                <Image
                  src="/assets/File Organize v2.png"
                  width={500}
                  height={500}
                  alt="App"
                  // property="true"
                  className="w-full h-full"
                  unoptimized
                />
              </div>
              <hgroup className="flex flex-col gap-8">
                <h3 className="dark:text-white text-bgon font-Nunito font-bold md:text-5xl lg:text-5xl text-3xl">
                  Free Cloud Storage for your files
                </h3>
                <p className="dark:text-white text-greymid text-xl">
                  Securely store and manage your files with end-to-end
                  encryption cloud storage.
                </p>
              </hgroup>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
