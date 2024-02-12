'use client'
import { cn } from "@/lib/utils"
import styles from '@/components/style'

const ProjectHeader = () => {
    return (
        <div className="flex  bg-cover mr-auto ml-10  mt-32 text-left flex-col justify-start items-start ">
            <h1
                className="animate-fade-up   text-balance dark:text-white text-neutral-950  mb-10  font-heading font-extrabold tracking-tight opacity-0 sm:text-6xl md:text-7xl lg:text-[10rem]"
                style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
                PROGRESS  <br />
                <span className="ml-5 font-extrabold font-heading text-center">
                    <div className="flex mt-[-200px]">

                        <div className={cn(styles.heroDText , 'text-black')}></div>
                        <h1 className={cn(styles.heroHeading , 'text-gradient_indigo-purple ') }>UMPS</h1>

                    </div>
                </span>

            </h1>
        </div>
    )
}

export default ProjectHeader