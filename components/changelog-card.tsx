import { formatDate , cn } from "@/lib/utils"
import { Mdx } from "./content/mdx-components"
import Image from 'next/image'

type changelogPost = {
    title: string;
    date: string;
    summary: string;
    image: string;
    kind?: string  | undefined;
    authors: string[];
    draft: boolean | undefined;
    body: {
        raw: string;
        code: string;
    };
    _id: string;
    _raw: {
        sourceFilePath: string;
        sourceFileName: string;
        sourceFileDir: string;
        contentType: string;
        flattenedPath: string;
    };
    type: string;
    slug: string;
    slugAsParams: string;
}

type ChangelogProps = {
    item: changelogPost,
    index: number
}

const ChangeLogCard = ({ index, item }: ChangelogProps) => {
    console.log('The itms receeived : ', item)
    console.log('the index: ', index)
    return (
        <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {formatDate(item.date)} -   {item.kind}
            </h2>

            <p className={cn("text-xl mb-1")}>
                {item.title}
            </p>
            <p className={cn("text-md mb-4 text-gray-400/90")}>
                {item.summary}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                    <Image
                        src={item.image}
                        alt="changelog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover w-full"
                    />
                )}
                <Mdx code={item.body.code} />
            </div>
        </div>
    )

}

export default ChangeLogCard