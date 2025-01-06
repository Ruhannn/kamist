"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">
        Enter Your Username
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 w-full max-w-md">
        <Input
          type="text"
          placeholder="Username"
          className="w-full p-2 rounded-md bg-[#e4eeff] dark:bg-[#2d2d42] 
                 text-[#4c4f69] dark:text-[#cdd6f4] focus:ring-2 
                 focus:ring-blue-500 focus:outline-none placeholder:text-center text-center"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
        <Button
          className="w-full py-2 rounded-md transition duration-200 
                 hover:bg-[#b0b8c5] dark:hover:bg-[#2f2f49] 
                 bg-[#cbd3e2] dark:bg-[#4c4c75] text-[#4c4f69] 
                 dark:text-[#cdd6f4]"
          type="submit">
          Submit
        </Button>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          - by{" "}
          <Link
            target="_blank"
            href={"https://github.com/ruhannn"}>
            Ruhann :3
          </Link>
        </p>
      </form>
    </div>
  );
}
