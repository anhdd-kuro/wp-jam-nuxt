import { fetch } from "@/api/tags";
import { Tag } from "@/types/tag";
import { ref } from "@vue/composition-api";

const useTags = () => {
  const tags = ref<Tag[]>([]);

  const fetchTags = async (): Promise<Tag[]> => {
    const res = await fetch();
    tags.value = res.tags;
    return res.tags;
  };

  return { tags, fetchTags };
};

export { useTags };
