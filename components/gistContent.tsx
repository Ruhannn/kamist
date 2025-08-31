import { GistFile } from "@/@types";
import dynamic from "next/dynamic";


const Code = dynamic(async () =>
  await import('./code')
)
interface GistContentProps {
  primaryFile: GistFile;
}

export default async function GistContent({ primaryFile }: GistContentProps) {
  const res = await fetch(primaryFile.raw_url);
  const data = await res.text();

  return (
    <>
      <Code
        code={data}
        lang={
          primaryFile?.language ? primaryFile.language.toLowerCase() : "txt"
        }
      />
    </>
  );
}
