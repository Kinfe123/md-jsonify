'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ReactMarkdown from "react-markdown";

import styles from './playground.module.css'
import { useState } from 'react'
import { marked } from 'marked'
import { cn } from "@/lib/utils";
import JsonDisplay from "../json-display";
const PlaygoundComp = () => {
    const [rawMarkdown, setRawMarkdown] = useState("");



    const [mdState, setMdState] = useState(true)
    return (

        <div>
            <div className="flex max-w-[68rem] mx-auto mt-32 text-center flex-col items-center ">
                <h1
                    className="animate-fade-up text-balance  mb-10 font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                    Hands Down Live Playground From
                    <span className="text-gradient_indigo-purple ml-5 font-extrabold">
                        Markdown
                    </span>
                    <div className="ml-5"> </div>
                    to
                    <span className="text-gradient_indigo-purple ml-5 font-extrabold">
                        JSON
                    </span>
                </h1>
            </div>

            <Tabs defaultValue="markdown">

                <div className="mx-auto flex items-center justify-center">
                    <TabsList>
                        <TabsTrigger value="markdown">Markdown</TabsTrigger>
                        <TabsTrigger value="json">JSON</TabsTrigger>
                    </TabsList>
                </div>






                <div className={cn(styles.outer_container)}>


                    <div className={cn(styles.raw_input_container)}>

                        <textarea
                            className={cn(styles.raw_input, ' font-mono p-10 bg-neutral-950 rounded-2xl border-[2px] border-purple-300/10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] to-transparent')}
                            name="rawMarkdown"
                            id="rawMarkdown"
                            placeholder="Enter your markdown here..."
                            onChange={(e) => {
                                setRawMarkdown(e.target.value);
                                // setMarkDownOutput(e.target.value);
                            }}
                        ></textarea>
                    </div>

                    <TabsContent value="markdown">

                        <div className={cn(styles.markdown_output_container, 'prose prose-p:text-black dark:prose-p:text-white  prose-h1:text-black dark:prose-h1:text-white  prose-h2:text-black dark:prose-h2:text-white prose-h3:text-black dark:prose-h3:text-white prose-h4:text-black dark:prose-h4:text-white prose-h5:text-black dark:prose-h5:text-white  prose-h6:text-black dark:prose-h6:text-white prose-th:text-black dark:prose-th:text-white prose-tr:text-black dark:prose-tr:text-white prose-a:text-black dark:prose-a:text-white text-white')}>
                            <div className={cn(styles.markdown_output)}>

                                <div className='text-white' dangerouslySetInnerHTML={{ __html: marked.parse(rawMarkdown) }} />
                                {/* <ReactMarkdown>{rawMarkdown}</ReactMarkdown> */}
                            </div>
                        </div>

                    </TabsContent>

                    <TabsContent value="json">
                        <div className={cn(styles.markdown_output_container, 'prose prose-p:text-black dark:prose-p:text-white  prose-h1:text-black dark:prose-h1:text-white  prose-h2:text-black dark:prose-h2:text-white prose-h3:text-black dark:prose-h3:text-white prose-h4:text-black dark:prose-h4:text-white prose-h5:text-black dark:prose-h5:text-white  prose-h6:text-black dark:prose-h6:text-white prose-th:text-black dark:prose-th:text-white prose-tr:text-black dark:prose-tr:text-white prose-a:text-black dark:prose-a:text-white text-white')}>
                            <div className={cn(styles.markdown_output)}>

                                <JsonDisplay md={rawMarkdown} />

                            </div>
                        </div>

                    </TabsContent>



                </div>

            </Tabs>

        </div>
    )
}

export default PlaygoundComp