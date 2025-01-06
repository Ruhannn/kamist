import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Code from "../code";

export default function MarkDown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <Code
              code={String(children).replace(/\n$/, "")}
              lang={match[1]}
            />
          ) : (
            <code
              className={className}
              {...props}>
              {children}
            </code>
          );
        },
      }}>
      {children}
    </ReactMarkdown>
  );
}
