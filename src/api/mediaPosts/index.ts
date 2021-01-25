import axios from "axios";
import { MediaPostsApi } from "@/types/mediaPosts";

const fetch: MediaPostsApi = async (limit: number = 10) => {
  try {
    const url = `${process.env.server}/wp-json/wp/v2/media_post?_embed&per_page=${limit}`;
    const res = await axios.get(url);

    if (res.status === 200) return { mediaPosts: res.data, error: "" };
  } catch (error) {
    return {
      mediaPosts: [],
      error,
    };
  }

  return {
    mediaPosts: [],
    error: "",
  };
};

export { fetch };
