import ChangelogDisplay from "@/components/changelog-display";
export const metadata = {
    title: "Changelog",
    description:"Changes and all jazzes will dumped here"
}

const ChangeLogPage = () => {
    return (
        <div className="h-screen">

            <div className="hidden dark:flex">
                <div className="absolute  bottom-0 top-0 z-[-2] h-screen overflow-hidden  bg-fixed  w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

                </div>
            </div>
            <section className="space-y-6 pb-12 pt-16 lg:py-28">
                <div className="container flex  flex-col items-right justify-end gap-5 text-center">



                    <h1
                        className="animate-fade-up text-balance font-urban text-right  text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
                        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                    >
                        Changes and All Jazzes will <br />
                        <span className="text-gradient_indigo-purple font-extrabold">
                            Be Dumped here.
                        </span>
                    </h1>

                    <p
                        className=" text-right animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
                        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
                    >
                        We will update you on our iterations.
                    </p>

                    <div
                        className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
                        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                    >


                    </div>


                </div>


            </section>


            <ChangelogDisplay />
        </div>
    )
}

export default ChangeLogPage


