"use client";

import useScroll from "@/hooks/use-scroll";
import { MainNavItem } from "@/types";
import { User } from "next-auth";
import { MainNav } from "./main-nav";
import { UserAccountNav } from "./user-account-nav";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Icons } from "../shared/icons";
import { ModeToggle } from "./mode-toggle";


interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

export function NavBar({ user, items, children, rightElements, scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();

  return (
      <header
        className={`sticky top-0 z-40 flex w-full justify-center bg-transparent  backdrop-blur-xl transition-all ${scroll ? scrolled
          ? "border-b"
          : "bg-background/0"
          : "border-b"}`}
      >
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={items}>{children}</MainNav>
          <div className='flex justify-center gap-10 items-center'>

          <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-xl px-4 hover:bg-gradient-to-tr hover:from-purple-400/20 hover:to-transparent")}
            >
              <Icons.gitHub className="mr-2 size-4" />
              <p>
                <span className="hidden  sm:inline-block">Star on</span>{" "}GitHub{" "}
                
              </p>
            </Link>
            <ModeToggle />
              </div>
        </div>
      </header>
  );
}