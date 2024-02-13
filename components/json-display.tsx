
'use client '

import { extract,extractFromFull } from "@/lib/extract"
import { useState } from 'react'

import { Check, CopyIcon } from "lucide-react"
import { prettyPrintJson, FormatOptions } from 'pretty-print-json'

const JsonDisplay = (props: { md: string }) => {
    const [copy, setCopied] = useState(false)
    const [text, setText] = useState('')
    // @ts-nocheck
    const parsed = extractFromFull(props.md)
    const parsidified = JSON.stringify(parsed).replace(/\\/g, '')
    const trimmed = parsed.toString().trim()
    const result = prettyPrintJson.toHtml(parsed)
    const copied = async () => {
        await navigator.clipboard.writeText(JSON.stringify(parsed));
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };


    return (
        <div className='mt-[-10px]'>

            <div className="relative ">
                {/* <JsonHighlighter data={result} /> */}
                {copy ? <Check className="w-3 h-3 absolute top-4 right-4 disabled" /> : <CopyIcon onClick={copied} className="w-3 h-3 absolute top-4 right-4 cursor-pointer" />}

                <pre className=" bg-neutral-950 rounded-2xl border-[2px] border-purple-300/10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" dangerouslySetInnerHTML={{ __html: result }}>

                </pre>



            </div>



        </div>
    )



}

export default JsonDisplay