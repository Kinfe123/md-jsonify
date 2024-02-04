import { extract } from "@/lib/extract"

const JsonDisplay = (props: {md:string}) => {
    // @ts-nocheck
    const parsed =  extract(props.md)
    console.log('The parsed one is: ' , parsed)
    return (
        <div>

        </div>
    )



}

export default JsonDisplay