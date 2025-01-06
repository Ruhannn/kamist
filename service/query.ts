"use client"
import { useQuery } from "@tanstack/react-query";
import { getFromRaw, getGist } from "./api";

export const useGist = (username: string) => {
    return useQuery({
        queryKey: [`${username}'s gist`],
        queryFn: () => getGist(username)
    })
};
export const useRaw = (rawGistUrl: string) => {
    return useQuery({
        queryKey: [`${rawGistUrl}`],
        queryFn: () => getFromRaw(rawGistUrl)
    })
};