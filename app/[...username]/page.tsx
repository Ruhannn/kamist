import { Gist } from "@/@types";
import { GistCard } from "@/components/gistCard";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const res = await fetch(`https://api.github.com/users/${username}/gists`);
  if (!res) {
    return <>error</>;
  }
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{`GitHub Gists of ${username}`}</h1>
      {data.length === 0 ? (
        <p>No Gists Found 😭</p>
      ) : (
        <div className="w-full flex flex-col gap-4">
          {data.map((gist: Gist) => (
            // <motion.div
            //   initial={{ opacity: 0, y: 50 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{
            //     duration: 0.5,
            //     delay: i * 0.1,
            //   }}
            //   >
            <GistCard
              gist={gist}
              key={gist.id}
            />
            // </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
