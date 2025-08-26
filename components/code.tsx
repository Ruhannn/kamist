import { highlight } from "@/lib/shiki";
import { motion } from "framer-motion";
import { BundledLanguage } from "shiki/bundle/web";
interface CodeProps {
  code: string;
  lang: BundledLanguage | string;
}

export default async function Code({ code, lang }: CodeProps) {
  const html = await highlight(code, lang);

  return (
    <div className="w-full group relative">
      <motion.div
        id="code"
        className={
          "w-full overflow-x-auto rounded-xl p-4 bg-[#eff1f5] dark:bg-[#1e1e2e]"
        }
        dangerouslySetInnerHTML={{ __html: html }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
