import { CopyBlock  , github} from 'react-code-blocks';

import { extract } from "@/lib/extract"

const JsonDisplay = (props: { md: string }) => {
    // @ts-nocheck
    const parsed = extract(props.md)
    console.log('The parsed one is: ', parsed)
    return (
        <div className='mt-5'>
            {/* <CopyBlock
                theme={github}
                customStyle={{'color': "red" , 'background':'transparent'}}
                text={parsed}
                language={'javascript'}
                // showLineNumbers={true}
                

            /> */}
            <pre className=''>
                {parsed}
            </pre>

        </div>
    )



}

export default JsonDisplay