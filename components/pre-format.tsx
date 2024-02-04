import { CopyButton } from "./copy-btn-1";

export const Pre = ({className,
  __rawString__,
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
  __withMeta__,
  __src__,
  __event__,
  __style__, ...props}) => {
  const lang = props["data-language"] || "shell";
  console.log('Th props: ' , props)
  const text = props.children.props.children  
  return (
    <pre {...props} className={"p-3  my-2 border-0 rounded-xl relative"}>
      <div className={"code-header"}>
        {/* {lang} */
        }
        <div className="cursor-pointer z-10 absolute right-4 top-3">
        <CopyButton text={text} />

        </div>
      </div>
      {props.children}
    </pre>
  );
};
