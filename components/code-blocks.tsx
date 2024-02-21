"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons"
import { Hint } from "@/components/hint"
interface CodeBlockProps extends React.HTMLProps<HTMLPreElement> {
    // set by `rehype-pretty-code`
    "data-language"?: string
    // set by `rehype-pretty-code`
    "data-theme"?: string
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
    const language = props["data-language"] as string
    const theme = props["data-theme"] as string
    const Icon = {
        js: Icons.javascript,
        ts: Icons.typescript,
        bash: Terminal,
    }[language]

    const ref = React.useRef<HTMLSpanElement>(null)
    const [isCopied, setIsCopied] = React.useState(false)

    return (
        <pre
            className="my-4  relative flex items-center gap-2 rounded-lg border bg-muted px-4 py-2.5 font-mono text-sm font-semibold text-muted-foreground"
            {...props}
        >
            {Icon && (
                <Icon
                    data-language-icon
                    data-theme={theme}
                    className="size-5 text-foreground"
                />
            )}
            <ScrollArea

                className="flex-1 py-2"

            >
                <span ref={ref}>{children}</span>
            </ScrollArea>
            <Button
                variant="ghost"
                // @ts-ignore
                size="icon"
                className="size-6 absolute right-2 top-2  hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-50 "
                onClick={() => {
                    if (typeof window === "undefined") return
                    setIsCopied(true)
                    void window.navigator.clipboard.writeText(
                        ref.current?.innerText ?? ""
                    )
                    setTimeout(() => setIsCopied(false), 2000)
                }}
            >
                {isCopied ? (
                    <Hint label="Copied">
                        <CheckIcon className="size-3" aria-hidden="true" />

                    </Hint>
                ) : (
                    <Hint label="Copy to Clipboard">
                        <CopyIcon className="size-3" aria-hidden="true" />

                    </Hint>
                )}
                <span className="sr-only">
                    {isCopied ? "Copied" : "Copy to clipboard"}
                </span>
            </Button>
        </pre>
    )
}