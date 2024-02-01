import { env } from "@/env.mjs";
import { SiteConfig } from "types"

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "MD to JSON",
  description:
    "An optimized and optimal way of dumping your json compatible data from markdown data store content :)",
  url: site_url!,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/KinfishT",
    github: "https://github.com/Kinfe123/md-to-jsonify",
  },
  mailSupport: "kinfetare83@gmail.com"
}
