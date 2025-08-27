import { GistFile } from "@/@types";
import Code from "../code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import MarkDown from "./Markdown";
interface MarkdownProps {
  primaryFile: GistFile;
}
export default async function MarkdownCard({ primaryFile }: MarkdownProps) {
  const res = await fetch(primaryFile.raw_url);
  const data = await res.text();

  return (
    <Tabs
      defaultValue="code"
      className="w-full">
      <TabsList className="bg-[#eff1f5] dark:bg-[#1e1e2e]">
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <Code
          code={data}
          lang="md"
        />
      </TabsContent>
      <TabsContent value="preview">
        <>
          <article
            className={`prose-sm prose dark:prose-invert bg-[#eff1f5] dark:bg-[#1e1e2e] p-7 rounded-xl sm:prose-base lg:prose-lg xl:prose-xl !max-w-full`}>
            <MarkDown>{data}</MarkDown>
          </article>
        </>
      </TabsContent>
    </Tabs>
  );
}
