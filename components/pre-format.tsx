import { CopyButton } from "./copy-btn-1";

export const Pre = ({ children, raw   , ...props }) => {
  const lang = props["data-language"] || "shell";
  console.log('THE PROPS: ' , raw , props)
  return (
    <pre {...props} className={"p-3  my-2 rounded-xl relative"}>
      <div className={"code-header"}>
        {/* {lang} */
        }
        <div className="cursor-pointer z-10 absolute right-4 top-3">
        <CopyButton text={raw} />

        </div>
      </div>
      {children}
    </pre>
  );
};
