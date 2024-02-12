import Image from "next/image"
import { TracingBeam } from "./tracing-log"
import { cn, formatDate } from "@/lib/utils"
import { allChangelogs, allAuthors  } from "@/.contentlayer/generated"
import { Mdx } from "./content/mdx-components"
import ChangeLogCard from "./changelog-card"




const ChangelogDisplay = () => {

    const authorsLists = allChangelogs.map((a)=>a.authors)
    
    // const author = allChangelogs.map((a) => {
    //     allAuthors.find(({slug}) => slug === `/authors/${a.authors.map(a )}`)
    // })


    

    return (
        <TracingBeam className="h-screen bg-transparent ">

        <div className="max-w-full gap-x-10 mx-auto antialiased pt-4 relative">
            {allChangelogs.map((item, index) => (
                <ChangeLogCard item={item} index={index}/>
            ))}
        </div>
    </TracingBeam>
    )
}

export default ChangelogDisplay
