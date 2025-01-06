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
    <>
      {/* TODO: */}
      {isLoading ? (
        <div className="text-center text-red-300">Loading...</div>
      ) : (
        <Code
          code={data}
          lang={
            primaryFile?.language ? primaryFile.language.toLowerCase() : "txt"
          }
        />
      )}
    </>
  );
}
