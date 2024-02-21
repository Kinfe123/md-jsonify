/* eslint-disable tailwindcss/classnames-order */
// @ts-nocheck
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

import { useScrollPosition } from "@/hooks/use-scroll-mouse"
import { cn } from "@/lib/utils"

const LandingNav = () => {
  const scrollable = useScrollPosition()
  const [currentSelection, setCurrentSelection] = useState("Home")
  const [currPath, setCurrPath] = useState("Home")
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/" && currentSelection !== "Home") {
      setCurrentSelection("Home")
    }
  }, [])
  useEffect(() => {
    let currpath = pathname?.slice(1, pathname.length)
    if (currpath) {
      let splitted = currpath.split("/")
      currpath = splitted[0][0].toUpperCase() + splitted[0].slice(1)

      setCurrentSelection(currpath)
      setCurrPath(currpath)
    } else {
      setCurrentSelection("Home")
      setCurrPath("Home")
    }

    if (scrollable) {
      setCurrentSelection("")
    }
    // setCurrPath(currpath!)
  }, [pathname, scrollable])
  const handleMouseleave = () => {
    setCurrentSelection(currentSelection)
  }

  return (
    <div className=" py-2 flex justify-center items-center font-urban font-bold border-t-0   rounded-full  [--duration:500ms]  [transform:translateZ(0)]">
      <nav className="mx-auto bg-gradient-to-tr from-transparent to-transparent/10 relative backdrop-blur-lg rounded-full border-t-0 border-l-0 border-r-0  border-b-0 border-0 border-black/10 p-0  pb-[7px] px-[4px] dark:border-gray-600 shadow-sm ">
        <div
          className={cn(
            "dark:bg-transparent dark:blur-xl absolute bottom-0 left-0 h-1/2 w-[var(--width)] translate-x-2 bg-transparent blur-2xl rounded-2xl transition-[width,transform] duration-500",
            pathname === "/" && "translate-x-2",
            pathname === "/changelog" && "translate-x-20",

            pathname?.includes("/docs") && "translate-x-44",
            pathname?.includes("/featured") && "translate-x-72",

            pathname?.includes("/playground") && " translate-x-96"
          )}
          style={{
            width: "84.5px",
            left: "0px",
          }}
        ></div>
        <div className="absolute inset-0 rounded-2xl  backdrop-blur-3xl "></div>
        <div className="relative">
          <div
            className={cn(
              //dark:from-purple-600 dark:to-orange-400   absolute bottom-0 left-[-40px] opacity-[10px]  h-2/4 w-10 translate-x-2  rounded-full blur-md transition-[width,transform]
              "dark:bg-gradient-to-tr  duration-500",
              pathname === "/" && "translate-x-2",
              pathname === "/changelog" && "translate-x-20",
              pathname?.includes("/docs") && "translate-x-44",
              pathname?.includes("/featured") && "translate-x-72",

              pathname?.includes("/playground") && " translate-x-96"
            )}
            style={{
              width: "84.5px",
              left: "0px",
            }}
          ></div>
          <ul className="relative flex items-center gap-2">
            <li className="">
              <Link href="/">
                <button
                  type="button"
                  onMouseOver={() => setCurrentSelection("Home")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  className={cn(
                    "relative px-5 py-3 text-sm  text-black/60 transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75",
                    pathname === "/" && "text-black/80 dark:text-white/75 "
                  )}
                >
                  Home
                  {currentSelection === "Home" && (
                    <motion.div
                      layoutId="scroll-nav"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ y: 1, opacity: 1 }}
                      exit={{ y: -2, opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      // viewport={{ once: false }}
                      className=" absolute inset-0 -z-10 rounded-full  bg-gradient-to-tr from-purple-200/50  border-[0.5px] to-accent-2/20  backdrop-blur-smpt-5 "
                    />
                  )}
                </button>
              </Link>
            </li>

            <li className="">
              <Link href="/changelog">
                <button
                  onMouseOver={() => setCurrentSelection("Changelog")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  type="button"
                  className={cn(
                    "relative  px-5 py-3 text-black/6 0  text-sm  transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75 ",
                    pathname === "/career" &&
                      " text-black/80  dark:text-white/75 "
                  )}
                >
                  Changelog{" "}
                  <span className=" inline text-mute-foreground dark:text-white rounded-full pt-5 mb-4 font-heading2"></span>
                  {currentSelection === "Changelog" && (
                    <motion.div
                      layoutId="scroll-nav"
                      className=" absolute inset-0 -z-10 pt-4 rounded-full bg-gradient-to-tr from-purple-200/50  border-[0.5px] to-accent-2/20 "
                    />
                  )}
                </button>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/docs">
                <button
                  onMouseOver={() => setCurrentSelection("DOCS")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  type="button"
                  className={cn(
                    "relative  px-5 py-3 text-sm  text-black/60 transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75",
                    pathname?.includes("/docs") &&
                      "text-black/80 dark:text-white/75"
                  )}
                >
                  DOCS
                  {currentSelection === "DOCS" && (
                    <motion.div
                      layoutId="scroll-nav"
                      className="absolute inset-0 -z-10 rounded-full  bg-gradient-to-tr from-purple-200/50  border-[0.5px] to-accent-2/20  backdrop-blur-smpt-5 "
                    />
                  )}
                </button>
              </Link>
            </li>

            {
              <li className="hidden md:block">
                <Link href="/" target="_blank">
                  <motion.div
                    // initial={{ x: -10, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    // exit={{opacity:1}}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: false }}
                    // variants={animat}
                    className="relative"
                  >
                    {/* <div className="bg-black inline p-[1px] dark:h-[25px] dark:w-[1px] dark:bg-muted-foreground mr-5"></div> */}
                    <AnimatePresence>

                      <button className=" font-heading2 mr-1 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-purrple-600 hover:before:[box-shadow:_20px_20px_20px_30px_#7948ef] duration-500 before:duration-500 hover:duration-500 underline-offset-2 hover:after:-right-8 hover:before:right-3 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-purple-300 relative bg-neutral-800 h-[2.7rem] w-32 border text-left p-3 text-gray-50 text-base font-bold rounded-full  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                       <Link href={'/playground'}>
                       Live Playground
                       </Link>
                      </button>
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </li>
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default LandingNav