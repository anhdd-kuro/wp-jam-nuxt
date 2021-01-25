import { Post } from "@/types/post";
import { computed, Ref } from "@nuxtjs/composition-api";

export const useTopPost = (posts: Ref<Post[]>) => {
  const mainPosts = computed<Post[]>(() =>
    posts.value.slice(1, posts.value.length)
  );
  const topPost = computed<Post>(() => posts.value[0]);

  return {
    mainPosts,
    topPost,
  };
};
