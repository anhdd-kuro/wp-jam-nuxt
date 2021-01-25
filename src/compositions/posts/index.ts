import { fetch } from "@/api/posts";
import { Post, PostResource } from "@/types/post";
import { ref, computed } from "@vue/composition-api";
import { Ref } from "@nuxtjs/composition-api";
import { Tag } from "@/types/tag";

const usePosts = (tags: Ref<Tag[]> | undefined) => {
  const postsResource = ref<PostResource[]>([]);

  const posts = computed<Post[]>(() =>
    postsResource.value.map((post) => {
      return {
        id: post.id,
        date: post.date,
        image: post._embedded["wp:featuredmedia"][0].media_details.sizes,
        category: post._embedded["wp:term"][0][0].name,
        title: post.title.rendered,
        content: post.content.rendered,
        tags: tags
          ? tags.value.filter((tag) => {
              const postTags = post.tags.map((postTag) => postTag);
              return postTags.includes(tag.id);
            })
          : [],
      };
    })
  );

  const fetchPosts = async (limit: number): Promise<PostResource[]> => {
    const res = await fetch(limit);
    postsResource.value = res.posts;
    return res.posts;
  };

  return { posts, fetchPosts };
};

export { usePosts };
