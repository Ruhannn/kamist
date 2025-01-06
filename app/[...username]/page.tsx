"use client";
import { Gist } from "@/@types";
import { GistCard } from "@/components/gistCard";
import { useGist } from "@/service/query";
import { motion } from "framer-motion";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const { data, isLoading } = useGist(username);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{`GitHub Gists of ${username}`}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : data?.length === 0 ? (
        <>No Gists Found 😭</>
      ) : (
        <div className="w-full flex flex-col gap-4">
          {data.map((gist: Gist, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              key={gist.id}>
              <GistCard gist={gist} />
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
