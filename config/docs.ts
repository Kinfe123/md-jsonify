import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Changlog",
      href: "/changlog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    // {
    //   title: "Guides",
    //   href: "/guides",
    // },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",  
        },
        // {
        //   title: "Contentlayer",
        //   href: "/docs/in-progress",
        //   disabled: true,
        // },
        {
          title: "Setup",
          href: "/docs/documentation/setup",
        },
        {
          title: "Usage",
          href: "/docs/documentation/usage",
        },
        {
          title: "Playground",
          href: "/playground",
         
        },
      ],
    },
    // {
    //   title: "Blog",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Build your own",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Writing Posts",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Dashboard",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Layouts",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Server Components",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Authentication",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Database with Prisma",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "API Routes",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //   ],
    // },
  ],
}
