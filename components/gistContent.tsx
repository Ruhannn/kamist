"use client";
import { GistFile } from "@/@types";
import { useRaw } from "@/service/query";
import Code from "./code";

interface GistContentProps {
  primaryFile: GistFile;
}

export default function GistContent({ primaryFile }: GistContentProps) {
  const { data, isLoading } = useRaw(primaryFile.raw_url);

  return (
    // <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
    //   <h3 className="font-semibold mb-2">{primaryFile.filename}</h3>

    // </div>
    <>
      {isLoading ? (
        <div className="text-center text-red-300">Loading...</div>
      ) : (
        <Code
          code={data}
          lang={primaryFile.language.toLowerCase() || "md"}
        />
      )}
    </>
  );
}
