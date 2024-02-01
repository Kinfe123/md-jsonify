import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn, nFormatter } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import { env } from "@/env.mjs"
import Feeder from "@/components/feeder"

export default async function IndexPage() {
  const stars = 100
  // const { stargazers_count: stars } = await fetch(
  //   "https://api.github.com/repos/Kinfe123/md-to-json",
  //   {
  //     ...(env.GITHUB_OAUTH_TOKEN && {
  //       headers: {
  //         Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     }),
  //     // data will revalidate every hour
  //     next: { revalidate: 3600 },
  //   },
  // )
  //   .then((res) => res.json())
  //   .catch((e) => console.log(e));


  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          {/* <Link
            href="https://twitter.com/KinfishT/status/1719892161095745801"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "animate-fade-up opacity-0")}
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            target="_blank"
          >
            Introducing on <Icons.twitter className="ml-2 size-4" />
          </Link> */}

          <Feeder feed="Introducting MD-JSONIFY" link="https://twitter.com/KinfishT"/>

          <h1
            className="animate-fade-up text-balance font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
             Effortlessly Transmuting Markdown into
            <span className="text-gradient_indigo-purple font-extrabold">
            JSON Brilliance
            </span>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
          {siteConfig.description}
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            
          </div>  
        </div>
      </section>

     
    </>
  )
}

