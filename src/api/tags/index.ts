import axios from "axios";
import { TagsApi } from "@/types/tag";

const fetch: TagsApi = async () => {
  try {
    const res = await axios.get(`${process.env.server}/wp-json/wp/v2/tags`);

    if (res.status === 200) return { tags: res.data, error: "" };
  } catch (error) {
    return {
      tags: [],
      error,
    };
  }

  return {
    tags: [],
    error: "",
  };
};

export { fetch };
