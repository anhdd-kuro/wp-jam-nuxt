import axios from "axios";
import { PostsApi } from "@/types/post";

const fetch: PostsApi = async (limit: number = 10) => {
  try {
    const url = `${process.env.server}/wp-json/wp/v2/posts?_embed&per_page=${limit}`;
    const res = await axios.get(url);

    if (res.status === 200) return { posts: res.data, error: "" };
  } catch (error) {
    return {
      posts: [],
      error,
    };
  }

  return {
    posts: [],
    error: "",
  };
};

export { fetch };
