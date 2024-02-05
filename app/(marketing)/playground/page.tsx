import PlaygoundComp from "@/components/playground-comp/playground"


export const metadata = {
    title: "Playground", 
    description: "A Hands down live playground from markdown to json"
}
async function Playground() {
    return (
        <div className="h-screen bg-fixed bg-transparent
        ">
            <PlaygoundComp />
        </div>

    )
}
export default Playground   