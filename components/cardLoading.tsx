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
import { Skeleton } from "./ui/skeleton";

const CardLoading = () => {
  return [...Array(5)].map((_, i) => (
    <>
      <Card
        key={i}
        className="w-full h-auto mx-auto bg-[#e6e9ef] dark:bg-[#181825]">
        <CardHeader className="flex flex-row items-center gap-4">
          <Skeleton className="size-14 rounded-full" />
          <div className="flex flex-col gap-2 justify-center">
            <CardTitle className="text-lg text-[#5c5f77] dark:text-[#cdd6f4]">
              <Skeleton className="h-4 w-28" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-16" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between gap-4 mb-4 text-[#6c6f85] dark:text-[#bac2de]">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-12" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
          <Skeleton className="h-96 w-full" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-28" />
        </CardFooter>
      </Card>
    </>
  ));
};
export default CardLoading;
