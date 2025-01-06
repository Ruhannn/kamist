"use client";

import { useEffect, useState } from "react";
import { highlight } from "@/lib/shiki";
import { BundledLanguage } from "shiki/bundle/web";
import useClipboard from "@/hook/useClipboard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";
import toast from "react-hot-toast";
interface CodeProps {
  code: string;
  lang: BundledLanguage | string;
}

export default function Code({ code, lang }: CodeProps) {
  const [html, setHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const HighlightedCode = async () => {
      setIsLoading(true);
      const highlightedCode = await highlight(code, lang);
      setHtml(highlightedCode);
      setIsLoading(false);
    };

    HighlightedCode();
  }, []);

  const { ref, copied, onCopy } = useClipboard({ duration: 2000 });

  return (
    <div className="w-full group relative">
      {isLoading && (
        <div className="absolute inset-0 rounded-xl bg-[#cbd3e2] animate-pulse dark:bg-[#4c4c75]" />
      )}
      {/* copy button */}
      {!isLoading && (
        <div>
          <Button
            onClick={() => {
              onCopy();
              toast.success("Done");
            }}
            size={"icon"}
            className={cn(
              "absolute right-2 top-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300 hover:bg-[#b0b8c5] hover:dark:bg-[#2f2f49] bg-[#cbd3e2] dark:bg-[#4c4c75] text-[#4c4f69] dark:text-[#cdd6f4]"
            )}>
            {copied ? <ClipboardCheck /> : <Clipboard />}
          </Button>
        </div>
      )}
      <motion.div
        id="code"
        className={cn(
          "w-full overflow-x-auto rounded-xl p-4 bg-[#eff1f5] dark:bg-[#1e1e2e]",
          isLoading ? "py-8" : ""
        )}
        ref={ref}
        dangerouslySetInnerHTML={{ __html: html }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 50 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
