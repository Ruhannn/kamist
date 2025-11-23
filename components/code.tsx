import { highlight } from "@/lib/shiki";

interface CodeProps {
  code: string;
  lang: string;
}

export default async function Code({ code, lang }: CodeProps) {
  const html = await highlight(code, lang);

  return (
    <div className="w-full group relative font-[var(--font-code)]">
      <pre
        id="code"
        className={
          "w-full overflow-x-auto rounded-xl p-4 bg-[#eff1f5] dark:bg-[#1e1e2e] hljs"
        }
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
      >
        <code dangerouslySetInnerHTML={{ __html: html }}></code>
      </pre>
    </div>
  );
}
