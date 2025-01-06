import axios from "axios";

export const getGist = async (username: string) => {
    return (await axios.get(`https://api.github.com/users/${username}/gists`)).data
};

export const getFromRaw = async (rawGistUrl: string) => {
    return (await axios.get(rawGistUrl)).data
};