import { SCRIPT_CONTENT } from "@/lib/constants";
import "./script.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast, Toaster } from "sonner";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoClipboardOutline } from "react-icons/io5";

export function Script() {
  const onClickHandler = () => {
    navigator.clipboard.writeText(SCRIPT_CONTENT);
    toast.success("Script copied to clipboard");
  };

  return (
    <div className="script">
      <Toaster richColors />
      <div className="script__span-and-button ">
        <span className="script__name">Meckanoantor script</span>
        <button onClick={onClickHandler}>
          <IoClipboardOutline />
          <span>Copy script</span>
        </button>
      </div>
      <SyntaxHighlighter language="javascript" showLineNumbers wrapLongLines style={atomOneDark}>
        {SCRIPT_CONTENT}
      </SyntaxHighlighter>
    </div>
  );
}
