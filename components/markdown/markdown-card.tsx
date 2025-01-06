"use client";
import Code from "../code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GistFile } from "@/@types";
import { useRaw } from "@/service/query";
import MarkDown from "./Markdown";
import { motion } from "framer-motion";
interface MarkdownProps {
  primaryFile: GistFile;
}
export default function MarkdownCard({ primaryFile }: MarkdownProps) {
  const { data, isLoading } = useRaw(primaryFile.raw_url);

  return isLoading ? (
    <p>loading</p>
  ) : (

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
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`prose-sm prose dark:prose-invert bg-[#eff1f5] dark:bg-[#1e1e2e] p-7 rounded-xl sm:prose-base lg:prose-lg xl:prose-xl !max-w-full`}>
            <MarkDown>{data}</MarkDown>
          </motion.article>
        </>
      </TabsContent>
    </Tabs>
  );
}
