import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Gist } from "@/@types";
import { CalendarDays, FileCode, GitFork, MessageSquare } from "lucide-react";
import Link from "next/link";
import GistContent from "./gistContent";
import MarkdownCard from "./markdown/markdown-card";

interface GistCardProps {
  gist: Gist;
}


export const GistCard: React.FC<GistCardProps> = ({ gist }) => {
  const fileCount = Object.keys(gist.files).length;
  const primaryFile = Object.values(gist.files)[0];

  return (
    <Card className="w-full h-auto mx-auto bg-[#e6e9ef] dark:bg-[#181825]">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage
            src={gist.owner.avatar_url}
            alt={gist.owner.login}
          />
          <AvatarFallback>
            {gist.owner.login.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-lg text-[#5c5f77] dark:text-[#cdd6f4]">
            {gist.description || "Untitled Gist"}
          </CardTitle>
          <CardDescription>
            <Link
              href={gist.owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              {gist.owner.login}
            </Link>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-4 mb-4 text-[#6c6f85] dark:text-[#bac2de]">
          <div className="flex items-center gap-2">
            <FileCode className="h-4 w-4 text-gray-500" />
            <span>
              {fileCount} {fileCount === 1 ? "file" : "files"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gray-500" />
            <span>
              Updated {new Date(gist.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
        {/* div */}
        {primaryFile.language === "Markdown" ? (
          <MarkdownCard primaryFile={primaryFile} />
        ) : (
          <GistContent primaryFile={primaryFile} />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={gist.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center gap-2">
          <GitFork className="h-4 w-4" />
          View Gist
        </Link>
        <Link
          href={`${gist.html_url}#comments`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Comments
        </Link>
      </CardFooter>
    </Card>
  );
};
