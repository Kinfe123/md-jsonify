
import { extract } from "@/lib/extract"
import JsonHighlighter from "./json-beauty"

const JsonDisplay = (props: { md: string }) => {
    // @ts-nocheck
    const parsed = extract(props.md)
    const trimmed =  parsed.toString().trim()
    return (
        <div className='mt-5'>
            {/* <CopyBlock
                theme={github}
                customStyle={{'color': "red" , 'background':'transparent'}}
                text={parsed}
                language={'javascript'}
                // showLineNumbers={true}
                

            /> */}
            <JsonHighlighter data={parsed}/>
            {/* <pre className=''>
                {parsed}
            </pre> */}

        </div>
    )



}

export default JsonDisplay